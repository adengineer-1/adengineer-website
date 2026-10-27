import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { clients, contact, industries, photos, products, stats } from "../lib/site";
import { ArrowRight, Droplet, Flask, Gauge, Layers, Palette, Phone, Pill, Shield, Wheat, Wrench } from "../components/Icons";

export const metadata: Metadata = {
  title: "Industrial Centrifuges Manufacturer India | Solid-Liquid Separation",
  description: "ADEN designs and manufactures manual and bag-lifting top discharge centrifuges in stainless steel and rubber-lined construction in Ahmedabad, India since 1990.",
  keywords: ["Industrial Centrifuges India", "Solid-Liquid Separation Equipment", "Manual Top Discharge Centrifuge", "Bag-Lifting Top Discharge Centrifuge", "Chemical Centrifuge India", "Pharmaceutical Centrifuge Manufacturer", "ADEN Centrifuges"],
  openGraph: {
    title: "Industrial Centrifuges Manufacturer India | ADEN",
    description: "Solid-liquid separation equipment built for continuous industrial duty. Over 7,000 machines delivered across 15+ countries.",
    url: "https://www.adengineers.co.in",
  },
};

const industryIcons = [Pill, Flask, Palette, Layers, Wheat, Droplet];

const process = [
  { icon: Gauge, title: "Understand the process", text: "We start from your media, throughput and duty cycle — not from a catalogue size." },
  { icon: Layers, title: "Engineer the machine", text: "Basket, drive, lining and discharge are specified for your plant." },
  { icon: Wrench, title: "Build & test in-house", text: "Fabricated, machined and run-tested on our Naroda works floor." },
  { icon: Shield, title: "Commission & support", text: "Installation, spares and a 24/7 breakdown line long after delivery." },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="hero-badge">
              <b>Since 1990</b> Engineered in Ahmedabad, India
            </div>
            <h1>
              Centrifuges built for <span>continuous</span> industrial duty.
            </h1>
            <p className="lead">
              ADEN designs and manufactures top discharge centrifuges for pharmaceutical, chemical, dye and food
              plants that can&apos;t afford downtime.
            </p>
            <div className="hero-actions">
              <Link href="/products" className="btn btn-primary">
                Explore products <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Request a quotation
              </Link>
            </div>
            <div className="hero-trust">
              <div><strong>7,000+</strong>machines delivered</div>
              <div><strong>15+</strong>countries served</div>
              <div><strong>35+</strong>years in separation</div>
            </div>
          </div>

          <div className="hero-collage reveal">
            <div className="media c-main">
              <Image src={photos.ssFront.src} alt={photos.ssFront.alt} fill preload sizes="(max-width: 1000px) 60vw, 30vw" style={{ objectPosition: "center 35%" }} />
            </div>
            <div className="media">
              <Image src={photos.plant.src} alt={photos.plant.alt} fill sizes="(max-width: 1000px) 40vw, 22vw" />
            </div>
            <div className="hero-card">
              <span className="tag-pill">Built in-house</span>
              <div>
                <div className="big">SS &amp; RL</div>
                <p>Stainless steel and rubber-lined construction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <div className="marquee-wrap" aria-label="Selected customers">
        <p className="marquee-label">Running on production floors at leading chemical &amp; pharma manufacturers</p>
        <div className="marquee">
          {[...clients, ...clients].map((name, i) => (
            <span key={i} aria-hidden={i >= clients.length}>{name}</span>
          ))}
        </div>
      </div>

      {/* PRODUCTS */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="eyebrow">Product range</div>
              <h2>Top discharge centrifuges, four ways.</h2>
            </div>
            <p>
              Manual or bag-lifting discharge, in stainless steel or rubber-lined construction — each matched to the
              media it will run on.
            </p>
          </div>

          <div className="product-grid reveal">
            {products.map((product) => (
              <Link key={product.id} href={`/products#${product.id}`} className="product-card">
                <div className="media">
                  <Image src={product.images[0].src} alt={product.images[0].alt} fill sizes="(max-width: 560px) 100vw, (max-width: 1100px) 50vw, 25vw" />
                </div>
                <div className="pc-body">
                  <div className="pc-meta">
                    <span className={`chip ${product.short === "Stainless Steel" ? "" : "accent"}`}>{product.short}</span>
                    <span className="pc-num">{product.code}</span>
                  </div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <span className="pc-link">
                    View details <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section section-soft">
        <div className="container split">
          <div className="photo-stack reveal">
            <div className="media main">
              <Image src={photos.teamGroup.src} alt={photos.teamGroup.alt} fill sizes="(max-width: 960px) 100vw, 50vw" />
            </div>
            <div className="media inset">
              <Image src={photos.worksOverview.src} alt={photos.worksOverview.alt} fill sizes="(max-width: 960px) 40vw, 20vw" />
            </div>
            <div className="float-stat">
              <strong>35+ yrs</strong>
              <span>of separation engineering</span>
            </div>
          </div>

          <div className="reveal">
            <div className="eyebrow">About ADEN</div>
            <h2>Three decades of solving separation problems.</h2>
            <p className="lead">
              Every separation problem starts with a question of process, not just equipment. Our engineering team
              works with you from first consultation through commissioning and after-sales support.
            </p>
            <ul className="check-list">
              <li>Service-friendly design keeps maintenance windows short</li>
              <li>Large single discharge opening and minimal product hold-up</li>
              <li>Stainless steel, MSRL and rubber-lined construction to suit the media</li>
              <li>24/7 breakdown line from our Naroda, Ahmedabad works</li>
            </ul>
            <Link href="/company" className="text-link">
              More about our company <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* STATS + INDUSTRIES */}
      <section className="section section-dark">
        <div className="container">
          <div className="stats reveal">
            {stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value.replace(/[+]$/, "")}{stat.value.endsWith("+") && <em>+</em>}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="section-head reveal" style={{ marginTop: 112 }}>
            <div>
              <div className="eyebrow">Industries</div>
              <h2>Specified into plants that run three shifts a day.</h2>
            </div>
            <p style={{ color: "#9da5b1" }}>
              From APIs to dyestuffs, ADEN centrifuges handle the media that punish poorly built equipment.
            </p>
          </div>

          <div className="tile-grid reveal">
            {industries.map((industry, i) => {
              const Icon = industryIcons[i];
              return (
                <div key={industry.name} className="tile">
                  <div className="tile-icon"><Icon size={22} /></div>
                  <h3>{industry.name}</h3>
                  <p>{industry.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="eyebrow">How we work</div>
              <h2>From process question to running machine.</h2>
            </div>
            <p>One team owns the whole job — so the machine that arrives is the one your process actually needs.</p>
          </div>
          <div className="product-grid reveal">
            {process.map((step, i) => (
              <div key={step.title} className="tile">
                <div className="tile-icon"><step.icon size={22} /></div>
                <span className="step">Step 0{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKS PREVIEW */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="eyebrow">Inside the works</div>
              <h2>Built, machined and tested under one roof.</h2>
            </div>
            <p>
              <Link href="/gallery" className="text-link">
                View full gallery <ArrowRight size={16} />
              </Link>
            </p>
          </div>
          <div className="bento reveal">
            <div className="media zoom b1">
              <Image src={photos.dispatchLoaded.src} alt={photos.dispatchLoaded.alt} fill sizes="(max-width: 860px) 100vw, 50vw" />
              <span className="media-caption">Ready for dispatch</span>
            </div>
            <div className="media zoom b2">
              <Image src={photos.worksFabrication.src} alt={photos.worksFabrication.alt} fill sizes="(max-width: 860px) 50vw, 25vw" />
              <span className="media-caption">Fabrication</span>
            </div>
            <div className="media zoom b3">
              <Image src={photos.ssSide.src} alt={photos.ssSide.alt} fill sizes="(max-width: 860px) 50vw, 25vw" style={{ objectPosition: "center 65%" }} />
              <span className="media-caption">Final assembly</span>
            </div>
            <div className="media zoom b4">
              <Image src={photos.lathe.src} alt={photos.lathe.alt} fill sizes="(max-width: 860px) 50vw, 50vw" />
              <span className="media-caption">Machining</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-band reveal">
            <div className="cta-copy">
              <div className="eyebrow">Get in touch</div>
              <h2>Tell us what you need to separate.</h2>
              <p>
                Send your process parameters and our engineers will recommend the right machine — usually within one
                business day.
              </p>
              <div className="cta-actions">
                <Link href="/contact" className="btn btn-primary">
                  Request a quotation <ArrowRight size={18} />
                </Link>
                <a href={contact.phoneHref} className="btn btn-ghost-light">
                  <Phone size={18} /> {contact.phone}
                </a>
              </div>
            </div>
            <div className="media">
              <Image src={photos.trailerSide.src} alt={photos.trailerSide.alt} fill sizes="(max-width: 900px) 100vw, 45vw" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
