import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Thermometer, Volume2, PoundSterling } from "lucide-react";

export function TraditionalCaseStudies() {
  const caseStudies = [
    {
      title: "Grade II Georgian Belgravia",
      subtitle: "Vertical Slider Timber",
      windows: "14 windows",
      cost: "£9,800",
      result: "58% heating cost reduction, saving £2,784 annually",
      details: "Conservation officer approval was straightforward due to traditional operation and materials. The timber frames were painted off-white to match existing sashes."
    },
    {
      title: "Victorian Kensington Bay Windows",
      subtitle: "Side-Hung Hinged",
      windows: "18 windows including complex bay window arrangement",
      cost: "£8,400",
      result: "52% heating improvement and 76% noise reduction",
      details: "Conservation area planning approval emphasized traditional operating style matching original casements."
    },
    {
      title: "Art Deco Hampstead",
      subtitle: "Bronze Crittall Style",
      windows: "10 windows",
      cost: "£4,500",
      result: "54% thermal improvement",
      details: "Bronze aluminum frames preserving grid patterns, maintaining the property's modernist aesthetic. Traditional side-hung operation respected original window functionality."
    },
    {
      title: "Edwardian Richmond",
      subtitle: "Heritage Grey Aluminum",
      windows: "12 windows",
      cost: "£6,600",
      result: "56% heating improvement",
      details: "Vertical slider aluminum frames in heritage grey complementing the Arts & Crafts character. Traditional operation maintained the property's authentic period feel."
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Real-World Case Studies</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {caseStudies.map((study, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-lg">{study.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{study.subtitle}</p>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{study.windows}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <PoundSterling className="h-4 w-4 text-primary" />
                  <span className="font-semibold">{study.cost}</span>
                </div>
              </div>
              
              <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded-lg mb-3">
                <div className="flex items-start gap-2">
                  <Thermometer className="h-4 w-4 text-green-600 mt-0.5" />
                  <p className="text-sm font-medium text-green-700 dark:text-green-400">{study.result}</p>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">{study.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
