
import { Wrench, Lock, Wind, AlertTriangle, GlassWater } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const CommonRepairIssues = () => {
  const issues = [
    {
      icon: Wrench,
      title: "Spiral Balance Failures",
      description: "The most common issue, especially in vertical sliding units. When that familiar 'thunk' of a sash dropping suddenly happens, or you struggle to lift a window that used to glide effortlessly, your spiral balance springs have likely given up after 10-15 years of service.",
      urgency: "Common"
    },
    {
      icon: AlertTriangle,
      title: "Hinge Problems",
      description: "Plagues side-hung secondary glazing, particularly in bay windows where friction stay hinges bear more weight. If your window won't stay open at the angle you set, sags when opened, or makes grinding noises, the hinges need attention.",
      urgency: "Common"
    },
    {
      icon: Lock,
      title: "Lock & Handle Issues",
      description: "Creates both inconvenience and security concerns. A lock that won't engage properly or a loose handle aren't just annoying – they compromise your home's security.",
      urgency: "Security"
    },
    {
      icon: Wind,
      title: "Seal Deterioration",
      description: "Might seem minor, but those brush seals and compression gaskets around your frame edges are crucial for thermal and acoustic performance. When you start feeling draughts or notice increased outside noise, degraded seals are often the culprit.",
      urgency: "Performance"
    },
    {
      icon: GlassWater,
      title: "Glass Damage",
      description: "From accidental impacts or gradual deterioration requires immediate attention, not just for aesthetics but for maintaining your secondary glazing's insulation properties.",
      urgency: "Urgent"
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-4">Understanding Common Secondary Glazing Repairs</h2>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Most secondary glazing issues can be repaired quickly and cost-effectively without replacing the entire unit. 
        Here are the most common problems we encounter:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {issues.map((issue, index) => (
          <Card key={index} className="border-border/50">
            <CardHeader className="flex flex-row items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <issue.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-lg">{issue.title}</CardTitle>
                <span className="text-xs text-muted-foreground">{issue.urgency}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{issue.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CommonRepairIssues;
