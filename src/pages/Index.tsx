
import React, { useEffect } from "react";
import { MainNav } from "@/components/MainNav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { LazyLoadWrapper } from "@/components/ui";
import { IntelligentSEO } from "@/components/seo/IntelligentSEO";
import { SkipNavigation } from "@/components/navigation/SkipNavigation";
import { WebVitalsDisplay } from "@/hooks/useWebVitals";
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
      <IntelligentSEO
        title="Secondary Glazing Specialist | Heritage & Modern Homes London"
        description="London's leading secondary glazing specialists offering expert installation, repairs and acoustic solutions. Enhance your home's thermal efficiency and reduce noise pollution with professional glazing services."
        keywords={[
          "secondary glazing London",
          "window glazing specialist", 
          "thermal efficiency windows",
          "noise reduction glazing",
          "heritage glazing solutions",
          "acoustic glazing London"
        ]}
        service={{
          name: "Professional Secondary Glazing Installation",
          description: "Expert secondary glazing installation for residential and commercial properties in London",
          category: "Home Improvement Services",
          availability: "InStock"
        }}
        aggregateRating={{
          ratingValue: 4.9,
          reviewCount: 127,
          bestRating: 5,
          worstRating: 1
        }}
        type="website"
        includeLocalBusiness={true}
        includeBreadcrumbs={false}
      />
      <SkipNavigation />
      <MainNav />
      <Hero />
      
      <main id="main-content">
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
      </main>
      
      <Footer />
      <WebVitalsDisplay />
    </div>
  );
};

export default Index;
