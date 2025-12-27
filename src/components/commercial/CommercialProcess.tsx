import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, ClipboardList, FileText, Wrench } from "lucide-react";

const CommercialProcess = () => {
  const steps = [
    {
      icon: MessageSquare,
      step: "1",
      title: "Initial Consultation",
      description: "Discussion with facilities managers, property directors, and business owners to understand objectives, review building constraints, and outline solutions with potential benefits and ROI projections."
    },
    {
      icon: ClipboardList,
      step: "2",
      title: "Technical Site Survey",
      description: "Detailed assessment by commercial specialists including heritage building considerations, acoustic and thermal performance calculations, and comprehensive documentation for quotation preparation."
    },
    {
      icon: FileText,
      step: "3",
      title: "Detailed Quotation",
      description: "Comprehensive cost breakdown with ROI analysis, energy savings projections, specification details, timeline, and installation approach tailored to minimize business disruption."
    },
    {
      icon: Wrench,
      step: "4",
      title: "Professional Installation",
      description: "Experienced commercial teams maintain business continuity with flexible scheduling, out-of-hours options, phased approaches for large buildings, and health & safety compliance throughout."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Our Commercial Project Process
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-shadow">
              <CardContent className="p-6 pt-8">
                <div className="absolute -top-4 left-6 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div className="mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <img 
            src="https://cdn.marblism.com/Ab7lyppDCCG.webp" 
            alt="Professional commercial glazing installation process" 
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CommercialProcess;