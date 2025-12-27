import { SectionHeading } from "@/components/ui/section-heading";

export const CrittallGlassSpecs = () => {
  return (
    <section className="mb-16">
      <SectionHeading 
        title="Glass Specifications for Crittall Secondary Glazing"
        subtitle="Tailored recommendations for Crittall window challenges"
      />
      
      <div className="bg-muted/50 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Standard Options with Crittall-Specific Guidance</h3>
        <p className="text-muted-foreground mb-4">
          Since your Crittall already has thin single glazing, even 4mm standard secondary glass adds significant performance through the dual-layer effect. For thermal improvement, the air gap size matters more than glass thickness—focus on maximizing cavity depth.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="border rounded-lg p-5">
          <h4 className="font-semibold mb-3 text-primary">Noise Reduction</h4>
          <p className="text-sm text-muted-foreground mb-3">
            For urban Crittall properties, recommend minimum 6.8mm acoustic glass since Art Deco buildings often face busy streets.
          </p>
          <p className="text-sm font-medium">
            Extreme traffic: 8.8-10.8mm laminated options for London properties with heavy traffic exposure.
          </p>
        </div>
        
        <div className="border rounded-lg p-5">
          <h4 className="font-semibold mb-3 text-primary">Security Enhancement</h4>
          <p className="text-sm text-muted-foreground mb-3">
            For ground floor Crittall, minimum 6.4mm laminated glass provides protection since original windows are often vulnerable.
          </p>
          <p className="text-sm font-medium">
            Original Crittall often has old locks and thin glass requiring additional security.
          </p>
        </div>
        
        <div className="border rounded-lg p-5">
          <h4 className="font-semibold mb-3 text-primary">Condensation Elimination</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Works with any glass configuration—the air gap eliminates interior surface condensation regardless of specific glass choice.
          </p>
          <p className="text-sm font-medium">
            Focus on maximizing air gap depth for best condensation control.
          </p>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted">
              <th className="border p-3 text-left">Glass Type</th>
              <th className="border p-3 text-left">Best For</th>
              <th className="border p-3 text-left">Crittall Application</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-3 font-medium">4mm Float Glass</td>
              <td className="border p-3 text-muted-foreground">Basic thermal improvement</td>
              <td className="border p-3 text-muted-foreground">Quiet residential areas, mainly thermal benefits needed</td>
            </tr>
            <tr>
              <td className="border p-3 font-medium">6.4mm Laminated</td>
              <td className="border p-3 text-muted-foreground">Enhanced security + moderate acoustic</td>
              <td className="border p-3 text-muted-foreground">Ground floor wide windows in accessible locations</td>
            </tr>
            <tr>
              <td className="border p-3 font-medium">6.8mm Acoustic Laminated</td>
              <td className="border p-3 text-muted-foreground">Significant noise reduction</td>
              <td className="border p-3 text-muted-foreground">Street-facing Crittall, busy residential streets</td>
            </tr>
            <tr>
              <td className="border p-3 font-medium">8.8mm High-Performance</td>
              <td className="border p-3 text-muted-foreground">Superior noise reduction</td>
              <td className="border p-3 text-muted-foreground">Art Deco buildings facing busy roads</td>
            </tr>
            <tr>
              <td className="border p-3 font-medium">10.8mm Specialist</td>
              <td className="border p-3 text-muted-foreground">Exceptional performance</td>
              <td className="border p-3 text-muted-foreground">Main roads, railways, flight paths</td>
            </tr>
            <tr>
              <td className="border p-3 font-medium">12.8mm Maximum</td>
              <td className="border p-3 text-muted-foreground">Ultimate noise reduction</td>
              <td className="border p-3 text-muted-foreground">Most challenging noise situations</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
