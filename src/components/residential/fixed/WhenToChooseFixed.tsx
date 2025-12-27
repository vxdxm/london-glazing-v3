import { Home, Volume2, PoundSterling, Building2 } from "lucide-react";

export const WhenToChooseFixed = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">When to Choose Fixed Over Hinged Options</h2>
      <p className="text-muted-foreground mb-8">
        Fixed secondary glazing excels in specific situations where access isn't a priority but performance and cost-effectiveness are paramount.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Home className="w-8 h-8 text-primary" />
            <h3 className="text-xl font-semibold">Never-Opened Windows</h3>
          </div>
          <p className="text-muted-foreground">
            Perfect for Victorian and Georgian properties where upper floor windows are painted shut after decades of use. These windows were never intended for regular operation, making fixed glazing an ideal match. Similarly effective for decorative windows in stairwells, hallways, or windows blocked by furniture like bed heads or built-in wardrobes.
          </p>
        </div>
        
        <div className="bg-card border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Volume2 className="w-8 h-8 text-primary" />
            <h3 className="text-xl font-semibold">Extreme Noise Environments</h3>
          </div>
          <p className="text-muted-foreground">
            London's challenging acoustic environment makes fixed glazing particularly valuable. Properties under Heathrow flight paths experiencing 70-80+ dB aircraft noise every few minutes benefit from the continuous sealed perimeter. Major roads like the North and South Circular, A-roads, and railway lines create constant noise that fixed glazing addresses with up to 75% noise reduction through its superior sealing.
          </p>
        </div>
        
        <div className="bg-card border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <PoundSterling className="w-8 h-8 text-primary" />
            <h3 className="text-xl font-semibold">Budget-Conscious Maximum Performance</h3>
          </div>
          <p className="text-muted-foreground">
            When you need the best thermal and acoustic results at the lowest cost, fixed units deliver 60-70% heat loss reduction compared to 50-60% from hinged alternatives. The 20-40% cost savings per window multiply significantly across whole properties – a typical 12-window installation saves £1,200-£2,400 compared to hinged units.
          </p>
        </div>
        
        <div className="bg-card border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-8 h-8 text-primary" />
            <h3 className="text-xl font-semibold">Listed Building Requirements</h3>
          </div>
          <p className="text-muted-foreground">
            Grade II listed properties benefit from fixed glazing's minimal intervention approach. Conservation officers prefer the simplicity of permanently sealed units with no moving parts, viewing them as a clean, traditional solution that protects original windows indefinitely.
          </p>
        </div>
      </div>
    </section>
  );
};
