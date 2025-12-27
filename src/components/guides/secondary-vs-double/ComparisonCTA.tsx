import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function ComparisonCTA() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Ready to Explore Secondary Glazing for Your Listed Building?
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Contact our heritage specialists for a free consultation and quote tailored to your property's 
          specific requirements and conservation status.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary text-white shadow-lg">
            <Link to="/quote">Get Free Consultation</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
            <Link to="/listed-buildings-secondary-glazing">Learn About Listed Buildings</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
