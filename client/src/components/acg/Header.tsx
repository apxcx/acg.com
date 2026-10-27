import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

type NavigationItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navigation: NavigationItem[] = [
  { label: "Home", href: "#home", children: [{ label: "Training and Development", href: "#home" }] },
  { label: "About Us", href: "#about", children: [{ label: "Our Mission", href: "#mission" }, { label: "Our Vision", href: "#mission" }, { label: "Our Values", href: "#mission" }] },
  { label: "Services", href: "#services", children: [{ label: "Our Expertise", href: "#expertise" }, { label: "Life Orientations", href: "#services" }, { label: "Innovative Thinking System", href: "#services" }] },
  { label: "Activities", href: "#testimonials", children: [{ label: "Testimonials", href: "#testimonials" }, { label: "Frequently Asked Questions", href: "#faq" }] },
  { label: "Partners", href: "#affiliations", children: [{ label: "Affiliated Organizations", href: "#affiliations" }] },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const menuButton = useRef<HTMLButtonElement>(null);

  const closeNavigation = () => {
    setMobileOpen(false);
    setExpanded(null);
  };

  const handleEscape = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key !== "Escape") return;
    const target = event.target as HTMLElement;
    const item = target.closest<HTMLElement>(".site-nav__item");
    const disclosure = item?.querySelector<HTMLButtonElement>(".site-nav__disclosure");
    if (disclosure && expanded) {
      event.preventDefault();
      setExpanded(null);
      disclosure.focus();
    } else if (mobileOpen) {
      event.preventDefault();
      closeNavigation();
      menuButton.current?.focus();
    }
  };

  return (
    <header className="site-header" onKeyDown={handleEscape}>
      <a className="site-header__logo" href="#home" aria-label="ACG Human Capital Solutions — home" onClick={closeNavigation}>
        <img src="/assets/acg-logo-transparent.webp" alt="ACG Human Capital Solutions" width="59" height="103" />
      </a>

      <button
        ref={menuButton}
        className="site-header__menu-toggle"
        type="button"
        aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={mobileOpen}
        aria-controls="primary-navigation"
        onClick={() => setMobileOpen((open) => !open)}
      >
        {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <nav id="primary-navigation" className={`site-nav${mobileOpen ? " is-open" : ""}`} aria-label="Primary navigation">
        <ul className="site-nav__list">
          {navigation.map((item) => {
            const submenuId = `submenu-${item.label.toLowerCase().replaceAll(" ", "-")}`;
            return (
              <li
                className={`site-nav__item${expanded === item.label ? " is-expanded" : ""}`}
                key={item.label}
                onMouseEnter={() => window.matchMedia("(min-width: 768px)").matches && setExpanded(item.label)}
                onMouseLeave={() => window.matchMedia("(min-width: 768px)").matches && setExpanded(null)}
                onFocus={() => setExpanded(item.label)}
                onBlurCapture={(event) => {
                  const nextTarget = event.relatedTarget as Node | null;
                  if (!nextTarget || !event.currentTarget.contains(nextTarget)) setExpanded(null);
                }}
              >
                <div className="site-nav__topline">
                  <a href={item.href} onClick={closeNavigation}>{item.label}</a>
                  {item.children && (
                    <button
                      type="button"
                      className="site-nav__disclosure"
                      aria-label={`${item.label} submenu`}
                      aria-haspopup="true"
                      aria-expanded={expanded === item.label}
                      aria-controls={submenuId}
                      onClick={() => setExpanded((current) => current === item.label ? null : item.label)}
                    >
                      <ChevronDown size={14} aria-hidden="true" />
                    </button>
                  )}
                </div>
                {item.children && (
                  <ul id={submenuId} className="site-nav__submenu" aria-label={`${item.label} submenu`} inert={expanded !== item.label}>
                    {item.children.map((child) => (
                      <li key={child.label}><a href={child.href} onClick={closeNavigation}>{child.label}</a></li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
          <li className="site-nav__item site-nav__gallery"><a href="#affiliations" onClick={closeNavigation}>Gallery</a></li>
          <li className="site-nav__mobile-cta">
            <a className="button button--primary" href="tel:63286520211" onClick={closeNavigation}>Free Consultation <ArrowUpRight size={16} aria-hidden="true" /></a>
          </li>
        </ul>
      </nav>

      <a className="button button--primary site-header__cta" href="tel:63286520211">
        Free Consultation <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </header>
  );
}
