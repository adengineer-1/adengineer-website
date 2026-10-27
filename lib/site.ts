export const contact = {
  phone: "+91 93165 65097",
  phoneHref: "tel:+919316565097",
  email: "info@adengineers.co.in",
  whatsapp:
    "https://wa.me/919316565097?text=Hello%20ADEN%20team%2C%20I%20have%20an%20inquiry%20and%20would%20like%20to%20get%20in%20touch%20with%20you.",
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

// Photos live in public/images/<folder>/, one folder per gallery category.
const photoFolder: Record<Photo["category"], string> = {
  Machines: "machines",
  Works: "works",
  Dispatch: "dispatch",
  People: "team",
};

const p = (file: string, alt: string, width: number, height: number, category: Photo["category"]): Photo => ({
  src: `/images/${photoFolder[category]}/${file}`,
  alt,
  width,
  height,
  category,
});

export const photos = {
  ssFront: p("centrifuge-ss-front.jpg", "Stainless steel top discharge centrifuge on the ADEN works floor", 768, 1024, "Machines"),
  ssSide: p("centrifuge-ss-side.jpg", "Stainless steel centrifuge with three-point suspension legs", 532, 710, "Machines"),
  plant: p("plant-installation.jpg", "ADEN centrifuges installed at a customer's chemical plant", 1280, 960, "Machines"),
  worksOverview: p("works-floor-overview.jpg", "Overview of the ADEN works floor in Naroda GIDC", 1920, 2560, "Works"),
  worksFabrication: p("works-floor-fabrication.jpg", "Centrifuge baskets and casings in fabrication", 1920, 2560, "Works"),
  lathe: p("lathe-machining.jpg", "Precision machining on the lathe at ADEN works", 2560, 1920, "Works"),
  entrance: p("works-entrance.jpg", "Entrance to the ADEN works, Naroda, Ahmedabad", 1920, 2560, "Works"),
  teamGroup: p("team-group.jpg", "The ADEN team outside the works", 2560, 1920, "People"),
  teamWorkshop: p("team-workshop.jpg", "ADEN engineers and staff on the workshop floor", 2560, 1920, "People"),
  teamVisit: p("team-visit.jpg", "ADEN leadership with visitors at the works", 2560, 1920, "People"),
  director: p("director-office.jpg", "ADEN Managing Director at work in the office", 1920, 2560, "People"),
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
  { src: "/videos/works-video.mp4", title: "On the works floor" },
  { src: "/videos/works-video-short.mp4", title: "Machine in motion" },
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
  images: { src: string; alt: string; position?: string }[];
};

const productImg = (file: string) => `/images/products/${file}`;

export const products: Product[] = [
  {
    id: "manual-ss",
    code: "01",
    name: "Manual Top Discharge Centrifuge",
    short: "Stainless Steel",
    description:
      "Top discharge, bottom driven hydro extractor in stainless steel. Used in chemical, pharmaceutical, textile and food processing.",
    material: "Stainless steel",
    discharge: "Manual top discharge",
    features: [
      "Service-friendly design for quick maintenance",
      "Single, large discharge opening for efficient unloading",
      "Minimal product hold-up, no dead zones",
      "Dynamic feed device for uniform cake formation",
    ],
    applications: ["Amino acids", "Antibiotics", "Crop protection", "Fine chemicals", "Pharma intermediates"],
    images: [
      { src: photos.ssFront.src, alt: photos.ssFront.alt, position: "center 30%" },
      { src: photos.ssSide.src, alt: photos.ssSide.alt },
    ],
  },
  {
    id: "manual-rl",
    code: "02",
    name: "Manual Top Discharge Centrifuge",
    short: "Rubber-Lined",
    description:
      "Top discharge centrifuge with rubber lining, for acidic and alkaline media.",
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
      { src: photos.rear.src, alt: photos.rear.alt, position: "center 8%" },
      { src: photos.trailerLoad.src, alt: photos.trailerLoad.alt },
    ],
  },
  {
    id: "bag-lifting-ss",
    code: "03",
    name: "Bag-Lifting Top Discharge Centrifuge",
    short: "Stainless Steel",
    description:
      "Stainless steel top discharge centrifuge with a hydraulic bag lifting arrangement for quick cake removal.",
    material: "Stainless steel",
    discharge: "Bag-lifting top discharge",
    features: [
      "Hydraulic bag lifting for faster unloading",
      "Minimal manual handling of the product cake",
      "Minimal product hold-up, no dead zones",
      "Suitable for cleanroom installation",
    ],
    applications: ["Amino acids", "Antibiotics", "Fine chemicals", "Pharma intermediates", "Food ingredients"],
    images: [
      { src: productImg("bag-lifting-ss-1.png"), alt: "Bag-lifting stainless steel centrifuge with hydraulic power pack" },
      { src: productImg("bag-lifting-ss-2.png"), alt: "Bag-lifting stainless steel centrifuge with lifting arm" },
    ],
  },
  {
    id: "bag-lifting-rl",
    code: "04",
    name: "Bag-Lifting Top Discharge Centrifuge",
    short: "Rubber-Lined",
    description:
      "Rubber-lined centrifuge with hydraulic bag lifting, for unloading corrosive products with less manual handling.",
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
      { src: productImg("bag-lifting-rl.png"), alt: "Rubber-lined bag-lifting centrifuges on the works floor" },
      { src: photos.trailerSide.src, alt: photos.trailerSide.alt },
    ],
  },
];

export const industries = [
  "Pharmaceuticals and APIs",
  "Bulk and fine chemicals",
  "Dyes, pigments and intermediates",
  "Agro and crop protection chemicals",
  "Textile processing",
  "Food processing",
  "Effluent and water treatment",
];

export const materials = [
  "Stainless steel",
  "Mild steel rubber-lined (MSRL)",
  "CI rubber-lined",
  "Polypropylene",
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
  { value: "1990", label: "Established" },
  { value: "3,500+", label: "Centrifuges supplied" },
  { value: "5+", label: "Export countries" },
  { value: "24/7", label: "Breakdown service" },
];
