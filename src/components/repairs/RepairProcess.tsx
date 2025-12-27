
import { Phone, ClipboardCheck, Wrench, TestTube, CheckCircle2 } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";

const RepairProcess = () => {
  const steps = [
    {
      number: "1",
      icon: Phone,
      title: "Contact & Booking",
      description: "Call, email, or WhatsApp us with your issue description. We'll ask diagnostic questions and can often provide cost estimates over the phone.",
      details: "Standard appointments book 5-7 days ahead, with priority (2-3 days, £25 surcharge) and emergency same-day service (£50 surcharge) available."
    },
    {
      number: "2",
      icon: ClipboardCheck,
      title: "On-Site Assessment",
      time: "30-45 minutes",
      description: "Our technician inspects your secondary glazing thoroughly, diagnoses the exact problem, and provides a fixed-price quote with no hidden costs.",
      details: "We'll discuss repair versus replacement options and answer all your questions."
    },
    {
      number: "3",
      icon: Wrench,
      title: "Repair Work",
      time: "30-70 minutes per window",
      description: "Once approved, we protect surrounding areas and complete the repair. Most common parts are carried in stock, allowing same-visit completion.",
      details: "Specialized parts requiring ordering mean a return visit at no extra call-out charge."
    },
    {
      number: "4",
      icon: TestTube,
      title: "Testing & Demonstration",
      description: "We thoroughly test the repaired window's operation and demonstrate proper use.",
      details: "You'll receive maintenance advice and warranty information."
    },
    {
      number: "5",
      icon: CheckCircle2,
      title: "Completion & Follow-up",
      description: "Area cleanup, detailed invoice, and flexible payment options.",
      details: "We follow up 1-2 weeks later to ensure everything's working perfectly."
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-4">Our 5-Step Repair Process</h2>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        We've refined our repair process to be efficient, transparent, and minimally disruptive to your home.
      </p>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 p-4 rounded-lg bg-card border border-border/50">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                {step.number}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold">{step.title}</h3>
                  {step.time && (
                    <span className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground">
                      {step.time}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm mb-1">{step.description}</p>
                <p className="text-muted-foreground text-xs italic">{step.details}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <OptimizedImage
            src="https://cdn.marblism.com/jk0UlMyIZtO.webp"
            alt="Secondary glazing repair process - technician at work"
            className="rounded-lg shadow-lg w-full object-cover h-full max-h-[500px]"
            aspectRatio={4/5}
          />
        </div>
      </div>
    </section>
  );
};

export default RepairProcess;
