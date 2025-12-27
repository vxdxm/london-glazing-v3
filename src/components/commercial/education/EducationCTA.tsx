import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import { Phone, Mail, ArrowRight } from "lucide-react";

export const EducationCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Educational Environment Today
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Contact us for a comprehensive consultation that addresses your specific learning environment challenges, 
            budget constraints, and heritage requirements. Together, we will create optimal learning spaces where students thrive.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate("/quote-request")}
              className="gap-2"
            >
              Get Free School Assessment
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => navigate("/contact")}
            >
              Contact Our Education Team
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm mb-8">
            <a 
              href="tel:02070601572" 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity justify-center"
            >
              <Phone className="w-4 h-4" />
              0207 060 1572
            </a>
            <a 
              href="mailto:info@secondaryglazingspecialist.co.uk" 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity justify-center"
            >
              <Mail className="w-4 h-4" />
              info@secondaryglazingspecialist.co.uk
            </a>
          </div>

          <div className="text-sm opacity-80">
            <p>Also serving other commercial sectors:</p>
            <p className="mt-2">
              <Link to="/commercial/office-buildings" className="hover:underline">Offices</Link> |{' '}
              <Link to="/commercial/hospitality-sector" className="hover:underline">Hotels & Restaurants</Link> |{' '}
              <Link to="/commercial/healthcare-industry" className="hover:underline">Healthcare Facilities</Link> |{' '}
              <Link to="/commercial/retail-spaces" className="hover:underline">Retail Spaces</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
