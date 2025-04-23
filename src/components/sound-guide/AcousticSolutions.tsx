
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const AcousticSolutions = () => {
  return (
    <div className="bg-secondary/30 p-4 sm:p-8 rounded-lg mb-12">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Acoustic Solutions for Your Property</h2>
      
      <div className="mb-6 sm:mb-8 rounded-lg overflow-hidden">
        <AspectRatio ratio={21/9}>
          <img 
            src="/lovable-uploads/56e6bf65-3f25-4fcd-b697-e286aa479776.jpg" 
            alt="Acoustic glazing solution in a modern apartment" 
            className="object-cover w-full h-full"
          />
        </AspectRatio>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Recommended Acoustic Solutions</h3>
          <ul className="list-disc list-inside space-y-3">
            <li className="text-gray-700">
              <span className="font-medium">For urban homes near busy roads:</span> 
              <Link to="/specialized/acoustic-secondary-glazing-windows" className="text-primary hover:underline ml-1">
                Acoustic Secondary Glazing Windows
              </Link>
            </li>
            <li className="text-gray-700">
              <span className="font-medium">For properties near railways or flight paths:</span> 
              <Link to="/specialized/acoustic-glazing" className="text-primary hover:underline ml-1">
                Premium Acoustic Glazing
              </Link> with 12.8mm acoustic laminated glass
            </li>
            <li className="text-gray-700">
              <span className="font-medium">For listed buildings with noise issues:</span> 
              <Link to="/commercial/listed-buildings" className="text-primary hover:underline ml-1">
                Heritage Solutions
              </Link> with acoustic enhancements
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Next Steps</h3>
          <p className="text-gray-700 mb-3 sm:mb-4">
            Understanding your specific noise challenges is the first step to creating a quieter environment. Our acoustic specialists can:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Conduct a professional sound assessment at your property</li>
            <li>Recommend the optimal acoustic solution based on your noise issues</li>
            <li>Provide a detailed quotation for installation</li>
            <li>Install high-performance acoustic secondary glazing with minimal disruption</li>
          </ul>
          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link to="/quote-request" className="w-full sm:w-auto bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-primary/90 text-center">
              Request Free Quote
            </Link>
            <Link to="/specialized/acoustic-glazing" className="w-full sm:w-auto border border-primary text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-primary/10 text-center">
              Explore Acoustic Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcousticSolutions;
