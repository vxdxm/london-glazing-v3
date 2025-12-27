import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, FileText, Calculator } from "lucide-react";

const CommercialCTA = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Get Started with Your Commercial Energy Efficiency Project
        </h2>
        <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto">
          <strong>Ready to reduce energy costs and improve your London commercial building?</strong> Our commercial specialists provide free consultations with detailed ROI analysis tailored to your property and business needs.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
          <div className="bg-primary-foreground/10 rounded-lg p-4">
            <Phone className="w-6 h-6 mx-auto mb-2" />
            <p className="font-medium text-sm">Get Your Free Commercial Consultation</p>
          </div>
          <div className="bg-primary-foreground/10 rounded-lg p-4">
            <FileText className="w-6 h-6 mx-auto mb-2" />
            <p className="font-medium text-sm">Request Site Survey & ROI Analysis</p>
          </div>
          <div className="bg-primary-foreground/10 rounded-lg p-4">
            <Calculator className="w-6 h-6 mx-auto mb-2" />
            <p className="font-medium text-sm">Calculate Your Potential Savings</p>
          </div>
          <div className="bg-primary-foreground/10 rounded-lg p-4">
            <ArrowRight className="w-6 h-6 mx-auto mb-2" />
            <p className="font-medium text-sm">Download Commercial Brochure</p>
          </div>
        </div>

        <p className="text-sm opacity-80 mb-8 max-w-3xl mx-auto">
          Contact our commercial team today to discover how secondary glazing can transform your London commercial property's energy efficiency, occupant comfort, and operating costs while preserving heritage character and maintaining business continuity throughout the installation process.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary" className="gap-2">
            <Link to="/quote-request">
              Request Commercial Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
            <a href="tel:02034888903">
              <Phone className="w-4 h-4 mr-2" />
              Call: 020 3488 8903
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommercialCTA;