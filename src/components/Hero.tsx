import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import { memo, useCallback } from "react";
import { useScrollToHash } from "@/hooks/useScrollToHash";
import { OptimizedImage } from "@/components/ui/optimized-image";

const HeroComponent = () => {
  const navigate = useNavigate();
  useScrollToHash();

  const handleContactClick = useCallback(() => {
    navigate('/contact');
  }, [navigate]);

  const handleQuoteClick = useCallback(() => {
    navigate('/quote-request');
  }, [navigate]);

  const handleCaseStudiesClick = useCallback(() => {
    navigate('/case-studies');
  }, [navigate]);

  return (
    <div className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center above-fold">
      {/* Background Image - optimized for mobile */}
      <div className="absolute inset-0">
        <picture>
          {/* Mobile-optimized image (smaller file size) */}
          <source 
            media="(max-width: 768px)" 
            srcSet="/lovable-uploads/675b8861-030a-48d3-adbe-f9706ec54947.png?w=768&q=75"
          />
          {/* Desktop image */}
          <OptimizedImage
            src="/lovable-uploads/675b8861-030a-48d3-adbe-f9706ec54947.png"
            alt="Heritage window with secondary glazing in traditional London home"
            className="w-full h-full object-cover"
            priority={true}
          />
        </picture>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">
            London's Specialist Secondary Glazing for Listed Buildings & Heritage Properties
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-3 md:mb-4">
            Enhance your home's comfort and value with our expert{" "}
            <Link to="/residential" className="underline hover:text-white">secondary glazing services</Link>. 
            Reduce <Link to="/noise-reduction-secondary-glazing" className="underline hover:text-white">noise by up to 80%</Link>, 
            improve <Link to="/thermal-insulation-secondary-glazing" className="underline hover:text-white">thermal insulation by 65%</Link>, 
            and maintain your{" "}
            <Link to="/listed-buildings-secondary-glazing" className="underline hover:text-white">listed building</Link> or{" "}
            <Link to="/conservation-areas-secondary-glazing" className="underline hover:text-white">conservation area</Link> property's character.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto">
            Serving Westminster, Kensington & Chelsea, Camden, Islington, and all London boroughs. 
            Free surveys, 10-year guarantees, and prices from £350 per window. Call{" "}
            <a href="tel:02070601572" className="underline hover:text-white font-semibold">020 7060 1572</a> for a free quote.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Button 
              size="lg" 
              onClick={handleQuoteClick}
              className="w-full sm:w-auto min-h-[48px]"
            >
              Get Free Quote
            </Button>
            <Button 
              size="lg" 
              onClick={handleContactClick}
              className="w-full sm:w-auto min-h-[48px]"
            >
              Contact Us
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={handleCaseStudiesClick}
              className="w-full sm:w-auto min-h-[48px]"
            >
              📊 See Proof
            </Button>
          </div>
          {/* Quick navigation links - hidden on very small screens */}
          <nav className="mt-6 md:mt-8 hidden sm:flex flex-wrap justify-center gap-x-3 md:gap-x-4 gap-y-2 text-xs sm:text-sm text-white/80" aria-label="Quick links">
            <Link to="/victorian-windows-secondary-glazing" className="hover:text-white hover:underline py-1">Victorian Windows</Link>
            <span className="text-white/40 hidden sm:inline">•</span>
            <Link to="/georgian-windows-secondary-glazing" className="hover:text-white hover:underline py-1">Georgian Windows</Link>
            <span className="text-white/40 hidden md:inline">•</span>
            <Link to="/edwardian-property-secondary-glazing" className="hover:text-white hover:underline py-1 hidden md:inline">Edwardian Properties</Link>
            <span className="text-white/40 hidden md:inline">•</span>
            <Link to="/sash-window-secondary-glazing" className="hover:text-white hover:underline py-1">Sash Windows</Link>
            <span className="text-white/40 hidden sm:inline">•</span>
            <Link to="/commercial" className="hover:text-white hover:underline py-1">Commercial</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

// Memoize to prevent unnecessary re-renders
export const Hero = memo(HeroComponent);
