import { AspectRatio } from "@/components/ui/aspect-ratio";
export const SingleDoubleGlazedIntro = () => {
  return <div>
      <div className="mb-12 w-full max-w-4xl mx-auto">
        <AspectRatio ratio={16 / 9} className="bg-muted">
          <img alt="Single and double glazed secondary window comparison" className="object-cover w-full h-full rounded-lg" src="/lovable-uploads/49953857-31a7-4076-924c-61a726839d85.jpg" />
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
    </div>;
};