
import React, { useEffect } from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import BayWindowsSEO from "@/components/residential/bay/BayWindowsSEO";
import BayWindowHeader from "@/components/residential/bay/BayWindowHeader";
import BayWindowStyles from "@/components/residential/bay/BayWindowStyles";
import BayWindowFeatures from "@/components/residential/bay/BayWindowFeatures";
import BayWindowCTA from "@/components/residential/bay/BayWindowCTA";
import GlassOptions from "@/components/residential/GlassOptions";

const BayWindows = () => {
  // Add logging for debugging indexing issues
  useEffect(() => {
    console.log("Bay Windows page loaded");
  }, []);
  
  return (
    <div className="min-h-screen bg-background">
      <BayWindowsSEO />
      <MainNav />
      <div className="container mx-auto px-4 py-8">
        <BreadcrumbNav />
        <BayWindowHeader />
        <BayWindowStyles />
        <BayWindowFeatures />
        <GlassOptions />
        <BayWindowCTA />
      </div>
      <Footer />
    </div>
  );
};

export default BayWindows;
