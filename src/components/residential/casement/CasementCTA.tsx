import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const CasementCTA = () => {
  return (
    <section className="mb-8">
      <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Casement Windows?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Ready to transform your draughty, noisy casement windows into high-performance energy savers? <strong>Get your free home assessment today</strong> and discover exactly how much you could save with casement window secondary glazing tailored to your London property.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-lg">
            <Link to="/quote-request">
              <FileText className="mr-2 h-5 w-5" />
              Get Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg">
            <Link to="/contact">
              <Phone className="mr-2 h-5 w-5" />
              Speak to a Specialist
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CasementCTA;
