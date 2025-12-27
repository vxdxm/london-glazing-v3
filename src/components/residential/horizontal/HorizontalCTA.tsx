import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Phone, FileText } from "lucide-react";

const HorizontalCTA = () => {
  const navigate = useNavigate();
  
  return (
    <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
      <h2 className="text-2xl font-bold mb-4 text-foreground">
        Transform Your Wide Windows with Horizontal Sliding Secondary Glazing
      </h2>
      <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
        Transform your wide windows and large glass areas with precision-engineered horizontal sliding 
        secondary glazing. Contact us today for your free consultation and discover how smooth gliding 
        operation, exceptional performance, and contemporary aesthetics can enhance your London property's 
        comfort, efficiency, and value.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          size="lg" 
          onClick={() => navigate("/quote-request")} 
          className="bg-primary hover:bg-primary/90"
        >
          <FileText className="mr-2 h-5 w-5" />
          Get Free Consultation
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          onClick={() => navigate("/contact")}
        >
          <Phone className="mr-2 h-5 w-5" />
          Speak to a Specialist
        </Button>
      </div>
    </section>
  );
};

export default HorizontalCTA;
