import { OptimizedImage } from "@/components/ui/optimized-image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Home, PoundSterling, TrendingDown } from "lucide-react";

const LiftOutCaseStudies = () => {
  const caseStudies = [
    {
      title: "Islington Rental Success",
      location: "Islington",
      propertyType: "2-bed Victorian flat",
      description: "A tenant installed lift-out panels in her flat for winter warmth, saving £600 on heating bills. When she moved the following summer, she took most panels with her, leaving the kitchen and bathroom panels for the next tenant — a win-win for everyone involved.",
      savings: "£600",
      highlight: "Portable investment"
    },
    {
      title: "Richmond Seasonal Lifestyle",
      location: "Richmond",
      propertyType: "Period home",
      description: "A home worker installed 10 lift-out panels each October before winter work-from-home season, removing them each April before extensive summer travel. Storage in the loft meant panels were out of mind during summer months abroad.",
      savings: "£750 annually",
      highlight: "Lifestyle flexibility"
    },
    {
      title: "Belgravia Listed Building Trial",
      location: "Belgravia",
      propertyType: "Grade II Georgian townhouse",
      description: "A homeowner used lift-out panels to trial secondary glazing effectiveness. After proving 62% heating reduction over winter, the conservation officer was satisfied with both performance and complete reversibility.",
      savings: "62% heating reduction",
      highlight: "Conservation approved"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Real-World Case Studies</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="space-y-6">
          {caseStudies.map((study, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  {study.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Home className="h-4 w-4" />
                    {study.propertyType}
                  </span>
                  <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-medium">
                    {study.highlight}
                  </span>
                </div>
                <p className="text-muted-foreground mb-3">{study.description}</p>
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <TrendingDown className="h-4 w-4" />
                  {study.savings}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <OptimizedImage
            src="https://cdn.marblism.com/5TIpkCnT6r9.webp"
            alt="Lift-out secondary glazing case study installation in London"
            className="rounded-lg shadow-lg w-full h-full min-h-[400px] object-cover"
            width={600}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default LiftOutCaseStudies;
