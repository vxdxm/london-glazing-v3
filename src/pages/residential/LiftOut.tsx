import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { LiftOutIcon } from "@/components/icons/GlazingTypeIcons";
import LiftOutSEO from "@/components/residential/liftout/LiftOutSEO";
import LiftOutHero from "@/components/residential/liftout/LiftOutHero";
import WhatIsLiftOut from "@/components/residential/liftout/WhatIsLiftOut";
import WhenToChoose from "@/components/residential/liftout/WhenToChoose";
import CostComparison from "@/components/residential/liftout/CostComparison";
import SeasonalStrategy from "@/components/residential/liftout/SeasonalStrategy";
import PerformanceSection from "@/components/residential/liftout/PerformanceSection";
import ComparisonTable from "@/components/residential/liftout/ComparisonTable";
import IdealApplications from "@/components/residential/liftout/IdealApplications";
import LiftOutInstallation from "@/components/residential/liftout/LiftOutInstallation";
import TradeOffs from "@/components/residential/liftout/TradeOffs";
import LiftOutCaseStudies from "@/components/residential/liftout/LiftOutCaseStudies";
import LiftOutFAQ from "@/components/residential/liftout/LiftOutFAQ";
import LiftOutCTA from "@/components/residential/liftout/LiftOutCTA";

const LiftOut = () => {
  return (
    <div className="min-h-screen bg-background">
      <LiftOutSEO />
      <MainNav />
      
      <div className="container mx-auto px-4 py-16">
        <BreadcrumbNav />
        
        <div className="flex items-center gap-4 mb-8">
          <LiftOutIcon size={56} className="text-primary" />
          <h1 className="text-4xl font-bold">Lift-Out Secondary Glazing</h1>
        </div>
        
        <article className="prose lg:prose-xl max-w-none prose-headings:font-bold prose-p:text-foreground/80">
          <LiftOutHero />
          <WhatIsLiftOut />
          <WhenToChoose />
          <CostComparison />
          <SeasonalStrategy />
          <PerformanceSection />
          <ComparisonTable />
          <IdealApplications />
          <LiftOutInstallation />
          <TradeOffs />
          <LiftOutCaseStudies />
          <LiftOutFAQ />
          <LiftOutCTA />
        </article>
      </div>
      
      <Footer />
    </div>
  );
};

export default LiftOut;
