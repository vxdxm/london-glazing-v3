import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const HomepageContent = () => {
  return (
    <article className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Main Introduction */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Secondary Glazing Specialists Serving London and the South East
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Secondary Glazing Specialist is London's trusted provider of high-quality secondary glazing solutions 
            for residential and commercial properties. With over two decades of experience, we have helped 
            thousands of homeowners, landlords, and businesses improve their properties' thermal efficiency, 
            reduce noise pollution, and enhance security—all while preserving the original character of their windows.
          </p>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Unlike replacement double glazing, secondary glazing involves fitting a discreet internal window 
            system behind your existing windows. This approach is particularly valuable for period properties, 
            listed buildings, and homes in conservation areas where external alterations are restricted. Our 
            slim aluminium frames and precision-engineered panels integrate seamlessly with original sash 
            windows, casement windows, and Crittall-style frames without compromising their historic appearance.
          </p>
        </section>

        {/* Why Choose Secondary Glazing */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Why Choose Secondary Glazing Over Replacement Windows?
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Many property owners face a difficult choice when their windows underperform: replace them entirely 
            or find an alternative solution. Replacement windows can be expensive, disruptive, and in many cases 
            simply not permitted. Secondary glazing offers a practical, cost-effective alternative that delivers 
            comparable—or often superior—performance benefits.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Noise Reduction Up to 80%</h3>
              <p className="text-muted-foreground leading-relaxed">
                Secondary glazing creates a substantial air gap between your original window and the new internal 
                panel—typically 100mm to 150mm. This cavity acts as a highly effective acoustic buffer, reducing 
                external noise by 45 to 50 decibels. For homes near busy roads, railways, airports, or urban 
                centres, this can mean the difference between constant disruption and peaceful quiet. Our acoustic 
                glass options, including 6.4mm and 6.8mm laminated glass, provide even greater sound insulation 
                for the most challenging environments.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Thermal Efficiency Improvement of 60%</h3>
              <p className="text-muted-foreground leading-relaxed">
                Heat loss through windows accounts for up to 30% of a building's total energy wastage. Secondary 
                glazing dramatically reduces this by creating an insulating barrier that prevents warm air from 
                escaping during winter and keeps interiors cooler in summer. Our customers typically report heating 
                bill reductions of 15% to 25% following installation. Combined with our draught-proofing seals, 
                secondary glazing eliminates cold spots near windows and reduces condensation on the original glass.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Enhanced Security</h3>
              <p className="text-muted-foreground leading-relaxed">
                An additional layer of glazing creates a significant physical barrier against intruders. Our 
                secondary glazing systems feature multi-point locking mechanisms and toughened or laminated 
                glass options that resist forced entry. For ground-floor properties, basement flats, and 
                commercial premises, this added security provides valuable peace of mind without the need 
                for unsightly bars or grilles.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Listed Building Compliant</h3>
              <p className="text-muted-foreground leading-relaxed">
                Secondary glazing is the preferred solution for Grade I, Grade II*, and Grade II listed buildings 
                because it is fully reversible and does not alter the external fabric of the property. Conservation 
                officers regularly recommend secondary glazing as a sympathetic improvement that maintains 
                heritage value while delivering modern performance standards. We work closely with local 
                authorities and heritage consultants to ensure all installations meet regulatory requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Our Installation Process
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Every secondary glazing project begins with a comprehensive survey of your property. Our experienced 
            surveyors assess your existing windows, discuss your specific requirements—whether noise reduction, 
            thermal improvement, or security—and recommend the most appropriate system for your needs.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground">Free Survey and Quotation</h4>
                <p className="text-muted-foreground">
                  We visit your property at a convenient time to take precise measurements and understand 
                  your priorities. You receive a detailed, no-obligation quote within 48 hours.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground">Bespoke Manufacturing</h4>
                <p className="text-muted-foreground">
                  Each panel is manufactured to exact specifications at our London workshop. We use 
                  powder-coated aluminium frames available in white, brown, black, and bespoke RAL colours 
                  to complement your interior décor.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground">Professional Installation</h4>
                <p className="text-muted-foreground">
                  Our skilled installers fit your secondary glazing with minimal disruption. Most residential 
                  installations are completed within one to two days, with no external scaffolding required. 
                  We leave your property clean and tidy, removing all packaging and debris.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground">Aftercare and Guarantee</h4>
                <p className="text-muted-foreground">
                  All installations include a comprehensive 10-year guarantee on frames and a 5-year 
                  guarantee on moving parts. We provide full maintenance guidance and offer a responsive 
                  repair service should any issues arise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Areas We Serve Across London and the South East
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            From our base in West London, we provide secondary glazing installation, repair, and maintenance 
            services throughout Greater London and the surrounding counties. Our coverage includes Central 
            London boroughs such as Westminster, Kensington and Chelsea, Camden, and the City of London, as 
            well as residential areas in North, South, East, and West London.
          </p>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Beyond the M25, we regularly work in Surrey, Kent, Buckinghamshire, Hertfordshire, and Essex. 
            Whether you own a Georgian townhouse in Hampstead, a Victorian terrace in Clapham, an Edwardian 
            semi in Ealing, or a contemporary apartment in Canary Wharf, we have the expertise and experience 
            to deliver outstanding results.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <Link to="/locations" className="text-primary hover:underline">
              View all our service locations
            </Link>{" "}
            to find secondary glazing specialists near you, or{" "}
            <Link to="/contact" className="text-primary hover:underline">
              contact us directly
            </Link>{" "}
            to arrange your free survey.
          </p>
        </section>

        {/* Call to Action */}
        <section className="max-w-4xl mx-auto text-center bg-primary/5 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Ready to Transform Your Windows?
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Contact Secondary Glazing Specialist today for a free, no-obligation survey and quotation. 
            Our friendly team is ready to discuss your requirements and recommend the perfect solution 
            for your property.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/quote-request" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Request a Free Quote
            </Link>
            <Link 
              to="/faqs" 
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Read Our FAQs
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
};
