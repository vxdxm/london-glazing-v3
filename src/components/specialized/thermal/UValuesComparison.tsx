import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Thermometer } from "lucide-react";

export const UValuesComparison = () => {
  const uValues = [
    {
      type: "Single Glazing",
      uValue: "5.8",
      heatLoss: "100%",
      description: "Standard single pane window",
      color: "bg-red-50 border-red-200"
    },
    {
      type: "Single Glazed Secondary",
      uValue: "2.8",
      heatLoss: "48%",
      description: "4mm glass with 100mm air gap",
      color: "bg-orange-50 border-orange-200"
    },
    {
      type: "Low-E Secondary Glazing",
      uValue: "1.8",
      heatLoss: "31%",
      description: "Low-E glass with 100mm air gap",
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      type: "Double Glazed Secondary",
      uValue: "1.2",
      heatLoss: "21%",
      description: "4mm-12mm-4mm sealed unit",
      color: "bg-green-50 border-green-200"
    },
    {
      type: "Premium Double Glazed",
      uValue: "1.0",
      heatLoss: "17%",
      description: "4mm-9.2mm-6.8mm acoustic unit",
      color: "bg-emerald-50 border-emerald-200"
    }
  ];

  return (
    <section className="mb-16">
      <SectionHeading 
        title="U-Values & Thermal Performance"
        subtitle="Understanding heat loss reduction with secondary glazing"
        className="mb-8"
      />
      
      <div className="mb-8 p-6 bg-muted rounded-lg">
        <div className="flex items-start gap-3 mb-4">
          <Thermometer className="h-6 w-6 text-primary mt-1" />
          <div>
            <h3 className="text-lg font-semibold mb-2">What is a U-Value?</h3>
            <p className="text-muted-foreground">
              U-Value measures how much heat passes through a window. Lower U-Values mean better insulation. 
              The measurement is in W/m²K (Watts per square meter per Kelvin). A lower number indicates 
              better thermal performance and less heat loss.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {uValues.map((item, index) => (
          <Card key={index} className={`border-2 ${item.color} transition-shadow hover:shadow-lg`}>
            <CardHeader>
              <CardTitle className="text-lg">{item.type}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">U-Value</p>
                  <p className="text-3xl font-bold text-foreground">{item.uValue}</p>
                  <p className="text-xs text-muted-foreground">W/m²K</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Heat Loss vs Single Glazing</p>
                  <p className="text-2xl font-semibold text-foreground">{item.heatLoss}</p>
                </div>
                <p className="text-sm text-muted-foreground pt-2 border-t">
                  {item.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
        <h4 className="font-semibold mb-3 flex items-center gap-2">
          <span className="text-primary">💡</span>
          Key Takeaway
        </h4>
        <p className="text-muted-foreground">
          Secondary glazing can reduce heat loss by up to <strong className="text-foreground">83%</strong> compared 
          to single glazing. Even basic single glazed secondary units cut heat loss in half, while premium 
          double glazed secondary glazing achieves U-values comparable to modern triple glazing.
        </p>
      </div>
    </section>
  );
};
