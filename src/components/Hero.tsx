
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
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
            London's Specialist Secondary Glazing for Listed Buildings & Heritage Properties
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-4 animate-fade-up">
            Enhance your home's comfort and value with our expert{" "}
            <Link to="/residential" className="underline hover:text-white">secondary glazing services</Link>. 
            Reduce <Link to="/noise-reduction-secondary-glazing" className="underline hover:text-white">noise by up to 80%</Link>, 
            improve <Link to="/thermal-insulation-secondary-glazing" className="underline hover:text-white">thermal insulation by 65%</Link>, 
            and maintain your{" "}
            <Link to="/listed-buildings-secondary-glazing" className="underline hover:text-white">listed building</Link> or{" "}
            <Link to="/conservation-areas-secondary-glazing" className="underline hover:text-white">conservation area</Link> property's character.
          </p>
          <p className="text-base md:text-lg text-white/80 mb-8 animate-fade-up max-w-2xl mx-auto">
            Serving Westminster, Kensington & Chelsea, Camden, Islington, and all London boroughs. 
            Free surveys, 10-year guarantees, and prices from £350 per window. Call{" "}
            <a href="tel:02070601572" className="underline hover:text-white font-semibold">020 7060 1572</a> for a free quote.
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
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate("/case-studies")}
            >
              📊 See Proof
            </Button>
          </div>
          {/* Quick navigation links */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-white/80 animate-fade-up">
            <Link to="/victorian-windows-secondary-glazing" className="hover:text-white hover:underline">Victorian Windows</Link>
            <span className="text-white/40">•</span>
            <Link to="/georgian-windows-secondary-glazing" className="hover:text-white hover:underline">Georgian Windows</Link>
            <span className="text-white/40">•</span>
            <Link to="/edwardian-property-secondary-glazing" className="hover:text-white hover:underline">Edwardian Properties</Link>
            <span className="text-white/40">•</span>
            <Link to="/sash-window-secondary-glazing" className="hover:text-white hover:underline">Sash Windows</Link>
            <span className="text-white/40">•</span>
            <Link to="/commercial" className="hover:text-white hover:underline">Commercial</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
