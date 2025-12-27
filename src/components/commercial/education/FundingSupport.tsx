import { Wallet, Building, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const FundingSupport = () => {
  const fundingOptions = [
    {
      icon: Wallet,
      title: "Condition Improvement Fund (CIF)",
      description: "The DfE's CIF provides capital funding for maintained schools and academies.",
      details: "Secondary glazing is eligible as building improvement that enhances learning environments and reduces operational costs."
    },
    {
      icon: Building,
      title: "LCVAP Funding",
      description: "The Local Capital Voluntary-Aided Programme supports voluntary-aided schools.",
      details: "Often faith schools with capital improvements, including thermal and acoustic upgrades."
    },
    {
      icon: Users,
      title: "Multi-Academy Trust Programs",
      description: "MATs benefit from standardized solutions across multiple schools.",
      details: "Achieve significant volume discounts while ensuring consistency of provision across their estate."
    },
    {
      icon: Calendar,
      title: "Phased Investment Approaches",
      description: "We work with schools to prioritize the most critical areas.",
      details: "Start with exam halls or noisiest classrooms, then expand over multiple academic years as budget allows."
    }
  ];

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Funding & Financial Support
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Multiple funding routes available for educational institutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {fundingOptions.map((option, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <option.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">{option.description}</p>
                <p className="text-sm text-primary font-medium">{option.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
