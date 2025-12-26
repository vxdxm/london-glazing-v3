
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
    <div className="relative min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <OptimizedImage
          src="/lovable-uploads/675b8861-030a-48d3-adbe-f9706ec54947.png"
          alt="Heritage window with secondary glazing in traditional London home"
          className="w-full h-full object-cover"
          priority={true}
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-up">
            Secondary Glazing Specialist - Listed Buildings & Conservation Areas
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-up">
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
