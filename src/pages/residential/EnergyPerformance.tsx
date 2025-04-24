
import { Helmet } from "react-helmet";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { EnergyPerformanceIntro } from "@/components/residential/energy/EnergyPerformanceIntro";
import { EnergyPerformanceBenefits } from "@/components/residential/energy/EnergyPerformanceBenefits";
import { EnergyPerformanceCalculator } from "@/components/residential/energy/EnergyPerformanceCalculator";

const EnergyPerformance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Energy Performance & Secondary Glazing | Improve Your Home's Efficiency</title>
        <meta name="description" content="Discover how secondary glazing can improve your home's energy performance. Calculate potential savings and explore energy-efficient solutions." />
      </Helmet>
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Energy Performance & Secondary Glazing</h1>
        <EnergyPerformanceIntro />
        <EnergyPerformanceBenefits />
        <EnergyPerformanceCalculator />
      </div>
      <Footer />
    </div>
  );
};

export default EnergyPerformance;
