import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const FixedCTA = () => {
  return (
    <section className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Property?</h2>
      <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
        Contact us for a free consultation to assess your specific needs and discover potential savings with fixed secondary glazing.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg" variant="secondary">
          <Link to="/quote">Get Free Quote</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </section>
  );
};
