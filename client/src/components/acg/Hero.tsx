import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const proofPoints = [
  { value: "28", suffix: "k+", label: "Participants" },
  { value: "20", suffix: "+", label: "Years of experience" },
  { value: "15", suffix: "+", label: "Countries worldwide" },
  { value: "1000", suffix: "+", label: "Clients Served" },
];

const clientMarks = [
  ["logo-dusit.webp", "Dusit"], ["logo-apc.webp", "APC"], ["logo-apmc.webp", "APMC"],
  ["logo-avon.webp", "Avon"], ["logo-bdo.webp", "BDO"], ["logo-bpi.webp", "BPI"],
  ["logo-bsp.webp", "Bangko Sentral ng Pilipinas"], ["logo-chowking.webp", "Chowking"],
  ["logo-clark.webp", "Clark"], ["logo-csc.webp", "Civil Service Commission"],
  ["logo-ctbc.webp", "CTBC"], ["logo-dpc.webp", "DPC"],
] as const;

function ClientLogoGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="client-marquee__group" aria-hidden={duplicate || undefined}>
      {clientMarks.map(([file, name]) => (
        <div className="client-marquee__logo" key={file}>
          <img src={`/assets/${file}`} alt={duplicate ? "" : name} loading="lazy" />
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__intro">
        <div className="hero__copy">
          <Reveal from="left">
            <h1 id="hero-title">Training and<br className="hero__desktop-break" /> Development</h1>
          </Reveal>
          <Reveal delay={100} from="left">
            <p>We work with you, our clients, and our partners, on ways to improve areas resulting to organizational effectiveness.</p>
          </Reveal>
          <Reveal delay={180} from="left">
            <a className="button button--primary hero__button" href="tel:63286520211">
              <span>Get Consultation</span><ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </Reveal>
        </div>
        <div className="hero__proof" aria-label="ACG at a glance">
          {proofPoints.map((point, index) => (
            <Reveal key={point.label} delay={index * 75}>
              <div className="hero__stat">
                <p className="hero__stat-value"><span>{point.value}</span><sup>{point.suffix}</sup></p>
                <p className="hero__stat-label">{point.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <Reveal className="hero__image-reveal" delay={80}>
        <img
          className="hero__image"
          src="/assets/hero-4-1-1-1536x593.webp"
          alt="ACG facilitators and participants collaborate during a training workshop"
          fetchPriority="high"
          width="1536"
          height="593"
        />
      </Reveal>
    </section>
  );
}

export function ClientMarquee() {
  return (
    <section className="client-marquee" aria-label="Trusted by industry leaders">
      <div className="client-marquee__track">
        <ClientLogoGroup />
        <ClientLogoGroup duplicate />
      </div>
    </section>
  );
}
