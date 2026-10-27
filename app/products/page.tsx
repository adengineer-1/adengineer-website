import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { photos, products } from "../../lib/site";
import ProductGallery from "../../components/ProductGallery";
import { ArrowRight } from "../../components/Icons";

export const metadata: Metadata = {
  title: "Industrial Centrifuges | Manual & Bag-Lifting Top Discharge Centrifuges",
  description: "Explore ADEN's centrifuge range: manual and bag-lifting top discharge centrifuges in stainless steel and rubber-lined construction.",
  keywords: [
    "Manual Top Discharge Centrifuge",
    "Bag-Lifting Top Discharge Centrifuge",
    "Stainless Steel Centrifuge Machine",
    "Rubber-Lined Centrifuge India",
    "3-Point Suspension Centrifuge",
    "Solid-Liquid Separation Equipment",
    "Top Discharge Centrifuge Manufacturer",
  ],
  openGraph: {
    title: "Industrial Centrifuges | Manual & Bag-Lifting Top Discharge Centrifuges",
    description: "Four centrifuge lines built in Ahmedabad, India for chemical, pharmaceutical, textile and food separation duties.",
    url: "https://www.adengineers.co.in/products",
  },
};

export default function Products() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-grid">
            <div>
              <div className="eyebrow">Products</div>
              <h1>Top discharge centrifuges.</h1>
            </div>
            <p className="lead">
              Batch filtration centrifuges for solid-liquid separation — choose manual or bag-lifting discharge, in
              stainless steel or rubber-lined construction.
            </p>
          </div>
          <nav className="product-nav" aria-label="Products">
            {products.map((product) => (
              <a key={product.id} href={`#${product.id}`}>
                <b>{product.code}</b>
                {product.name.split(" ")[0]} · {product.short}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {products.map((product, i) => (
        <section key={product.id} id={product.id} className={`section ${i % 2 ? "section-soft" : ""}`} style={i === 0 ? { paddingTop: 48 } : undefined}>
          <div className={`container product-detail ${i % 2 ? "flip" : ""}`}>
            <div className="reveal">
              <ProductGallery images={product.images} />
            </div>
            <div className="product-info reveal">
              <div className="pc-meta" style={{ justifyContent: "flex-start", gap: 12 }}>
                <span className={`chip ${product.short === "Stainless Steel" ? "" : "accent"}`}>{product.short}</span>
                <span className="pc-num">Product {product.code}</span>
              </div>
              <h2>{product.name}</h2>
              <p className="lead">{product.description}</p>

              <dl className="spec-list">
                <div><dt>Operating principle</dt><dd>Filtration, solid–liquid separation</dd></div>
                <div><dt>Mode of operation</dt><dd>Batch</dd></div>
                <div><dt>Discharge</dt><dd>{product.discharge}</dd></div>
                <div><dt>Construction</dt><dd>{product.material}</dd></div>
              </dl>

              <p className="sub-label">Key features</p>
              <ul className="check-list">
                {product.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>

              <p className="sub-label">Main applications</p>
              <div className="chips">
                {product.applications.map((app) => <span key={app} className="chip">{app}</span>)}
              </div>

              <Link href="/contact" className="btn btn-dark">
                Request a quotation <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      ))}

      <section className="section">
        <div className="container">
          <div className="cta-band reveal">
            <div className="cta-copy">
              <div className="eyebrow">Custom sizes</div>
              <h2>Need a size or lining not listed here?</h2>
              <p>Send us your process parameters — media, throughput, batch size — and we&apos;ll specify the right machine.</p>
              <div className="cta-actions">
                <Link href="/contact" className="btn btn-primary">
                  Send your requirement <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="media">
              <Image src={photos.plant.src} alt={photos.plant.alt} fill sizes="(max-width: 900px) 100vw, 45vw" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
