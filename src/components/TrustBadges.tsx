import React from "react";
import { Building2, ClipboardCheck, Star, Shield, MapPin, MessageCircle, CheckCircle } from "lucide-react";

const badges = [
  {
    icon: Building2,
    heading: "Heritage Property Specialists",
    text: "Extensive experience with Grade I, II*, and II listed buildings across Westminster, Kensington & Chelsea, and Camden"
  },
  {
    icon: ClipboardCheck,
    heading: "Planning Permission Support",
    text: "We handle all conservation officer liaison and Listed Building Consent applications throughout London"
  },
  {
    icon: Star,
    heading: "5-Star Customer Satisfaction",
    text: "Rated excellent by hundreds of London property owners across all boroughs"
  },
  {
    icon: Shield,
    heading: "Fully Insured & Guaranteed",
    text: "£5 million public liability insurance and 10-year comprehensive warranty on all installations"
  },
  {
    icon: MapPin,
    heading: "London & Home Counties Coverage",
    text: "Professional service across all 32 London boroughs plus Surrey, Kent, Essex, and Hertfordshire"
  },
  {
    icon: MessageCircle,
    heading: "Free Expert Consultation",
    text: "No-obligation surveys with transparent pricing and honest, professional advice"
  }
];

const accreditationsCol1 = [
  { label: "Public liability insurance", value: "£5 million" },
  { label: "Installation warranty", value: "10 years comprehensive" },
  { label: "Materials guarantee", value: "Manufacturer-backed" },
  { label: "Response time", value: "Same-day quotes available" }
];

const accreditationsCol2 = [
  { label: "Conservation approved", value: "Westminster, K&C, Camden, Richmond councils" },
  { label: "British Standards compliant", value: "All installations" },
  { label: "Professional training", value: "Ongoing development" },
  { label: "Heritage expertise", value: "Listed buildings and conservation areas" }
];

export const TrustBadges = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why London Property Owners Trust Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional service, exceptional results, complete peace of mind
          </p>
        </div>

        {/* Trust Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <badge.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{badge.heading}</h3>
                  <p className="text-sm text-muted-foreground">{badge.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Accreditations Section */}
        <div className="bg-background rounded-lg p-8 shadow-sm border border-border">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Our Accreditations & Standards
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Column 1 */}
            <ul className="space-y-3">
              {accreditationsCol1.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">{item.label}:</strong> {item.value}
                  </span>
                </li>
              ))}
            </ul>
            
            {/* Column 2 */}
            <ul className="space-y-3">
              {accreditationsCol2.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">{item.label}:</strong> {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Final Text */}
          <p className="text-center text-muted-foreground max-w-3xl mx-auto">
            All our installations meet or exceed Building Regulations and conservation requirements. 
            We work closely with local authority conservation officers to ensure sympathetic solutions 
            for London's heritage properties.
          </p>
        </div>
      </div>
    </section>
  );
};
