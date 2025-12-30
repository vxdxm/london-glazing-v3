import { Link } from "react-router-dom";
import { memo } from "react";

const FeaturedContentComponent = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/30 below-fold">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground mb-3 md:mb-4">
          Expert Guides & Resources
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center mb-8 md:mb-10 max-w-3xl mx-auto">
          Everything you need to know about secondary glazing for noise reduction
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          
          {/* Card 1: Understanding dB */}
          <Link 
            to="/blog/understanding-decibel-reduction"
            className="bg-card p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-border min-h-[44px]"
          >
            <div className="text-3xl md:text-4xl mb-3 md:mb-4" aria-hidden="true">📊</div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
              Understanding Decibel Reduction
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
              Learn how dB measurements translate to real-world quietness and why 
              10dB reduction = 50% less noise.
            </p>
            <span className="text-primary font-semibold hover:underline text-sm md:text-base">
              Read Guide →
            </span>
          </Link>

          {/* Card 2: Secondary vs Double */}
          <Link 
            to="/blog/secondary-vs-double-glazing"
            className="bg-card p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-border min-h-[44px]"
          >
            <div className="text-3xl md:text-4xl mb-3 md:mb-4" aria-hidden="true">⚖️</div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
              Secondary vs Double Glazing
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
              Side-by-side comparison showing why secondary glazing outperforms 
              replacement windows for noise.
            </p>
            <span className="text-primary font-semibold hover:underline text-sm md:text-base">
              Compare Now →
            </span>
          </Link>

          {/* Card 3: Listed Buildings */}
          <Link 
            to="/blog/noise-reduction-listed-buildings"
            className="bg-card p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-border sm:col-span-2 md:col-span-1 min-h-[44px]"
          >
            <div className="text-3xl md:text-4xl mb-3 md:mb-4" aria-hidden="true">🏛️</div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
              Listed Building Solutions
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
              The approved solution for heritage properties—preserve character while 
              achieving 80% noise reduction.
            </p>
            <span className="text-primary font-semibold hover:underline text-sm md:text-base">
              Learn More →
            </span>
          </Link>

        </div>

        {/* View All Link */}
        <div className="text-center mt-8 md:mt-10">
          <Link 
            to="/benefits"
            className="text-base md:text-lg text-primary hover:underline font-semibold inline-block py-2 min-h-[44px]"
          >
            View All Guides & Resources →
          </Link>
        </div>

      </div>
    </section>
  );
};

export const FeaturedContent = memo(FeaturedContentComponent);