
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Phone, Mail, Calendar } from "lucide-react";

const OfficeCTA = () => {
  const navigate = useNavigate();
  
  return (
    <div className="text-center py-12 bg-primary/5 border border-primary/20 rounded-lg my-12">
      <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Office Environment?</h2>
      <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
        Our commercial specialists provide free site surveys with detailed ROI calculations tailored to your building. Contact us today for immediate response.
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
          onClick={() => window.location.href = "mailto:info@secondaryglazingspecialist.co.uk"}
          className="gap-2"
        >
          <Mail className="h-4 w-4" />
          Email Us
        </Button>
      </div>
      
      <p className="text-sm text-muted-foreground">
        Serving London's leading businesses with professional secondary glazing solutions since 2000.
      </p>
    </div>
  );
};

export default OfficeCTA;
