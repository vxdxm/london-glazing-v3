
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { CheckCircle } from "lucide-react";

const OfficeHero = () => {
  return (
    <div className="mb-16">
      <h1 className="text-4xl font-bold mb-4">Secondary Glazing for Office Buildings in London</h1>
      
      <div className="prose max-w-none mb-8 text-muted-foreground">
        <p className="text-xl font-medium text-foreground">
          Transform your London office building with professional secondary glazing solutions that deliver immediate results: 70-80% noise reduction, 30-50% energy savings, and minimal business disruption. Trusted by leading firms across the City, Canary Wharf, and West End for over two decades.
        </p>
      </div>
      
      <AspectRatio ratio={21 / 9} className="mb-8">
        <OptimizedImage 
          src="/lovable-uploads/9161feeb-12cc-4a83-adf6-9c9cc52dc4aa.png" 
          alt="Modern London office interior with secondary glazing installation showing floor-to-ceiling windows" 
          className="rounded-lg object-cover w-full h-full" 
          priority={true}
        />
      </AspectRatio>
      
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Why London Office Buildings Choose Secondary Glazing</h2>
        <p className="text-muted-foreground mb-4">
          Modern office environments face unprecedented challenges that directly impact productivity and operational costs. External noise from traffic, construction, and urban activity creates distracting workspaces, while poor thermal insulation leads to uncomfortable temperatures and soaring energy bills.
        </p>
        
        <h3 className="font-semibold text-lg mb-3">The Business Impact is Real:</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
            <span>Reduced productivity from noise distractions and temperature fluctuations</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
            <span>High HVAC costs due to heat loss through original windows</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
            <span>Poor EPC ratings affecting property value and rental potential</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
            <span>Staff complaints about comfort levels and working conditions</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
            <span>Tenant dissatisfaction in commercial lettings</span>
          </li>
        </ul>
        
        <div className="mt-6 p-4 bg-primary/10 rounded-lg">
          <p className="text-foreground font-medium">
            Secondary glazing addresses these challenges with proven ROI. One central London office retrofit achieved a <strong>28% reduction in annual heating costs</strong>, while noise levels dropped by over <strong>35 decibels</strong>, creating the quiet, comfortable environment essential for focused work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfficeHero;
