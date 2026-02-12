import React from "react";
import { Link } from "react-router-dom";
import { Book, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const guides = [
  {
    title: "Acoustic Secondary Glazing Guide",
    description: "How 10.8mm Stadip Silence glass and 100mm air gaps deliver 70-80% noise reduction for London period homes.",
    href: "/blog/acoustic-secondary-glazing-guide",
    tag: "Noise Reduction",
  },
  {
    title: "Heritage & Listed Buildings Guide",
    description: "Conservation-approved secondary glazing for Grade I & II listed buildings. 100% reversible, no planning needed.",
    href: "/blog/listed-building-secondary-glazing-guide",
    tag: "Heritage",
  },
  {
    title: "EPC & Energy Efficiency Guide",
    description: "Cut heating bills by 15-30% and boost your EPC rating. Essential reading for landlords facing MEES 2028.",
    href: "/blog/epc-energy-efficiency-guide",
    tag: "Energy Savings",
  },
  {
    title: "Condensation & Mould Prevention",
    description: "The science behind thermal bridges and how secondary glazing achieves 99% condensation reduction.",
    href: "/blog/condensation-mould-prevention-guide",
    tag: "Condensation",
  },
];

export const ExpertResourcesSection = () => (
  <section className="py-16 bg-muted/20">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Book className="h-5 w-5 text-primary" />
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">In-Depth Knowledge</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Expert Resources & Heritage Guides</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive guides written by London's leading secondary glazing specialists. Everything you need to make an informed decision.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {guides.map((g) => (
          <Link key={g.href} to={g.href} className="group">
            <div className="bg-background border border-border rounded-xl p-6 h-full hover:border-primary/40 hover:shadow-md transition-all">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{g.tag}</span>
              <h3 className="text-lg font-bold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors">{g.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{g.description}</p>
              <span className="text-sm font-medium text-primary flex items-center gap-1">
                Read guide <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
