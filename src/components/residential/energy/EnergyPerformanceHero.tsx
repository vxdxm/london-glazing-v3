
import { OptimizedImage } from "@/components/ui/optimized-image";

export const EnergyPerformanceHero = () => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-8">Energy Performance & Secondary Glazing</h2>
      <div className="w-full h-[500px] overflow-hidden rounded-lg">
        <OptimizedImage 
          src="/lovable-uploads/218776ee-eff4-4f63-8d88-27dd86763e28.png" 
          alt="Energy efficiency and secondary glazing technology" 
          className="w-full h-full object-cover object-center"
          aspectRatio={16/9}
          priority={true}
        />
      </div>
    </div>
  );
};
