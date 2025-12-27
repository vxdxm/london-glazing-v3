import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Ruler, FileText, Factory, Wrench } from "lucide-react";

const processSteps = [
  {
    icon: MessageSquare,
    title: "Initial Consultation",
    description: "Free home visit to assess your specific sash windows, discuss your priorities for energy and noise improvements, evaluate any heritage constraints, and understand your budget requirements."
  },
  {
    icon: Ruler,
    title: "Detailed Survey & Measurement",
    description: "Precise measurement of each sash window (critical for custom manufacturing), assessment of window reveals and frame condition, photography for manufacturing reference, and evaluation of any architectural features requiring accommodation."
  },
  {
    icon: FileText,
    title: "Specification & Quotation",
    description: "Detailed recommendations for each window including style selection, glass specifications, frame colors, full cost breakdown, and expected performance improvements."
  },
  {
    icon: Factory,
    title: "Custom Manufacturing",
    description: "Each unit specifically created for your exact window dimensions, with quality control throughout the 4-6 week manufacturing process."
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description: "Expert teams typically take 2-3 hours per window, including floor and furniture protection, discrete fixing installation, perfect adjustment and testing, operation demonstration, and thorough clean-up."
  }
];

const SashInstallationProcess = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-8">Professional Installation Process</h2>
      <p className="text-muted-foreground mb-8">
        Our systematic approach ensures perfect results for your sash windows:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {processSteps.map((step, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow relative">
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
              {index + 1}
            </div>
            <CardHeader className="pt-6">
              <div className="flex items-center gap-3">
                <step.icon className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SashInstallationProcess;
