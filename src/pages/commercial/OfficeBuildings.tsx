
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import OfficeSEO from "@/components/commercial/office/OfficeSEO";
import OfficeHero from "@/components/commercial/office/OfficeHero";
import BenefitsGrid from "@/components/commercial/office/BenefitsGrid";
import TechnicalSpecs from "@/components/commercial/office/TechnicalSpecs";
import OfficeCTA from "@/components/commercial/office/OfficeCTA";

const OfficeBuildings = () => {
  return (
    <div className="min-h-screen bg-background">
      <OfficeSEO />
      <MainNav />
      <div className="container mx-auto px-4 py-8">
        <BreadcrumbNav />
        <OfficeHero />
        <BenefitsGrid />
        <TechnicalSpecs />
        <OfficeCTA />
      </div>
      <Footer />
    </div>
  );
};

export default OfficeBuildings;
