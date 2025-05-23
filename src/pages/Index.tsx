
import React, { useEffect } from "react";
import { MainNav } from "@/components/MainNav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { LazyLoadWrapper } from "@/components/ui";
import HomeSEO from "@/components/home/HomeSEO";
import HomeExamples from "@/components/home/HomeExamples";
import HomeBenefits from "@/components/home/HomeBenefits";
import HomeSustainability from "@/components/home/HomeSustainability";

const Index = () => {
  // Add logging for home page indexing
  useEffect(() => {
    console.log("Home page loaded");
    
    // Check if we need to scroll to the contact section (via URL hash)
    if (window.location.hash === '#contact-section') {
      setTimeout(() => {
        document.getElementById('contact-section')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  }, []);
  
  return (
    <div className="min-h-screen">
      <HomeSEO />
      <MainNav />
      <Hero />
      <Services />
      
      <LazyLoadWrapper>
        <HomeExamples />
      </LazyLoadWrapper>
      
      <LazyLoadWrapper>
        <HomeBenefits />
      </LazyLoadWrapper>

      <LazyLoadWrapper>
        <HomeSustainability />
      </LazyLoadWrapper>

      <LazyLoadWrapper>
        <Testimonials />
      </LazyLoadWrapper>
      
      <div id="contact-section">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
