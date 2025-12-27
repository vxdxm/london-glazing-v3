import { Store, Building, Coffee, Gem, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const CaseStudies = () => {
  const cases = [
    {
      icon: Store,
      title: "Marylebone Boutique Transformation",
      type: "450 sq ft independent fashion boutique, Grade II listed Georgian",
      challenge: "Customers leaving quickly due to cold conditions, heritage restrictions",
      investment: "£6,500",
      results: [
        "Customers browsing 40% longer",
        "Winter sales increased noticeably",
        "Heating costs reduced 45%",
        "£2,800 annual savings",
        "2.3-year payback achieved",
        "Georgian shop front preserved"
      ]
    },
    {
      icon: Building,
      title: "Richmond Department Store Success",
      type: "Victorian department store with massive showcase windows",
      challenge: "£18,000 annual heating costs, security concerns, cold ground floor",
      investment: "£28,000 for 12 large windows",
      results: [
        "£7,200 annual savings (40% reduction)",
        "Showcase windows properly functional",
        "Enhanced security reduced insurance",
        "Conservation officer approved",
        "Management delighted by rapid ROI"
      ]
    },
    {
      icon: Gem,
      title: "Sloane Street Luxury Retail",
      type: "High-end fashion boutique, Edwardian shop front",
      challenge: "Temperature stability needed, planning permission impossible",
      investment: "£12,000",
      results: [
        "Consistent comfort for luxury customers",
        "Heritage character preserved",
        "Heating costs reduced 35%",
        "UV protection prevents stock damage",
        "Completely invisible from outside"
      ]
    },
    {
      icon: Coffee,
      title: "Hampstead Village Cafe",
      type: "Popular local cafe, Victorian shop front in conservation area",
      challenge: "Cold window seats avoided in winter, heating costs consuming profits",
      investment: "£8,500",
      results: [
        "Window seats most requested year-round",
        "Heating costs reduced 48%",
        "£3,600 annual savings",
        "2.4-year payback",
        "TripAdvisor reviews improved significantly"
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real London Retail Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proven results from retail businesses across London
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <img 
            src="/images/commercial/retail-installation.webp" 
            alt="Secondary glazing installation in progress at London boutique with minimal disruption" 
            className="w-full h-[300px] object-cover rounded-xl shadow-lg"
          />
          <img 
            src="/images/commercial/retail-cafe.webp" 
            alt="Cozy London cafe with warm window seating after secondary glazing installation" 
            className="w-full h-[300px] object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
              <CardHeader className="bg-primary/5">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <caseStudy.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{caseStudy.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{caseStudy.type}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-4">
                  <span className="text-sm font-medium text-foreground">Challenge: </span>
                  <span className="text-sm text-muted-foreground">{caseStudy.challenge}</span>
                </div>
                <div className="mb-4">
                  <span className="text-sm font-medium text-foreground">Investment: </span>
                  <span className="text-sm text-primary font-semibold">{caseStudy.investment}</span>
                </div>
                <div>
                  <span className="text-sm font-medium text-foreground block mb-2">Results:</span>
                  <ul className="space-y-2">
                    {caseStudy.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
