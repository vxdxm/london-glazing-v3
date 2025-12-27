import { Building2, Heart, Home, Brain, Stethoscope } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const FacilityTypes = () => {
  const facilities = [
    {
      icon: Building2,
      title: "NHS Hospitals",
      areas: [
        "Ward environments - noise reduction and temperature control",
        "A&E departments - acoustic management in high-stress environments",
        "Outpatient clinics - comfortable waiting and consultation areas",
        "Mental health units - therapeutic environment requirements",
        "Maternity wards - peaceful recovery environments",
        "Pediatric areas - child-friendly, safe installations"
      ]
    },
    {
      icon: Heart,
      title: "Private Hospitals",
      areas: [
        "Harley Street and specialist facilities",
        "Patient suites requiring premium comfort",
        "Consultation rooms with acoustic privacy",
        "Diagnostic centers needing stable environments",
        "Premium care standards reflected in environment"
      ]
    },
    {
      icon: Home,
      title: "Care Homes & Nursing Homes",
      areas: [
        "Resident comfort in period properties",
        "Communal areas and dining rooms",
        "Individual bedroom improvements",
        "Thermal performance for elderly residents",
        "Heritage building compatibility"
      ]
    },
    {
      icon: Brain,
      title: "Mental Health Facilities",
      areas: [
        "Secure units with specialized safety glazing",
        "Therapy rooms requiring acoustic privacy",
        "Patient bedrooms for restful environments",
        "Quiet spaces for treatment effectiveness",
        "Anti-ligature options where required"
      ]
    },
    {
      icon: Stethoscope,
      title: "GP Surgeries & Medical Centers",
      areas: [
        "Consultation rooms with acoustic privacy",
        "Reception and comfortable waiting environments",
        "Treatment rooms with temperature stability",
        "Professional appearance maintenance",
        "GDPR-compliant acoustic separation"
      ]
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Healthcare Facility Types We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized solutions for every type of healthcare environment
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
