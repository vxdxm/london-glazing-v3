
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Legal Chambers, Holborn",
      details: "25 sash windows in Grade II listed building facing busy street",
      challenge: "75dB traffic noise disrupting client meetings",
      solution: "Acoustic laminated secondary glazing achieving 45dB reduction",
      investment: "£18,000",
      results: [
        "£4,000 annual energy savings",
        "Improved client satisfaction",
        "Successful planning compliance"
      ],
      links: {
        listed: "/listed-buildings-secondary-glazing",
        noise: "/noise-reduction-secondary-glazing"
      }
    },
    {
      title: "Tech Startup, Shoreditch",
      details: "Converted warehouse with 40 metal-framed windows",
      challenge: "Poor thermal performance and external noise affecting open-plan workspace",
      solution: "Double-glazed secondary glazing with Low-E coating",
      investment: "£28,000",
      results: [
        "EPC rating improved from E to C",
        "35% reduction in heating costs",
        "Dramatically improved comfort levels"
      ],
      links: {
        thermal: "/thermal-insulation-secondary-glazing",
        area: "/areas/east-london"
      }
    },
    {
      title: "Financial Services, Canary Wharf",
      details: "Large office floor with 60 windows requiring weekend installation",
      challenge: "Zero business disruption tolerance",
      solution: "Complete installation over single weekend with 4-person team",
      investment: "£42,000",
      results: [
        "Seamless installation",
        "40% reduction in HVAC load",
        "Enhanced acoustic privacy for trading floor"
      ],
      links: {
        area: "/areas/east-london",
        noise: "/noise-reduction-secondary-glazing"
      }
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Real Commercial Success Stories</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {caseStudies.map((study, index) => (
          <Card key={index} className="border-border">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">{study.title}</CardTitle>
              </div>
              <p className="text-sm text-muted-foreground">{study.details}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium text-destructive">Challenge:</p>
                <p className="text-sm text-muted-foreground">{study.challenge}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-primary">Solution:</p>
                <p className="text-sm text-muted-foreground">{study.solution}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Investment: {study.investment}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-green-600 mb-2">Results:</p>
                <ul className="space-y-1">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-secondary/30 rounded-lg p-6 text-center">
        <p className="text-muted-foreground mb-4">
          View more examples of our commercial work across London's office buildings
        </p>
        <Link to="/case-studies" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium">
          View All Case Studies <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default CaseStudies;
