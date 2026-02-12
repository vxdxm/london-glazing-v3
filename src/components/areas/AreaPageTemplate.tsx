import React from "react";
import { Link } from "react-router-dom";
import { Volume2, Thermometer, FileCheck, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AreaPageTemplateProps {
  areaName: string;
  heroSubtitle: string;
  whyContent: React.ReactNode;
  localLandmarks: string;
  canonicalPath: string;
}

const benefits = [
  {
    icon: Volume2,
    title: "Noise Reduction",
    description: "Up to 80% noise reduction with 10.8mm acoustic laminate glass and 100mm air gaps.",
    stat: "80%",
  },
  {
    icon: Thermometer,
    title: "Thermal Insulation",
    description: "Reduce heat loss by 60% through windows, cutting heating bills by 15-30%.",
    stat: "60%",
  },
  {
    icon: FileCheck,
    title: "EPC Improvement",
    description: "Boost your EPC rating from E to C — essential for landlords meeting MEES 2028.",
    stat: "E→C",
  },
  {
    icon: Building2,
    title: "Heritage Preservation",
    description: "100% reversible installation that conservation officers approve for listed buildings.",
    stat: "100%",
  },
];

export const AreaHero = ({ areaName }: { areaName: string }) => (
  <section className="bg-primary/5 py-16 md:py-24">
    <div className="container mx-auto px-4 max-w-4xl text-center">
      <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
        {areaName} Secondary Glazing Specialists
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
        Expert secondary glazing installation for period homes, listed buildings, and conservation areas across {areaName}.
      </p>
      <Link to="/quote-request">
        <Button size="lg" className="gap-2">
          Get My Free Quote <ArrowRight className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  </section>
);

export const BenefitsGrid = () => (
  <section className="py-16">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
        The Big Four Benefits of Secondary Glazing
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((b) => (
          <div key={b.title} className="bg-background border border-border rounded-xl p-6 text-center hover:shadow-md transition-shadow">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <b.icon className="h-6 w-6 text-primary" />
            </div>
            <p className="text-3xl font-black text-primary mb-1">{b.stat}</p>
            <h3 className="font-bold text-foreground mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground">{b.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const LocalLandmarksFooter = ({ areaName, text }: { areaName: string; text: string }) => (
  <section className="bg-muted/30 border-t border-border py-12">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <h3 className="text-lg font-bold text-foreground mb-3">Proudly Serving {areaName}</h3>
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  </section>
);

export const AreaCTA = () => (
  <section className="py-16">
    <div className="container mx-auto px-4 max-w-3xl">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Ready to Transform Your Windows?</h2>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
          Get a free, no-obligation survey and quote tailored to your property.
        </p>
        <Link to="/quote-request">
          <Button size="lg" className="gap-2">
            Get My Free Quote <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  </section>
);
