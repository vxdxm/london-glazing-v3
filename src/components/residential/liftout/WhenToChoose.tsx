import { Check, Home, Building, Shield, Plane, Calendar } from "lucide-react";

const WhenToChoose = () => {
  const idealCandidates = [
    {
      icon: Home,
      text: "Work from home in winter but travel extensively in summer"
    },
    {
      icon: Building,
      text: "Live in a rental property and can't make permanent alterations"
    },
    {
      icon: Check,
      text: "Own a listed building and want to trial secondary glazing first"
    },
    {
      icon: Shield,
      text: "Have ground floor windows where daily removal offers security flexibility"
    },
    {
      icon: Calendar,
      text: "Want occasional access without the daily operation complexity of hinged systems"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">When to Choose Lift-Out Over Fixed or Hinged</h2>
      
      <p className="text-muted-foreground mb-6 text-lg">
        <strong className="text-foreground">Seasonal use is the clear winner here.</strong> London's climate is perfect for lift-out systems — cold winters (2-8°C) where insulation matters, followed by mild summers (15-23°C) where natural ventilation feels wonderful.
      </p>

      <div className="bg-muted rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">You're Ideal for Lift-Out If You:</h3>
        <div className="space-y-4">
          {idealCandidates.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <item.icon className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <p className="text-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-l-4 border-primary pl-6">
        <p className="text-lg">
          <strong>Storage space is essential.</strong> You'll need somewhere to store panels for 6 months — typically a loft, garage, or under-bed storage. For a typical 12-window property, plan for 2-3 square metres of storage space.
        </p>
      </div>
    </section>
  );
};

export default WhenToChoose;
