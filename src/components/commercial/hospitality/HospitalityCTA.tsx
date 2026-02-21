
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import { Phone, Mail, Calendar } from "lucide-react";

const HospitalityCTA = () => {
  const navigate = useNavigate();
  
  return (
    <section className="text-center space-y-6 bg-primary/5 rounded-lg p-8 border border-primary/20">
      <h2 className="text-2xl font-bold">Ready to Enhance Your Guests' Experience?</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Our hospitality specialists provide free consultations, detailed ROI analysis, and flexible installation 
        scheduling that works around your operational requirements.
      </p>
      <p className="font-semibold text-primary">
        Get your free hospitality venue assessment today – discover how secondary glazing can transform your property's performance and profitability.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button 
          onClick={() => navigate("/quote-request")}
          size="lg"
          className="gap-2"
        >
          <Calendar className="h-5 w-5" />
          Book Free Survey
        </Button>
        <Button 
          variant="outline"
          size="lg"
          className="gap-2"
          onClick={() => window.location.href = 'tel:02070601572'}
        >
          <Phone className="h-5 w-5" />
          0207 060 1572
        </Button>
        <Button 
          variant="outline"
          size="lg"
          className="gap-2"
          onClick={() => window.location.href = 'mailto:info@secondaryglazingspecialist.com'}
        >
          <Mail className="h-5 w-5" />
          Email Us
        </Button>
      </div>
      
      <div className="text-sm text-muted-foreground mt-6 space-y-2">
        <p>Serving London's leading hospitality venues with professional secondary glazing solutions since 2000.</p>
        <p>
          Also serving other commercial sectors:{' '}
          <Link to="/commercial/office-buildings" className="text-primary hover:underline">Offices</Link>,{' '}
          <Link to="/commercial/educational-sector" className="text-primary hover:underline">Schools</Link>, and{' '}
          <Link to="/commercial/healthcare-industry" className="text-primary hover:underline">Healthcare Facilities</Link>
        </p>
      </div>
    </section>
  );
};

export default HospitalityCTA;
