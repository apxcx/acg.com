import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const companyLinks = [
  ["About Us", "#about"], ["Our Team", "#about"], ["Case Studies", "#expertise"], ["Blog", "#insights"], ["Contact", "#faq"],
] as const;
const serviceLinks = [
  ["Training and Development", "#expertise"], ["Building Leadership Capital", "#expertise"], ["Consulting", "#expertise"], ["Coaching", "#expertise"],
] as const;

export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="content-width">
        <Reveal className="site-footer__banner">
          <div><p className="eyebrow eyebrow--light">ACG Human Capital Solutions</p><h2>Crafting digital experiences that inspire, connect, and grow brands worldwide</h2></div>
          <a className="button button--light" href="tel:63286520211">Get Consultation <ArrowUpRight size={16} aria-hidden="true" /></a>
        </Reveal>
        <div className="site-footer__main">
          <a className="site-footer__brand" href="#home" aria-label="ACG home">
            <span className="site-footer__logo-wrap"><img src="/assets/logo-4-1.png" alt="ACG Human Capital Solutions" width="171" height="35" loading="lazy" /></span>
          </a>
          <div className="site-footer__column"><h3>Company</h3>{companyLinks.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</div>
          <div className="site-footer__column"><h3>Services</h3>{serviceLinks.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</div>
          <div className="site-footer__column site-footer__contact"><h3>Newsletter</h3><a href="tel:63286520211">+632-8652-0211</a><a href="mailto:info@acghumancapital.com">info@acghumancapital.com</a><p>4th Flr. GC Corporate Plaza<br />150 Legaspi St., Legaspi Village<br />Makati City, Philippines 1200</p></div>
        </div>
        <div className="site-footer__legal">
          <p>Copyright © 2026. All information about LIFO® Method and Innovative Thinking System™ is under contracted license by The Schutz Company and Business Consultants Inc. Japan with ACG Human Capital Solutions, Corp</p>
          <div><a href="#footer">Privacy Policy</a><a href="#footer">Terms of use</a></div>
        </div>
      </div>
    </footer>
  );
}
