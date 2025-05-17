
import React, { useEffect } from "react";
import { MainNav } from "@/components/MainNav";
import { PageHeader } from "@/components/specialized/PageHeader";
import { ServiceCards } from "@/components/specialized/ServiceCards";
import WhatsAppButton from "@/components/WhatsAppButton";
import GetQuoteButton from "@/components/GetQuoteButton";
import ContactUsButton from "@/components/ContactUsButton";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Footer } from "@/components/Footer";
import { DynamicSEO } from "@/components/DynamicSEO";
import { PAGE_CONFIGS } from "@/constants/pageConfigs";

const SpecializedServices = () => {
  // Add logging for indexing
  useEffect(() => {
    console.log("Specialized Services page loaded for indexing");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <DynamicSEO {...PAGE_CONFIGS.specialized} />
      <MainNav />
      <main id="main-content" className="container mx-auto px-4 py-16">
        <BreadcrumbNav />
        <PageHeader />
        <ServiceCards />
      </main>
      <WhatsAppButton />
      <GetQuoteButton />
      <ContactUsButton />
      <Footer />
    </div>
  );
};

export default SpecializedServices;
