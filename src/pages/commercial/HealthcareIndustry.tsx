import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { HealthcareHero } from "@/components/commercial/healthcare/HealthcareHero";
import { WhyNeedSection } from "@/components/commercial/healthcare/WhyNeedSection";
import { PatientCareBenefits } from "@/components/commercial/healthcare/PatientCareBenefits";
import { RegulatoryCompliance } from "@/components/commercial/healthcare/RegulatoryCompliance";
import { KeyBenefitsGrid } from "@/components/commercial/healthcare/KeyBenefitsGrid";
import { FacilityTypes } from "@/components/commercial/healthcare/FacilityTypes";
import { SpaceTypes } from "@/components/commercial/healthcare/SpaceTypes";
import { TechnicalSpecs } from "@/components/commercial/healthcare/TechnicalSpecs";
import { InstallationProcess } from "@/components/commercial/healthcare/InstallationProcess";
import { CostROI } from "@/components/commercial/healthcare/CostROI";
import { CaseStudies } from "@/components/commercial/healthcare/CaseStudies";
import { WhyChooseUs } from "@/components/commercial/healthcare/WhyChooseUs";
import { ServiceAreas } from "@/components/commercial/healthcare/ServiceAreas";
import { HealthcareFAQ } from "@/components/commercial/healthcare/HealthcareFAQ";
import { HealthcareCTA } from "@/components/commercial/healthcare/HealthcareCTA";
import { HealthcareSEO } from "@/components/commercial/healthcare/HealthcareSEO";

const HealthcareIndustry = () => {
  return (
    <div className="min-h-screen bg-background">
      <HealthcareSEO />
      <MainNav />
      <main>
        <HealthcareHero />
        <WhyNeedSection />
        <PatientCareBenefits />
        <RegulatoryCompliance />
        <KeyBenefitsGrid />
        <FacilityTypes />
        <SpaceTypes />
        <TechnicalSpecs />
        <InstallationProcess />
        <CostROI />
        <CaseStudies />
        <WhyChooseUs />
        <ServiceAreas />
        <HealthcareFAQ />
        <HealthcareCTA />
      </main>
      <Footer />
    </div>
  );
};

export default HealthcareIndustry;
