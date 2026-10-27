import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Accordion, { type AccordionItem } from "./Accordion";
import { Reveal } from "./Reveal";

const questions: AccordionItem[] = [
  {
    id: "core-areas",
    title: "What core areas does ACG Human Capital Solutions cover?",
    content: <p>We focus on strategic leadership development, talent assessment, and organization design. We help companies analyze manpower needs, optimize workforce structure, and implement practical strategies that directly improve business performance.</p>,
  },
  {
    id: "tools",
    title: "What proprietary assessments and tools drive your programs?",
    content: <p>ACG is the sole distributor and agent of the LIFO® Method in the Philippines. We are also a licensed provider of the ITS™ (Innovative Thinking System)—a globally recognized organization development framework from Business Consultants, Inc. Japan.</p>,
  },
  {
    id: "sectors",
    title: "Which sectors and client types do you serve?",
    content: <p>We work with local enterprises and multinational corporations across all major industries. Our customized frameworks adapt to organizations facing industry shifts, rapid scaling, corporate restructuring, or outsourcing demands.</p>,
  },
  {
    id: "team",
    title: "What is the background and size of your consulting team?",
    content: <p>Our roster features 10+ core leadership consultants supported by a extended network of over 40 international partners and field experts with deep corporate experience.</p>,
  },
  {
    id: "track-record",
    title: "What is ACG’s proven track record and global reach?",
    content: <p>Established in 2003, ACG brings 20+ years of expertise, having impacted 1,000+ client organizations and over 28,000 participants spanning 15+ countries worldwide.</p>,
  },
];

export default function FAQ() {
  return (
    <section className="faq section-pad" id="faq" aria-labelledby="faq-title">
      <div className="content-width faq__grid">
        <div className="faq__contact">
          <Reveal from="left">
            <p className="eyebrow">Faq</p>
            <h2 id="faq-title">Frequently Asked Questions</h2>
            <p className="faq__intro">Connect with our team to learn how ACG can help your organization.</p>
          </Reveal>
          <div className="contact-list">
            <Reveal delay={80} from="left"><a href="tel:63286520211"><Phone size={18} aria-hidden="true" /><span>+632-8652-0211</span><ArrowUpRight size={14} aria-hidden="true" /></a></Reveal>
            <Reveal delay={130} from="left"><a href="mailto:info@acghumancapital.com"><Mail size={18} aria-hidden="true" /><span>info@acghumancapital.com</span><ArrowUpRight size={14} aria-hidden="true" /></a></Reveal>
            <Reveal delay={180} from="left"><a href="https://maps.app.goo.gl/kmpkQ7MPASdsHmKT6" target="_blank" rel="noreferrer"><MapPin size={18} aria-hidden="true" /><span>4th Flr. GC Corporate Plaza<br />150 Legaspi St., Legaspi Village<br />Makati City, Philippines 1200</span><ArrowUpRight size={14} aria-hidden="true" /></a></Reveal>
          </div>
          <Reveal delay={240} from="left"><a className="button button--primary" href="tel:63286520211">Get Consultation <ArrowUpRight size={16} aria-hidden="true" /></a></Reveal>
        </div>
        <Reveal className="faq__questions" from="right">
          <Accordion items={questions} groupId="faq-accordion" />
        </Reveal>
      </div>
    </section>
  );
}
