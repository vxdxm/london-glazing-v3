
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { EnergyPerformanceIntro } from "@/components/residential/energy/EnergyPerformanceIntro";
import { EnergyPerformanceBenefits } from "@/components/residential/energy/EnergyPerformanceBenefits";
import { EnergyPerformanceCalculator } from "@/components/residential/energy/EnergyPerformanceCalculator";
import { EnergyPerformanceSEO } from "@/components/residential/energy/EnergyPerformanceSEO";
import { EnergyPerformanceHero } from "@/components/residential/energy/EnergyPerformanceHero";
import { EnergyPerformanceArticle } from "@/components/residential/energy/EnergyPerformanceArticle";
import { EnergyPerformanceFAQ } from "@/components/residential/energy/EnergyPerformanceFAQ";

const EnergyPerformance = () => {
  return (
    <div className="min-h-screen bg-background">
      <EnergyPerformanceSEO />
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <EnergyPerformanceHero />
        <EnergyPerformanceIntro />
        <EnergyPerformanceBenefits />
        <EnergyPerformanceCalculator />
        <EnergyPerformanceArticle />
        <EnergyPerformanceFAQ />
      </div>
      <Footer />
    </div>
  );
};

export default EnergyPerformance;
