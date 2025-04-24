
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const SingleDoubleGlazedIntro = () => {
  return (
    <div>
      <div className="mb-12 w-full max-w-4xl mx-auto">
        <AspectRatio ratio={16 / 9} className="bg-muted">
          <img 
            src="/lovable-uploads/bb1e765e-3b82-4d6d-a206-31bdf9c0af0d.png"
            alt="Single and double glazed secondary window comparison"
            className="object-cover w-full h-full rounded-lg"
          />
        </AspectRatio>
      </div>
      <div className="prose max-w-none mb-12">
        <p className="text-lg text-gray-700">
          Understanding the difference between single and double glazed secondary windows is crucial for making 
          the right choice for your property. While both options offer improved insulation and noise reduction, 
          they each have unique benefits and applications. Explore our comprehensive guide to discover which 
          solution best suits your needs.
        </p>
      </div>
    </div>
  );
};
