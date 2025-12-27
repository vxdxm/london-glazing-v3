import { CheckCircle } from "lucide-react";

export const FixedAccessCleaning = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Access and Cleaning Made Simple</h2>
      <p className="text-muted-foreground mb-6">
        The biggest concern about fixed glazing is access for cleaning and maintenance. In practice, this proves far simpler than expected:
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="bg-card border rounded-lg p-6">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold">Exterior Cleaning</h3>
          </div>
          <p className="text-muted-foreground text-sm">
            Remains unchanged – your existing method (professional cleaners, ladders) works exactly as before since secondary glazing is fitted internally.
          </p>
        </div>
        
        <div className="bg-card border rounded-lg p-6">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold">Interior Surface</h3>
          </div>
          <p className="text-muted-foreground text-sm">
            Routine cleaning – simply wipe the glass like any window.
          </p>
        </div>
        
        <div className="bg-card border rounded-lg p-6">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold">Between-Panes Access</h3>
          </div>
          <p className="text-muted-foreground text-sm">
            Requires removing 4-8 screws around the frame, lifting out the panel, cleaning both surfaces, and replacing – typically taking 5-10 minutes once or twice yearly.
          </p>
        </div>
      </div>
      
      <div className="bg-muted/50 p-6 rounded-lg">
        <p className="text-muted-foreground">
          Most homeowners discover they rarely need this access. Upper floors are cleaned externally by professionals anyway, while sealed spaces between panes stay remarkably clean with minimal dust ingress.
        </p>
      </div>
    </section>
  );
};
