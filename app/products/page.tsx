import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { photos, products } from "../../lib/site";
import PageBanner from "../../components/PageBanner";
import ProductGallery from "../../components/ProductGallery";
import { ArrowRight } from "../../components/Icons";

export const metadata: Metadata = {
  title: "Industrial Centrifuges | Manual & Bag-Lifting Top Discharge Centrifuges",
  description: "ADEN centrifuge range: manual and bag-lifting top discharge centrifuges in stainless steel and rubber-lined construction.",
  keywords: [
    "Manual Top Discharge Centrifuge",
    "Bag-Lifting Top Discharge Centrifuge",
    "Stainless Steel Centrifuge Machine",
    "Rubber-Lined Centrifuge India",
    "3-Point Suspension Centrifuge",
    "Top Discharge Centrifuge Manufacturer",
  ],
  openGraph: {
    title: "Industrial Centrifuges | Manual & Bag-Lifting Top Discharge Centrifuges",
    description: "Four centrifuge lines built in Ahmedabad, India for chemical, pharmaceutical, textile and food duty.",
    url: "https://www.adengineers.co.in/products",
  },
};

const delay = (s: number) => ({ ["--d" as string]: `${s}s` });

export default function Products() {
  return (
    <main>
      <PageBanner
        title="Our products"
        crumb="Products"
        text="Batch type top discharge centrifuges for solid-liquid separation. Manual or hydraulic bag-lifting discharge, in stainless steel or rubber-lined construction."
        image={photos.plant.src}
        alt={photos.plant.alt}
      />

      <div className="ptiles">
        {products.map((product, i) => (
          <a key={product.id} href={`#${product.id}`} className="ptile" data-anim="up" style={delay(0.1 * i)}>
            <Image src={product.images[0].src} alt={product.images[0].alt} fill sizes="(max-width: 520px) 100vw, (max-width: 1000px) 50vw, 25vw" style={{ objectPosition: product.images[0].position }} />
            <div className="pt-body">
              <span className="pt-code">{product.code}</span>
              <h3>{product.name}</h3>
              <span className="pt-var">{product.short}</span>
              <span className="pt-more">See specifications <ArrowRight size={16} /></span>
            </div>
          </a>
        ))}
      </div>

      <div className="container">
        {products.map((product, i) => (
          <article key={product.id} id={product.id} className={`prod-detail ${i % 2 ? "flip" : ""}`}>
            <div data-anim={i % 2 ? "right" : "left"}>
              <ProductGallery images={product.images} />
            </div>
            <div className="prod-info">
              <span className="supertitle" data-anim="up">Product {product.code}</span>
              <h2 data-anim="up" style={delay(0.1)}>{product.name}</h2>
              <div data-anim="up" style={delay(0.15)}>
                <span className={`variant ${product.short === "Rubber-Lined" ? "rl" : ""}`}>{product.short}</span>
              </div>
              <p data-anim="up" style={delay(0.2)}>{product.description}</p>

              <table className="spec" data-anim="up" style={delay(0.25)}>
                <tbody>
                  <tr><th>Operating principle</th><td>Filtration, solid-liquid separation</td></tr>
                  <tr><th>Operation</th><td>Batch</td></tr>
                  <tr><th>Discharge</th><td>{product.discharge}</td></tr>
                  <tr><th>Construction</th><td>{product.material}</td></tr>
                  <tr><th>Sizes</th><td>Made to order</td></tr>
                </tbody>
              </table>

              <div data-anim="up" style={delay(0.3)}>
                <h4>Features</h4>
                <ul className="ticks">
                  {product.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
                <h4>Typical applications</h4>
                <div className="chips">
                  {product.applications.map((app) => <span key={app}>{app}</span>)}
                </div>
                <Link href="/contact" className="btn-split">
                  <span className="ico"><ArrowRight size={20} /></span>
                  <span className="txt">Enquire about this model</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="cta-strip">
        <div className="container">
          <div data-anim="left">
            <h2>Not sure which model you need?</h2>
            <p>Tell us the product, batch size and media. We will recommend the construction and size.</p>
          </div>
          <div data-anim="right">
            <Link href="/contact" className="btn-split">
              <span className="ico"><ArrowRight size={20} /></span>
              <span className="txt">Send an enquiry</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
