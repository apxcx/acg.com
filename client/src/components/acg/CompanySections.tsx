import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Accordion, { type AccordionItem } from "./Accordion";
import { Reveal } from "./Reveal";

const missionText = "We create a framework for business relationships bounded by trust. Deliver services through face-to-face or virtual learning through organizations in Asia Pacific. Enable individuals and company business units to grow in understanding human behavior, creatively and innovatively, while thinking of balancing both Socio-Economic Sustainability at the highest service quality. Allows the team to deliver optimum productivity while preserving self-worth and achieving reasonable gains based on achieved business objectives.";

const visionText = "The driving force in our company is our values. Our vision guides us to achieve our desired future, our mission inspires us to actualize our purpose, and our values define us – who we are, how we do things, and how we relate to other people and to each other. By translating these values in our day-to-day operations, we ensure our clients, co-employees, shareholders, and the communities we serve, the best quality service we can provide.";

const companyValues = [
  "Protect Business Partnership",
  "Enhance Dynamic Productivity and Accountability",
  "Execute Planned Delivery",
  "Provide Service to All with Excellence and Pride",
  "Increase Creativity and Innovation",
  "Promote Dedication and Commitment",
  "Align all actions and output to SDG and ESG",
];

const missionItems: AccordionItem[] = [
  { id: "mission", title: "Our Mission", content: <p>{missionText}</p> },
  { id: "vision", title: "Our Vision", content: <p>{visionText}</p> },
  { id: "values", title: "Our Values", content: <ul className="value-list">{companyValues.map((value) => <li key={value}>{value}</li>)}</ul> },
];

const expertiseItems: AccordionItem[] = [
  {
    id: "training",
    title: "Training and Development",
    content: <><p>We help design and implement development programs, processes and systems to maximize people productivity in the organizations, support them in their career goals and prepare them for bigger roles in the organization.</p><a className="text-link" href="tel:63286520211">Get Consultation <ArrowUpRight size={16} aria-hidden="true" /></a></>,
    number: "01",
  },
  {
    id: "effectiveness",
    title: "Consulting for Organizational Effectiveness",
    content: <><p>Through tested Organization Development tools, we work with clients to advise them on ways to improve areas of employee risk which would otherwise detract from the organization’s performance and effectiveness.</p><a className="text-link" href="tel:63286520211">Get Consultation <ArrowUpRight size={16} aria-hidden="true" /></a></>,
    number: "02",
  },
  {
    id: "leadership",
    title: "Building Leadership Capital",
    content: <><p>We help develop the leadership and managerial talent for your company.</p><a className="text-link" href="tel:63286520211">Get Consultation <ArrowUpRight size={16} aria-hidden="true" /></a></>,
    number: "03",
  },
  {
    id: "coaching",
    title: "Coaching",
    content: <><p>We help develop strategies to the different challenges faced by managers in the workplace using coaching models and concepts.</p><a className="text-link" href="tel:63286520211">Get Consultation <ArrowUpRight size={16} aria-hidden="true" /></a></>,
    number: "04",
  },
];

const offerings = [
  { number: "01", title: "Life Orientations", image: "lifo.webp", alt: "LIFO Life Orientations mark", description: "LIFO® (Life Orientations) Method is an applied behavioral science system which fosters high performance for individuals and teams. It improves individual productivity, interpersonal communication and collaborative teamwork." },
  { number: "02", title: "Innovative Thinking System", image: "its-logo.webp", alt: "Innovative Thinking System mark", description: "ITS™ or Innovative Thinking System™ is a course that develops “innovative action” or the ability to create superior ideas and apply them at critical times." },
  { number: "03", title: "Service Quality Solutions", image: "sqs-logo.webp", alt: "Service Quality Solutions mark", description: "Service Quality Solutions (SQS) is a gamut of learning experience leading to the transformation and cultivation of a service quality culture and excellence." },
  { number: "04", title: "Future Fit Collab", image: "future-fit-collab-1.webp", alt: "Future Fit Collab mark", description: "ACG-FutureFit Collab moves beyond ESG compliance to equip organizations with the inner and systemic capabilities needed to thrive in a changing world." },
];

const affiliates = [
  { name: "Civil Service Commission", image: "csc.webp", alt: "Civil Service Commission Philippines" },
  { name: "People Management Association of the Philippines", image: "pmap-logo.webp", alt: "PMAP" },
  { name: "Philippines Australia Human Resource and Organizational Development Facility", image: "pahrodf.webp", alt: "PAHRODF" },
  { name: "Technical Education and Skills Development Authority", image: "tesda.webp", alt: "TESDA" },
  { name: "Philippine Society for Talent Development", image: "pstd.webp", alt: "PSTD" },
];

const principles = [
  { title: "Productivity and Accountability", text: "We take ownership for everything we do. We are answerable to fulfill our promise. Our promise is our word. We keep our word." },
  { title: "Dedication and Commitment", text: "We believe in profit with honor and are committed to good governance and the highest standards. Earn the trust of our clients, maintain the confidence of our candidates and put the organizations’ interest above ourselves." },
  { title: "Planned Delivery", text: "We have an inner drive to get the job done quickly, get it done fast, and get it done right." },
  { title: "Creativity and Innovation", text: "We deliver more than usual. Our processes and systems, products and services are creative and ingenious. We achieve results despite a lack of resources. We maximize internal resources to be able to deliver the expected results." },
];

export function AboutSection({ onWatch }: { onWatch: (trigger: HTMLButtonElement) => void }) {
  return (
    <section className="about section-pad" id="about" aria-labelledby="about-title">
      <div className="content-width">
        <div className="about__grid">
          <Reveal className="about__visual" from="left">
            <div className="about__image-frame">
              <img src="/assets/about-1-1-1.webp" alt="ACG colleagues working together in a bright meeting room" loading="lazy" width="348" height="253" />
            </div>
            <div className="about__secondary-image">
              <img src="/assets/about-1-2-1.webp" alt="Facilitated conversation between colleagues" loading="lazy" width="606" height="492" />
            </div>
          </Reveal>
          <div className="about__copy">
            <Reveal from="right"><p className="eyebrow">About Us</p></Reveal>
            <Reveal delay={70} from="right"><h2 id="about-title">Locally trusted and with an excellent performance record.</h2></Reveal>
            <Reveal delay={220} from="right">
              <button className="button button--outline" type="button" onClick={(event) => onWatch(event.currentTarget)}>Watch Reels <span className="button__play" aria-hidden="true">▶</span></button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MissionSection() {
  return (
    <section className="mission section-pad" id="mission" aria-label="Our mission, vision and values">
      <div className="content-width mission__grid">
        <Reveal from="left" className="mission__intro">
          <p>ACG Human Capital Solutions, Corp. having four business units, is frequently called upon by the most well-known and well-regarded companies to help build and develop human capital in their organizations.</p>
          <div className="about__served">
            <span className="about__served-label">We have served more than</span>
            <span className="about__served-number">1000</span>
            <span className="about__served-plus">+</span>
            <span className="about__served-clients">CLIENTS</span>
          </div>
          <a className="text-link mission__more" href="#about">More About Us <ArrowUpRight size={16} aria-hidden="true" /></a>
        </Reveal>
        <Reveal from="right" className="mission__accordion">
          <Accordion items={missionItems} groupId="mission-accordion" />
        </Reveal>
      </div>
    </section>
  );
}

export function ExpertiseSection() {
  return (
    <section className="expertise section-pad" id="expertise" aria-labelledby="expertise-title">
      <div className="content-width">
        <div className="expertise__heading">
          <div><p className="eyebrow">Our Expertise</p><h2 id="expertise-title">Smart enterprise</h2></div>
        </div>
        <div className="expertise__grid">
          <Reveal from="left" className="expertise__visual">
            <img src="/assets/service-4-1-1.webp" alt="Two colleagues share a conversation around their work" loading="lazy" width="467" height="331" />
          </Reveal>
          <Reveal from="right">
            <Accordion items={expertiseItems} groupId="expertise-accordion" numbered />
            <a className="text-link expertise__all-services" href="#services">View All Services <ArrowUpRight size={16} aria-hidden="true" /></a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section className="services section-pad" id="services" aria-labelledby="services-title">
      <div className="content-width">
        <div className="section-heading section-heading--center">
          <Reveal><p className="eyebrow">Services</p><h2 id="services-title">Our Services</h2></Reveal>
        </div>
        <div className="services__grid">
          {offerings.map((service, index) => (
            <Reveal key={service.number} delay={index * 90} className="service-card">
              <p className="service-card__number">{service.number}</p>
              <h3>{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
              <div className="service-card__mark"><img src={`/assets/${service.image}`} alt={service.alt} loading="lazy" /></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AffiliationsSection() {
  const [perView, setPerView] = useState(3);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 1023px)");
    const update = () => {
      setPerView(query.matches ? 1 : 3);
      setActive(0);
    };
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const lastSlide = Math.max(0, affiliates.length - perView);
  const previous = () => setActive((index) => Math.max(0, index - 1));
  const next = () => setActive((index) => Math.min(lastSlide, index + 1));

  return (
    <section className="affiliations section-pad" id="affiliations" aria-labelledby="affiliations-title">
      <div className="content-width">
        <div className="affiliations__heading">
          <Reveal><p className="eyebrow">Our Affiliation</p><h2 id="affiliations-title">Affiliated Organizations</h2></Reveal>
          <div className="affiliations__controls" aria-label="Affiliated organizations controls">
            <button className="round-control" type="button" aria-label="Previous organizations" onClick={previous} disabled={active === 0}><ArrowLeft size={18} aria-hidden="true" /></button>
            <button className="round-control" type="button" aria-label="Next organizations" onClick={next} disabled={active === lastSlide}><ArrowRight size={18} aria-hidden="true" /></button>
          </div>
        </div>
        <div className={`affiliation-slider ${perView === 1 ? "is-single-view" : "is-triple-view"}`}>
          <div className="affiliation-slider__track" style={{ transform: `translateX(-${active * 100 / affiliates.length}%)` }}>
            {affiliates.map((affiliate, index) => (
              <div className="affiliation-slide" key={affiliate.name} aria-roledescription="slide" aria-label={`${index + 1} of ${affiliates.length}`}>
                <Reveal delay={index * 55} className="affiliation-card">
                  <div className="affiliation-card__mark"><img src={`/assets/${affiliate.image}`} alt={affiliate.alt} loading="lazy" /></div>
                  <p>{affiliate.name}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
        <div className="affiliations__dots" aria-label="Choose an affiliated organization slide">
          {Array.from({ length: lastSlide + 1 }, (_, index) => (
            <button key={index} className={`testimonial-card__dot${active === index ? " is-active" : ""}`} type="button" aria-label={`Show organization slide ${index + 1}`} aria-current={active === index ? "true" : undefined} onClick={() => setActive(index)} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseSection() {
  return (
    <section className="why section-pad" id="why-acg" aria-labelledby="why-title">
      <div className="content-width">
        <div className="why__heading"><Reveal><p className="eyebrow">Why Choose us</p><h2 id="why-title">Grow securely with<br className="desktop-only" /> financial experts.</h2></Reveal></div>
        <div className="why__grid">
          <div className="why__principles why__principles--left">
            {principles.slice(0, 2).map((principle, index) => (
              <Reveal key={principle.title} delay={index * 70} className="principle">
                <div><h3>{principle.title}</h3><p>{principle.text}</p></div>
              </Reveal>
            ))}
          </div>
          <Reveal className="why__visual" from="right">
            <img src="/assets/choose-4-1-1.webp" alt="Collaborative discussion in a modern learning space" loading="lazy" width="558" height="636" />
            <span className="why__seal"><img src="/assets/star-2-green-1.webp" alt="" loading="lazy" /></span>
          </Reveal>
          <div className="why__principles why__principles--right">
            {principles.slice(2).map((principle, index) => (
              <Reveal key={principle.title} delay={(index + 2) * 70} className="principle">
                <div><h3>{principle.title}</h3><p>{principle.text}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
