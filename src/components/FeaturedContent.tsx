import { Link } from "react-router-dom";

export const FeaturedContent = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Expert Guides & Resources
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
          Everything you need to know about secondary glazing for noise reduction
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Card 1: Understanding dB */}
          <Link 
            to="/blog/understanding-decibel-reduction"
            className="bg-card p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-border"
          >
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Understanding Decibel Reduction
            </h3>
            <p className="text-muted-foreground mb-4">
              Learn how dB measurements translate to real-world quietness and why 
              10dB reduction = 50% less noise.
            </p>
            <span className="text-primary font-semibold hover:underline">
              Read Guide →
            </span>
          </Link>

          {/* Card 2: Secondary vs Double */}
          <Link 
            to="/blog/secondary-vs-double-glazing"
            className="bg-card p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-border"
          >
            <div className="text-4xl mb-4">⚖️</div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Secondary vs Double Glazing
            </h3>
            <p className="text-muted-foreground mb-4">
              Side-by-side comparison showing why secondary glazing outperforms 
              replacement windows for noise.
            </p>
            <span className="text-primary font-semibold hover:underline">
              Compare Now →
            </span>
          </Link>

          {/* Card 3: Listed Buildings */}
          <Link 
            to="/blog/noise-reduction-listed-buildings"
            className="bg-card p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-border"
          >
            <div className="text-4xl mb-4">🏛️</div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Listed Building Solutions
            </h3>
            <p className="text-muted-foreground mb-4">
              The approved solution for heritage properties—preserve character while 
              achieving 80% noise reduction.
            </p>
            <span className="text-primary font-semibold hover:underline">
              Learn More →
            </span>
          </Link>

        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link 
            to="/benefits"
            className="text-lg text-primary hover:underline font-semibold"
          >
            View All Guides & Resources →
          </Link>
        </div>

      </div>
    </section>
  );
};
