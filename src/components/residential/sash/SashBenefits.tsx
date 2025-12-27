import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Thermometer, Volume2, Building2, Shield } from "lucide-react";

const SashBenefits = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-8">Comprehensive Benefits for Sash Windows</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Energy Efficiency */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Thermometer className="h-6 w-6 text-primary" />
              <CardTitle>Energy Efficiency & Cost Savings</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Secondary glazing delivers proven energy performance improvements specifically valuable for period sash windows:
            </p>
            <ul className="space-y-3">
              <li className="text-foreground/80">
                <strong>50-65% reduction in heat loss</strong> achieved through the insulating air gap created between your original window and the new secondary unit.
              </li>
              <li className="text-foreground/80">
                <strong>Typical annual savings of £300-£600 per window</strong> depending on your heating system, usage patterns, and window size. A small Victorian terrace with 8 sash windows could see £2,400-£4,800 in annual savings.
              </li>
              <li className="text-foreground/80">
                <strong>ROI payback period of 4-7 years</strong> makes this a sound financial investment that continues delivering value over its 20+ year lifespan.
              </li>
              <li className="text-foreground/80">
                <strong>Immediate comfort improvements</strong> include warmer rooms, elimination of cold window zones, consistent temperatures, and reduced condensation.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Noise Reduction */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Volume2 className="h-6 w-6 text-primary" />
              <CardTitle>Noise Reduction & Acoustic Comfort</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              The acoustic benefits of secondary glazing are particularly transformative for London period properties:
            </p>
            <ul className="space-y-3">
              <li className="text-foreground/80">
                <strong>70-80% noise reduction</strong> creates a peaceful home environment by creating an effective acoustic barrier between your living space and external noise sources.
              </li>
              <li className="text-foreground/80">
                <strong>Particularly effective for:</strong> Busy London roads and A-roads, railway lines and stations, flight paths from Heathrow and City Airport, construction areas, and busy nightlife districts.
              </li>
              <li className="text-foreground/80">
                <strong>Quality of life improvements</strong> include better sleep quality in bedrooms facing busy streets, comfortable work from home environments for video calls, peaceful family time, and protection from the mental health impacts of noise pollution.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Heritage Compliance */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Building2 className="h-6 w-6 text-primary" />
              <CardTitle>Heritage Property Compliance & Preservation</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Secondary glazing is specifically designed to work with protected period properties:
            </p>
            <ul className="space-y-3">
              <li className="text-foreground/80">
                <strong>Perfect for listed buildings</strong> (Grade I, II*, and II) as it preserves original window fabric completely while improving performance dramatically
              </li>
              <li className="text-foreground/80">
                <strong>Ideal for conservation areas</strong> across London boroughs where external alterations are restricted but internal improvements are typically permitted
              </li>
              <li className="text-foreground/80">
                <strong>Conservation officer approved</strong> approach that maintains period character while delivering modern performance standards
              </li>
              <li className="text-foreground/80">
                <strong>Protects original timber sash windows</strong> from deterioration while avoiding the heritage loss associated with replacement windows
              </li>
              <li className="text-foreground/80">
                <strong>Maintains property value</strong> by preserving authentic period features that buyers of heritage properties specifically seek
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Security */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary" />
              <CardTitle>Enhanced Security & Safety</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Additional security benefits include:
            </p>
            <ul className="space-y-3">
              <li className="text-foreground/80">
                <strong>Multiple barrier protection</strong> with laminated glass options that hold together when broken, delaying potential intruders
              </li>
              <li className="text-foreground/80">
                <strong>Additional locking mechanisms</strong> on secondary units providing extra security layers
              </li>
              <li className="text-foreground/80">
                <strong>Ground floor protection</strong> particularly valuable for vulnerable sash windows in bedrooms and living areas
              </li>
              <li className="text-foreground/80">
                <strong>Visible deterrent effect</strong> while maintaining the authentic appearance of your period property
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SashBenefits;
