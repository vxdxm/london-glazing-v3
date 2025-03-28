
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const SashWindowCTA = () => {
  const navigate = useNavigate();
  
  return (
    <section className="text-center mb-12 bg-gray-50 p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Ready to Transform Your Sash Windows?</h2>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Contact us today for a free consultation and quote. Our experts will help you 
        find the perfect sash window solution that maintains the character of your property
        while providing modern performance benefits.
      </p>
      <Button size="lg" onClick={() => navigate("/quote-request")} className="bg-primary hover:bg-primary/90">
        Get Free Quote
      </Button>
    </section>
  );
};

export default SashWindowCTA;
