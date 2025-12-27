import React from "react";
import { Thermometer, Volume2, Shield, Sofa, Droplets, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const BayBenefits = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-foreground">Comprehensive Benefits of Bay Window Secondary Glazing</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Sofa className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Transform Your Cold Bay Zone</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Secondary glazing eliminates the cold spot phenomenon that makes bay areas uncomfortable. 
            Your bay window seat becomes a warm, usable space year-round - often becoming the family's 
            favorite spot for reading, relaxation, or morning coffee.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <Thermometer className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Dramatic Thermal Efficiency Improvements</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">Professional secondary glazing</Link> can reduce heat loss through bay windows by 45-60%, with typical 
            annual savings of £400-£800 per bay depending on size and current glazing. Understanding how <Link to="/blog/thermal-efficiency-benefits" className="text-primary hover:underline">air gap spacing works</Link> in bay window installations maximises performance. The large glass 
            surface area of bays means proportionally greater savings compared to standard windows.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Volume2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Exceptional Acoustic Performance</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Bay windows can achieve <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">exceptional acoustic performance</Link> with the right glazing specification. Bay windows face the street, capturing maximum traffic noise, sirens, and urban sounds. 
            Quality secondary glazing with acoustic glass can reduce noise levels by 70-80%, transforming 
            noisy front rooms into peaceful sanctuaries. See our <Link to="/blog/sound-transmission-guide" className="text-primary hover:underline">sound transmission guide</Link> for detailed specifications.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
              <Shield className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Heritage Preservation</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Secondary glazing preserves your authentic <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian</Link> or <Link to="/edwardian-property-secondary-glazing" className="text-primary hover:underline">Edwardian</Link> bay completely. Installed 
            internally, it's invisible from the street, maintaining your property's period character 
            and street scene contribution while delivering modern performance. Ideal for <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">conservation areas</Link>.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg">
              <Droplets className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Condensation Prevention</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Secondary glazing prevents condensation in bay window reveals by keeping the inner glass surface warmer. This eliminates moisture buildup, protects timber frames from rot, and prevents mould growth in the bay area.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <Lock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Enhanced Security for Ground-Floor Bays</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            <Link to="/benefits" className="text-primary hover:underline">Enhanced security</Link> for ground-floor bays is critical. Secondary glazing with laminated glass creates an additional barrier, adding valuable time and deterrence against break-ins through vulnerable street-facing windows.
          </p>
        </div>
      </div>

      <img 
        src="/images/bay-windows/bay-window-5.jpg" 
        alt="Bay window with secondary glazing benefits" 
        className="w-full rounded-lg shadow-lg"
      />
    </section>
  );
};

export default BayBenefits;
