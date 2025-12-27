import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Quote } from "lucide-react";

export const CrittallCaseStudies = () => {
  const caseStudies = [
    {
      title: "Grade II Art Deco Building, Maida Vale",
      subtitle: "Original 1932 Crittall Throughout",
      challenge: "Listed Art Deco building with 12 original black W20 Crittall windows featuring 6-pane grids. Single-glazed windows created a freezing flat with condensation running down frames daily. Annual heating bills reached £3,200. Applied for Crittall replacement (£14,000 quote) but listed building consent was REFUSED.",
      solution: "Hinged secondary glazing installed on all 12 windows with 6.8mm acoustic glass and black powder-coated frames matching existing Crittall. Total investment: £5,200.",
      results: [
        "61% heating bill reduction saving £7,808 over 4 years",
        "Condensation eliminated completely—frames now stay dry",
        "76% traffic noise reduction makes A5 barely audible",
        "Crittall grids preserved 100%—conservation officer approved",
        "Investment £5,200 vs £14,000 refused replacement = 0.7-year payback"
      ],
      testimonial: "I was heartbroken when they refused my Crittall replacement. I love my 1932 grids but the flat was unbearable—freezing, condensation everywhere, deafening traffic. Secondary glazing has been miraculous. The grids look exactly the same from the street, my heating bills are reasonable for the first time ever, and the flat is finally quiet."
    },
    {
      title: "Factory Conversion Loft, Hoxton",
      subtitle: "Warehouse W40 Crittall, 3m x 2m Windows",
      challenge: "Converted textile factory with huge W40 warehouse Crittall featuring 12-pane industrial grids (3m x 2m each, 8 windows total). Single-glazed installation created massive heat loss with £4,800 annual energy bills. Extreme noise from Shoreditch nightlife made sleep impossible.",
      solution: "Fixed secondary glazing on all 8 windows (never opened anyway) with 10.8mm high-performance acoustic glass and grey powder-coated frames. Total investment: £8,400.",
      results: [
        "68% heating cost reduction providing £13,056 savings over 4 years",
        "84% noise reduction—Shoreditch nightlife barely audible",
        "Industrial aesthetic enhanced—layered metal frames look intentional",
        "Crittall grids remain fully visible maintaining warehouse character",
        "Investment £8,400 vs £18,000 replacement = 0.6-year payback"
      ],
      testimonial: "Our 3m warehouse Crittall windows are stunning—the grids are the entire loft's character. But they were completely impractical: freezing, deafeningly noisy, £400/month heating bills. Secondary glazing has been perfect. The grids still dominate, the grey frames suit the industrial vibe, and the loft is finally comfortable."
    }
  ];

  return (
    <section className="mb-16">
      <SectionHeading 
        title="Real Crittall Success Stories"
        subtitle="Actual results from London Crittall property owners"
      />
      
      <div className="space-y-8">
        {caseStudies.map((study, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-2xl">{study.title}</CardTitle>
              <p className="text-muted-foreground italic">{study.subtitle}</p>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div>
                <h4 className="font-semibold text-destructive mb-2">The Challenge:</h4>
                <p className="text-muted-foreground">{study.challenge}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-2">The Solution:</h4>
                <p className="text-muted-foreground">{study.solution}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3">Outstanding Results:</h4>
                <ul className="space-y-2">
                  {study.results.map((result, rIndex) => (
                    <li key={rIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground bg-muted/30 p-4 rounded-r-lg">
                <Quote className="w-6 h-6 text-primary mb-2" />
                {study.testimonial}
              </blockquote>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
