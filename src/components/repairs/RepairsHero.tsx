
import { ArrowRight, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";

const RepairsHero = () => {
  return (
    <section className="mb-16">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Expert Secondary Glazing Repair Services London
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            When your secondary glazing starts playing up, you don't always need a complete replacement. 
            Our expert repair services across London cover everything from spiral balance failures to 
            cracked glass, handling all major brands including Selectaglaze, Anglian, Storm, and custom installations.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>Same-day emergency service</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">£85-£280</span>
              <span>per repair</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link to="/quote-request">
                Request Repair Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:02070601572">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <OptimizedImage
            src="https://cdn.marblism.com/4dXO_4Rof-e.webp"
            alt="Secondary glazing repair technician fixing a vertical sliding window unit"
            className="rounded-lg shadow-xl w-full object-cover max-h-[400px]"
            aspectRatio={4/3}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default RepairsHero;
