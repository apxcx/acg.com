import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play, Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const testimonials = [
  { quote: "LIFO® is not only for starting managers, recommend LIFO® to mature executives as well, as it can help them in understanding how they can capitalize on their strengths.", name: "Rene Ram", role: "Senior Executive" },
  { quote: "This training has given me insights on myself which I can use as tools to win my battles towards self improvement, team building and organizational development.", name: "Noah Rahman", role: "Executive Director" },
  { quote: "Knowing is winning half of the battle. This training has given me insights on myself which I can use as tools to win my battles towards self improvement, team building and organizational development.", name: "John Doe", role: "Managing Director" },
  { quote: "Working with Bconsult completely transformed our business strategy. Their expert guidance, clear planning, and data-driven approach helped us increase efficiency and achieve measurable growth within a short time. Highly recommended!", name: "Christian Cordero", role: "Department Manager" },
];

export default function Testimonials({ onPlay, pauseAutoplay = false }: { onPlay: (trigger: HTMLButtonElement) => void; pauseAutoplay?: boolean }) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [manualPause, setManualPause] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const shouldPause = pauseAutoplay || hovered || focused || manualPause || reducedMotion;
  useEffect(() => {
    if (shouldPause) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % testimonials.length), 3000);
    return () => window.clearInterval(timer);
  }, [active, shouldPause]);

  const move = (direction: -1 | 1) => setActive((current) => (current + direction + testimonials.length) % testimonials.length);
  const current = testimonials[active];

  return (
    <section className="testimonials section-pad" id="testimonials" aria-labelledby="testimonials-title">
      <div className="content-width">
        <Reveal className="testimonials__heading">
          <p className="eyebrow">Testimonials</p>
          <h2 id="testimonials-title">Trusted by industry leaders</h2>
        </Reveal>
        <div
          className="testimonials__grid"
          role="region"
          aria-roledescription="carousel"
          aria-label="Testimonials"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocusCapture={() => setFocused(true)}
          onBlurCapture={(event) => {
            const nextTarget = event.relatedTarget as Node | null;
            if (!nextTarget || !event.currentTarget.contains(nextTarget)) setFocused(false);
          }}
        >
          <Reveal className="testimonials__feature" from="left">
            <img src="/assets/thumb-sm-4.jpg" alt="" loading="lazy" width="191" height="136" />
            <img className="testimonials__feature-logo" src="/assets/logo-4-1.png" alt="ACG Human Capital Solutions" loading="lazy" width="171" height="35" />
            <button className="testimonials__play" type="button" onClick={(event) => onPlay(event.currentTarget)}>
              <span className="button__play" aria-hidden="true"><Play size={9} fill="currentColor" /></span> Play Now
            </button>
          </Reveal>
          <div className="testimonial-carousel">
            <div className="testimonial-card">
              <Quote className="testimonial-card__mark" size={34} aria-hidden="true" />
              <div className="testimonial-card__quote-live" aria-live="polite" aria-atomic="true">
                <blockquote key={current.name} className="testimonial-card__quote">“{current.quote}”</blockquote>
                <div className="testimonial-card__person">
                  <span className="testimonial-card__avatar" aria-hidden="true">{current.name.split(" ").map((part) => part[0]).join("")}</span>
                  <span><strong>{current.name}</strong><small>{current.role}</small></span>
                </div>
              </div>
              <div className="testimonial-card__bottom">
                <div className="testimonial-card__dots" role="group" aria-label="Select a testimonial">
                  {testimonials.map((item, index) => (
                    <button
                      className={`testimonial-card__dot${active === index ? " is-active" : ""}`}
                      type="button"
                      key={item.name}
                      aria-label={`Show testimonial ${index + 1} by ${item.name}`}
                      aria-current={active === index ? "true" : undefined}
                      onClick={() => setActive(index)}
                    />
                  ))}
                </div>
                <div className="testimonials__controls" aria-label="Testimonial controls">
                  <button className="round-control" type="button" aria-label="Previous testimonial" onClick={() => move(-1)}><ArrowLeft size={19} aria-hidden="true" /></button>
                  <button className="round-control" type="button" aria-label="Next testimonial" onClick={() => move(1)}><ArrowRight size={19} aria-hidden="true" /></button>
                  <button className="round-control" type="button" aria-label={manualPause ? "Resume autoplay" : "Pause autoplay"} aria-pressed={manualPause} onClick={() => setManualPause((pause) => !pause)}>{manualPause ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
