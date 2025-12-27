import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { RetailHero } from "@/components/commercial/retail/RetailHero";
import { WhyChallenges } from "@/components/commercial/retail/WhyChallenges";
import { CriticalBenefits } from "@/components/commercial/retail/CriticalBenefits";
import { RetailTypes } from "@/components/commercial/retail/RetailTypes";
import { TechnicalSolutions } from "@/components/commercial/retail/TechnicalSolutions";
import { EnergySavings } from "@/components/commercial/retail/EnergySavings";
import { CaseStudies } from "@/components/commercial/retail/CaseStudies";
import { InvestmentROI } from "@/components/commercial/retail/InvestmentROI";
import { WhyChooseUs } from "@/components/commercial/retail/WhyChooseUs";
import { ServiceAreas } from "@/components/commercial/retail/ServiceAreas";
import { RetailFAQ } from "@/components/commercial/retail/RetailFAQ";
import { RetailCTA } from "@/components/commercial/retail/RetailCTA";
import { RetailSEO } from "@/components/commercial/retail/RetailSEO";

const RetailSpaces = () => {
  return (
    <div className="min-h-screen bg-background">
      <RetailSEO />
      <MainNav />
      <main>
        <RetailHero />
        <WhyChallenges />
        <CriticalBenefits />
        <RetailTypes />
        <TechnicalSolutions />
        <EnergySavings />
        <CaseStudies />
        <InvestmentROI />
        <WhyChooseUs />
        <ServiceAreas />
        <RetailFAQ />
        <RetailCTA />
      </main>
      <Footer />
    </div>
  );
};

export default RetailSpaces;
