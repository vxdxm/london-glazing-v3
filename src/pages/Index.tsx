
import React, { useEffect } from "react";
import { MainNav } from "@/components/MainNav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { LazyLoadWrapper } from "@/components/ui";
import { DynamicSEO } from "@/components/DynamicSEO";
import { PAGE_CONFIGS } from "@/constants/pageConfigs";
import HomeExamples from "@/components/home/HomeExamples";
import HomeBenefits from "@/components/home/HomeBenefits";
import HomeSustainability from "@/components/home/HomeSustainability";

const Index = () => {
  // Add logging for home page indexing
  useEffect(() => {
    console.log("Home page loaded");
  }, []);
  
  return (
    <div className="min-h-screen">
      <DynamicSEO {...PAGE_CONFIGS.home} />
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
