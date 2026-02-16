import { CheckCircle, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Service area links
const serviceAreas = [
  { title: "Central London", href: "/areas/central-london" },
  { title: "North London", href: "/areas/north-london" },
  { title: "South London", href: "/areas/south-london" },
  { title: "East London", href: "/areas/east-london" },
  { title: "West London", href: "/areas/west-london" },
  { title: "Greater London", href: "/areas/greater-london" },
  { title: "Home Counties", href: "/areas/home-counties" },
];

// Glazing types
const glazingTypes = [
  { title: "Fixed Secondary Glazing", href: "/residential/fixed-secondary-glazing" },
  { title: "Vertical Sliding Sash", href: "/residential/sash-windows" },
  { title: "Horizontal Sliding", href: "/residential/horizontal-sliding" },
  { title: "Hinged Casement", href: "/residential/casement-windows" },
  { title: "Lift Out Panels", href: "/residential/lift-out" },
  { title: "Modern Solutions", href: "/residential/modern-solutions" },
];

// Specialist services
const specialistServices = [
  { title: "Listed Buildings", href: "/listed-buildings-secondary-glazing" },
  { title: "Conservation Areas", href: "/conservation-areas-secondary-glazing" },
  { title: "Victorian Windows", href: "/victorian-windows-secondary-glazing" },
  { title: "Georgian Windows", href: "/georgian-windows-secondary-glazing" },
  { title: "Edwardian Properties", href: "/edwardian-property-secondary-glazing" },
  { title: "Sash Windows", href: "/sash-window-secondary-glazing" },
  { title: "Thermal Insulation", href: "/thermal-insulation-secondary-glazing" },
  { title: "Noise Reduction", href: "/noise-reduction-secondary-glazing" },
];

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
            Secondary Glazing Specialist is London's trusted provider of high-quality{" "}
            <Link to="/residential" className="text-primary hover:underline">secondary glazing solutions</Link>{" "}
            for <Link to="/residential" className="text-primary hover:underline">residential</Link> and{" "}
            <Link to="/commercial" className="text-primary hover:underline">commercial properties</Link>. With over two decades of experience, we have helped 
            thousands of homeowners, landlords, and businesses improve their properties'{" "}
            <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">thermal efficiency</Link>, 
            reduce <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">noise pollution</Link>, and enhance security—all while preserving the original character of their windows.
          </p>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Unlike replacement double glazing, secondary glazing involves fitting a discreet internal window 
            system behind your existing windows. This approach is particularly valuable for{" "}
            <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian period properties</Link>,{" "}
            <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed buildings</Link>, and homes in{" "}
            <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">conservation areas</Link> where external alterations are restricted. Our 
            slim aluminium frames and precision-engineered panels integrate seamlessly with original{" "}
            <Link to="/sash-window-secondary-glazing" className="text-primary hover:underline">sash windows</Link>,{" "}
            <Link to="/residential/casement-windows" className="text-primary hover:underline">casement windows</Link>, and Crittall-style frames without compromising their historic appearance.
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
            simply not permitted in <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">conservation areas</Link> or{" "}
            <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed buildings</Link>. Secondary glazing offers a practical, cost-effective alternative that delivers 
            comparable—or often superior—performance benefits.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                <Link to="/noise-reduction-secondary-glazing" className="hover:text-primary">Noise Reduction Up to 80%</Link>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Secondary glazing creates a substantial air gap between your original window and the new internal 
                panel—typically 100mm to 150mm. This cavity acts as a highly effective acoustic buffer, reducing 
                external noise by 45 to 50 decibels. Our{" "}
                <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">
                  noise reduction secondary glazing
                </Link>{" "}
                is ideal for homes near busy roads in <Link to="/areas/central-london" className="text-primary hover:underline">Central London</Link>, railways, airports, or urban centres. Acoustic 
                glass options, including 6.4mm and 6.8mm laminated glass, provide exceptional sound insulation 
                for the most challenging environments.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                <Link to="/thermal-insulation-secondary-glazing" className="hover:text-primary">Thermal Efficiency Improvement of 65%</Link>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Heat loss through windows accounts for up to 30% of a building's total energy wastage. Our{" "}
                <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">
                  thermal insulation secondary glazing
                </Link>{" "}
                dramatically reduces this by creating an insulating barrier that prevents warm air from 
                escaping during winter and keeps interiors cooler in summer. Customers typically report heating 
                bill reductions of 15% to 25% following installation, with improved EPC ratings and 
                eliminated cold spots near windows.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Enhanced Security</h3>
              <p className="text-muted-foreground leading-relaxed">
                An additional layer of glazing creates a significant physical barrier against intruders. Our{" "}
                <Link to="/residential/fixed-secondary-glazing" className="text-primary hover:underline">secondary glazing systems</Link> feature multi-point locking mechanisms and toughened or laminated 
                glass options that resist forced entry. For ground-floor properties, basement flats in{" "}
                <Link to="/areas/central-london" className="text-primary hover:underline">Central London</Link>, and{" "}
                <Link to="/commercial" className="text-primary hover:underline">commercial premises</Link>, this added security provides valuable peace of mind without the need 
                for unsightly bars or grilles.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Listed Building Compliant</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you own a{" "}
                <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">
                  Grade I, II*, or II listed building
                </Link>{" "}
                or live in a{" "}
                <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">
                  conservation area
                </Link>, our secondary glazing is fully reversible and does not alter the external fabric 
                of your property. Conservation officers regularly recommend our solutions as sympathetic 
                improvements that maintain heritage value while delivering modern performance standards.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-muted/30 p-6 rounded-lg">
            <p className="text-muted-foreground leading-relaxed">
              With over 15 years of experience, we specialise in secondary glazing for heritage properties, 
              including{" "}
              <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">
                Victorian sash windows
              </Link>,{" "}
              <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline">
                Georgian period properties
              </Link>, and{" "}
              <Link to="/edwardian-property-secondary-glazing" className="text-primary hover:underline">
                Edwardian homes
              </Link>. Our expert team works closely with homeowners across{" "}
              <Link to="/areas/north-london" className="text-primary hover:underline">North London</Link>,{" "}
              <Link to="/areas/south-london" className="text-primary hover:underline">South London</Link>,{" "}
              <Link to="/areas/west-london" className="text-primary hover:underline">West London</Link>, and{" "}
              <Link to="/areas/east-london" className="text-primary hover:underline">East London</Link> to navigate planning requirements and 
              deliver bespoke solutions that preserve architectural character while dramatically improving 
              comfort and efficiency.
            </p>
          </div>
        </section>

        {/* Glazing Types Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Secondary Glazing Types We Install
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            We offer a comprehensive range of <Link to="/residential" className="text-primary hover:underline">secondary glazing systems</Link> to suit every window type and requirement. 
            From <Link to="/residential/sash-windows" className="text-primary hover:underline">vertical sliding sash</Link> systems that match traditional windows to{" "}
            <Link to="/residential/fixed-secondary-glazing" className="text-primary hover:underline">fixed panels</Link> for maximum acoustic performance.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {glazingTypes.map((type) => (
              <Link 
                key={type.href}
                to={type.href}
                className="flex items-center gap-2 p-3 bg-card rounded-lg border hover:border-primary/50 hover:shadow-sm transition-all group"
              >
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                <span className="text-foreground group-hover:text-primary transition-colors">{type.title}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Specialist Services Quick Links */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Specialist Secondary Glazing Services
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            We provide specialist glazing solutions for heritage properties including{" "}
            <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed buildings</Link>,{" "}
            <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">conservation areas</Link>, and period homes. 
            Our expertise covers <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian</Link>,{" "}
            <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline">Georgian</Link>, and{" "}
            <Link to="/edwardian-property-secondary-glazing" className="text-primary hover:underline">Edwardian</Link> properties.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {specialistServices.map((service) => (
              <Link 
                key={service.href}
                to={service.href}
                className="flex items-center gap-2 p-3 bg-card rounded-lg border hover:border-primary/50 hover:shadow-sm transition-all group"
              >
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                <span className="text-sm text-foreground group-hover:text-primary transition-colors">{service.title}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Our Process */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Our Installation Process
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Every secondary glazing project begins with a comprehensive survey of your property. Our experienced 
            surveyors assess your existing windows, discuss your specific requirements—whether{" "}
            <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">noise reduction</Link>,{" "}
            <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">thermal improvement</Link>, or security—and recommend the most appropriate system for your needs.{" "}
            <Link to="/quote-request" className="text-primary hover:underline">Request a free survey</Link> today.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground">Free Survey and Quotation</h4>
                <p className="text-muted-foreground">
                  We visit your property at a convenient time to take precise measurements and understand 
                  your priorities. You receive a detailed, no-obligation{" "}
                  <Link to="/quote-request" className="text-primary hover:underline">quote</Link> within 48 hours.
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
                  Our skilled installers fit your secondary glazing with minimal disruption across{" "}
                  <Link to="/areas/central-london" className="text-primary hover:underline">Central London</Link>,{" "}
                  <Link to="/areas/greater-london" className="text-primary hover:underline">Greater London</Link>, and the{" "}
                  <Link to="/areas/home-counties" className="text-primary hover:underline">Home Counties</Link>. Most residential 
                  installations are completed within one to two days, with no external scaffolding required.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground">Aftercare and Guarantee</h4>
                <p className="text-muted-foreground">
                  All installations include a comprehensive 10-year guarantee on frames and a 5-year 
                  guarantee on moving parts. We provide full maintenance guidance and offer a responsive{" "}
                  <Link to="/repairs" className="text-primary hover:underline">repair service</Link> should any issues arise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas - Major Section */}
        <section className="max-w-4xl mx-auto mb-16 bg-muted/30 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">
              Areas We Serve Across London
            </h2>
          </div>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            From our base in <Link to="/areas/west-london" className="text-primary hover:underline">West London</Link>, we provide{" "}
            <Link to="/residential" className="text-primary hover:underline">secondary glazing installation</Link>,{" "}
            <Link to="/repairs" className="text-primary hover:underline">repair</Link>, and maintenance 
            services throughout <Link to="/areas/greater-london" className="text-primary hover:underline">Greater London</Link> and the surrounding counties. Our coverage includes{" "}
            <Link to="/areas/central-london" className="text-primary hover:underline">Central London</Link> boroughs such as Westminster, Kensington and Chelsea, Camden, and the City of London, as 
            well as residential areas in <Link to="/areas/north-london" className="text-primary hover:underline">North</Link>,{" "}
            <Link to="/areas/south-london" className="text-primary hover:underline">South</Link>,{" "}
            <Link to="/areas/east-london" className="text-primary hover:underline">East</Link>, and{" "}
            <Link to="/areas/west-london" className="text-primary hover:underline">West London</Link>.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6">
            {serviceAreas.map((area) => (
              <Link 
                key={area.href}
                to={area.href}
                className="flex items-center gap-2 p-3 bg-background rounded-lg border hover:border-primary/50 hover:shadow-sm transition-all group"
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-foreground group-hover:text-primary transition-colors">{area.title}</span>
              </Link>
            ))}
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            Beyond the M25, we regularly work in Surrey, Kent, Buckinghamshire, Hertfordshire, and Essex via the{" "}
            <Link to="/areas/home-counties" className="text-primary hover:underline">Home Counties</Link> service area. 
            Whether you own a <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline">Georgian townhouse</Link> in Hampstead, 
            a <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian terrace</Link> in Clapham, 
            an <Link to="/edwardian-property-secondary-glazing" className="text-primary hover:underline">Edwardian semi</Link> in Ealing, 
            or a contemporary apartment in Canary Wharf, we have the expertise and experience 
            to deliver outstanding results.
          </p>
        </section>

        {/* Resources Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Helpful Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              to="/quote-request"
              className="p-4 bg-card rounded-lg border hover:border-primary/50 hover:shadow-sm transition-all group"
            >
              <h3 className="font-semibold text-foreground group-hover:text-primary mb-2">Request a Quote</h3>
              <p className="text-sm text-muted-foreground">Get a free, no-obligation quote for your property</p>
            </Link>
            <Link 
              to="/case-studies"
              className="p-4 bg-card rounded-lg border hover:border-primary/50 hover:shadow-sm transition-all group"
            >
              <h3 className="font-semibold text-foreground group-hover:text-primary mb-2">Case Studies</h3>
              <p className="text-sm text-muted-foreground">See examples of our completed projects</p>
            </Link>
            <Link 
              to="/faqs"
              className="p-4 bg-card rounded-lg border hover:border-primary/50 hover:shadow-sm transition-all group"
            >
              <h3 className="font-semibold text-foreground group-hover:text-primary mb-2">FAQs</h3>
              <p className="text-sm text-muted-foreground">Find answers to common questions</p>
            </Link>
            <Link 
              to="/benefits"
              className="p-4 bg-card rounded-lg border hover:border-primary/50 hover:shadow-sm transition-all group"
            >
              <h3 className="font-semibold text-foreground group-hover:text-primary mb-2">Benefits</h3>
              <p className="text-sm text-muted-foreground">Learn about secondary glazing benefits</p>
            </Link>
            <Link 
              to="/repairs"
              className="p-4 bg-card rounded-lg border hover:border-primary/50 hover:shadow-sm transition-all group"
            >
              <h3 className="font-semibold text-foreground group-hover:text-primary mb-2">Repairs</h3>
              <p className="text-sm text-muted-foreground">Secondary glazing repair services</p>
            </Link>
            <Link 
              to="/blog/secondary-glazing-london-borough-guide"
              className="p-4 bg-card rounded-lg border hover:border-primary/50 hover:shadow-sm transition-all group"
            >
              <h3 className="font-semibold text-foreground group-hover:text-primary mb-2">London Borough Noise Guide</h3>
              <p className="text-sm text-muted-foreground">Borough-by-borough soundproofing guide</p>
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-4xl mx-auto text-center bg-primary/5 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Ready to Transform Your Windows?
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Contact Secondary Glazing Specialist today for a free, no-obligation survey and quotation. 
            Our friendly team is ready to discuss your requirements for{" "}
            <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">noise reduction</Link>,{" "}
            <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">thermal insulation</Link>, or{" "}
            <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">heritage property</Link> solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/quote-request" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Request a Free Quote
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Contact Us
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
