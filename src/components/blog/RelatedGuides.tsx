import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const guides = [
  { title: "Acoustic Glazing Guide", href: "/blog/acoustic-secondary-glazing-guide", description: "10.8mm Stadip Silence glass & 100mm air gaps" },
  { title: "Heritage & Listed Buildings", href: "/blog/listed-building-secondary-glazing-guide", description: "Conservation-approved, fully reversible" },
  { title: "EPC & Energy Efficiency", href: "/blog/epc-energy-efficiency-guide", description: "Cut heating bills 15-30%" },
  { title: "Condensation & Mould", href: "/blog/condensation-mould-prevention-guide", description: "99% condensation reduction" },
];

export const RelatedGuides = ({ currentSlug }: { currentSlug: string }) => {
  const filtered = guides.filter((g) => !g.href.includes(currentSlug));

  return (
    <div className="my-12 border border-border rounded-xl p-6">
      <h3 className="text-lg font-bold text-foreground mb-4">Related Expert Guides</h3>
      <div className="grid sm:grid-cols-3 gap-4">
        {filtered.map((g) => (
          <Link key={g.href} to={g.href} className="group">
            <div className="bg-muted/30 rounded-lg p-4 h-full hover:bg-muted/60 transition-colors">
              <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-1">{g.title}</h4>
              <p className="text-xs text-muted-foreground mb-2">{g.description}</p>
              <span className="text-xs text-primary flex items-center gap-1">
                Read <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
