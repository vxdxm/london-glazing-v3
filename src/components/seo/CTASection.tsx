import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, FileText, MessageCircle } from "lucide-react";

interface CTASectionProps {
  variant?: "default" | "compact" | "hero";
  title?: string;
  description?: string;
}

const CTASection = ({ 
  variant = "default",
  title = "Ready to Get Started?",
  description = "Contact our expert team for a free consultation and quote."
}: CTASectionProps) => {
  if (variant === "compact") {
    return (
      <div className="flex flex-wrap gap-3">
        <Link to="/quote-request">
          <Button className="gap-2">
            <FileText className="w-4 h-4" />
            Get a Free Quote
          </Button>
        </Link>
        <Link to="/contact">
          <Button variant="outline" className="gap-2">
            <MessageCircle className="w-4 h-4" />
            Contact Us
          </Button>
        </Link>
      </div>
    );
  }

  if (variant === "hero") {
    return (
      <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="mb-6 text-primary-foreground/90 max-w-2xl mx-auto">{description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/quote-request">
            <Button variant="secondary" size="lg" className="gap-2">
              <FileText className="w-5 h-5" />
              Request a Quote
            </Button>
          </Link>
          <a href="tel:02070601572">
            <Button variant="outline" size="lg" className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Phone className="w-5 h-5" />
              Call 0207 060 1572
            </Button>
          </a>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <MessageCircle className="w-5 h-5" />
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-secondary rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex flex-wrap gap-3">
        <Link to="/quote-request">
          <Button className="gap-2">
            <FileText className="w-4 h-4" />
            Get a Free Quote
          </Button>
        </Link>
        <a href="tel:02070601572">
          <Button variant="outline" className="gap-2">
            <Phone className="w-4 h-4" />
            Call Us
          </Button>
        </a>
        <Link to="/contact">
          <Button variant="outline" className="gap-2">
            <MessageCircle className="w-4 h-4" />
            Contact
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CTASection;
