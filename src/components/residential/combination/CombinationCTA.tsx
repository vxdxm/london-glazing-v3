
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CombinationCTA = () => {
  const navigate = useNavigate();
  
  return (
    <section className="text-center mb-12 bg-gray-50 p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Custom Combination Solutions for Your Property</h2>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Every property is unique. Contact us today to discuss how our custom combination 
        window solutions can be tailored to your specific requirements, enhancing both 
        the functionality and aesthetic appeal of your windows.
      </p>
      <Button size="lg" onClick={() => navigate("/quote-request")} className="bg-primary hover:bg-primary/90">
        Request Custom Quote
      </Button>
    </section>
  );
};

export default CombinationCTA;
