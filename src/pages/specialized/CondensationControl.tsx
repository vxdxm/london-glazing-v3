
import React, { useEffect } from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GetQuoteButton from "@/components/GetQuoteButton";
import ContactUsButton from "@/components/ContactUsButton";
import { CondensationControlSEO } from "@/components/specialized/condensation/CondensationControlSEO";
import { CondensationHeader } from "@/components/specialized/condensation/CondensationHeader";
import { CondensationInfoCards } from "@/components/specialized/condensation/CondensationInfoCards";
import { CondensationExplanationCards } from "@/components/specialized/condensation/CondensationExplanationCards";
import { VentilationOptions } from "@/components/specialized/condensation/VentilationOptions";

const CondensationControl = () => {
  // Add logging for indexing
  useEffect(() => {
    console.log("Condensation Control page loaded for indexing");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <CondensationControlSEO />
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <CondensationHeader />
        <CondensationInfoCards />
        <CondensationExplanationCards />
        <VentilationOptions />
      </div>
      <WhatsAppButton />
      <GetQuoteButton />
      <ContactUsButton />
      <Footer />
    </div>
  );
};

export default CondensationControl;
