
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import { Phone, Mail, Calendar, ArrowRight } from "lucide-react";

const OfficeCTA = () => {
  const navigate = useNavigate();
  
  return (
    <div className="my-12">
      <div className="text-center py-12 bg-primary/5 border border-primary/20 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Office Environment?</h2>
        <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
          Our commercial specialists provide free site surveys with detailed ROI calculations tailored to your building. We serve office buildings throughout <Link to="/areas/central-london" className="text-primary hover:underline">Central London</Link>, Canary Wharf, and the City of London.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button 
            size="lg" 
            onClick={() => navigate("/quote-request")} 
            className="bg-primary hover:bg-primary/90 gap-2"
          >
            <Calendar className="h-4 w-4" />
            Book Free Survey
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => window.location.href = "tel:02070601572"}
            className="gap-2"
          >
            <Phone className="h-4 w-4" />
            0207 060 1572
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => window.location.href = "mailto:info@secondaryglazingspecialist.com"}
            className="gap-2"
          >
            <Mail className="h-4 w-4" />
            Email Us
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4">
          Serving London's leading businesses with professional secondary glazing solutions since 2000.
        </p>
        
        <p className="text-sm text-muted-foreground">
          Read our <Link to="/blog/planning-permission-secondary-glazing-conservation-areas" className="text-primary hover:underline">guide about planning permission for commercial properties</Link>.
        </p>
      </div>

      <div className="bg-secondary/30 rounded-lg p-6">
        <h3 className="font-semibold mb-4 text-center">Also Serving Other Commercial Sectors</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/commercial/hospitality-sector" className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors">
            Hotels & Hospitality <ArrowRight className="h-3 w-3" />
          </Link>
          <Link to="/commercial/educational-sector" className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors">
            Schools & Education <ArrowRight className="h-3 w-3" />
          </Link>
          <Link to="/commercial/healthcare-industry" className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors">
            Healthcare Facilities <ArrowRight className="h-3 w-3" />
          </Link>
          <Link to="/commercial/retail-spaces" className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors">
            Retail Spaces <ArrowRight className="h-3 w-3" />
          </Link>
          <Link to="/commercial/listed-buildings" className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors">
            Listed Buildings <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OfficeCTA;
