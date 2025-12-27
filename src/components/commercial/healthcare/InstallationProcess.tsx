import { ClipboardCheck, Calendar, Wrench, CheckCircle } from "lucide-react";

export const InstallationProcess = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Consultation & Assessment",
      description: "Initial consultation with estates or facilities managers to understand specific clinical requirements. Site assessment includes acoustic surveys and clinical schedule coordination to minimize disruption."
    },
    {
      icon: Calendar,
      title: "Phased Planning",
      description: "Phased installation plans work by ward, department, or individual rooms. Out-of-hours installation available for sensitive clinical areas, ensuring minimal impact on patient care."
    },
    {
      icon: Wrench,
      title: "Professional Installation",
      description: "Strict infection control protocols maintained throughout. Room-by-room approaches avoid ward closures, with continuous patient care maintained during installation process."
    },
    {
      icon: CheckCircle,
      title: "Quality Control & Handover",
      description: "Comprehensive testing ensures HTM compliance. Staff training on operation and maintenance included, with full documentation for estates records and future reference."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Installation Process for Healthcare
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Designed around clinical operations to ensure continuity of care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
