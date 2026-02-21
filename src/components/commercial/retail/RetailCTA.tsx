import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Phone, Mail, ArrowRight } from "lucide-react";

export const RetailCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Retail Space?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Discover how secondary glazing can boost your bottom line while preserving your shop's heritage character. 
            Free consultation and assessment for all London retail businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate("/quote-request")}
              className="gap-2"
            >
              Get Free Retail Assessment
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => navigate("/contact")}
            >
              Contact Our Retail Team
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm">
            <a 
              href="tel:02012345678" 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity justify-center"
            >
              <Phone className="w-4 h-4" />
              020 1234 5678
            </a>
            <a 
              href="mailto:info@secondaryglazingspecialist.com" 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity justify-center"
            >
              <Mail className="w-4 h-4" />
              info@secondaryglazingspecialist.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
