import React from "react";
import { MainNav } from "@/components/MainNav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title="Secondary Glazing Specialist | UK's Leading Glazing Solutions"
        description="Expert secondary glazing solutions for residential and commercial properties. Reduce noise, improve thermal insulation, and enhance security with our specialist services."
        canonicalPath="/"
        type="website"
        keywords={[
          "secondary glazing",
          "noise reduction glazing",
          "thermal insulation windows",
          "acoustic glazing specialist",
          "draught proofing glazing",
          "energy efficient glazing",
          "window insulation UK",
          "soundproof windows",
          "double glazing alternative",
          "glazing specialist London"
        ]}
        includeLocalBusiness={true}
      />
      
      <MainNav />
      <Hero />
      <Services />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;