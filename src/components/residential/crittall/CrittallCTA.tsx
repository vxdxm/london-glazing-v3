import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, FileText } from "lucide-react";

export const CrittallCTA = () => {
  return (
    <section className="bg-primary/10 rounded-lg p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">
        Transform Your Crittall Windows
      </h2>
      <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
        Transform your beloved Crittall windows into comfortable, efficient features while preserving their iconic heritage character completely. Contact Secondary Glazing Specialist today for your free Crittall assessment and discover how to save thousands while protecting your property's authentic architectural treasure.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg">
          <Link to="/quote">
            <FileText className="mr-2 h-5 w-5" />
            Get Free Crittall Assessment
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href="tel:+442071234567">
            <Phone className="mr-2 h-5 w-5" />
            Call: 020 7123 4567
          </a>
        </Button>
      </div>
    </section>
  );
};
