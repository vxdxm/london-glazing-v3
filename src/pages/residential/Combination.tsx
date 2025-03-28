
import { MainNav } from "@/components/MainNav";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Footer } from "@/components/Footer";
import CombinationSEO from "@/components/residential/combination/CombinationSEO";
import CombinationIntro from "@/components/residential/combination/CombinationIntro";
import AvailableCombinations from "@/components/residential/combination/AvailableCombinations";
import TechnicalSpecs from "@/components/residential/combination/TechnicalSpecs";
import CombinationCTA from "@/components/residential/combination/CombinationCTA";
import GlassOptions from "@/components/residential/GlassOptions";

const Combination = () => {
  return (
    <div className="min-h-screen bg-background">
      <CombinationSEO />
      <MainNav />
      <div className="container mx-auto px-4 py-8">
        <BreadcrumbNav />
        <CombinationIntro />
        <AvailableCombinations />
        <TechnicalSpecs />
        <GlassOptions />
        <CombinationCTA />
      </div>
      <Footer />
    </div>
  );
};

export default Combination;
