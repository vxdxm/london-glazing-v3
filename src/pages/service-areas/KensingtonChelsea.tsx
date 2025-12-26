import React from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  CheckCircle, 
  Landmark, 
  Shield, 
  ThermometerSun,
  Volume2,
  Clock,
  Award
} from "lucide-react";

const KensingtonChelsea = () => {
  const kensingtonAreas = [
    "South Kensington", "High Street Kensington", "Holland Park", "Earls Court", "West Kensington"
  ];
  
  const chelseaAreas = [
    "Kings Road", "Cheyne Walk", "Chelsea Embankment", "Sloane Square", "Worlds End"
  ];

  const knightsbridgeAreas = [
    "Brompton Road", "Knightsbridge proper", "Hans Place/Hans Crescent"
  ];

  const nottingHillAreas = [
    "Ladbroke Grove", "Portobello Road", "Pembridge Villas/Square", "Westbourne Grove"
  ];

  const conservationAreas = [
    "Boltons Conservation Area", "Brompton Conservation Area", "Cheyne Conservation Area",
    "Ladbroke Conservation Area", "Queens Gate Conservation Area", "Royal Hospital Conservation Area", "Stanley Conservation Area"
  ];

  const services = [
    { title: "Listed Buildings Secondary Glazing", href: "/listed-buildings-secondary-glazing", icon: Landmark },
    { title: "Conservation Areas Secondary Glazing", href: "/conservation-areas-secondary-glazing", icon: Shield },
    { title: "Victorian Windows Secondary Glazing", href: "/victorian-windows-secondary-glazing", icon: Clock },
    { title: "Georgian Windows Secondary Glazing", href: "/georgian-windows-secondary-glazing", icon: Award },
    { title: "Sash Window Secondary Glazing", href: "/sash-window-secondary-glazing", icon: CheckCircle },
    { title: "Thermal Insulation Secondary Glazing", href: "/thermal-insulation-secondary-glazing", icon: ThermometerSun },
    { title: "Noise Reduction Secondary Glazing", href: "/noise-reduction-secondary-glazing", icon: Volume2 },
    { title: "Edwardian Property Secondary Glazing", href: "/edwardian-property-secondary-glazing", icon: Landmark },
  ];

  const windowTypes = [
    { title: "Sash Windows", href: "/residential/sash-windows" },
    { title: "Casement Windows", href: "/residential/casement-windows" },
    { title: "Bay Windows", href: "/residential/bay-windows" },
    { title: "Fixed Secondary Glazing", href: "/residential/fixed-secondary-glazing" },
    { title: "Horizontal Sliding", href: "/residential/horizontal-sliding" },
    { title: "Crittall Windows", href: "/residential/crittall-windows" },
  ];

  const otherAreas = [
    { title: "Westminster", href: "/service-areas/westminster" },
    { title: "Camden", href: "/service-areas/camden" },
    { title: "Islington", href: "/service-areas/islington" },
    { title: "Central London", href: "/areas/central-london" },
    { title: "West London", href: "/areas/west-london" },
    { title: "South London", href: "/areas/south-london" },
    { title: "Home Counties", href: "/areas/home-counties" },
  ];

  return (
    <div className="min-h-screen">
      {/* SEO CONTENT - Hidden from users, visible to crawlers */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <header>
          <h1>Secondary Glazing Kensington &amp; Chelsea | Heritage Property Specialists</h1>
          <nav aria-label="Main Navigation">
            <a href="/">Home</a>
            <a href="/listed-buildings-secondary-glazing">Listed Buildings</a>
            <a href="/conservation-areas-secondary-glazing">Conservation Areas</a>
            <a href="/victorian-windows-secondary-glazing">Victorian Windows</a>
            <a href="/sash-window-secondary-glazing">Sash Windows</a>
            <a href="/georgian-windows-secondary-glazing">Georgian Windows</a>
            <a href="/edwardian-property-secondary-glazing">Edwardian Properties</a>
            <a href="/thermal-insulation-secondary-glazing">Thermal Insulation</a>
            <a href="/noise-reduction-secondary-glazing">Noise Reduction</a>
            <a href="/service-areas">Service Areas</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>

        <main>
          <article>
            <section>
              <h2>Expert Secondary Glazing Services in Kensington &amp; Chelsea</h2>
              <p>The Royal Borough of Kensington and Chelsea is home to some of London's most prestigious <a href="/listed-buildings-secondary-glazing">listed buildings</a> and <a href="/conservation-areas-secondary-glazing">conservation areas</a>. With strict planning regulations protecting the borough's architectural heritage, secondary glazing offers the ideal solution for improving thermal efficiency and noise reduction without compromising the character of period properties.</p>
              <p>Secondary Glazing Specialist provides expert <strong>secondary glazing services throughout Kensington &amp; Chelsea</strong>, including Kensington, Chelsea, Knightsbridge, South Kensington, Notting Hill, Holland Park, Earl's Court, and surrounding areas. Our specialist team has extensive experience working with the borough's planning department and conservation officers to deliver sympathetic solutions that meet strict heritage requirements.</p>
              <p>Whether you own a <a href="/georgian-windows-secondary-glazing">Georgian townhouse</a> in Chelsea, a <a href="/victorian-windows-secondary-glazing">Victorian villa</a> in Kensington, or a period property in one of the borough's many conservation areas, we provide bespoke <a href="/thermal-insulation-secondary-glazing">secondary glazing solutions</a> that preserve architectural character while reducing heat loss by up to 75%.</p>
            </section>

            <section>
              <h2>Areas We Serve in Kensington &amp; Chelsea</h2>
              <h3>Kensington</h3>
              <p>Kensington is renowned for its elegant Victorian and Edwardian properties, many of which are <a href="/listed-buildings-secondary-glazing">Grade II listed</a>. We provide secondary glazing services throughout:</p>
              <ul>
                <li><strong>South Kensington</strong> - Museum quarter with stunning Victorian townhouses</li>
                <li><strong>High Street Kensington</strong> - Period properties along this historic thoroughfare</li>
                <li><strong>Holland Park</strong> - Prestigious area with numerous listed buildings</li>
                <li><strong>Earl's Court</strong> - Victorian terraces and mansion blocks</li>
                <li><strong>West Kensington</strong> - Period properties requiring sympathetic improvements</li>
              </ul>
              <h3>Chelsea</h3>
              <p>Chelsea features some of London's most valuable heritage properties, with numerous <a href="/conservation-areas-secondary-glazing">conservation areas</a> protecting its character:</p>
              <ul>
                <li><strong>King's Road</strong> - Historic shopping street with period properties above</li>
                <li><strong>Cheyne Walk</strong> - Riverside Georgian and Victorian townhouses</li>
                <li><strong>Chelsea Embankment</strong> - Prestigious addresses overlooking the Thames</li>
                <li><strong>Sloane Square</strong> - Georgian and Victorian architecture</li>
                <li><strong>World's End</strong> - Period properties and modern developments</li>
              </ul>
              <h3>Knightsbridge</h3>
              <p>Knightsbridge features elegant period properties and high-profile addresses:</p>
              <ul>
                <li><strong>Brompton Road</strong> - Victorian and Edwardian properties</li>
                <li><strong>Knightsbridge proper</strong> - Prestigious mansion blocks and townhouses</li>
                <li><strong>Hans Place/Hans Crescent</strong> - Elegant period properties</li>
              </ul>
              <h3>Notting Hill</h3>
              <p>Notting Hill is famous for its <a href="/victorian-windows-secondary-glazing">Victorian terraces</a> and strict conservation area regulations:</p>
              <ul>
                <li><strong>Ladbroke Grove</strong> - Victorian terraces in conservation areas</li>
                <li><strong>Portobello Road</strong> - Historic market street with period properties</li>
                <li><strong>Pembridge Villas/Square</strong> - Elegant Victorian townhouses</li>
                <li><strong>Westbourne Grove</strong> - Period properties requiring heritage solutions</li>
              </ul>
            </section>

            <section>
              <h2>Conservation Areas in Kensington &amp; Chelsea</h2>
              <p>The Royal Borough of Kensington and Chelsea has <strong>over 80 conservation areas</strong> - more than any other London borough. Major conservation areas include:</p>
              <ul>
                <li><strong>Boltons Conservation Area</strong> - Victorian villas and crescent</li>
                <li><strong>Brompton Conservation Area</strong> - Mixed period architecture</li>
                <li><strong>Cheyne Conservation Area</strong> - Historic riverside properties</li>
                <li><strong>Ladbroke Conservation Area</strong> - Victorian garden squares</li>
                <li><strong>Queen's Gate Conservation Area</strong> - Grand Victorian townhouses</li>
                <li><strong>Royal Hospital Conservation Area</strong> - Historic military architecture</li>
                <li><strong>Stanley Conservation Area</strong> - Period terraces and squares</li>
              </ul>
              <p>We have extensive experience working within these conservation areas and provide full planning guidance for all secondary glazing installations.</p>
            </section>

            <section>
              <h2>Listed Buildings in Kensington &amp; Chelsea</h2>
              <p>The Royal Borough has <strong>over 4,000 listed buildings</strong>, including numerous Grade I and Grade II* properties. Our team specializes in providing <a href="/listed-buildings-secondary-glazing">secondary glazing solutions for listed buildings</a>, with a high success rate for Listed Building Consent applications.</p>
              <p>We've successfully completed secondary glazing installations on:</p>
              <ul>
                <li><strong>Grade I listed Georgian townhouses</strong></li>
                <li><strong>Grade II* Victorian villas</strong></li>
                <li><strong>Grade II Edwardian mansion blocks</strong></li>
                <li><strong>Period properties in conservation areas</strong></li>
              </ul>
            </section>

            <section>
              <h2>Why Secondary Glazing for Kensington &amp; Chelsea Properties?</h2>
              <h3>Meets Strict Planning Requirements</h3>
              <p>Kensington &amp; Chelsea has some of the strictest planning regulations in London. Secondary glazing offers the perfect solution - installed internally without altering external appearance, it typically doesn't require planning permission (unless the property is also listed).</p>
              <h3>Preserves Period Features</h3>
              <p>Many properties in the borough feature original <a href="/sash-window-secondary-glazing">sash windows</a>, decorative glazing, and architectural details. Secondary glazing preserves these features while dramatically improving performance.</p>
              <h3>Reduces Traffic Noise</h3>
              <p>Major roads like Brompton Road, Fulham Road, and King's Road generate significant traffic noise. Secondary glazing blocks up to 80% of external <a href="/noise-reduction-secondary-glazing">noise pollution</a>, creating peaceful interiors.</p>
              <h3>Dramatically Lowers Energy Bills</h3>
              <p>Period properties in Kensington &amp; Chelsea often have high heating costs due to single glazing and poor insulation. <a href="/thermal-insulation-secondary-glazing">Secondary glazing</a> reduces heat loss by up to 75%, significantly lowering energy bills.</p>
              <h3>Adds Property Value</h3>
              <p>Improving energy efficiency while preserving period features makes properties more attractive to buyers - particularly important in this high-value market.</p>
            </section>

            <section>
              <h2>Our Process for Kensington &amp; Chelsea Properties</h2>
              <ol>
                <li><strong>Free Heritage Property Survey</strong> - We visit your property to assess windows and discuss requirements</li>
                <li><strong>Conservation/Planning Guidance</strong> - Expert advice on whether consent is required</li>
                <li><strong>Bespoke Design</strong> - Custom solutions tailored to your specific property</li>
                <li><strong>Application Support</strong> - Full support with Listed Building Consent applications if required</li>
                <li><strong>Expert Installation</strong> - Professional installation by heritage property specialists</li>
                <li><strong>Comprehensive Warranty</strong> - All work covered by warranty and aftercare</li>
              </ol>
            </section>

            <section>
              <h2>Case Studies: Kensington &amp; Chelsea</h2>
              <h3>Grade II Listed Victorian Villa, South Kensington</h3>
              <p>A five-bedroom Victorian villa in the Queen's Gate Conservation Area required improved insulation without replacing original windows. We installed secondary glazing throughout, achieving:</p>
              <ul>
                <li><strong>72% reduction in heat loss</strong></li>
                <li><strong>£850 annual energy saving</strong></li>
                <li><strong>Listed Building Consent approved</strong> by conservation officer</li>
                <li><strong>Original sash windows preserved</strong></li>
              </ul>
              <h3>Georgian Townhouse, Chelsea</h3>
              <p>A Grade II* Georgian townhouse on Cheyne Walk required noise reduction from traffic while preserving its historic character. Secondary glazing provided:</p>
              <ul>
                <li><strong>78% reduction in traffic noise</strong></li>
                <li><strong>No external alterations</strong> to the listed facade</li>
                <li><strong>Reversible installation</strong> meeting heritage requirements</li>
                <li><strong>Improved comfort throughout</strong></li>
              </ul>
            </section>

            <section>
              <h2>Why Choose Secondary Glazing Specialist in Kensington &amp; Chelsea?</h2>
              <ul>
                <li><strong>Local expertise</strong> - Extensive experience in the Royal Borough</li>
                <li><strong>Conservation knowledge</strong> - Deep understanding of local planning requirements</li>
                <li><strong>Listed building specialists</strong> - High success rate with LBC applications</li>
                <li><strong>Bespoke solutions</strong> - Tailored to period properties</li>
                <li><strong>Free surveys</strong> - No-obligation property assessments</li>
                <li><strong>Comprehensive warranty</strong> - All installations fully guaranteed</li>
              </ul>
            </section>

            <section>
              <h2>Related Services</h2>
              <ul>
                <li><a href="/listed-buildings-secondary-glazing">Listed Buildings Secondary Glazing</a></li>
                <li><a href="/conservation-areas-secondary-glazing">Conservation Areas Secondary Glazing</a></li>
                <li><a href="/victorian-windows-secondary-glazing">Victorian Windows Secondary Glazing</a></li>
                <li><a href="/georgian-windows-secondary-glazing">Georgian Windows Secondary Glazing</a></li>
                <li><a href="/sash-window-secondary-glazing">Sash Window Secondary Glazing</a></li>
                <li><a href="/thermal-insulation-secondary-glazing">Thermal Insulation Solutions</a></li>
                <li><a href="/noise-reduction-secondary-glazing">Noise Reduction Glazing</a></li>
              </ul>
            </section>

            <section>
              <h2>Other Areas We Serve</h2>
              <ul>
                <li><a href="/service-areas/westminster">Westminster Secondary Glazing</a></li>
                <li><a href="/service-areas/camden">Camden Secondary Glazing</a></li>
                <li><a href="/service-areas/islington">Islington Secondary Glazing</a></li>
                <li><a href="/service-areas/hammersmith-fulham">Hammersmith &amp; Fulham Secondary Glazing</a></li>
                <li><a href="/service-areas/wandsworth">Wandsworth Secondary Glazing</a></li>
                <li><a href="/service-areas">View all 38 service areas</a></li>
              </ul>
            </section>

            <section>
              <h2>Get Your Free Kensington &amp; Chelsea Property Survey</h2>
              <p>Contact us today for a free, no-obligation survey of your Kensington &amp; Chelsea property. Our specialist team understands the unique requirements of the Royal Borough and will provide expert guidance on secondary glazing solutions that preserve your property's character.</p>
              <p><a href="/contact">Contact us today</a> or <a href="/quote">request a free quote</a>.</p>
            </section>
          </article>
        </main>

        <footer>
          <nav aria-label="Footer Navigation">
            <h3>Our Services</h3>
            <ul>
              <li><a href="/listed-buildings-secondary-glazing">Listed Buildings</a></li>
              <li><a href="/conservation-areas-secondary-glazing">Conservation Areas</a></li>
              <li><a href="/victorian-windows-secondary-glazing">Victorian Windows</a></li>
              <li><a href="/sash-window-secondary-glazing">Sash Windows</a></li>
            </ul>

            <h3>Nearby Areas</h3>
            <ul>
              <li><a href="/service-areas/westminster">Westminster</a></li>
              <li><a href="/service-areas/hammersmith-fulham">Hammersmith &amp; Fulham</a></li>
              <li><a href="/service-areas/wandsworth">Wandsworth</a></li>
              <li><a href="/service-areas">All Service Areas</a></li>
            </ul>

            <h3>Company</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/quote">Get a Quote</a></li>
            </ul>
          </nav>
          <p>&copy; 2025 <a href="/">Secondary Glazing Specialist</a>. All rights reserved.</p>
        </footer>
      </div>

      <EnhancedSEO
        title="Secondary Glazing Kensington & Chelsea | Listed Buildings & Conservation Areas"
        description="Expert secondary glazing for listed buildings and conservation areas in Kensington, Chelsea, Knightsbridge, South Kensington, and Notting Hill. Free heritage property surveys."
        canonicalPath="/service-areas/kensington-chelsea"
        keywords={[
          "secondary glazing Kensington",
          "Chelsea secondary glazing",
          "RBKC glazing",
          "listed building glazing Kensington",
          "conservation area windows Chelsea",
          "heritage glazing Kensington Chelsea",
          "Knightsbridge secondary glazing",
          "Notting Hill glazing"
        ]}
      />

      <MainNav />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">Royal Borough Service Area</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Secondary Glazing Kensington & Chelsea | Heritage Property Specialists
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              The Royal Borough of Kensington and Chelsea is home to some of London's most prestigious{" "}
              <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed buildings</Link> and{" "}
              <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">conservation areas</Link>. 
              With strict planning regulations protecting the borough's architectural heritage, secondary glazing offers 
              the ideal solution for improving{" "}
              <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">thermal efficiency</Link> and{" "}
              <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">noise reduction</Link> without 
              compromising the character of period properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/quote-request">Get Free Heritage Survey</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:02070601572">
                  <Phone className="mr-2 h-4 w-4" />
                  020 7060 1572
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Info Grid */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 justify-center">
              <MapPin className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold">Coverage Area</p>
                <p className="text-sm text-muted-foreground">All RBKC Postcodes</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <Phone className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold">Call Us Today</p>
                <a href="tel:02070601572" className="text-sm text-primary hover:underline">020 7060 1572</a>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <Clock className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold">Response Time</p>
                <p className="text-sm text-muted-foreground">Same-day quotes available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Introduction */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6">Expert Secondary Glazing Services in Kensington & Chelsea</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Secondary Glazing Specialist provides expert <strong>secondary glazing services throughout Kensington & Chelsea</strong>, 
                  including Kensington, Chelsea, Knightsbridge, South Kensington, Notting Hill, Holland Park, Earls Court, and surrounding areas. 
                  Our specialist team has extensive experience working with the borough's planning department and conservation officers to 
                  deliver sympathetic solutions that meet strict heritage requirements.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Whether you own a{" "}
                  <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline">Georgian townhouse</Link> in Chelsea, a{" "}
                  <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian villa</Link> in Kensington, or a 
                  period property in one of the borough's many conservation areas, we provide bespoke{" "}
                  <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">secondary glazing solutions</Link> that 
                  preserve architectural character while reducing heat loss by up to 75%.
                </p>
              </div>

              {/* Areas We Serve */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Areas We Serve in Kensington & Chelsea</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Kensington</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Kensington is renowned for its elegant Victorian and Edwardian properties, many of which are{" "}
                        <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">Grade II listed</Link>.
                      </p>
                      <ul className="space-y-1 text-sm">
                        {kensingtonAreas.map((area, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-primary" />
                            {area}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Chelsea</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Chelsea features some of London's most valuable heritage properties, with numerous{" "}
                        <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">conservation areas</Link>.
                      </p>
                      <ul className="space-y-1 text-sm">
                        {chelseaAreas.map((area, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-primary" />
                            {area}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Knightsbridge</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Knightsbridge features elegant period properties and high-profile addresses.
                      </p>
                      <ul className="space-y-1 text-sm">
                        {knightsbridgeAreas.map((area, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-primary" />
                            {area}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Notting Hill</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Notting Hill is famous for its{" "}
                        <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian terraces</Link> and 
                        strict conservation area regulations.
                      </p>
                      <ul className="space-y-1 text-sm">
                        {nottingHillAreas.map((area, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-primary" />
                            {area}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Conservation Areas */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Conservation Areas in Kensington & Chelsea</h2>
                <p className="text-muted-foreground mb-4">
                  The Royal Borough of Kensington and Chelsea has <strong>over 80 conservation areas</strong> - more than any 
                  other London borough. Major conservation areas include:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
                  {conservationAreas.map((area, index) => (
                    <div key={index} className="bg-muted/50 px-3 py-2 rounded text-sm">
                      {area}
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground">
                  We have extensive experience working within these conservation areas and provide full planning guidance 
                  for all secondary glazing installations.
                </p>
              </div>

              {/* Listed Buildings */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Listed Buildings in Kensington & Chelsea</h2>
                <p className="text-muted-foreground mb-4">
                  The Royal Borough has <strong>over 4,000 listed buildings</strong>, including numerous Grade I and Grade II* properties. 
                  Our team specializes in providing{" "}
                  <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">secondary glazing solutions for listed buildings</Link>, 
                  with a high success rate for Listed Building Consent applications.
                </p>
                <p className="text-muted-foreground mb-4">
                  We have successfully completed secondary glazing installations on:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <strong>Grade I listed Georgian townhouses</strong>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <strong>Grade II* Victorian villas</strong>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <strong>Grade II Edwardian mansion blocks</strong>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <strong>Period properties in conservation areas</strong>
                  </li>
                </ul>
              </div>

              {/* Why Secondary Glazing */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Secondary Glazing for Kensington & Chelsea Properties?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Meets Strict Planning Requirements</h3>
                      <p className="text-sm text-muted-foreground">
                        Kensington & Chelsea has some of the strictest planning regulations in London. Secondary glazing 
                        is installed internally without altering external appearance, typically not requiring planning permission.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Landmark className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Preserves Period Features</h3>
                      <p className="text-sm text-muted-foreground">
                        Many properties feature original{" "}
                        <Link to="/sash-window-secondary-glazing" className="text-primary hover:underline">sash windows</Link> and 
                        decorative glazing. Secondary glazing preserves these while dramatically improving performance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Volume2 className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        <Link to="/noise-reduction-secondary-glazing" className="hover:text-primary">Reduces Traffic Noise</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Major roads like Brompton Road, Fulham Road, and Kings Road generate significant traffic noise. 
                        Secondary glazing <strong>blocks up to 80%</strong> of external noise pollution.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <ThermometerSun className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        <Link to="/thermal-insulation-secondary-glazing" className="hover:text-primary">Dramatically Lowers Energy Bills</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Period properties often have high heating costs due to single glazing.{" "}
                        <strong>Secondary glazing reduces heat loss by up to 75%</strong>, significantly lowering energy bills.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Studies */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Case Studies: Kensington & Chelsea</h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-3">Grade II Listed Victorian Villa, South Kensington</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        A five-bedroom Victorian villa in the Queens Gate Conservation Area required improved insulation 
                        without replacing original windows. We installed secondary glazing throughout, achieving:
                      </p>
                      <ul className="grid grid-cols-2 gap-2">
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <strong>72% reduction in heat loss</strong>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <strong>£850 annual energy saving</strong>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <strong>LBC approved</strong>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <strong>Original sash windows preserved</strong>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-3">Georgian Townhouse, Chelsea</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        A Grade II* Georgian townhouse on Cheyne Walk required noise reduction from traffic while 
                        preserving its historic character. Secondary glazing provided:
                      </p>
                      <ul className="grid grid-cols-2 gap-2">
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <strong>78% reduction in traffic noise</strong>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <strong>No external alterations</strong>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <strong>Reversible installation</strong>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <strong>Improved comfort throughout</strong>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-muted-foreground mt-4">
                  <Link to="/case-studies" className="text-primary hover:underline">View more case studies</Link>
                </p>
              </div>

              {/* Window Types */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Window Types We Work With</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {windowTypes.map((type, index) => (
                    <Link
                      key={index}
                      to={type.href}
                      className="bg-muted/50 hover:bg-muted px-4 py-3 rounded-lg text-center transition-colors"
                    >
                      {type.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Get Your Free Kensington & Chelsea Property Survey</h2>
                <p className="mb-6 opacity-90">
                  Contact us today for a free, no-obligation survey of your Kensington & Chelsea property. Our specialist 
                  team understands the unique requirements of the Royal Borough and will provide expert guidance on 
                  secondary glazing solutions that preserve your property's character.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="secondary">
                    <Link to="/quote-request">Request Free Quote</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Our Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {services.map((service, index) => (
                      <li key={index}>
                        <Link 
                          to={service.href}
                          className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                        >
                          <service.icon className="h-4 w-4 text-primary" />
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Other Areas We Serve</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {otherAreas.map((area, index) => (
                      <li key={index}>
                        <Link to={area.href} className="text-sm text-primary hover:underline">
                          {area.title}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link to="/locations" className="text-sm text-primary hover:underline font-medium">
                        View all 38 service areas
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li><Link to="/quote-request" className="text-sm text-primary hover:underline">Request a Quote</Link></li>
                    <li><Link to="/gallery" className="text-sm text-primary hover:underline">View Gallery</Link></li>
                    <li><Link to="/case-studies" className="text-sm text-primary hover:underline">Case Studies</Link></li>
                    <li><Link to="/benefits" className="text-sm text-primary hover:underline">Benefits of Secondary Glazing</Link></li>
                    <li><Link to="/faqs" className="text-sm text-primary hover:underline">FAQs</Link></li>
                    <li><Link to="/contact" className="text-sm text-primary hover:underline">Contact Us</Link></li>
                    <li><Link to="/secondary-glazing-repairs" className="text-sm text-primary hover:underline">Repairs & Maintenance</Link></li>
                    <li><Link to="/guides/secondary-vs-double-glazing" className="text-sm text-primary hover:underline">Secondary vs Double Glazing</Link></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-primary-foreground">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm opacity-90">Ready to improve your Kensington or Chelsea property?</p>
                  <a href="tel:02070601572" className="flex items-center gap-2 text-sm hover:underline">
                    <Phone className="h-4 w-4" />
                    020 7060 1572
                  </a>
                  <Button asChild variant="secondary" className="w-full">
                    <Link to="/quote-request">Free Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KensingtonChelsea;
