import { AspectRatio } from "@/components/ui/aspect-ratio";

export const FixedGlassSpecs = () => {
  const glassOptions = [
    {
      thickness: "4mm standard",
      description: "Quiet residential areas, budget priority",
      price: "£250-£350 per window",
      recommended: false
    },
    {
      thickness: "6.4mm acoustic",
      description: "Suburban areas with moderate traffic",
      price: "£300-£400 per window",
      recommended: false
    },
    {
      thickness: "8.8mm medium performance",
      description: "Busy urban streets and A-roads",
      price: "£400-£500 per window",
      recommended: false
    },
    {
      thickness: "10.8mm high performance",
      description: "City centers, railways, flight paths",
      price: "£450-£550 per window",
      recommended: true
    },
    {
      thickness: "12.8mm premium",
      description: "Maximum flight path noise, extreme environments",
      price: "£500-£650 per window",
      recommended: false
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Glass Specifications Guide</h2>
      <p className="text-muted-foreground mb-8">
        Choosing appropriate glass thickness depends on your specific noise environment and budget:
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-3">
          {glassOptions.map((option, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-lg border ${option.recommended ? 'border-primary bg-primary/5' : 'border-border bg-card'}`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">{option.thickness}</h3>
                {option.recommended && (
                  <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded">Recommended</span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-1">{option.description}</p>
              <p className="text-sm font-medium text-primary">{option.price}</p>
            </div>
          ))}
        </div>
        
        <div>
          <AspectRatio ratio={4/3} className="bg-muted rounded-lg overflow-hidden mb-4">
            <img 
              src="https://cdn.marblism.com/kTbAgQgHmNq.webp" 
              alt="Glass thickness options for fixed secondary glazing" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">For flight path properties:</strong> 10.8mm represents the minimum recommendation, with 12.8mm providing ultimate protection for properties directly under approach paths.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
