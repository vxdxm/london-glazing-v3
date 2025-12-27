import { Calendar, Clock, ShieldCheck, CheckCircle } from "lucide-react";

export const InstallationProcess = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Holiday Installations",
      description: "Our preferred approach schedules major work during summer, Easter, or Christmas holidays when buildings are largely empty. This allows thorough installation without any classroom disruption."
    },
    {
      icon: Clock,
      title: "Term-Time Solutions",
      description: "When necessary, we can work room-by-room during term time, typically installing out-of-hours or during weekends. Each classroom installation usually takes just one day."
    },
    {
      icon: ShieldCheck,
      title: "Safeguarding Protocols",
      description: "All team members hold enhanced DBS checks, and we follow strict safeguarding procedures throughout the installation process. Site security and child protection remain paramount."
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "We provide BB93 acoustic testing verification, installation warranties, and comprehensive handover documentation. Staff training ensures ongoing operation and maintenance is straightforward."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Installation Process Designed for Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding that disruption to learning must be minimized, we have developed specialized installation processes for educational environments
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
