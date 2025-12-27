
import { CheckCircle, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BrandsWeRepair = () => {
  const brands = [
    { name: "Selectaglaze", note: "Market leader – we stock standard parts" },
    { name: "Anglian Windows", note: "Secondary glazing systems" },
    { name: "Storm Windows", note: "All system types" },
    { name: "Everest", note: "Secondary glazing" },
    { name: "Custom & Bespoke", note: "Installations" },
    { name: "Unbranded Systems", note: "From local installers" }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-4">Brands We Repair</h2>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        We service all major secondary glazing brands and systems with expert knowledge and genuine parts.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {brands.map((brand, index) => (
          <Card key={index} className="border-border/50 text-center">
            <CardContent className="pt-6">
              <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-sm">{brand.name}</h3>
              <p className="text-xs text-muted-foreground">{brand.note}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <Shield className="h-10 w-10 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Universal Parts Compatibility</h3>
              <p className="text-muted-foreground">
                Our universal parts compatibility covers <strong>95% of secondary glazing systems</strong> regardless 
                of age or manufacturer. Where manufacturer-specific parts are needed, we source them within 2-7 days.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default BrandsWeRepair;
