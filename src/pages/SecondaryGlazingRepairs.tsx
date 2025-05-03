
import React from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import RepairsHero from "@/components/repairs/RepairsHero";
import SpiralBalanceSection from "@/components/repairs/SpiralBalanceSection";
import CommonIssues from "@/components/repairs/CommonIssues";
import AdditionalServices from "@/components/repairs/AdditionalServices";
import RepairsFAQ from "@/components/repairs/RepairsFAQ";
import RepairsCTA from "@/components/repairs/RepairsCTA";
import RepairsSEO from "@/components/repairs/RepairsSEO";
import { useScrollToHash } from "@/hooks/useScrollToHash";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SecondaryGlazingRepairs = () => {
  useScrollToHash();
  
  return (
    <div className="min-h-screen bg-background">
      <RepairsSEO />
      <MainNav />
      
      <div className="container mx-auto px-4 py-12">
        <BreadcrumbNav />

        <RepairsHero />

        <div id="spiral-balances">
          <SpiralBalanceSection />
        </div>
        
        <CommonIssues />
        <AdditionalServices />
        <RepairsFAQ />
        <RepairsCTA />
      </div>
      
      <Footer />
    </div>
  );
};

export default SecondaryGlazingRepairs;
