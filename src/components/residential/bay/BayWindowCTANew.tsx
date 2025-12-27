import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Phone, FileText } from "lucide-react";

const BayWindowCTANew = () => {
  const navigate = useNavigate();
  
  return (
    <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
      <h2 className="text-2xl font-bold mb-4 text-foreground">
        Transform Your Beautiful Bay Windows
      </h2>
      <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
        Transform your beautiful but impractical bay windows into warm, comfortable, energy-efficient 
        spaces while preserving their authentic Victorian or Edwardian character. Contact our bay window 
        specialists for a free assessment and discover how secondary glazing can restore your bay to its 
        rightful place as your home's most cherished feature.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          size="lg" 
          onClick={() => navigate("/quote-request")} 
          className="bg-primary hover:bg-primary/90"
        >
          <FileText className="mr-2 h-5 w-5" />
          Get Free Bay Window Assessment
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

export default BayWindowCTANew;
