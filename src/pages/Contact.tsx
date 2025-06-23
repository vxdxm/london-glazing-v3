
import React from "react";
import { MainNav } from "@/components/MainNav";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title="Contact Us | Secondary Glazing Specialist London"
        description="Get in touch with London's leading secondary glazing specialists. Free consultations, expert advice, and competitive quotes for all your glazing needs."
        canonicalPath="/contact"
        type="website"
        keywords={[
          "contact secondary glazing",
          "glazing consultation London",
          "secondary glazing quote",
          "window glazing contact",
          "glazing specialists London"
        ]}
        serviceName="Secondary Glazing Consultation"
      />
      
      <MainNav />
      
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Have questions about secondary glazing solutions? Need a quote for your property? 
            Our team is ready to help you find the perfect solution for your needs.
          </p>
        </div>
      </div>
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
