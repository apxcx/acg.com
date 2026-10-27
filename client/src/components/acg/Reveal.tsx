import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: "up" | "left" | "right";
};

/** Reveal content only once it enters the viewport; reduced-motion is handled in CSS. */
export function Reveal({ children, className = "", delay = 0, from = "up" }: RevealProps) {
  const element = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = element.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { rootMargin: "0px 0px -55px 0px", threshold: 0.12 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const revealStyle = { "--reveal-delay": `${delay}ms` } as CSSProperties;
  return (
    <div
      ref={element}
      className={`reveal reveal--${from}${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={revealStyle}
    >
      {children}
    </div>
  );
}
