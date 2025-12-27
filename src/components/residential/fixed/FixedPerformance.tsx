import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Thermometer, Volume2, Shield, Droplets, Lock } from "lucide-react";
import { Link } from "react-router-dom";

export const FixedPerformance = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Maximum Performance Benefits</h2>
      <p className="text-muted-foreground mb-8">
        Fixed secondary glazing's continuous sealed perimeter delivers measurable advantages over alternatives with opening mechanisms. Understanding <Link to="/blog/thermal-efficiency-benefits" className="text-primary hover:underline">optimal air gap spacing for fixed units</Link> maximises these benefits.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <Thermometer className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Best Thermal Insulation Results</h3>
            </div>
            <p className="text-muted-foreground mb-3">
              <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">Superior thermal performance</Link> - the uninterrupted seal eliminates air leakage that reduces other systems' effectiveness. U-values improve from typically 2.0-3.0 W/m²K to 1.0-1.5 W/m²K – essentially transforming single-glazed windows to near-modern double glazing performance.
            </p>
            <p className="text-sm text-primary font-medium">
              Annual energy savings of £600-£1,200 are common on properties with significant glass areas, creating payback periods of 2.5-4 years.
            </p>
          </div>
          
          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <Volume2 className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Highest Acoustic Performance</h3>
            </div>
            <p className="text-muted-foreground mb-3">
              Achieves the <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">highest acoustic performance</Link> of all secondary glazing types. That same continuous seal prevents sound leakage that compromises hinged units at hinge points. Learn about <Link to="/blog/sound-transmission-guide" className="text-primary hover:underline">sound transmission in fixed units</Link> for detailed specifications.
            </p>
            <p className="text-sm text-primary font-medium">
              Combined with heavy acoustic glass (10.8-12.8mm), total noise reductions of 75-85% transform unbearable environments into comfortable living spaces.
            </p>
          </div>
          
          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <Droplets className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Complete Condensation Control</h3>
            </div>
            <p className="text-muted-foreground">
              The sealed perimeter provides complete condensation control by keeping the inner glass surface consistently warmer, eliminating moisture buildup that can damage original window frames and cause mould growth.
            </p>
          </div>
          
          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <Lock className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Maximum Security</h3>
            </div>
            <p className="text-muted-foreground">
              <Link to="/benefits" className="text-primary hover:underline">Maximum security</Link> when permanently fixed - no opening mechanisms to compromise, creating an impenetrable additional barrier with laminated glass options that hold together when attacked.
            </p>
          </div>
          
          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Reliability and Longevity</h3>
            </div>
            <p className="text-muted-foreground">
              No moving parts means nothing to adjust, lubricate, or replace. Fixed units typically last 25-30 years versus 20-25 years for hinged alternatives where mechanical components eventually wear. This translates to lower long-term costs and maintenance hassles.
            </p>
          </div>
        </div>
        
        <div>
          <AspectRatio ratio={3/4} className="bg-muted rounded-lg overflow-hidden">
            <img 
              src="/images/fixed/fixed-3.jpg" 
              alt="Fixed secondary glazing performance benefits demonstration" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};
