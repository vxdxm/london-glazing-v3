import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[600px] flex items-center justify-center bg-secondary">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/bf1bde82-2bff-48bc-9ccb-82ac28cacb6a.png')] bg-contain bg-center bg-no-repeat opacity-20"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-accent mb-6 animate-fade-up">
            London's Premium Secondary Glazing Specialist
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-up">
            Enhance your home's comfort and value with our expert secondary glazing services. 
            Reduce noise, improve insulation, and maintain your property's character.
          </p>
          <Button 
            size="lg" 
            className="animate-fade-up"
            onClick={() => navigate("/quote-request")}
          >
            Get Free Quote
          </Button>
        </div>
      </div>
    </div>
  );
};