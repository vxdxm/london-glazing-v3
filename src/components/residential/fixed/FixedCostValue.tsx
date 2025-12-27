import { AspectRatio } from "@/components/ui/aspect-ratio";

export const FixedCostValue = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Cost and Value Proposition</h2>
      <p className="text-muted-foreground mb-8">
        Fixed secondary glazing represents exceptional value in London's expensive property market:
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Per Window Costs:</h3>
          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
              <span className="font-medium">Fixed units</span>
              <span className="text-primary font-bold">£250-£550 (most economical)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
              <span className="font-medium">Hinged units</span>
              <span className="text-muted-foreground">£400-£700 (premium for access)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
              <span className="font-medium">Lift-out units</span>
              <span className="text-muted-foreground">£300-£500 (middle ground)</span>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-4">Typical Property Savings:</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <strong>12 windows:</strong> Save £1,200-£2,400 choosing fixed over hinged
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <strong>20 windows:</strong> Save £2,000-£4,000 on larger properties
            </li>
          </ul>
        </div>
        
        <div>
          <AspectRatio ratio={4/3} className="bg-muted rounded-lg overflow-hidden mb-4">
            <img 
              src="https://cdn.marblism.com/01m9GFPCvEI.webp" 
              alt="Cost-effective fixed secondary glazing installation" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
          <p className="text-sm text-muted-foreground">
            The lower cost stems from simpler manufacturing – no hinges, handles, or alignment mechanisms. Installation is faster at 30-60 minutes per window versus 60-90 minutes for hinged units, reducing labour costs further.
          </p>
        </div>
      </div>
    </section>
  );
};
