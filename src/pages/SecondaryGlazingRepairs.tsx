
import { MainNav } from "@/components/MainNav";
import { Helmet } from "react-helmet";
import RepairsHero from "@/components/repairs/RepairsHero";
import CommonIssues from "@/components/repairs/CommonIssues";
import SpiralBalanceSection from "@/components/repairs/SpiralBalanceSection";
import AdditionalServices from "@/components/repairs/AdditionalServices";
import RepairsCTA from "@/components/repairs/RepairsCTA";
import RepairsFAQ from "@/components/repairs/RepairsFAQ";

const SecondaryGlazingRepairs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Secondary Glazing Repairs | Spiral Balances for Vertical Sliding Units</title>
        <meta name="description" content="Expert secondary glazing repair services specializing in spiral balances for vertical sliding units. Professional repairs to extend the lifespan of your glazing." />
      </Helmet>
      <MainNav />
      <div className="container mx-auto px-4 py-12 md:py-16">
        <RepairsHero />
        <CommonIssues />
        <SpiralBalanceSection />
        <AdditionalServices />
        <RepairsFAQ />
        <RepairsCTA />
      </div>
    </div>
  );
};

export default SecondaryGlazingRepairs;
