import React from "react";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { Link } from "react-router-dom";
import { TreePine, MapPin, CheckCircle, Home, Phone, ThermometerSun, Volume2, Shield, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/MainNav";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import RelatedContentSidebar from "@/components/seo/RelatedContentSidebar";
import CTASection from "@/components/seo/CTASection";

const breadcrumbItems = [
  { label: "Services", href: "/residential" },
  { label: "Heritage Properties", href: "/listed-buildings-secondary-glazing" },
  { label: "Conservation Areas Secondary Glazing" },
];

const relatedLinks = [
  { title: "Listed Buildings Glazing", href: "/listed-buildings-secondary-glazing", description: "Grade I, II*, II solutions" },
  { title: "Victorian Windows", href: "/victorian-windows-secondary-glazing", description: "Period sash window solutions" },
  { title: "Georgian Windows", href: "/georgian-windows-secondary-glazing", description: "Georgian property glazing" },
  { title: "Edwardian Properties", href: "/edwardian-property-secondary-glazing", description: "Edwardian home solutions" },
  { title: "Noise Reduction", href: "/noise-reduction-secondary-glazing", description: "Block external noise" },
  { title: "Thermal Insulation", href: "/thermal-insulation-secondary-glazing", description: "Reduce heat loss" },
  { title: "Sash Windows", href: "/sash-window-secondary-glazing", description: "Traditional sash solutions" },
];

const serviceAreas = [
  { title: "Kensington & Chelsea", href: "/service-areas/kensington-chelsea", description: "South Kensington, Chelsea, Notting Hill" },
  { title: "Westminster", href: "/service-areas/westminster", description: "Belgravia, Pimlico, Mayfair, St James's" },
  { title: "Camden", href: "/service-areas/camden", description: "Bloomsbury, Hampstead, Primrose Hill" },
  { title: "Islington", href: "/service-areas/islington", description: "Barnsbury, Canonbury, Highbury" },
  { title: "Central London", href: "/areas/central-london", description: "City and Central boroughs" },
  { title: "North London", href: "/areas/north-london", description: "Highgate, Muswell Hill, Crouch End" },
  { title: "South London", href: "/areas/south-london", description: "Dulwich, Blackheath, Greenwich" },
  { title: "West London", href: "/areas/west-london", description: "Fulham, Richmond, Chiswick" },
  { title: "East London", href: "/areas/east-london", description: "Hackney, Stoke Newington" },
  { title: "Home Counties", href: "/areas/home-counties", description: "Surrey, Hertfordshire, Essex" },
];

const ConservationAreasSecondaryGlazing = () => {
  return (
    <div className="min-h-screen">
      {/* SEO CONTENT - Hidden from users, visible to crawlers */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <header>
          <h1>Conservation Area Secondary Glazing | Preserve Character While Improving Efficiency</h1>
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
              <h2>Expert Secondary Glazing for Conservation Areas Across London</h2>
              <p>If your property is located in a <strong>conservation area</strong>, you'll understand the importance of preserving architectural character while maintaining comfort and energy efficiency. Secondary Glazing Specialist provides expert <strong>secondary glazing solutions for conservation area properties</strong> throughout London, helping homeowners meet strict planning requirements while dramatically improving <a href="/thermal-insulation-secondary-glazing">thermal insulation</a> and <a href="/noise-reduction-secondary-glazing">noise reduction</a>.</p>
              <p>With over 15 years of experience working in London's conservation areas, we understand the unique challenges and regulations governing period properties. Our bespoke secondary glazing installations preserve the external appearance of your home while reducing heat loss by up to 75% and blocking up to 80% of external noise.</p>
              <p>Whether you own a <a href="/victorian-windows-secondary-glazing">Victorian terrace</a>, <a href="/georgian-windows-secondary-glazing">Georgian townhouse</a>, or <a href="/edwardian-property-secondary-glazing">Edwardian property</a>, our specialist team delivers sympathetic solutions that satisfy conservation officers and enhance your quality of life.</p>
            </section>

            <section>
              <h2>Understanding Conservation Areas</h2>
              <p><strong>Conservation areas</strong> are designated areas of special architectural or historic interest, where the character and appearance must be preserved and enhanced. London has over <strong>1,000 conservation areas</strong>, covering approximately 25% of the capital.</p>
              <p>Properties in conservation areas face restrictions on:</p>
              <ul>
                <li><strong>External alterations</strong> - Any changes to the exterior typically require planning permission</li>
                <li><strong>Window replacements</strong> - Replacing original windows often prohibited or heavily restricted</li>
                <li><strong>Materials</strong> - Must be in keeping with the character of the area</li>
                <li><strong>Design</strong> - Any additions must respect the existing architectural style</li>
              </ul>
              <p><strong>Secondary glazing offers the ideal solution</strong> - it provides all the benefits of modern double glazing without altering the external appearance of your property.</p>
            </section>

            <section>
              <h2>Do I Need Planning Permission?</h2>
              <h3>Internal Secondary Glazing (Usually No Permission Required)</h3>
              <p>If the secondary glazing is installed entirely on the <strong>interior</strong> and doesn't alter the external appearance of the property, planning permission is typically not required. This is one of the major advantages of secondary glazing over replacement windows.</p>
              <h3>When Permission May Be Required</h3>
              <p>Planning permission may be required if:</p>
              <ul>
                <li>Your property is also <a href="/listed-buildings-secondary-glazing">listed</a> (requires Listed Building Consent)</li>
                <li>The installation affects the external appearance</li>
                <li>The property fronts a main road or public highway</li>
                <li>Your local authority has specific Article 4 directions in place</li>
              </ul>
              <p>We provide <strong>free planning guidance</strong> for all conservation area properties and liaise directly with conservation officers when required.</p>
            </section>

            <section>
              <h2>Benefits of Secondary Glazing in Conservation Areas</h2>
              <h3>Preserve Original Windows</h3>
              <p>Secondary glazing allows you to <strong>keep your original period windows</strong> intact - essential in conservation areas where window replacement is restricted or prohibited. The secondary pane is fitted internally, maintaining the historic external appearance.</p>
              <h3>No External Alterations</h3>
              <p>Because secondary glazing is installed on the interior, <strong>there are no external changes</strong> to your property - a key requirement in conservation areas.</p>
              <h3>Superior Thermal Performance</h3>
              <p>The air gap between original window and secondary pane creates exceptional <a href="/thermal-insulation-secondary-glazing">thermal insulation</a>, reducing heat loss by up to 75% - far superior to traditional single glazing.</p>
              <h3>Dramatic Noise Reduction</h3>
              <p>Secondary glazing blocks up to 80% of external <a href="/noise-reduction-secondary-glazing">noise pollution</a> - particularly beneficial in busy conservation areas like <a href="/service-areas/camden">Camden</a>, <a href="/service-areas/islington">Islington</a>, and <a href="/service-areas/southwark">Southwark</a>.</p>
              <h3>Reversible Solution</h3>
              <p>If circumstances change, secondary glazing can be <strong>completely removed</strong> without any lasting impact on your original windows - important for conservation area compliance.</p>
              <h3>Cost-Effective</h3>
              <p>Secondary glazing is typically <strong>more affordable</strong> than attempting to replace windows in a conservation area (which often requires expensive heritage-style replacements and planning permission).</p>
            </section>

            <section>
              <h2>Window Types We Work With</h2>
              <p>Our specialist team has experience installing secondary glazing on all period window types commonly found in conservation areas:</p>
              <ul>
                <li><a href="/sash-window-secondary-glazing"><strong>Sash windows</strong></a> - Vertical sliding windows typical in Victorian and Georgian properties</li>
                <li><strong>Casement windows</strong> - Side-hinged windows common in Edwardian and Arts &amp; Crafts properties</li>
                <li><strong>Bay windows</strong> - Multi-angled windows requiring specialist measurement and installation</li>
                <li><strong>Arched windows</strong> - Gothic and Victorian arched features requiring bespoke solutions</li>
                <li><strong>Leaded light windows</strong> - Decorative glazing patterns preserved behind secondary glazing</li>
                <li><strong>Stained glass windows</strong> - Protecting valuable stained glass while improving insulation</li>
              </ul>
            </section>

            <section>
              <h2>Conservation Areas We Serve</h2>
              <p>We provide specialist <strong>conservation area secondary glazing services</strong> across London's most prestigious conservation areas:</p>
              <ul>
                <li><a href="/service-areas/kensington-chelsea">Kensington &amp; Chelsea</a> - Home to numerous high-profile conservation areas including South Kensington, Chelsea, and Notting Hill</li>
                <li><a href="/service-areas/westminster">Westminster</a> - Including Belgravia, Pimlico, Mayfair, and St James's conservation areas</li>
                <li><a href="/service-areas/camden">Camden</a> - Bloomsbury, Hampstead, Primrose Hill, and Regent's Park conservation areas</li>
                <li><a href="/service-areas/islington">Islington</a> - Including Barnsbury, Canonbury, and Highbury conservation areas</li>
                <li><a href="/service-areas/richmond-upon-thames">Richmond upon Thames</a> - Richmond Hill, Kew Green, and riverside conservation areas</li>
                <li><a href="/service-areas/wandsworth">Wandsworth</a> - Battersea, Clapham, and Tooting conservation areas</li>
                <li><a href="/service-areas/hammersmith-fulham">Hammersmith &amp; Fulham</a> - Fulham, Brook Green conservation areas</li>
                <li><a href="/service-areas/lambeth">Lambeth</a> - Brixton, Clapham, and Streatham conservation areas</li>
                <li><a href="/service-areas/southwark">Southwark</a> - Dulwich, Camberwell, and Bermondsey conservation areas</li>
                <li><a href="/service-areas/hackney">Hackney</a> - Dalston, Stoke Newington, and De Beauvoir conservation areas</li>
              </ul>
              <p><a href="/service-areas">View all 38 service areas across London</a></p>
            </section>

            <section>
              <h2>Our Process for Conservation Area Properties</h2>
              <ol>
                <li><strong>Free Conservation Area Property Survey</strong> - We visit your home to assess your windows and discuss your requirements</li>
                <li><strong>Planning Guidance</strong> - We advise whether planning permission is required and provide support if needed</li>
                <li><strong>Bespoke Design</strong> - Each installation is custom-designed to complement your period property</li>
                <li><strong>Conservation Officer Liaison</strong> - If required, we liaise with your local conservation officer</li>
                <li><strong>Expert Installation</strong> - Our trained specialists install secondary glazing with care and precision</li>
                <li><strong>Comprehensive Warranty</strong> - All installations covered by our warranty and aftercare service</li>
              </ol>
            </section>

            <section>
              <h2>Case Study: Victorian Terrace in Camden Conservation Area</h2>
              <p>A Victorian terrace in the <strong>Camden conservation area</strong> was suffering from high energy bills and significant street noise. The owners wanted to improve comfort without replacing their original <a href="/sash-window-secondary-glazing">sash windows</a>.</p>
              <p>We installed bespoke <strong>secondary glazing</strong> throughout the property, achieving:</p>
              <ul>
                <li><strong>68% reduction</strong> in heat loss</li>
                <li><strong>£450 annual saving</strong> on heating bills</li>
                <li><strong>75% reduction</strong> in street noise</li>
                <li><strong>No planning permission required</strong> (internal installation)</li>
                <li><strong>Original windows preserved</strong> and protected</li>
              </ul>
              <p>The conservation officer praised the solution as "exemplary heritage conservation combined with modern efficiency."</p>
            </section>

            <section>
              <h2>Why Choose Secondary Glazing Specialist?</h2>
              <ul>
                <li><strong>15+ years</strong> working in London conservation areas</li>
                <li><strong>Expert knowledge</strong> of conservation area regulations and requirements</li>
                <li><strong>High success rate</strong> with planning applications (when required)</li>
                <li><strong>Bespoke solutions</strong> tailored to period properties</li>
                <li><strong>No external alterations</strong> - maintain your property's character</li>
                <li><strong>Free surveys and quotes</strong> for conservation area properties</li>
                <li><strong>Comprehensive warranty</strong> and aftercare support</li>
              </ul>
            </section>

            <section>
              <h2>Related Services</h2>
              <ul>
                <li><a href="/listed-buildings-secondary-glazing">Listed Buildings Secondary Glazing</a></li>
                <li><a href="/victorian-windows-secondary-glazing">Victorian Windows Secondary Glazing</a></li>
                <li><a href="/sash-window-secondary-glazing">Sash Window Secondary Glazing</a></li>
                <li><a href="/georgian-windows-secondary-glazing">Georgian Windows Secondary Glazing</a></li>
                <li><a href="/edwardian-property-secondary-glazing">Edwardian Property Secondary Glazing</a></li>
                <li><a href="/thermal-insulation-secondary-glazing">Thermal Insulation Solutions</a></li>
                <li><a href="/noise-reduction-secondary-glazing">Noise Reduction Glazing</a></li>
              </ul>
            </section>

            <section>
              <h2>Get Your Free Conservation Area Property Survey</h2>
              <p>Contact us today for a free, no-obligation survey of your conservation area property. Our specialist team will assess your windows, advise on planning requirements, and provide expert guidance on secondary glazing solutions.</p>
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

            <h3>Popular Conservation Areas</h3>
            <ul>
              <li><a href="/service-areas/kensington-chelsea">Kensington &amp; Chelsea</a></li>
              <li><a href="/service-areas/westminster">Westminster</a></li>
              <li><a href="/service-areas/camden">Camden</a></li>
              <li><a href="/service-areas/islington">Islington</a></li>
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
        title="Conservation Area Secondary Glazing | Expert Heritage Solutions London"
        description="Specialist secondary glazing for properties in conservation areas. Meet planning requirements while improving insulation and reducing noise. Free surveys across London conservation areas."
        canonicalPath="/conservation-areas-secondary-glazing"
        keywords={[
          "conservation area secondary glazing",
          "Article 4 direction glazing",
          "heritage area windows",
          "conservation approved glazing",
          "period property windows London",
          "conservation officer approved",
          "planning permission glazing",
          "heritage property insulation"
        ]}
      />
      
      <MainNav />
      
      <div className="container mx-auto px-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
              <TreePine className="h-5 w-5" />
              <span className="font-medium">Conservation Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Conservation Area Secondary Glazing | Preserve Character While Improving Efficiency
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              If your property is located in a <strong>conservation area</strong>, you will understand the importance of 
              preserving architectural character while maintaining comfort and energy efficiency. Our specialist 
              <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline"> thermal insulation</Link> and{" "}
              <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">noise reduction</Link> solutions 
              are designed specifically for heritage properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/quote-request">Get Free Survey</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:02070601572">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Our Experts
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="prose prose-lg max-w-none">
                
                {/* Introduction */}
                <section className="mb-12 not-prose">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Expert Secondary Glazing for Conservation Areas Across London
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Secondary Glazing Specialist provides expert <strong>secondary glazing solutions for conservation area properties</strong> throughout 
                    London, helping homeowners meet strict planning requirements while dramatically improving{" "}
                    <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">thermal insulation</Link> and{" "}
                    <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">noise reduction</Link>.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    With over 15 years of experience working in London's conservation areas, we understand the unique challenges and 
                    regulations governing period properties. Our bespoke secondary glazing installations preserve the external appearance 
                    of your home while reducing heat loss by up to 75% and blocking up to 80% of external noise.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you own a{" "}
                    <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian terrace</Link>,{" "}
                    <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline">Georgian townhouse</Link>, or{" "}
                    <Link to="/edwardian-property-secondary-glazing" className="text-primary hover:underline">Edwardian property</Link>, 
                    our specialist team delivers sympathetic solutions that satisfy conservation officers and enhance your quality of life.
                  </p>
                </section>

                {/* Understanding Conservation Areas */}
                <section className="mb-12 not-prose">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Understanding Conservation Areas
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Conservation areas</strong> are designated areas of special architectural or historic interest, where the character 
                    and appearance must be preserved and enhanced. London has over <strong>1,000 conservation areas</strong>, covering 
                    approximately 25% of the capital.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Properties in conservation areas face restrictions on:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>External alterations</strong> - Any changes to the exterior typically require planning permission</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Window replacements</strong> - Replacing original windows often prohibited or heavily restricted</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Materials</strong> - Must be in keeping with the character of the area</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Design</strong> - Any additions must respect the existing architectural style</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Secondary glazing offers the ideal solution</strong> - it provides all the benefits of modern double glazing 
                    without altering the external appearance of your property.
                  </p>
                </section>

                {/* Planning Permission */}
                <section className="mb-12 not-prose">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Do I Need Planning Permission?
                  </h2>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">Internal Secondary Glazing (Usually No Permission Required)</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    If the secondary glazing is installed entirely on the <strong>interior</strong> and does not alter the external appearance 
                    of the property, planning permission is typically not required. This is one of the major advantages of secondary glazing 
                    over replacement windows.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3">When Permission May Be Required</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Planning permission may be required if:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Your property is also <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed</Link> (requires Listed Building Consent)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">The installation affects the external appearance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">The property fronts a main road or public highway</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Your local authority has specific Article 4 directions in place</span>
                    </li>
                  </ul>

                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <FileText className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Free Planning Guidance</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          We provide <strong>free planning guidance</strong> for all conservation area properties and liaise directly 
                          with conservation officers when required.
                        </p>
                        <Button asChild variant="outline" size="sm">
                          <Link to="/quote-request">Request Planning Support</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Benefits */}
                <section className="mb-12 not-prose">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Benefits of Secondary Glazing in Conservation Areas
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-muted/30 rounded-lg p-6">
                      <Shield className="h-8 w-8 text-primary mb-4" />
                      <h3 className="font-semibold text-foreground mb-2">Preserve Original Windows</h3>
                      <p className="text-sm text-muted-foreground">
                        Secondary glazing allows you to <strong>keep your original period windows</strong> intact - essential in 
                        conservation areas where window replacement is restricted.
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-6">
                      <Home className="h-8 w-8 text-primary mb-4" />
                      <h3 className="font-semibold text-foreground mb-2">No External Alterations</h3>
                      <p className="text-sm text-muted-foreground">
                        Because secondary glazing is installed on the interior, <strong>there are no external changes</strong> to 
                        your property - a key requirement in conservation areas.
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-6">
                      <ThermometerSun className="h-8 w-8 text-primary mb-4" />
                      <h3 className="font-semibold text-foreground mb-2">
                        <Link to="/thermal-insulation-secondary-glazing" className="hover:text-primary">Superior Thermal Performance</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        The air gap creates exceptional thermal insulation, <strong>reducing heat loss by up to 75%</strong> - 
                        far superior to traditional single glazing.
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-6">
                      <Volume2 className="h-8 w-8 text-primary mb-4" />
                      <h3 className="font-semibold text-foreground mb-2">
                        <Link to="/noise-reduction-secondary-glazing" className="hover:text-primary">Dramatic Noise Reduction</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Secondary glazing <strong>blocks up to 80% of external noise pollution</strong> - particularly beneficial 
                        in busy conservation areas.
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-6">
                      <CheckCircle className="h-8 w-8 text-primary mb-4" />
                      <h3 className="font-semibold text-foreground mb-2">Reversible Solution</h3>
                      <p className="text-sm text-muted-foreground">
                        If circumstances change, secondary glazing can be <strong>completely removed</strong> without any lasting 
                        impact on your original windows.
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-6">
                      <Home className="h-8 w-8 text-primary mb-4" />
                      <h3 className="font-semibold text-foreground mb-2">Cost-Effective</h3>
                      <p className="text-sm text-muted-foreground">
                        Secondary glazing is typically <strong>more affordable</strong> than attempting to replace windows in a 
                        conservation area.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Window Types */}
                <section className="mb-12 not-prose">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Window Types We Work With
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our specialist team has experience installing secondary glazing on all period window types commonly found in conservation areas:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <Link to="/sash-window-secondary-glazing" className="text-primary hover:underline font-semibold">Sash windows</Link> - 
                        Vertical sliding windows typical in Victorian and Georgian properties
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <Link to="/residential/casement-windows" className="text-primary hover:underline font-semibold">Casement windows</Link> - 
                        Side-hinged windows common in Edwardian and Arts & Crafts properties
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <Link to="/residential/bay-windows" className="text-primary hover:underline font-semibold">Bay windows</Link> - 
                        Multi-angled windows requiring specialist measurement and installation
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong>Arched windows</strong> - Gothic and Victorian arched features requiring bespoke solutions
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong>Leaded light windows</strong> - Decorative glazing patterns preserved behind secondary glazing
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong>Stained glass windows</strong> - Protecting valuable stained glass while improving insulation
                      </span>
                    </li>
                  </ul>
                </section>

                {/* Conservation Areas We Serve */}
                <section className="mb-12 not-prose">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Conservation Areas We Serve
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We provide specialist <strong>conservation area secondary glazing services</strong> across London's most prestigious conservation areas:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {serviceAreas.map((area, index) => (
                      <Link
                        key={index}
                        to={area.href}
                        className="flex flex-col p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span className="font-medium">{area.title}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{area.description}</span>
                      </Link>
                    ))}
                  </div>
                  <p className="text-muted-foreground mt-4">
                    <Link to="/locations" className="text-primary hover:underline">View all 38 service areas across London</Link>
                  </p>
                </section>

                {/* Our Process */}
                <section className="mb-12 not-prose">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Our Process for Conservation Area Properties
                  </h2>
                  <ol className="space-y-4">
                    <li className="flex items-start gap-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">1</span>
                      <div>
                        <h3 className="font-semibold text-foreground">Free Conservation Area Property Survey</h3>
                        <p className="text-sm text-muted-foreground">We visit your home to assess your windows and discuss your requirements</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">2</span>
                      <div>
                        <h3 className="font-semibold text-foreground">Planning Guidance</h3>
                        <p className="text-sm text-muted-foreground">We advise whether planning permission is required and provide support if needed</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">3</span>
                      <div>
                        <h3 className="font-semibold text-foreground">Bespoke Design</h3>
                        <p className="text-sm text-muted-foreground">Each installation is custom-designed to complement your period property</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">4</span>
                      <div>
                        <h3 className="font-semibold text-foreground">Conservation Officer Liaison</h3>
                        <p className="text-sm text-muted-foreground">If required, we liaise with your local conservation officer</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">5</span>
                      <div>
                        <h3 className="font-semibold text-foreground">Expert Installation</h3>
                        <p className="text-sm text-muted-foreground">Our trained specialists install secondary glazing with care and precision</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">6</span>
                      <div>
                        <h3 className="font-semibold text-foreground">Comprehensive Warranty</h3>
                        <p className="text-sm text-muted-foreground">All installations covered by our warranty and aftercare service</p>
                      </div>
                    </li>
                  </ol>
                </section>

                {/* Case Study */}
                <section className="mb-12 not-prose">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Case Study: Victorian Terrace in Camden Conservation Area
                  </h2>
                  <div className="bg-muted/30 rounded-lg p-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      A Victorian terrace in the <strong>Camden conservation area</strong> was suffering from high energy bills and 
                      significant street noise. The owners wanted to improve comfort without replacing their original{" "}
                      <Link to="/sash-window-secondary-glazing" className="text-primary hover:underline">sash windows</Link>.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We installed bespoke <strong>secondary glazing</strong> throughout the property, achieving:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <strong>68% reduction</strong> in heat loss
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <strong>£450 annual saving</strong> on heating bills
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <strong>75% reduction</strong> in street noise
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <strong>No planning permission required</strong> (internal installation)
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <strong>Original windows preserved</strong> and protected
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground italic">
                      The conservation officer praised the solution as "exemplary heritage conservation combined with modern efficiency."
                    </p>
                  </div>
                  <p className="text-muted-foreground mt-4">
                    <Link to="/case-studies" className="text-primary hover:underline">View more case studies</Link>
                  </p>
                </section>

                {/* Why Choose Us */}
                <section className="mb-12 not-prose">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Why Choose Secondary Glazing Specialist?
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>15+ years</strong> working in London conservation areas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Expert knowledge</strong> of conservation area regulations and requirements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>High success rate</strong> with planning applications (when required)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Bespoke solutions</strong> tailored to period properties</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>No external alterations</strong> - maintain your property's character</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Free surveys and quotes</strong> for conservation area properties</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Comprehensive warranty</strong> and aftercare support</span>
                    </li>
                  </ul>
                </section>

                {/* Related Services */}
                <section className="mb-12 not-prose">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Related Services
                  </h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">Listed Buildings Secondary Glazing</Link>
                    <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian Windows Secondary Glazing</Link>
                    <Link to="/sash-window-secondary-glazing" className="text-primary hover:underline">Sash Window Secondary Glazing</Link>
                    <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline">Georgian Windows Secondary Glazing</Link>
                    <Link to="/edwardian-property-secondary-glazing" className="text-primary hover:underline">Edwardian Property Secondary Glazing</Link>
                    <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">Thermal Insulation Solutions</Link>
                    <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">Noise Reduction Glazing</Link>
                    <Link to="/benefits" className="text-primary hover:underline">Benefits of Secondary Glazing</Link>
                    <Link to="/secondary-glazing-repairs" className="text-primary hover:underline">Repairs & Maintenance</Link>
                    <Link to="/gallery" className="text-primary hover:underline">View Gallery</Link>
                  </div>
                </section>

              </article>

              {/* Hero CTA */}
              <div className="mt-12">
                <CTASection 
                  variant="hero"
                  title="Get Your Free Conservation Area Property Survey"
                  description="Contact us today for a free, no-obligation survey of your conservation area property. Our specialist team will assess your windows, advise on planning requirements, and provide expert guidance on secondary glazing solutions."
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <RelatedContentSidebar 
                  title="Related Services" 
                  links={relatedLinks} 
                />
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                      <li><Link to="/quote-request" className="text-primary hover:underline">Request a Quote</Link></li>
                      <li><Link to="/gallery" className="text-primary hover:underline">View Gallery</Link></li>
                      <li><Link to="/case-studies" className="text-primary hover:underline">Case Studies</Link></li>
                      <li><Link to="/faqs" className="text-primary hover:underline">FAQs</Link></li>
                      <li><Link to="/contact" className="text-primary hover:underline">Contact Us</Link></li>
                    </ul>
                  </CardContent>
                </Card>
                <CTASection variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default ConservationAreasSecondaryGlazing;
