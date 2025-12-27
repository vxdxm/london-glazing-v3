import { Thermometer, Volume2, PoundSterling } from "lucide-react";

const PerformanceSection = () => {
  const metrics = [
    {
      icon: Thermometer,
      label: "Thermal Performance",
      value: "50-60%",
      description: "heat loss reduction",
      note: "(compared to 60-70% for fixed systems)"
    },
    {
      icon: Volume2,
      label: "Acoustic Performance",
      value: "70-75%",
      description: "noise reduction",
      note: "with quality acoustic glass"
    },
    {
      icon: PoundSterling,
      label: "Annual Savings",
      value: "£400-£800",
      description: "typical savings",
      note: "for a single-glazed property"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Performance That Delivers</h2>
      
      <p className="text-muted-foreground mb-8 text-lg">
        While lift-out systems offer slightly less performance than fixed alternatives due to small clip or magnetic gaps, they still deliver excellent results:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 text-center">
            <metric.icon className="h-10 w-10 text-primary mx-auto mb-4" />
            <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
            <p className="text-4xl font-bold text-primary mb-1">{metric.value}</p>
            <p className="font-medium">{metric.description}</p>
            <p className="text-sm text-muted-foreground mt-2">{metric.note}</p>
          </div>
        ))}
      </div>

      <div className="bg-accent/50 border border-primary/20 rounded-lg p-6">
        <p className="text-lg text-center">
          The small performance trade-off is more than compensated by the seasonal flexibility — you get <strong>maximum insulation when you need it</strong>, and full access to original windows when you don't.
        </p>
      </div>
    </section>
  );
};

export default PerformanceSection;
