import type { Metadata } from "next";
import { exportMarketsText, pageMetadata } from "../lib/seo";
import Image from "next/image";
import Link from "next/link";
import { clients, countries, photos, products } from "../lib/site";
import HeroSlider, { type HeroSlide } from "../components/HeroSlider";
import VideoBanner from "../components/VideoBanner";
import { ArrowRight } from "../components/Icons";

export const metadata: Metadata = pageMetadata({
  title: "ADEN | Centrifuge Manufacturer India, Exporter to Bangladesh, Africa & Gulf",
  description: `ADEN (AD Engineers) designs and manufactures manual and bag-lifting top discharge centrifuges in Ahmedabad, India since 1990. Over 3,500 machines supplied, including to ${exportMarketsText}.`,
  path: "/",
  image: photos.plant,
  keywords: ["Industrial Centrifuges India", "Solid-Liquid Separation Equipment", "Manual Top Discharge Centrifuge", "Bag-Lifting Top Discharge Centrifuge", "Chemical Centrifuge India", "Pharmaceutical Centrifuge Manufacturer", "ADEN Centrifuges"],
});

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
    text: "Every machine is packed and dispatched from our Naroda works to plants across India, Bangladesh, African countries and the Gulf.",
    cta: { href: "/gallery", label: "See the works" },
  },
  {
    image: photos.lathe.src,
    alt: photos.lathe.alt,
    supertitle: "Designed and made in-house",
    title: "Machined, assembled and tested under one roof",
    text: "Fabrication, machining, assembly and run testing all happen at our own works, so quality stays in our hands.",
    cta: { href: "#about", label: "About the company" },
  },
];

const principles = [
  { title: "Engineer to the process", text: "Each machine is matched to the media, duty cycle and plant it will run in, not picked from a fixed size chart." },
  { title: "Design for maintenance", text: "Service-friendly construction, large discharge openings and no dead zones keep downtime short." },
  { title: "Stand behind every machine", text: "Breakdown support, spares and direct access to our engineers, long after commissioning." },
  { title: "Build it ourselves", text: "Fabrication, machining, assembly and testing are all done at our own works in Naroda." },
];

const team = [
  { name: "Bharat M. Patel", role: "Managing Director" },
  { name: "Kanu V. Patel", role: "Sales Engineer" },
  { name: "Joysan Victor", role: "Chief Engineer" },
  { name: "Hemchand", role: "Production Head" },
  { name: "Raju Panchal", role: "Quality Control Head" },
];

const pages = [
  {
    href: "/products",
    label: "Products",
    title: "Our centrifuges",
    text: "Manual and bag-lifting top discharge machines in stainless steel and rubber-lined construction.",
    image: photos.ssFront,
  },
  {
    href: "/gallery",
    label: "Gallery",
    title: "The works in pictures",
    text: "Machines on the floor, the team, and shipments leaving Naroda.",
    image: photos.dispatchLoaded,
    position: "center 70%",
  },
  {
    href: "/contact",
    label: "Contact",
    title: "Talk to the team",
    text: "Send your product, batch size and media. We will recommend a machine and a quotation.",
    image: photos.entrance,
  },
];

const initials = (name: string) =>
  name.split(" ").filter((part) => !part.endsWith(".")).map((part) => part[0]).slice(0, 2).join("");

const delay = (s: number) => ({ ["--d" as string]: `${s}s` });

export default function Home() {
  return (
    <main>
      <HeroSlider slides={slides} />

      <section className="section anniversary">
        <div className="container anniv-grid">
          <div className="anniv-badge" data-anim="zoom">
            <span className="anniv-since">Since 1990</span>
            <strong data-count="35">35</strong>
            <span className="anniv-years">Years</span>
            <span className="anniv-sub">of engineering excellence</span>
          </div>
          <div>
            <span className="supertitle" data-anim="up">Our milestone</span>
            <h2 data-anim="up" style={delay(0.1)}>Celebrating 35 Years of Engineering Excellence</h2>
            <p className="lead" data-anim="up" style={delay(0.2)}>
              Founded by <strong>Bharat M. Patel</strong> in 1990, ADEN has completed 35 years of delivering reliable
              separation technology solutions to industries worldwide.
            </p>
            <p data-anim="up" style={delay(0.3)}>
              Specializing in mechanical and thermal solid-liquid separation, we provide innovative centrifuges, backed
              by decades of expertise and customer support.
            </p>
            <p data-anim="up" style={delay(0.4)}>
              With over 3,500 units delivered across 5+ countries, we remain committed to quality, innovation, and
              long-term customer partnerships.
            </p>
            <p className="anniv-tagline" data-anim="up" style={delay(0.5)}>
              ADEN — 35 Years of Trust, Technology &amp; Reliability.
            </p>
          </div>
        </div>
      </section>

      <section className="section light" id="about">
        <div className="container about-intro">
          <div className="has-outline">
            <span className="outline-word" data-parallax="80" aria-hidden="true" style={{ top: -40, left: -20 }}>1990</span>
            <span className="supertitle" data-anim="up">Our company</span>
            <h2 data-anim="up" style={delay(0.1)}>Three decades of separation engineering</h2>
            <p className="lead" data-anim="up" style={delay(0.2)}>
              ADEN makes equipment for mechanical solid-liquid separation. Our main products are top discharge
              centrifuges, manual and bag-lifting, in stainless steel and rubber-lined construction.
            </p>
            <p data-anim="up" style={delay(0.3)}>
              Since 1990 we have supplied more than 3,500 centrifuges to customers in India and in more than 5
              countries. A separation problem usually starts as a process question, so we look at the product, the media
              and the batch cycle first and then recommend the machine. Our work continues through installation,
              commissioning, spares and breakdown support.
            </p>
            <div data-anim="up" style={delay(0.4)}>
              <Link href="/contact" className="btn-split">
                <span className="ico"><ArrowRight size={20} /></span>
                <span className="txt">Talk to our team</span>
              </Link>
            </div>
          </div>
          <div className="imgs" data-anim="right">
            <div className="ph main">
              <Image src={photos.director.src} alt={photos.director.alt} fill sizes="(max-width: 960px) 90vw, 460px" />
            </div>
            <div className="badge"><strong>35+</strong>years of experience</div>
          </div>
        </div>
      </section>

      <div className="container feature-band flush">
        <div className="grid">
          {principles.map((item, i) => (
            <div key={item.title} className="item" data-anim="up" style={delay(0.1 * i)}>
              <span className="num">0{i + 1}</span>
              <h3>{item.title}</h3>
              <p style={{ margin: 0 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="sec-title">
            <span className="outline-word" aria-hidden="true">PAGES</span>
            <span className="supertitle" data-anim="up">Where to go next</span>
            <h2 data-anim="up" style={delay(0.1)}>Products, gallery and contact</h2>
            <p data-anim="up" style={delay(0.2)}>
              The company story lives here. These are the pages for machines, photographs and enquiries.
            </p>
          </div>
          <div className="key-pages">
            {pages.map((page, i) => (
              <Link key={page.href} href={page.href} className="key-page" data-anim="up" style={delay(0.1 * i)}>
                <Image
                  src={page.image.src}
                  alt={page.image.alt}
                  fill
                  sizes="(max-width: 800px) 100vw, 33vw"
                  style={{ objectPosition: page.position }}
                />
                <span className="key-body">
                  <span className="key-label">{page.label}</span>
                  <span className="key-title">{page.title}</span>
                  <span className="key-text">{page.text}</span>
                  <span className="key-more">Open page <ArrowRight size={16} /></span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
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

      <section className="section">
        <div className="container">
          <div className="sec-title">
            <span className="outline-word" aria-hidden="true">TEAM</span>
            <span className="supertitle" data-anim="up">Our people</span>
            <h2 data-anim="up" style={delay(0.1)}>The team behind the machines</h2>
            <p data-anim="up" style={delay(0.2)}>Design, sales engineering, production and quality control, all on one site.</p>
          </div>
          <div className="team">
            {team.map((person, i) => (
              <div key={person.name} className="member" style={{ background: "var(--light)", ...delay(0.08 * i) }} data-anim="up">
                <div className="initials">{initials(person.name)}</div>
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <div className="sec-title">
            <span className="supertitle" data-anim="up">The works</span>
            <h2 data-anim="up" style={delay(0.1)}>Plot 329, G.I.D.C. Naroda</h2>
          </div>
          <div className="photo-trio">
            <figure data-anim="up">
              <div className="ph zoom-hover"><Image src={photos.lathe.src} alt={photos.lathe.alt} fill sizes="(max-width: 800px) 100vw, 600px" /></div>
              <figcaption>Machine shop</figcaption>
            </figure>
            <figure data-anim="up" style={delay(0.15)}>
              <div className="ph zoom-hover"><Image src={photos.worksOverview.src} alt={photos.worksOverview.alt} fill sizes="(max-width: 800px) 50vw, 300px" /></div>
              <figcaption>Main shed</figcaption>
            </figure>
            <figure data-anim="up" style={delay(0.3)}>
              <div className="ph zoom-hover"><Image src={photos.entrance.src} alt={photos.entrance.alt} fill sizes="(max-width: 800px) 50vw, 300px" /></div>
              <figcaption>Works entrance</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section on-dark" style={{ overflow: "hidden" }}>
        <div className="container two-col">
          <div className="has-outline">
            <span className="outline-word" data-parallax="80" aria-hidden="true" style={{ top: -60, left: -20 }}>GLOBAL</span>
            <span className="supertitle" data-anim="up">Export markets</span>
            <h2 data-anim="up" style={delay(0.1)}>Running in plants across 5+ countries</h2>
            <p data-anim="up" style={delay(0.15)}>
              From Ahmedabad we supply centrifuges to customers across India and export to Bangladesh, African countries
              and the Gulf countries, with support for installation, spares and service.
            </p>
            <div className="chips" data-anim="up" style={delay(0.2)}>
              {countries.map((country) => <span key={country}>{country}</span>)}
            </div>
          </div>
          <div>
            <span className="supertitle" data-anim="up">Customers</span>
            <h2 data-anim="up" style={delay(0.1)}>Some of the plants we supply</h2>
            <div className="chips" data-anim="up" style={delay(0.2)}>
              {clients.map((client) => <span key={client}>{client}</span>)}
            </div>
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

      <section className="cta-strip" style={{ background: "var(--navy)" }}>
        <div className="container">
          <div data-anim="left">
            <h2>Have a separation requirement?</h2>
            <p>Send us your product, batch size and media details. We will suggest a suitable machine with a quotation.</p>
          </div>
          <div data-anim="right">
            <Link href="/contact" className="btn-split alt">
              <span className="ico"><ArrowRight size={20} /></span>
              <span className="txt">Send an enquiry</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
