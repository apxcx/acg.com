import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import Header from "@/components/acg/Header";
import { AffiliationsSection, AboutSection, ExpertiseSection, MissionSection, ServicesSection, WhyChooseSection } from "@/components/acg/CompanySections";
import FAQ from "@/components/acg/FAQ";
import Footer from "@/components/acg/Footer";
import { ClientMarquee, Hero } from "@/components/acg/Hero";
import Testimonials from "@/components/acg/Testimonials";
import "@/styles/landing.css";

type ReelDialogProps = {
  open: boolean;
  onClose: () => void;
  opener: React.MutableRefObject<HTMLElement | null>;
};

function ReelDialog({ open, onClose, opener }: ReelDialogProps) {
  const dialog = useRef<HTMLElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const page = Array.from(document.querySelectorAll<HTMLElement>(".site-header, #bde-main, .site-footer"));
    const oldState = page.map((node) => ({ inert: node.inert, ariaHidden: node.getAttribute("aria-hidden") }));
    page.forEach((node) => {
      node.inert = true;
      node.setAttribute("aria-hidden", "true");
    });
    document.body.classList.add("has-modal");
    closeButton.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = dialog.current?.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])');
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("has-modal");
      page.forEach((node, index) => {
        node.inert = oldState[index].inert;
        if (oldState[index].ariaHidden === null) node.removeAttribute("aria-hidden");
        else node.setAttribute("aria-hidden", oldState[index].ariaHidden!);
      });
      opener.current?.focus();
    };
  }, [open, onClose, opener]);

  if (!open) return null;
  return (
    <div className="reel-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section ref={dialog} className="reel-dialog" role="dialog" aria-modal="true" aria-labelledby="reel-title">
        <button ref={closeButton} className="reel-dialog__close" type="button" onClick={onClose} aria-label="Close reel preview"><X size={22} /></button>
        <h2 className="visually-hidden" id="reel-title">Watch ACG Reels</h2>
        <img src="/assets/thumb-sm-4.jpg" alt="ACG training and development reel preview" width="191" height="136" />
        <div className="reel-dialog__footer"><span>Watch Reels</span><a href="tel:63286520211">Get Consultation <ArrowUpRight size={15} aria-hidden="true" /></a></div>
      </section>
    </div>
  );
}

export default function Home() {
  const [reelOpen, setReelOpen] = useState(false);
  const reelOpener = useRef<HTMLElement | null>(null);
  const closeReel = useCallback(() => setReelOpen(false), []);
  const openReel = useCallback((trigger: HTMLElement) => {
    reelOpener.current = trigger;
    setReelOpen(true);
  }, []);

  return (
    <div className="site-root">
      <a className="skip-link" href="#bde-main">Skip to main content</a>
      <Header />
      <main id="bde-main">
        <Hero />
        <ClientMarquee />
        <AboutSection onWatch={openReel} />
        <MissionSection />
        <ExpertiseSection />
        <ServicesSection />
        <AffiliationsSection />
        <WhyChooseSection />
        <Testimonials onPlay={openReel} pauseAutoplay={reelOpen} />
        <FAQ />
      </main>
      <Footer />
      <ReelDialog open={reelOpen} onClose={closeReel} opener={reelOpener} />
    </div>
  );
}
