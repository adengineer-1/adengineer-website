import os
import re
import ssl
import urllib.request
import urllib.parse

OUTPUT_DIR = "public/images/clients"
os.makedirs(OUTPUT_DIR, exist_ok=True)

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
}

targets = [
    {
        "id": "bodal-chemicals",
        "name": "Bodal Chemicals",
        "urls": [
            "https://companieslogo.com/img/orig/BODALCHEM.NS_BIG-83291130.png",
            "https://www.bodal.com",
        ],
    },
    {
        "id": "meghmani-organics",
        "name": "Meghmani Organics",
        "urls": [
            "https://meghmani.com",
        ],
    },
    {
        "id": "valiant-organics",
        "name": "Valiant Organics",
        "urls": [
            "https://www.valiantorganics.com",
        ],
    },
    {
        "id": "matangi-industries",
        "name": "Matangi Industries",
        "urls": [
            "https://www.matangiindustries.com",
        ],
    },
    {
        "id": "rk-synthesis",
        "name": "R K Synthesis",
        "urls": [
            "https://rksynthesis.com",
        ],
    },
    {
        "id": "prima-chemicals",
        "name": "Prima Chemicals",
        "urls": [
            "https://www.primachemicals.com",
        ],
    },
    {
        "id": "gopinath-chem-tech",
        "name": "Gopinath Chem Tech",
        "urls": [
            "https://gopinathchemtech.in",
        ],
    },
    {
        "id": "chemie-organic-chemicals",
        "name": "Chemie Organic Chemicals",
        "urls": [
            "https://chemieorganic.com",
        ],
    },
    {
        "id": "varahi-intermediates",
        "name": "Varahi Intermediates",
        "urls": [
            "https://www.varahiintermediates.com",
        ],
    },
    {
        "id": "jj-nitro-products",
        "name": "J J Nitro Products",
        "urls": [
            "https://jjnitro.com",
        ],
    },
    {
        "id": "kp-international",
        "name": "K.P. International",
        "urls": [
            "https://kp-group.in",
        ],
    },
    {
        "id": "sagar-drugs-pharma",
        "name": "Sagar Drugs & Pharma",
        "urls": [
            "http://www.sagardrugs.com",
        ],
    },
    {
        "id": "himalaya-chemicals",
        "name": "Himalaya Chemicals",
        "urls": [
            "https://himalayachemicals.com",
        ],
    },
    {
        "id": "uc-colour-chem",
        "name": "U.C. Colour Chem",
        "urls": [
            "https://www.uccolourchem.com",
        ],
    },
]

def fetch_url(url, timeout=10):
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, context=ctx, timeout=timeout) as resp:
            content_type = resp.headers.get("Content-Type", "")
            return resp.read(), content_type
    except Exception as e:
        print(f"  Error fetching {url}: {e}")
        return None, ""

def find_logo_in_html(html_text, base_url):
    candidates = []
    # 1. Search img tags with logo in src or alt or class
    img_matches = re.findall(r'<img[^>]+src=["\']([^"\']+)["\'][^>]*>', html_text, re.IGNORECASE)
    for src in img_matches:
        if any(term in src.lower() for term in ["logo", "brand"]):
            candidates.append(urllib.parse.urljoin(base_url, src))
    
    # 2. Search in any img inside header or brand
    header_match = re.search(r'<(?:header|nav)[^>]*>(.*?)</(?:header|nav)>', html_text, re.IGNORECASE | re.DOTALL)
    if header_match:
        header_imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', header_match.group(1), re.IGNORECASE)
        for src in header_imgs:
            candidates.append(urllib.parse.urljoin(base_url, src))

    # 3. Look for svg with logo
    # 4. link rel icon
    icon_matches = re.findall(r'<link[^>]+rel=["\'](?:shortcut )?icon["\'][^>]+href=["\']([^"\']+)["\']', html_text, re.IGNORECASE)
    for href in icon_matches:
        candidates.append(urllib.parse.urljoin(base_url, href))

    # Deduplicate preserving order
    seen = set()
    result = []
    for c in candidates:
        if c not in seen and not c.endswith(".ico"):
            seen.add(c)
            result.append(c)
    return result

def download_image(img_url, out_path):
    try:
        data, ctype = fetch_url(img_url)
        if not data or len(data) < 200:
            return False
        # determine extension if needed
        ext = ".png"
        if "svg" in ctype or img_url.lower().endswith(".svg"):
            ext = ".svg"
        elif "jpeg" in ctype or "jpg" in ctype or img_url.lower().endswith((".jpg", ".jpeg")):
            ext = ".jpg"
        elif "webp" in ctype or img_url.lower().endswith(".webp"):
            ext = ".webp"

        full_path = out_path + ext
        with open(full_path, "wb") as f:
            f.write(data)
        print(f"  [SAVED] {full_path} ({len(data)} bytes)")
        return full_path
    except Exception as e:
        print(f"  Failed to save image {img_url}: {e}")
        return False

print("Starting logo scraping...")
results = {}

for target in targets:
    t_id = target["id"]
    t_name = target["name"]
    print(f"\nProcessing {t_name} ({t_id})...")
    saved = False
    
    for url in target["urls"]:
        if any(url.lower().endswith(ext) for ext in [".png", ".jpg", ".jpeg", ".svg", ".webp"]):
            res = download_image(url, os.path.join(OUTPUT_DIR, t_id))
            if res:
                saved = True
                results[t_name] = res
                break
        else:
            print(f"  Checking website: {url}")
            html_data, ctype = fetch_url(url)
            if not html_data:
                continue
            try:
                html_text = html_data.decode("utf-8", errors="ignore")
            except Exception:
                continue
            
            logo_urls = find_logo_in_html(html_text, url)
            print(f"  Found potential logo URLs: {logo_urls[:4]}")
            for l_url in logo_urls:
                res = download_image(l_url, os.path.join(OUTPUT_DIR, t_id))
                if res:
                    saved = True
                    results[t_name] = res
                    break
        if saved:
            break

print("\nSummary of scraped logos:")
for name, path in results.items():
    print(f"  {name}: {path}")
