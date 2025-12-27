import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export function TraditionalCTA() {
  return (
    <section className="mb-16">
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="pt-8 pb-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Preserve Your Heritage Property
            </h2>
            <p className="mb-6 text-primary-foreground/90">
              Traditional secondary glazing preserves London's architectural heritage while delivering 
              modern comfort, making it the ideal solution for discerning period property owners who 
              refuse to compromise on authenticity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/quote-request">
                  <FileText className="mr-2 h-5 w-5" />
                  Get Free Heritage Assessment
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href="tel:+442034888227">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 020 3488 8227
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
