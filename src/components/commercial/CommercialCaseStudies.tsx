import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const CommercialCaseStudies = () => {
  const caseStudies = [
    {
      title: "Victorian Office Building, Clerkenwell",
      results: [
        "40% energy cost reduction",
        "£8,000 annual savings",
        "3.2 year payback"
      ],
      description: "Original Victorian windows preserved while workplace comfort dramatically improved, leading to higher tenant satisfaction scores."
    },
    {
      title: "Boutique Hotel, Bloomsbury",
      results: [
        "35% improved guest satisfaction",
        "45% heating cost reduction",
        "Higher TripAdvisor ratings"
      ],
      description: "Grade II listed Georgian building maintained heritage character perfectly with discreet internal installation."
    },
    {
      title: "Primary School, Islington",
      results: [
        "BB93 acoustic standards achieved",
        "35% heating cost reduction",
        "£12,000 annual savings"
      ],
      description: "Student concentration improved in quieter learning environment while listed Victorian school building preserved."
    },
    {
      title: "Fashion Boutique, Marylebone High Street",
      results: [
        "40% increased customer dwell time",
        "45% reduced heating costs",
        "Improved winter sales"
      ],
      description: "Georgian shop front perfectly preserved while showcase windows now provide warm, comfortable browsing experience."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Proven Commercial Success Stories
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{study.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                      <span className="font-medium">{result}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground">{study.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommercialCaseStudies;