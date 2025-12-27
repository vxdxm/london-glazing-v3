import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, FileText, ArrowRight } from "lucide-react";

const LiftOutCTA = () => {
  return (
    <section className="mb-12">
      <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Making the Right Choice</h2>
        
        <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
          Lift-out secondary glazing excels when you want seasonal flexibility, live in a rental property, need to trial before permanent commitment, or simply prefer having the choice of when secondary glazing is in place.
        </p>
        
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          The seasonal handling requirement isn't a drawback — it's a feature. You get <strong>modern insulation when London's cold demands it</strong>, and traditional character when mild summers make natural ventilation irresistible.
        </p>

        <div className="bg-background/80 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
          <p className="text-lg font-medium">
            Ready to explore lift-out secondary glazing for your London property?
          </p>
          <p className="text-muted-foreground">
            Contact us for a free consultation where we'll assess your seasonal needs, storage options, and help you determine whether lift-out offers the perfect balance of flexibility and performance for your lifestyle.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="gap-2">
            <Link to="/quote-request">
              <FileText className="h-5 w-5" />
              Get Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="gap-2">
            <a href="tel:+442034888227">
              <Phone className="h-5 w-5" />
              Call: 020 3488 8227
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LiftOutCTA;
