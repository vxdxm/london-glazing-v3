
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HospitalityCTA = () => {
  const navigate = useNavigate();
  
  return (
    <section className="text-center space-y-6">
      <h2 className="text-2xl font-semibold">Ready to Enhance Your Property?</h2>
      <p className="text-gray-600">
        Contact us today for a free consultation and quote tailored to your specific needs.
      </p>
      <Button 
        onClick={() => navigate("/quote-request")}
        className="bg-primary text-primary-foreground px-8 py-4"
      >
        Request a Quote
      </Button>
    </section>
  );
};

export default HospitalityCTA;
