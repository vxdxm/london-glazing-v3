import { Building2, Heart, Home, Stethoscope, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const CaseStudies = () => {
  const cases = [
    {
      icon: Building2,
      title: "NHS Hospital Ward, East London",
      type: "24-bed Victorian hospital ward",
      challenge: "Significant noise complaints reaching PALS",
      investment: "£28,000",
      results: [
        "75% noise reduction achieved",
        "Patient sleep scores dramatically improved",
        "PALS complaints dropped 80%",
        "Ward temperature more stable",
        "£6,000 annual energy savings",
        "CQC inspection praised improved environment"
      ]
    },
    {
      icon: Heart,
      title: "Private Hospital, Harley Street",
      type: "Grade II listed Georgian building, 15 private suites",
      challenge: "Acoustic privacy improvements while maintaining heritage character",
      investment: "£45,000",
      results: [
        "Exceptional consultation room privacy",
        "Increased patient satisfaction scores",
        "Original windows preserved",
        "Patients mention 'peaceful rooms' in reviews",
        "Premium care environment maintained"
      ]
    },
    {
      icon: Home,
      title: "Care Home, Richmond",
      type: "Edwardian care home with 32 resident rooms",
      challenge: "Cold, draughty conditions and high heating bills",
      investment: "£22,000",
      results: [
        "Significant resident comfort improvement",
        "Extremely positive family feedback",
        "Heating costs reduced by 40%",
        "Fewer resident illness episodes",
        "Staff report noticeably happier residents"
      ]
    },
    {
      icon: Stethoscope,
      title: "GP Surgery, North London",
      type: "Busy practice with 6 consultation rooms",
      challenge: "Street noise disrupting sensitive consultations",
      investment: "£8,000",
      results: [
        "Acoustic privacy restored",
        "Improved patient comfort for sensitive discussions",
        "Reduced doctor stress levels",
        "Professional environment maintained",
        "GDPR compliance enhanced"
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Proven Healthcare Case Studies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from healthcare facilities across London
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <img 
            src="/images/commercial/healthcare-clinic-waiting.webp" 
            alt="London clinic waiting area with secondary glazing overlooking Westminster" 
            className="w-full h-[300px] object-cover rounded-xl shadow-lg"
          />
          <img 
            src="/images/commercial/healthcare-harley-street.webp" 
            alt="Harley Street private clinic consultation room with heritage secondary glazing" 
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
