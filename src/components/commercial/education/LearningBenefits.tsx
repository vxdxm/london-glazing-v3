import { Brain, Heart, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export const LearningBenefits = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Enhanced Concentration & Academic Performance",
      description: "Secondary glazing delivers 70-80% noise reduction, creating quiet learning environments essential for student concentration.",
      details: "Teachers report immediate improvements in classroom behavior and engagement. For exam halls, acoustic isolation ensures JCQ compliance and removes stress during GCSE and A-Level examinations."
    },
    {
      icon: Heart,
      title: "SEND Student Support & Wellbeing",
      description: "Students with autism spectrum disorders are particularly sensitive to noise and temperature fluctuations.",
      details: "Many schools report 60% reductions in behavioral incidents and meltdowns. Stable thermal environments help regulate sensory needs throughout the day."
    },
    {
      icon: Users,
      title: "Teacher Effectiveness & Retention",
      description: "Voice strain affects up to 60% of teachers, but secondary glazing significantly reduces the need to speak over external noise.",
      details: "Combined with consistently comfortable classroom temperatures, this creates better working conditions that support staff retention."
    },
    {
      icon: Calendar,
      title: "Improved Attendance & Engagement",
      description: "Cold classrooms directly correlate with higher student absence rates.",
      details: "Warm, comfortable learning spaces encourage better attendance and engagement, while improved acoustics help students with hearing impairments access curriculum content more effectively."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Critical Benefits for Student Learning & Development
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">Creating optimal acoustic environments for concentration and learning</Link> delivers 
            evidence-based improvements that directly impact educational outcomes. <Link to="/specialized/sound-transmission-guide" className="text-primary hover:underline">Understanding sound transmission in educational settings</Link> is essential for school planners. <Link to="/noise-reduction-calculator" className="text-primary hover:underline">Calculate noise reduction for your school</Link>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">{benefit.description}</p>
                <p className="text-sm text-muted-foreground/80 italic">{benefit.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
