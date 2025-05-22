
import React from "react";
import { MainNav } from "@/components/MainNav";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Contact Us | Secondary Glazing Specialist</title>
        <meta name="description" content="Get in touch with Secondary Glazing Specialist for a free consultation or quote on your secondary glazing needs." />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/contact" />
      </Helmet>
      
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
