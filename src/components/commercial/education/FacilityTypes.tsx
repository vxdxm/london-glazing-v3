import { School, GraduationCap, Heart, Church, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const FacilityTypes = () => {
  const facilities = [
    {
      icon: School,
      title: "Primary Schools & Nurseries",
      areas: [
        "Reception classes requiring warm, secure environments",
        "Key Stage 2 classrooms needing acoustic focus",
        "Child-safe installations with toughened glass",
        "Secure locking systems meeting safeguarding requirements",
        "Peace of mind for parents and governors"
      ]
    },
    {
      icon: GraduationCap,
      title: "Secondary Schools & Academies",
      areas: [
        "Large-scale solutions for comprehensive schools",
        "Individual classrooms to massive assembly halls",
        "Exam hall acoustic isolation expertise",
        "Science laboratory thermal control",
        "JCQ compliant examination environments"
      ]
    },
    {
      icon: Heart,
      title: "Special Educational Needs Schools",
      areas: [
        "Sensory-friendly spaces for autism support",
        "Environments for ADHD and hearing impairments",
        "Temperature stability for vulnerable learners",
        "Acoustic control essential for effective learning",
        "Close collaboration with specialist staff"
      ]
    },
    {
      icon: Church,
      title: "Independent & Faith Schools",
      areas: [
        "Beautiful heritage buildings requiring sympathetic treatment",
        "Architectural character preservation",
        "Modern performance delivery",
        "Understanding of different community requirements",
        "Budget-conscious solutions"
      ]
    },
    {
      icon: Building2,
      title: "Universities & Higher Education",
      areas: [
        "Lecture halls requiring clear acoustics",
        "Student accommodation thermal efficiency",
        "Scalable solutions for higher education",
        "Listed university building expertise",
        "Heritage requirement compliance"
      ]
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Educational Facility Coverage
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized solutions for every type of educational environment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.slice(0, 3).map((facility, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <facility.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{facility.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {facility.areas.map((area, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {facilities.slice(3).map((facility, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <facility.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{facility.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {facility.areas.map((area, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
