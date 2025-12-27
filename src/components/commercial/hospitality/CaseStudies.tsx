
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, TrendingUp, Award, Building } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { OptimizedImage } from "@/components/ui/optimized-image";

const CaseStudies = () => {
  const cases = [
    {
      icon: Star,
      title: "Mayfair Boutique Hotel",
      details: "45-room property, £45,000 investment during January refurbishment",
      results: [
        "TripAdvisor ratings improved from 3.5 to 4.5 stars",
        "85% reduction in noise complaints",
        "£8,000 annual energy savings",
        "ROI achieved within three years"
      ]
    },
    {
      icon: Building,
      title: "Historic Bloomsbury Hotel",
      details: "Grade II listed 60-room property requiring conservation-compliant solution",
      results: [
        "Preserved original Victorian sash windows",
        "Improved guest comfort significantly",
        "Heritage appeal enhanced marketing position",
        "Full planning compliance achieved"
      ]
    },
    {
      icon: Award,
      title: "Covent Garden Restaurant",
      details: "35-cover fine dining establishment facing busy street",
      results: [
        "Eliminated street noise disruption completely",
        "Reviews now highlight 'peaceful' atmosphere",
        "Longer average table times increasing revenue",
        "Improved dining ambiance and satisfaction"
      ]
    },
    {
      icon: TrendingUp,
      title: "South Bank Riverside Pub",
      details: "Large Thames-facing windows maintaining spectacular views",
      results: [
        "75% reduction in tourist and traffic noise",
        "Maintained spectacular river views",
        "Enabled successful private function bookings",
        "Enhanced overall guest experience"
      ]
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Proven Hospitality Success Stories</h2>
      
      <AspectRatio ratio={2.5 / 1} className="mb-8">
        <OptimizedImage 
          src="https://cdn.marblism.com/B3KIMUJSawU.webp" 
          alt="Case study examples of hospitality venues with secondary glazing installations" 
          className="rounded-lg object-cover w-full h-full" 
        />
      </AspectRatio>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cases.map((caseStudy, index) => (
          <Card key={index} className="border-primary/20">
            <CardHeader className="pb-2">
              <caseStudy.icon className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-lg">{caseStudy.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{caseStudy.details}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {caseStudy.results.map((result, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-muted-foreground text-sm">{result}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
