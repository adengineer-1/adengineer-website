import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { clients, industries, photos, products } from "../lib/site";
import HeroSlider, { type HeroSlide } from "../components/HeroSlider";
import VideoBanner from "../components/VideoBanner";
import { ArrowRight, Gear, Truck, Wrench } from "../components/Icons";

export const metadata: Metadata = {
  title: "Industrial Centrifuges Manufacturer India | Solid-Liquid Separation",
  description: "ADEN designs and manufactures manual and bag-lifting top discharge centrifuges in stainless steel and rubber-lined construction in Ahmedabad, India since 1990.",
  keywords: ["Industrial Centrifuges India", "Solid-Liquid Separation Equipment", "Manual Top Discharge Centrifuge", "Bag-Lifting Top Discharge Centrifuge", "Chemical Centrifuge India", "Pharmaceutical Centrifuge Manufacturer", "ADEN Centrifuges"],
  openGraph: {
    title: "Industrial Centrifuges Manufacturer India | ADEN",
    description: "Top discharge centrifuges for the chemical and pharmaceutical industry. Over 3,500 machines supplied to 5+ countries.",
    url: "https://www.adengineers.co.in",
  },
};

const slides: HeroSlide[] = [
  {
    image: photos.plant.src,
    alt: photos.plant.alt,
    supertitle: "Since 1990, Ahmedabad",
    title: "Centrifuges built for continuous duty",
    text: "Manual and bag-lifting top discharge centrifuges in stainless steel and rubber-lined construction, running in chemical and pharma plants across India and abroad.",
    cta: { href: "/products", label: "View our products" },
  },
  {
    image: photos.dispatchLoaded.src,
    alt: photos.dispatchLoaded.alt,
    position: "center 70%",
    supertitle: "3,500+ machines supplied",
    title: "Delivered to plants in 5+ countries",
    text: "Every machine is packed and dispatched from our Naroda works, ready for installation at site.",
    cta: { href: "/gallery", label: "See the works" },
  },
  {
    image: photos.lathe.src,
    alt: photos.lathe.alt,
    supertitle: "Designed and made in-house",
    title: "Machined, assembled and tested under one roof",
    text: "Fabrication, machining, assembly and run testing all happen at our own works, so quality stays in our hands.",
    cta: { href: "/company", label: "About the company" },
  },
];

const features = [
  { title: "Process first", text: "We study your product, batch size and media before recommending a machine." },
  { title: "Built in-house", text: "Fabrication, machining and testing at our own works in Naroda GIDC." },
  { title: "SS & rubber-lined", text: "Construction matched to the media, from pharma duty to acids and alkalis." },
  { title: "24/7 service", text: "Breakdown support, spares and commissioning, long after delivery." },
];

const delay = (s: number) => ({ ["--d" as string]: `${s}s` });

export default function Home() {
  return (
    <main>
      <HeroSlider slides={slides} />

      {/* Feature band overlapping the hero */}
      <div className="container feature-band">
        <div className="grid">
          {features.map((f, i) => (
            <div key={f.title} className="item" data-anim="up" style={delay(0.1 * i)}>
              <span className="num">0{i + 1}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
              <Link href="/company" className="link-arrow" style={{ color: "#fff" }}>
                <span className="sq"><ArrowRight size={14} /></span> Read more
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Intro with statement */}
      <section className="section">
        <div className="container intro">
          <div className="left" data-anim="left">
            <span className="supertitle">Who we are</span>
            <h3>A.D. Engineers is always ready for new and challenging separation jobs</h3>
            <Link href="/contact" className="btn-split">
              <span className="ico"><ArrowRight size={20} /></span>
              <span className="txt">Get a quote</span>
            </Link>
          </div>
          <div className="right" data-anim="right">
            <span className="quote-mark" aria-hidden="true">&ldquo;</span>
            <p>
              For more than three decades we have built centrifuges for manufacturers who depend on them every shift.
              We start from the process, build the machine in our own works, and stay with the customer long after
              commissioning.
            </p>
            <div className="sign">A.D. Engineers<small>G.I.D.C. Naroda, Ahmedabad</small></div>
          </div>
        </div>
      </section>

      {/* About split with bleeding photo */}
      <section className="split" style={{ background: "var(--light)" }}>
        <div className="photo ph" data-anim="reveal">
          <Image src={photos.teamGroup.src} alt={photos.teamGroup.alt} fill sizes="(max-width: 960px) 100vw, 50vw" />
          <div className="strip"><b>35+</b> years of separation engineering</div>
        </div>
        <div className="copy has-outline">
          <span className="outline-word" data-parallax="100" aria-hidden="true">ADEN</span>
          <span className="supertitle" data-anim="up">About the company</span>
          <h2 data-anim="up" style={delay(0.1)}>Engineering the right separation</h2>
          <p data-anim="up" style={delay(0.2)}>
            Since 1990, A.D. Engineers has supplied more than 3,500 centrifuges to customers in India and over
            5 countries. Our machines are specified into pharmaceutical, chemical, dye, textile and food plants that
            run shift after shift.
          </p>
          <ul className="ticks" data-anim="up" style={delay(0.3)}>
            <li>Service-friendly design</li>
            <li>Large single discharge opening</li>
            <li>Minimal product hold-up</li>
            <li>Three-point suspension</li>
          </ul>
          <div data-anim="up" style={delay(0.4)}>
            <Link href="/company" className="btn-split alt">
              <span className="ico"><ArrowRight size={20} /></span>
              <span className="txt">More about us</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="sec-title">
            <span className="outline-word" aria-hidden="true">PRODUCTS</span>
            <span className="supertitle" data-anim="up">What we make</span>
            <h2 data-anim="up" style={delay(0.1)}>Our centrifuges</h2>
            <p data-anim="up" style={delay(0.2)}>
              Top discharge, batch type centrifuges for solid-liquid separation. Choose manual or bag-lifting discharge,
              in stainless steel or rubber-lined construction.
            </p>
          </div>
        </div>
        <div className="ptiles">
          {products.map((product, i) => (
            <Link key={product.id} href={`/products#${product.id}`} className="ptile" data-anim="up" style={delay(0.12 * i)}>
              <Image src={product.images[0].src} alt={product.images[0].alt} fill sizes="(max-width: 520px) 100vw, (max-width: 1000px) 50vw, 25vw" style={{ objectPosition: product.images[0].position }} />
              <div className="pt-body">
                <span className="pt-code">{product.code}</span>
                <h3>{product.name}</h3>
                <span className="pt-var">{product.short}</span>
                <span className="pt-more">View details <ArrowRight size={16} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Clients */}
      <div className="clients">
        <div className="container row">
          {clients.slice(0, 12).map((name, i) => (
            <span key={name} data-anim="up" style={delay(0.04 * i)}>{name}</span>
          ))}
        </div>
      </div>

      {/* Why us + counters */}
      <section className="split reverse" style={{ position: "relative" }}>
        <div className="photo ph" data-anim="reveal">
          <Image src={photos.lathe.src} alt={photos.lathe.alt} fill sizes="(max-width: 960px) 100vw, 50vw" />
        </div>
        <div className="copy" style={{ position: "relative", paddingBottom: 160 }}>
          <span className="side-block" aria-hidden="true" />
          <span className="supertitle" data-anim="up">Industries we serve</span>
          <h2 data-anim="up" style={delay(0.1)}>A reliable partner for process plants</h2>
          <p data-anim="up" style={delay(0.2)}>
            Construction is chosen to suit the media: stainless steel for pharma and food duty, rubber lining for acidic
            and alkaline products.
          </p>
          <ul className="ticks" data-anim="up" style={delay(0.3)}>
            {industries.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <div className="container counters-wrap">
        <div className="counters">
          <div className="highlight">
            <span className="hl-tag">Since 1990</span>
            <strong data-count="35" data-suffix="+">35+</strong>
            <span className="bar" />
            <h4>Years of experience</h4>
            <p>Making centrifuges in Ahmedabad</p>
          </div>
          <div>
            <strong data-count="3500" data-suffix="+">3,500+</strong>
            <span className="bar" />
            <h4>Machines</h4>
            <p>Centrifuges supplied</p>
          </div>
          <div>
            <strong data-count="5" data-suffix="+">5+</strong>
            <span className="bar" />
            <h4>Countries</h4>
            <p>Export markets served</p>
          </div>
          <div>
            <strong>24/7</strong>
            <span className="bar" />
            <h4>Service</h4>
            <p>Breakdown support line</p>
          </div>
        </div>
      </div>

      {/* Heritage */}
      <section className="section">
        <div className="container heritage">
          <div className="ph zoom-hover" data-anim="reveal">
            <Image src={photos.teamWorkshop.src} alt={photos.teamWorkshop.alt} fill sizes="(max-width: 960px) 100vw, 420px" />
          </div>
          <div data-anim="up" style={delay(0.1)}>
            <h3>Proud of our works</h3>
            <p>
              Our team of engineers, fabricators and machinists has built centrifuges together for decades. Every machine
              is assembled and run-tested before it leaves Naroda.
            </p>
          </div>
          <div data-anim="up" style={delay(0.2)}>
            <p>
              We welcome customer visits to see machines in build. Tell us your product, batch size and media and we will
              recommend a suitable model with a quotation.
            </p>
            <Link href="/contact" className="btn-split">
              <span className="ico"><ArrowRight size={20} /></span>
              <span className="txt">Contact us</span>
            </Link>
          </div>
        </div>
      </section>

      <VideoBanner
        image={photos.dispatchSide.src}
        alt={photos.dispatchSide.alt}
        video="/videos/works-video.mp4"
        supertitle="From our works"
        title="See our centrifuges in action"
      />

      {/* Mosaic */}
      <section className="section" style={{ overflow: "hidden" }}>
        <div className="container mosaic-wrap">
          <div className="mosaic">
            <div className="ph zoom-hover" data-anim="zoom">
              <Image src={photos.ssFront.src} alt={photos.ssFront.alt} fill sizes="(max-width: 960px) 50vw, 330px" />
            </div>
            <div className="mtile red" data-anim="zoom" style={delay(0.1)}>
              <Gear size={44} strokeWidth={1.4} />
              <h3>Engineered</h3>
              <p>Basket, drive and discharge specified for your process.</p>
            </div>
            <div className="mtile navy" data-anim="zoom" style={delay(0.2)}>
              <Wrench size={44} strokeWidth={1.4} />
              <h3>Serviced</h3>
              <p>Spares and breakdown support around the clock.</p>
            </div>
            <div className="ph zoom-hover" data-anim="zoom" style={delay(0.3)}>
              <Image src={photos.trailerSide.src} alt={photos.trailerSide.alt} fill sizes="(max-width: 960px) 50vw, 330px" />
            </div>
          </div>
          <div className="mosaic-copy has-outline">
            <span className="outline-word" data-parallax="-80" aria-hidden="true">WORKS</span>
            <span className="supertitle" data-anim="up">Inside A.D. Engineers</span>
            <h2 data-anim="up" style={delay(0.1)}>Machines made in Naroda</h2>
            <p data-anim="up" style={delay(0.2)}>
              From fabrication of baskets and casings to final assembly and dispatch, every step happens at our works.
              Stainless steel machines for clean processes, rubber-lined machines for corrosive duty.
            </p>
            <div data-anim="up" style={delay(0.3)}>
              <Link href="/gallery" className="link-arrow">
                <span className="sq"><ArrowRight size={14} /></span> View the photo gallery
              </Link>
            </div>
            <div className="mtile light" data-anim="up" style={{ ...delay(0.4), marginTop: 40, minHeight: 0 }}>
              <Truck size={40} strokeWidth={1.4} />
              <h3>Ready for dispatch</h3>
              <p>Machines are packed at the works and shipped across India and overseas.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container">
          <div data-anim="left">
            <h2>Have a separation requirement?</h2>
            <p>Send us your product, batch size and media details. We will suggest a suitable machine with a quotation.</p>
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
