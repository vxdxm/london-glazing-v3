import React from "react";
import { ClipboardCheck, Ruler, FileText, Factory, Wrench, CheckCircle, HeartHandshake } from "lucide-react";

const HorizontalInstallation = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      step: 1,
      title: "Initial Consultation",
      description: "Free home visit to assess your wide windows, measure openings, discuss usage requirements, and determine whether standard or multi-track systems suit your applications."
    },
    {
      icon: Ruler,
      step: 2,
      title: "Detailed Survey",
      description: "Precise width measurements critical for track length accuracy, reveal depth assessment, primary window operation evaluation, and furniture clearance considerations."
    },
    {
      icon: FileText,
      step: 3,
      title: "Specification & Quotation",
      description: "System recommendation (standard or multi-track), panel count determination, glass specification selection, track configuration planning, and comprehensive cost breakdown."
    },
    {
      icon: Factory,
      step: 4,
      title: "Custom Manufacturing",
      description: "Track systems fabricated to exact width measurements, panels custom-made with precision hardware, and quality control ensuring smooth operation. 4-6 weeks typical."
    },
    {
      icon: Wrench,
      step: 5,
      title: "Professional Installation",
      description: "Track system mounted precisely in window reveals with critical leveling for smooth operation, panels fitted and adjusted for perfect gliding. 2-4 hours per window."
    },
    {
      icon: CheckCircle,
      step: 6,
      title: "Quality Assurance",
      description: "Complete operational testing ensuring smooth gliding movement, seal integrity verification, locking mechanism testing, and operation demonstration."
    },
    {
      icon: HeartHandshake,
      step: 7,
      title: "Ongoing Aftercare",
      description: "Comprehensive warranty coverage, detailed maintenance guidance for track cleaning and lubrication, and ongoing support for optimal long-term performance."
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-foreground">Professional Installation Process</h2>
      
      <h3 className="text-xl font-semibold mb-4 text-foreground">Comprehensive Seven-Step Approach</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {steps.slice(0, 4).map((item) => (
          <div key={item.step} className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                {item.step}
              </div>
              <item.icon className="h-5 w-5 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
            <p className="text-xs text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {steps.slice(4).map((item) => (
          <div key={item.step} className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                {item.step}
              </div>
              <item.icon className="h-5 w-5 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
            <p className="text-xs text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
        <h4 className="font-semibold text-foreground mb-3">Critical Installation Considerations</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• <strong className="text-foreground">Level track installation</strong> essential for smooth gliding operation and prevents binding over time</li>
          <li>• <strong className="text-foreground">Minimal disruption</strong> as all work occurs internally with no external modifications required</li>
          <li>• <strong className="text-foreground">Furniture accommodation</strong> may require temporary moving for reveal access</li>
        </ul>
      </div>
    </section>
  );
};

export default HorizontalInstallation;
