
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield } from "lucide-react";

const RepairsCTA = () => {
  return (
    <section className="bg-primary/5 p-8 md:p-12 rounded-lg border border-primary/20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Get Your Secondary Glazing Working Again</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Don't let faulty secondary glazing compromise your comfort, security, or energy efficiency. 
          Our expert repair services across London provide cost-effective solutions with transparent pricing 
          and reliable warranties.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button size="lg" asChild>
            <Link to="/quote-request">
              Request Repair Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="tel:02070601572">
              <Phone className="mr-2 h-4 w-4" />
              Call: 0207 060 1572
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            <span>12-month parts warranty</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            <span>Same-day emergency available</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            <span>All major brands serviced</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepairsCTA;
