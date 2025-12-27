export const FixedInstallation = () => {
  const steps = [
    {
      number: 1,
      title: "Consultation",
      description: "Assess suitability for fixed versus hinged options based on window usage patterns"
    },
    {
      number: 2,
      title: "Survey",
      description: "Precise measurements and primary window condition assessment"
    },
    {
      number: 3,
      title: "Specification",
      description: "Glass selection and frame color matching to interior aesthetics"
    },
    {
      number: 4,
      title: "Manufacturing",
      description: "Custom frames built to exact dimensions (4-6 week lead time)"
    },
    {
      number: 5,
      title: "Installation",
      description: "Professional fitting in 30-60 minutes per window"
    },
    {
      number: 6,
      title: "Quality Assurance",
      description: "Seal verification and access demonstration"
    },
    {
      number: 7,
      title: "Aftercare",
      description: "Comprehensive warranty and ongoing support"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Installation Process</h2>
      <p className="text-muted-foreground mb-8">
        Fixed secondary glazing installation follows a streamlined 7-step process:
      </p>
      
      <div className="grid md:grid-cols-7 gap-4">
        {steps.map((step) => (
          <div key={step.number} className="relative">
            <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold mb-3 mx-auto">
              {step.number}
            </div>
            <h3 className="font-semibold text-center mb-2">{step.title}</h3>
            <p className="text-xs text-muted-foreground text-center">{step.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-8 bg-muted/50 p-6 rounded-lg">
        <p className="text-muted-foreground text-center">
          The faster installation compared to hinged units means less disruption – a typical 12-window property completes in one long day rather than requiring multiple visits.
        </p>
      </div>
    </section>
  );
};
