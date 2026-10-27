import { useState, type ReactNode } from "react";
import { Plus } from "lucide-react";

export type AccordionItem = {
  id: string;
  title: string;
  content: ReactNode;
  number?: string;
};

type AccordionProps = {
  items: AccordionItem[];
  groupId: string;
  className?: string;
  numbered?: boolean;
};

/** Single-open accordion. All rows start closed, matching the source page. */
export default function Accordion({ items, groupId, className = "", numbered = false }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={`accordion ${className}`}>
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        const buttonId = `${groupId}-button-${index + 1}`;
        const panelId = `${groupId}-panel-${index + 1}`;
        return (
          <div className={`accordion__item${isOpen ? " is-open" : ""}`} key={item.id}>
            <h3 className="accordion__heading">
              <button
                className="accordion__trigger"
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId((current) => current === item.id ? null : item.id)}
              >
                {numbered && <span className="accordion__number">[{item.number ?? String(index + 1).padStart(2, "0")}]</span>}
                <span className="accordion__title">{item.title}</span>
                <span className="accordion__icon" aria-hidden="true"><Plus size={23} strokeWidth={1.35} /></span>
              </button>
            </h3>
            <div
              className="accordion__panel"
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              inert={!isOpen}
            >
              <div className="accordion__panel-inner">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
