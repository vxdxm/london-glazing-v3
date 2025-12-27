import { CheckCircle } from "lucide-react";

const WhyChooseCommercial = () => {
  const reasons = [
    {
      title: "Proven Commercial Experience",
      description: "Extensive portfolio across London's offices, hotels, hospitals, schools, and retail premises with track record of delivering 3-5 year payback on commercial investments."
    },
    {
      title: "Business Continuity Focus",
      description: "We understand operations can't stop. Our minimal disruption guarantee includes out-of-hours installation, phased approaches, and professional project management maintaining productivity throughout."
    },
    {
      title: "Heritage Building Specialists",
      description: "Experts in listed commercial buildings and conservation area properties with English Heritage-approved approaches that preserve character while delivering performance."
    },
    {
      title: "Full Commercial Support",
      description: "From initial consultation through long-term maintenance, we provide complete commercial project management with client references available in your specific sector."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Why Choose Us for Commercial Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseCommercial;