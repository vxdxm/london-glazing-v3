import React, { useEffect, useState } from "react";
import { MainNav } from "@/components/MainNav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { LazyLoadWrapper } from "@/components/ui";
import { SEOMonster } from "@/components/seo/SEOMonster";
import { SkipNavigation } from "@/components/navigation/SkipNavigation";
import { WebVitalsDisplay } from "@/hooks/useWebVitals";
import HomeExamples from "@/components/home/HomeExamples";
import HomeBenefits from "@/components/home/HomeBenefits";
import HomeSustainability from "@/components/home/HomeSustainability";

const Index = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Add logging for home page indexing
  useEffect(() => {
    console.log("Home page loaded");
    setIsMounted(true);
    
    // Only run client-side code after component has mounted
    if (typeof window !== 'undefined') {
      // Check if we need to scroll to the contact section (via URL hash)
      if (window.location.hash === '#contact-section') {
        setTimeout(() => {
          const contactSection = document.getElementById('contact-section');
          if (contactSection) {
            contactSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      }
    }
  }, []); // Empty dependency array is acceptable here
  
  return (
    <div className="min-h-screen">
      <SEOMonster
        title="Secondary Glazing Specialist | Heritage & Modern Homes London"
        description="London's expert secondary glazing for heritage & modern homes. Reduce noise, boost insulation, enhance security & save on energy bills. Get a free quote."
        keywords={[
          "secondary glazing London",
          "window glazing specialist", 
          "thermal efficiency windows",
          "noise reduction glazing",
          "heritage glazing solutions",
          "acoustic glazing London",
          "energy efficient windows London",
          "period property window solutions",
          "secondary glazing installation"
        ]}
        service={{
          name: "Professional Secondary Glazing Installation",
          description: "Expert secondary glazing installation for residential and commercial properties in London",
          category: "Home Improvement Services",
          availability: "InStock",
          serviceType: "InstallationService",
          provider: {
            type: "LocalBusiness",
            name: "Secondary Glazing Specialist London"
          }
        }}
        aggregateRating={{
          ratingValue: 4.9,
          reviewCount: 127,
          bestRating: 5,
          worstRating: 1,
          ratingCount: 127
        }}
        type="website"
        includeLocalBusiness={true}
        includeBreadcrumbs={true}
        breadcrumbs={[
          { name: "Home", item: "/" }
        ]}
      />
      <SkipNavigation />
      <MainNav />
      <Hero />
      
      <main id="main-content" tabIndex={-1}>
        <Services />
        
        <LazyLoadWrapper threshold={0.1}>
          <HomeExamples />
        </LazyLoadWrapper>
        
        <LazyLoadWrapper threshold={0.1}>
          <HomeBenefits />
        </LazyLoadWrapper>

        <LazyLoadWrapper threshold={0.1}>
          <HomeSustainability />
        </LazyLoadWrapper>

        <LazyLoadWrapper threshold={0.1}>
          <Testimonials />
        </LazyLoadWrapper>
        
        <div id="contact-section">
          <ContactForm />
        </div>
      </main>
      
      <Footer />
      {isMounted && <WebVitalsDisplay />}
    </div>
  );
};

export default Index;