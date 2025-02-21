
import { MainNav } from "@/components/MainNav";
import NoiseReductionCalculator from "@/components/NoiseReductionCalculator";

const NoiseReduction = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Noise Reduction Secondary Glazing</h1>
        
        <div className="prose max-w-none mb-12">
          <p className="text-lg mb-6">
            Our noise reduction secondary glazing solutions offer exceptional sound insulation using various glass thicknesses 
            and configurations to meet your specific needs. From residential properties to commercial buildings, we provide 
            tailored solutions to combat noise pollution effectively.
          </p>
        </div>

        <div className="mb-12" id="calculator">
          <NoiseReductionCalculator />
        </div>
      </div>
    </div>
  );
};

export default NoiseReduction;
