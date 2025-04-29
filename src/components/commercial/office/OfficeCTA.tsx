
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const OfficeCTA = () => {
  const navigate = useNavigate();
  
  return (
    <div className="text-center py-12 bg-gray-50 rounded-lg my-12">
      <h2 className="text-2xl font-bold mb-6">Ready to Transform Your Office Space?</h2>
      <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
        Contact us today for a free consultation and quote. Our experts will help you 
        find the perfect secondary glazing solution for your office building.
      </p>
      <Button 
        size="lg" 
        onClick={() => navigate("/quote-request")} 
        className="bg-primary hover:bg-primary/90"
      >
        Get Free Quote
      </Button>
    </div>
  );
};

export default OfficeCTA;
