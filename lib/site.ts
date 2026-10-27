export const contact = {
  phone: "+91 98251 72158",
  phoneHref: "tel:+919825172158",
  phoneAlt: "+91 94280 46318",
  phoneAltHref: "tel:+919428046318",
  landline: "079 2282 3263",
  landlineHref: "tel:+917922823263",
  email: "info@adengineers.co.in",
  whatsapp:
    "https://wa.me/919825172158?text=Hello%20ADEN%20team%2C%20I%20have%20an%20inquiry%20and%20would%20like%20to%20get%20in%20touch%20with%20you.",
  addressLines: ["Plot No. 329, Phase I", "Behind Lion's School, G.I.D.C. Naroda", "Ahmedabad – 382330, Gujarat, India"],
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3670.2784465614277!2d72.66762157531576!3d23.086900679128718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDA1JzEyLjgiTiA3MsKwNDAnMTIuNyJF!5e0!3m2!1sen!2sin!4v1785147293536!5m2!1sen!2sin",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/company", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
];

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  category: "Works" | "Machines" | "Dispatch" | "People";
};

const p = (file: string, alt: string, width: number, height: number, category: Photo["category"]): Photo => ({
  src: `/images/${file}`,
  alt,
  width,
  height,
  category,
});

export const photos = {
  ssFront: p("centrifuge-ss-front.jpg", "Stainless steel top discharge centrifuge on the ADEN works floor", 768, 1024, "Machines"),
  ssSide: p("centrifuge-ss-side.jpg", "Stainless steel centrifuge with three-point suspension legs", 532, 710, "Machines"),
  plant: p("plant-installation.jpg", "ADEN centrifuges installed at a customer's chemical plant", 1280, 960, "Machines"),
  worksOverview: p("works-floor-overview.jpg", "Overview of the ADEN works floor in Naroda GIDC", 768, 1024, "Works"),
  worksFabrication: p("works-floor-fabrication.jpg", "Centrifuge baskets and casings in fabrication", 768, 1024, "Works"),
  lathe: p("lathe-machining.jpg", "Precision machining on the lathe at ADEN works", 1280, 960, "Works"),
  entrance: p("works-entrance.jpg", "Entrance to the ADEN works, Naroda, Ahmedabad", 960, 1280, "Works"),
  teamGroup: p("team-group.jpg", "The ADEN team outside the works", 1024, 768, "People"),
  teamWorkshop: p("team-workshop.jpg", "ADEN engineers and staff on the workshop floor", 1280, 960, "People"),
  teamVisit: p("team-visit.jpg", "ADEN leadership with visitors at the works", 1280, 960, "People"),
  director: p("director-office.jpg", "ADEN Managing Director at work in the office", 960, 1280, "People"),
  dispatchLoaded: p("dispatch-truck-loaded.jpg", "Truck loaded with rubber-lined centrifuges ready for dispatch", 1600, 900, "Dispatch"),
  dispatchSide: p("dispatch-truck-side.jpg", "Centrifuges loaded for delivery outside the works", 1600, 900, "Dispatch"),
  trailerSide: p("dispatch-trailer-side.jpg", "Trailer carrying multiple rubber-lined centrifuges", 1040, 780, "Dispatch"),
  trailerLoad: p("dispatch-trailer-load.jpg", "Rubber-lined centrifuges secured on a trailer for export", 1040, 780, "Dispatch"),
  trailerAngle: p("dispatch-trailer-angle.jpg", "Long trailer loaded with centrifuges", 780, 1040, "Dispatch"),
  convoy: p("dispatch-convoy.jpg", "Centrifuge shipment leaving at dusk", 780, 1040, "Dispatch"),
  rear: p("dispatch-rear.jpg", "Rubber-lined centrifuge loaded on a truck", 780, 1040, "Dispatch"),
};

export const galleryPhotos: Photo[] = [
  photos.ssFront,
  photos.plant,
  photos.worksOverview,
  photos.dispatchLoaded,
  photos.lathe,
  photos.teamGroup,
  photos.worksFabrication,
  photos.trailerSide,
  photos.ssSide,
  photos.teamWorkshop,
  photos.entrance,
  photos.trailerLoad,
  photos.director,
  photos.dispatchSide,
  photos.convoy,
  photos.teamVisit,
  photos.rear,
  photos.trailerAngle,
];

export const galleryVideos = [
  { src: "/images/works-video.mp4", title: "On the works floor" },
  { src: "/images/works-video-short.mp4", title: "Machine in motion" },
];

export type Product = {
  id: string;
  code: string;
  name: string;
  short: string;
  description: string;
  material: string;
  discharge: string;
  features: string[];
  applications: string[];
  images: { src: string; alt: string }[];
};

const productImg = (file: string) => `/productimages/${encodeURIComponent(file)}`;

export const products: Product[] = [
  {
    id: "manual-ss",
    code: "01",
    name: "Manual Top Discharge Centrifuge",
    short: "Stainless Steel",
    description:
      "Top-discharge, bottom-driven hydro extractor in stainless steel, built for chemical, pharmaceutical, textile and food processing.",
    material: "Stainless steel",
    discharge: "Manual top discharge",
    features: [
      "Service-friendly design for quick maintenance",
      "Single, large discharge opening for efficient unloading",
      "Minimal product hold-up — dead zones designed out",
      "Dynamic feed device for uniform cake formation",
    ],
    applications: ["Amino acids", "Antibiotics", "Crop protection", "Fine chemicals", "Pharma intermediates"],
    images: [
      { src: photos.ssFront.src, alt: photos.ssFront.alt },
      { src: photos.ssSide.src, alt: photos.ssSide.alt },
    ],
  },
  {
    id: "manual-rl",
    code: "02",
    name: "Manual Top Discharge Centrifuge",
    short: "Rubber-Lined",
    description:
      "Top-discharge centrifuge with rubber-lined construction for continuous duty on corrosive acidic and alkaline media.",
    material: "Rubber-lined (MSRL)",
    discharge: "Manual top discharge",
    features: [
      "Service-friendly design for quick maintenance",
      "Single, large discharge opening for efficient unloading",
      "Lining resists acidic and alkaline media",
      "Three-point suspension for smooth running",
    ],
    applications: ["Chemical processing", "Dyes & intermediates", "Acidic media", "Alkaline media"],
    images: [
      { src: photos.trailerLoad.src, alt: photos.trailerLoad.alt },
      { src: photos.rear.src, alt: photos.rear.alt },
    ],
  },
  {
    id: "bag-lifting-ss",
    code: "03",
    name: "Bag-Lifting Top Discharge Centrifuge",
    short: "Stainless Steel",
    description:
      "Top-discharge centrifuge with a hydraulic bag-lifting mechanism for fast cake removal, in stainless steel for clean operations.",
    material: "Stainless steel",
    discharge: "Bag-lifting top discharge",
    features: [
      "Hydraulic bag lifting cuts unloading time sharply",
      "Minimal manual handling of the product cake",
      "Minimal product hold-up — dead zones designed out",
      "Suitable for cleanroom installation",
    ],
    applications: ["Amino acids", "Antibiotics", "Fine chemicals", "Pharma intermediates", "Food ingredients"],
    images: [
      { src: productImg("Bag-Lifting Top Discharge Centrifuge (Stainless Steel).png"), alt: "Bag-lifting stainless steel centrifuge with hydraulic power pack" },
      { src: productImg("Bag-Lifting Top Discharge Centrifuge (Stainless Steel)2.png"), alt: "Bag-lifting stainless steel centrifuge with lifting arm" },
    ],
  },
  {
    id: "bag-lifting-rl",
    code: "04",
    name: "Bag-Lifting Top Discharge Centrifuge",
    short: "Rubber-Lined",
    description:
      "Rubber-lined centrifuge with a bag-lifting mechanism for safe, rapid unloading of highly corrosive media.",
    material: "Rubber-lined (MSRL)",
    discharge: "Bag-lifting top discharge",
    features: [
      "Hydraulic bag lifting for rapid, safe unloading",
      "Lining resists acidic and alkaline media",
      "Less manual contact with corrosive product",
      "Built for multi-shift plant duty",
    ],
    applications: ["Chemical processing", "Corrosive media", "Dyes & pigments", "Agro-chemicals"],
    images: [
      { src: productImg("Bag-Lifting Top Discharge Centrifuge (Rubber-Lined).png"), alt: "Rubber-lined bag-lifting centrifuges on the works floor" },
      { src: photos.trailerSide.src, alt: photos.trailerSide.alt },
    ],
  },
];

export const industries = [
  { name: "Pharmaceutical", text: "APIs, amino acids, antibiotics and intermediates." },
  { name: "Chemical", text: "Bulk, fine and crop-protection chemicals." },
  { name: "Dyes & Pigments", text: "Acidic and alkaline media on rubber-lined machines." },
  { name: "Textile", text: "Water and liquor extraction in finishing." },
  { name: "Food Processing", text: "Hygienic separation in stainless steel." },
  { name: "Water Treatment", text: "Dewatering and solids recovery." },
];

export const clients = [
  "Bodal Chemicals",
  "Meghmani Organics",
  "Valiant Organics",
  "Sagar Drugs & Pharma",
  "R K Synthesis",
  "Chemie Organic Chemicals",
  "Gopinath Chem Tech",
  "K.P. International",
  "Matangi Industries",
  "Prima Chemicals",
  "Varahi Intermediates",
  "Himalaya Chemicals",
  "J J Nitro Products",
  "U.C. Colour Chem",
];

export const countries = [
  "USA", "UK", "Germany", "Switzerland", "Spain", "Australia", "Czech Republic", "Mexico",
  "Malaysia", "Singapore", "China", "Turkey", "Oman", "UAE", "Bangladesh", "Sri Lanka",
];

export const stats = [
  { value: "1990", label: "Established in Ahmedabad" },
  { value: "7,000+", label: "Centrifuges & pumps delivered" },
  { value: "15+", label: "Countries served" },
  { value: "24/7", label: "Breakdown support line" },
];
