import type { Metadata } from "next";
import { exportMarketsText, pageMetadata } from "../../lib/seo";
import Image from "next/image";
import Link from "next/link";
import { clients, countries, photos } from "../../lib/site";
import PageBanner from "../../components/PageBanner";
import { ArrowRight } from "../../components/Icons";

export const metadata: Metadata = pageMetadata({
  title: "About AD Engineers | Centrifuge Manufacturer Since 1990",
  description: `About ADEN (AD Engineers), founded by Bharat M. Patel in 1990 at Naroda GIDC, Ahmedabad. Over 3,500 centrifuges supplied to 5+ countries, including ${exportMarketsText}.`,
  path: "/company",
  image: photos.teamWorkshop,
  keywords: ["About ADEN", "AD Engineers Ahmedabad", "Bharat M. Patel", "Industrial Centrifuge Exporter India", "Naroda GIDC Centrifuge Manufacturer"],
});

const team = [
  { name: "Bharat M. Patel", role: "Managing Director" },
  { name: "Kanu V. Patel", role: "Sales Engineer" },
  { name: "Joysan Victor", role: "Chief Engineer" },
  { name: "Hemchand", role: "Production Head" },
  { name: "Raju Panchal", role: "Quality Control Head" },
];

const principles = [
  { title: "Engineer to the process", text: "Each machine is matched to the media, duty cycle and plant it will run in, not picked from a fixed size chart." },
  { title: "Design for maintenance", text: "Service-friendly construction, large discharge openings and no dead zones keep downtime short." },
  { title: "Stand behind every machine", text: "A 24/7 breakdown line and direct access to our engineers, long after commissioning." },
  { title: "Build it ourselves", text: "Fabrication, machining, assembly and testing are all done at our own works in Naroda." },
];

const initials = (name: string) =>
  name.split(" ").filter((part) => !part.endsWith(".")).map((part) => part[0]).slice(0, 2).join("");

const delay = (s: number) => ({ ["--d" as string]: `${s}s` });

export default function Company() {
  return (
    <main>
      <PageBanner
        title="About us"
        crumb="About"
        text="Centrifuge manufacturers at G.I.D.C. Naroda, Ahmedabad, since 1990."
        image={photos.teamWorkshop.src}
        alt={photos.teamWorkshop.alt}
        position="center 35%"
      />

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
              by decades of expertise and comprehensive customer support.
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

      <section className="section light">
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
              and the batch cycle first and then recommend the machine. Our work continues through installation and
              commissioning, and our breakdown line is open round the clock.
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

      <div className="container feature-band" style={{ marginTop: 0 }}>
        <div className="grid">
          {principles.map((p, i) => (
            <div key={p.title} className="item" data-anim="up" style={delay(0.1 * i)}>
              <span className="num">0{i + 1}</span>
              <h3>{p.title}</h3>
              <p style={{ margin: 0 }}>{p.text}</p>
            </div>
          ))}
        </div>
      </div>

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

      <section className="cta-strip" style={{ background: "var(--navy)" }}>
        <div className="container">
          <div data-anim="left">
            <h2>Visit the works</h2>
            <p>See how your machine will be built. Get in touch to arrange a visit to our Naroda works.</p>
          </div>
          <div data-anim="right">
            <Link href="/contact" className="btn-split alt">
              <span className="ico"><ArrowRight size={20} /></span>
              <span className="txt">Contact us</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
