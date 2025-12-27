import { SectionHeading } from "@/components/ui/section-heading";

export const WhatAreCrittallWindows = () => {
  return (
    <section className="mb-16">
      <SectionHeading 
        title="What Are Crittall Windows?"
        subtitle="Iconic British design heritage from the 1920s-1950s"
      />
      
      <img 
        src="https://cdn.marblism.com/K1-HaLoYVmT.webp" 
        alt="Original Crittall windows showing distinctive grid pattern"
        className="w-full rounded-lg mb-8 shadow-lg"
      />
      
      <div className="prose max-w-none mb-8">
        <p className="text-lg text-muted-foreground mb-6">
          Crittall windows are iconic metal-framed windows from the 1920s-1950s that represent British design heritage at its finest. Created by Francis Crittall & Company, these distinctive windows epitomize modernist architecture, embodying the Art Deco period's Bauhaus influence and industrial aesthetic. Their geometric grid patterns and slim steel frames are instantly recognizable design icons that continue to define property character nearly a century later.
        </p>
        
        <p className="text-muted-foreground mb-8">
          The classic W20 and W40 ranges showcase various grid configurations, from 6-pane domestic windows to expansive 12-pane industrial installations. These windows emerged during the modernist architectural revolution, representing modernity, progress, and industrial sophistication. Today, they maintain design icon status, featured in architecture publications and sought after by design-conscious buyers who appreciate authentic heritage.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-muted/50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Where You'll Find Crittall Windows</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li><strong>1930s suburban homes:</strong> Middle-class modernity with original period features</li>
            <li><strong>Art Deco buildings (1920s-1930s):</strong> Geometric elegance in listed buildings</li>
            <li><strong>Factory/warehouse conversions:</strong> Authentic industrial heritage in urban lofts</li>
            <li><strong>Modernist villas:</strong> Clean lines with glass-focused design</li>
            <li><strong>Schools and public buildings:</strong> Often listed institutional architecture</li>
            <li><strong>Commercial buildings:</strong> Offices and retail from early-mid 20th century</li>
          </ul>
        </div>
        
        <div className="bg-muted/50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Why Owners Love Their Crittall Windows</h3>
          <p className="text-muted-foreground mb-4">
            The iconic grid pattern literally defines property character, creating an irreplaceable connection to the modernist movement. Authentic Crittall adds significant property desirability and value—they're currently trendy in industrial chic and contemporary design.
          </p>
          <p className="text-muted-foreground">
            The slim steel profiles and large glass areas represent architectural heritage that simply cannot be replicated with modern alternatives. Typical Crittall features black or dark green metal frames with geometric patterns visible from the street that define the entire property's exterior character.
          </p>
        </div>
      </div>
    </section>
  );
};
