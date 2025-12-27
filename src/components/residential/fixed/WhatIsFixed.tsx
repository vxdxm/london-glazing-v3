import { AspectRatio } from "@/components/ui/aspect-ratio";

export const WhatIsFixed = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">What is Fixed Secondary Glazing?</h2>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <p className="text-muted-foreground mb-4">
            Fixed secondary glazing consists of permanently sealed glass units installed 50-100mm in front of your existing windows. Unlike hinged or lift-out alternatives, these units have no opening mechanism – they're simply screwed into your window reveal and sealed around the perimeter for maximum performance.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Key Differences from Other Types:</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-medium">Fixed</span>
              <span className="text-muted-foreground">Permanently sealed, no opening mechanism, occasional screw removal for access (£250-£550 per window)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm font-medium">Hinged</span>
              <span className="text-muted-foreground">Opens on hinges like a door for regular access (£400-£700 per window)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-sm font-medium">Lift-out</span>
              <span className="text-muted-foreground">Completely removable with clips for seasonal access (£300-£500 per window)</span>
            </li>
          </ul>
        </div>
        
        <div>
          <AspectRatio ratio={4/3} className="bg-muted rounded-lg overflow-hidden">
            <img 
              src="https://cdn.marblism.com/pLK92gdT2q9.webp" 
              alt="Fixed secondary glazing installation showing permanently sealed unit" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
      </div>
      
      <div className="bg-muted/50 p-6 rounded-lg">
        <p className="text-muted-foreground">
          <strong className="text-foreground">The main trade-off is simple:</strong> access convenience versus performance and cost. Fixed glazing delivers maximum thermal and acoustic benefits at the lowest price, while sacrificing easy access to the primary window behind.
        </p>
      </div>
    </section>
  );
};
