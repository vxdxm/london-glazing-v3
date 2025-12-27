import { School, GraduationCap, Heart, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const CaseStudies = () => {
  const cases = [
    {
      icon: School,
      title: "Victorian Primary School, Islington",
      type: "Grade II listed school with 15 classrooms",
      challenge: "Constant traffic noise disrupting lessons",
      investment: "£42,000 (CIF funded)",
      results: [
        "75% noise reduction achieved",
        "BB93 compliance achieved",
        "Improved SATs performance",
        "35% heating cost reduction (£4,200 annual saving)",
        "Outstanding Ofsted praise for learning environment"
      ]
    },
    {
      icon: GraduationCap,
      title: "Secondary School Exam Hall, Westminster",
      type: "Under Heathrow flight path",
      challenge: "Aircraft noise every 90 seconds during exams",
      investment: "£18,000",
      results: [
        "Noise reduced from 70dB to 38dB",
        "JCQ compliant exam conditions achieved",
        "Improved student exam performance",
        "Stress-free examination environment",
        "Staff and student satisfaction improved"
      ]
    },
    {
      icon: Heart,
      title: "SEND School, Hackney",
      type: "Specialist school serving 20 autistic pupils",
      challenge: "Noise-triggered meltdowns preventing learning",
      investment: "Included in school improvement program",
      results: [
        "60% reduction in behavioral incidents",
        "Calmer learning atmosphere",
        "Pupils able to learn effectively",
        "Transformed outcomes for vulnerable students",
        "Staff wellbeing significantly improved"
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real-World Educational Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proven results from schools across London
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden h-full">
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
