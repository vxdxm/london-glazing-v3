
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useScrollToHash } from "@/hooks/useScrollToHash";
import { OptimizedImage } from "@/components/ui/optimized-image"; 

export const Hero = () => {
  const navigate = useNavigate();
  useScrollToHash(); // Use the scroll to hash hook

  const handleContactClick = () => {
    // Navigate to dedicated contact page
    navigate('/contact');
  };

  return (
    <div className="relative min-h-[600px] flex items-center justify-center bg-secondary">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-accent mb-6 animate-fade-up">
            London's Premium Secondary Glazing Specialist
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-up">
            Enhance your home's comfort and value with our expert secondary glazing services. 
            Reduce noise, improve insulation, and maintain your property's character.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-up">
            <Button 
              size="lg" 
              onClick={() => navigate("/quote-request")}
            >
              Get Free Quote
            </Button>
            <Button 
              size="lg" 
              onClick={handleContactClick}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
