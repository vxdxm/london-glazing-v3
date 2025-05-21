
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
    
    // Check if we need to scroll to the contact section
    // Handle both hash-based navigation and query parameter-based navigation
    const shouldScrollToContact = 
      window.location.hash === '#contact-form-section' || 
      new URLSearchParams(window.location.search).get('scrollToContact') === 'true';
    
    if (shouldScrollToContact) {
      // Use a more reliable approach with multiple attempts
      const scrollToContact = () => {
        const contactSection = document.getElementById('contact-form-section');
        if (contactSection) {
          // Force layout recalculation before scrolling
          contactSection.getBoundingClientRect();
          
          contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          return true;
        }
        return false;
      };
      
      // Try immediately
      if (!scrollToContact()) {
        // If not successful, try with a delay to ensure DOM is ready
        setTimeout(() => {
          if (!scrollToContact()) {
            // One more attempt with a longer delay
            setTimeout(scrollToContact, 500);
          }
        }, 100);
      }
      
      // Clean up the URL if using query parameter
      if (window.location.search.includes('scrollToContact')) {
        const url = new URL(window.location.href);
        url.searchParams.delete('scrollToContact');
        window.history.replaceState({}, '', url);
      }
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
      
      <div id="contact-form-section" className="scroll-mt-24">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
