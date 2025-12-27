import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Phone, Mail, ArrowRight } from "lucide-react";

export const HealthcareCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Healthcare Facility?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Enhance your patients' environment while reducing operational costs. 
            Our healthcare specialists provide free consultations tailored to your facility's specific requirements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate("/quote-request")}
              className="gap-2"
            >
              Get Free Healthcare Assessment
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => navigate("/contact")}
            >
              Contact Our Team
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
              href="mailto:info@secondaryglazingspecialist.co.uk" 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity justify-center"
            >
              <Mail className="w-4 h-4" />
              info@secondaryglazingspecialist.co.uk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
