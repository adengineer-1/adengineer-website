import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { clients, countries, photos, stats } from "../../lib/site";
import { ArrowRight, Gauge, Shield, Wrench } from "../../components/Icons";

export const metadata: Metadata = {
  title: "About ADEN | 35+ Years of Separation Engineering in Ahmedabad",
  description: "Learn about ADEN (A.D. Engineers), Ahmedabad's manufacturer of solid-liquid separation centrifuges with 7,000+ machines delivered to 15+ countries since 1990.",
  keywords: [
    "About ADEN",
    "A.D.Engineers Ahmedabad",
    "Centrifuge Manufacturer Ahmedabad",
    "Separation Engineering India",
    "Industrial Centrifuge Exporter India",
    "Naroda GIDC Centrifuge Manufacturer",
  ],
  openGraph: {
    title: "About ADEN | 35+ Years of Separation Engineering",
    description: "Over 7,000 industrial centrifuges and pumps delivered to chemical, pharma and textile plants across 15+ countries since 1990.",
    url: "https://www.adengineers.co.in/company",
  },
};

const principles = [
  { icon: Gauge, title: "Engineer to the process", text: "Every machine is matched to the media, duty cycle and plant it will run in — not sold off a fixed size chart." },
  { icon: Wrench, title: "Design for the maintenance shift", text: "Service-friendly construction, large discharge openings and no dead zones keep downtime short." },
  { icon: Shield, title: "Stand behind every machine", text: "A 24/7 breakdown line and direct access to our engineers, long after commissioning." },
];

const team = [
  { name: "Bharat M. Patel", role: "Managing Director" },
  { name: "Kanu V. Patel", role: "Sales Engineer" },
  { name: "Joysan Victor", role: "Chief Engineer" },
  { name: "Hemchand", role: "Production Head" },
  { name: "Raju Panchal", role: "Quality Control Head" },
];

const initials = (name: string) =>
  name.split(" ").filter((part) => !part.endsWith(".")).map((part) => part[0]).slice(0, 2).join("");

export default function Company() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-grid">
            <div>
              <div className="eyebrow">About us</div>
              <h1>Separation engineering since 1990.</h1>
            </div>
            <p className="lead">
              ADEN provides mechanical solid-liquid separation solutions — centrifuges and pumps — to manufacturers in
              India and across 15+ countries.
            </p>
          </div>
        </div>
      </section>

      <div className="container reveal">
        <div className="media wide-media">
          <Image src={photos.teamWorkshop.src} alt={photos.teamWorkshop.alt} fill preload sizes="(max-width: 1240px) 100vw, 1200px" style={{ objectPosition: "center 40%" }} />
        </div>
      </div>

      <section className="section">
        <div className="container story-grid">
          <div className="photo-stack reveal" style={{ padding: 0 }}>
            <div className="media" style={{ aspectRatio: "3 / 4", borderRadius: "var(--radius-lg)" }}>
              <Image src={photos.director.src} alt={photos.director.alt} fill sizes="(max-width: 960px) 100vw, 40vw" />
            </div>
          </div>
          <div className="story-copy reveal">
            <div className="eyebrow">Our story</div>
            <p className="intro">
              We support our customers with <span>effective, reliable and profitable</span> process equipment — from
              the first consultation to installation, commissioning and after-sales support.
            </p>
            <p>
              At the beginning of most separation problems sits a question of process, not just equipment. Analysing
              that problem and matching it to the right technology takes long experience in plant and machinery. ADEN
              has answered that question for manufacturers for more than three decades.
            </p>
            <p>
              Since 1990 we have delivered over 7,000 centrifuges and pumps to pharmaceutical, chemical, textile and
              food-processing plants that depend on them running shift after shift — all designed, fabricated and
              tested at our works in Naroda GIDC, Ahmedabad.
            </p>
            <div className="stats" style={{ marginTop: 36, background: "var(--line)", gridTemplateColumns: "1fr 1fr" }}>
              {stats.slice(1, 3).map((stat) => (
                <div key={stat.label} style={{ background: "var(--bg-soft)", padding: "26px 24px" }}>
                  <strong style={{ color: "var(--ink)", fontSize: 40 }}>{stat.value}</strong>
                  <span style={{ color: "var(--muted)" }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="eyebrow">What guides us</div>
              <h2>How we build every machine.</h2>
            </div>
            <p>Three principles that have kept ADEN machines running on factory floors for decades.</p>
          </div>
          <div className="tile-grid reveal">
            {principles.map((item) => (
              <div key={item.title} className="tile">
                <div className="tile-icon"><item.icon size={22} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split reverse">
          <div className="reveal">
            <div className="media" style={{ aspectRatio: "4 / 3", borderRadius: "var(--radius-lg)" }}>
              <Image src={photos.teamGroup.src} alt={photos.teamGroup.alt} fill sizes="(max-width: 960px) 100vw, 50vw" />
            </div>
          </div>
          <div className="reveal">
            <div className="eyebrow">Our people</div>
            <h2>A senior team, close to the work.</h2>
            <p className="lead">
              Design, sales engineering, production and quality control sit together on one site — so questions get
              answered by the people who build the machine.
            </p>
          </div>
        </div>
        <div className="container" style={{ marginTop: 56 }}>
          <div className="team-grid reveal">
            {team.map((person) => (
              <div key={person.name} className="person">
                <div className="avatar">{initials(person.name)}</div>
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="eyebrow">Global reach</div>
              <h2>Running in plants across 15+ countries.</h2>
            </div>
            <p style={{ color: "#9da5b1" }}>Export markets served to date — and a long list of customers closer to home.</p>
          </div>
          <div className="pill-cloud reveal">
            {countries.map((country) => <span key={country}>{country}</span>)}
          </div>
          <h3 className="reveal" style={{ marginTop: 64, marginBottom: 20 }}>Selected customers</h3>
          <div className="pill-cloud reveal">
            {clients.map((client) => <span key={client}>{client}</span>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band reveal">
            <div className="cta-copy">
              <div className="eyebrow">Visit the works</div>
              <h2>See how your machine will be built.</h2>
              <p>We welcome customer visits to our Naroda works. Get in touch to arrange one, or send us your requirement.</p>
              <div className="cta-actions">
                <Link href="/contact" className="btn btn-primary">
                  Contact us <ArrowRight size={18} />
                </Link>
                <Link href="/gallery" className="btn btn-ghost-light">View gallery</Link>
              </div>
            </div>
            <div className="media">
              <Image src={photos.entrance.src} alt={photos.entrance.alt} fill sizes="(max-width: 900px) 100vw, 45vw" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
