
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const TechnicalSpecs = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Technical Specifications & Options</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Glass Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">4mm Double Glazed Units</p>
                <p className="text-sm text-muted-foreground">Standard thermal performance with 20-30dB noise reduction</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">6.4mm-12.8mm Acoustic Laminate</p>
                <p className="text-sm text-muted-foreground">Superior sound insulation up to 50dB reduction</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Low-E Coated Glass</p>
                <p className="text-sm text-muted-foreground">Enhanced thermal efficiency, U-values as low as 1.8 W/m²K</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Toughened/Laminated Safety Glass</p>
                <p className="text-sm text-muted-foreground">Commercial building compliance and security</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Frame Systems</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Slim Aluminium Profiles</p>
                <p className="text-sm text-muted-foreground">Minimal visual impact with maximum performance</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Thermal Break Technology</p>
                <p className="text-sm text-muted-foreground">Prevents condensation and thermal bridging</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Powder-Coated Finishes</p>
                <p className="text-sm text-muted-foreground">White, black, silver, bronze options to match existing décor</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Multiple Operation Types</p>
                <p className="text-sm text-muted-foreground">Vertical sliding, horizontal sliding, lift-out, hinged, or fixed</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>Building Compliance & Certifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-muted-foreground">
                All commercial installations meet <strong>Part L Building Regulations</strong> for thermal performance and energy efficiency. Our systems carry full acoustic testing certificates, fire safety ratings, and contribute towards <strong>BREEAM sustainability assessments</strong>.
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">
                <strong>Health & Safety compliance</strong> includes safe working protocols for occupied buildings, full risk assessments, and coordination with facility management teams.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TechnicalSpecs;
