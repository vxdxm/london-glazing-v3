
import { PoundSterling, Calculator, TrendingDown } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { OptimizedImage } from "@/components/ui/optimized-image";

const RepairCostGuide = () => {
  const pricingCategories = [
    {
      title: "Spiral Balance Replacement",
      price: "£85-£150",
      description: "Includes quality spring mechanism, removal of old balance, installation, and testing"
    },
    {
      title: "Hinge Repairs",
      price: "£60-£95",
      description: "Friction stay replacement for side-hung units. Specialized hinges for top/bottom-hung windows: £70-£110"
    },
    {
      title: "Lock & Handle Services",
      price: "£35-£120",
      description: "Lock replacement £45-£75, handles £35-£55, security upgrade locks £75-£120"
    },
    {
      title: "Seal Replacement",
      price: "£50-£100",
      description: "Brush seals or compression gaskets £50-£85, full perimeter sealing £65-£100"
    },
    {
      title: "Glass Replacement",
      price: "£95-£280",
      description: "Standard 4mm glass £95-£150, acoustic 6.4mm laminate £150-£250, premium 6.8mm acoustic £280"
    },
    {
      title: "Frame Repairs",
      price: "£85-£200",
      description: "Realignment £85-£140, frame section replacement £120-£200"
    }
  ];

  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-6">
        <PoundSterling className="h-7 w-7 text-primary" />
        <h2 className="text-3xl font-semibold">Repair Cost Guidance</h2>
      </div>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Our transparent pricing means no nasty surprises. All prices include parts, labour, and testing.
      </p>

      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pricingCategories.map((category, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-base">{category.title}</CardTitle>
                    <span className="text-lg font-bold text-primary">{category.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <OptimizedImage
            src="https://cdn.marblism.com/zm6ON2H0Nln.webp"
            alt="Secondary glazing repair pricing and assessment"
            className="rounded-lg shadow-lg w-full object-cover h-64 lg:h-full"
            aspectRatio={3/4}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">Service Call-Out Fee</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-primary mb-2">£75-£95</p>
            <p className="text-muted-foreground text-sm">
              Covers assessment, quotation, and travel within London's M25. This cost is spread across 
              multiple windows when we're repairing several units in one visit.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900">
          <CardHeader>
            <div className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-green-600" />
              <CardTitle className="text-lg">Repair vs Replacement</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-600 mb-2">Save 70-80%</p>
            <p className="text-muted-foreground text-sm">
              Single component repairs typically cost 70-80% less than new installation. A spiral balance 
              replacement at £160-£245 total beats a new unit at £400-£750 when the frame and glass remain sound.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RepairCostGuide;
