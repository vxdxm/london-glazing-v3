import React from "react";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { SpecialistPageSchema } from "@/components/seo/SpecialistPageSchema";
import { Link } from "react-router-dom";
import { Landmark, Shield, CheckCircle, FileText, Phone, ThermometerSun, Volume2, Lock, Droplets } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import RelatedContentSidebar from "@/components/seo/RelatedContentSidebar";
import CTASection from "@/components/seo/CTASection";
import { MainNav } from "@/components/MainNav";

const breadcrumbItems = [
  { label: "Services", href: "/residential" },
  { label: "Heritage Properties", href: "/conservation-areas-secondary-glazing" },
  { label: "Listed Buildings Secondary Glazing" },
];

const relatedLinks = [
  { title: "Conservation Areas Glazing", href: "/conservation-areas-secondary-glazing", description: "Solutions for conservation areas" },
  { title: "Victorian Windows", href: "/victorian-windows-secondary-glazing", description: "Period-appropriate solutions" },
  { title: "Georgian Windows", href: "/georgian-windows-secondary-glazing", description: "Heritage Georgian properties" },
  { title: "Sash Window Glazing", href: "/sash-window-secondary-glazing", description: "Traditional sash window solutions" },
  { title: "Thermal Insulation", href: "/thermal-insulation-secondary-glazing", description: "Reduce heat loss significantly" },
  { title: "Noise Reduction", href: "/noise-reduction-secondary-glazing", description: "Block external noise" },
  { title: "Edwardian Properties", href: "/edwardian-property-secondary-glazing", description: "Edwardian home solutions" },
];

const serviceAreas = [
  { title: "Kensington & Chelsea", href: "/service-areas/kensington-chelsea" },
  { title: "Westminster", href: "/service-areas/westminster" },
  { title: "Camden", href: "/service-areas/camden" },
  { title: "Islington", href: "/service-areas/islington" },
  { title: "Central London", href: "/areas/central-london" },
  { title: "North London", href: "/areas/north-london" },
  { title: "South London", href: "/areas/south-london" },
  { title: "West London", href: "/areas/west-london" },
  { title: "East London", href: "/areas/east-london" },
  { title: "Home Counties", href: "/areas/home-counties" },
];

const ListedBuildingsSecondaryGlazing = () => {
  return (
    <div className="min-h-screen">
      <SpecialistPageSchema
        serviceName="Listed Buildings Secondary Glazing"
        serviceDescription="Expert secondary glazing solutions for Grade I, II*, and II listed buildings across London. Preserve original windows while improving thermal efficiency, noise reduction, and security with fully reversible installations."
        pageName="Listed Buildings Secondary Glazing London"
        pageDescription="Specialist secondary glazing for listed buildings and heritage properties"
        priceRange={{ low: 500, high: 1200 }}
        faqs={[
          { question: "Can I install secondary glazing in a listed building?", answer: "Yes, secondary glazing is the preferred solution for listed buildings as it preserves original windows, is fully reversible, and doesn't alter the external appearance. We handle Listed Building Consent applications." },
          { question: "Do I need planning permission for secondary glazing in a listed building?", answer: "Secondary glazing is an internal alteration, so planning permission is usually not required. However, Listed Building Consent may be needed for Grade I and II* buildings. We provide full guidance and handle applications." }
        ]}
      />
      {/* SEO CONTENT - Hidden from users, visible to crawlers */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <header>
          <h1>Listed Buildings Secondary Glazing | Heritage Window Solutions</h1>
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
              <h2>Expert Secondary Glazing for Listed Buildings Across London</h2>
              <p>Secondary Glazing Specialist is London's leading provider of <strong>secondary glazing solutions for listed buildings</strong>. Whether you own a <strong>Grade I, Grade II*, or Grade II listed property</strong>, we understand the unique challenges of preserving architectural heritage while improving thermal efficiency and noise reduction.</p>
              <p>Our specialist team works closely with homeowners, conservation officers, and local planning authorities to deliver <a href="/conservation-areas-secondary-glazing">sympathetic secondary glazing installations</a> that meet strict heritage regulations while reducing heat loss by up to 75% and blocking up to 80% of external noise pollution.</p>
              <p>With over 15 years of experience working on <strong>period properties across London's most historic boroughs</strong>, we provide bespoke solutions for <a href="/victorian-windows-secondary-glazing">Victorian</a>, <a href="/georgian-windows-secondary-glazing">Georgian</a>, and <a href="/edwardian-property-secondary-glazing">Edwardian homes</a> that preserve original windows while dramatically improving comfort and energy efficiency.</p>
            </section>

            <section>
              <h2>Understanding Listed Building Grades</h2>
              <h3>Grade I Listed Buildings</h3>
              <p><strong>Grade I listed buildings</strong> represent buildings of exceptional interest (only 2.5% of listed buildings). These require the highest level of consent and the most sympathetic approach to any alterations. Our <a href="/thermal-insulation-secondary-glazing">secondary glazing solutions</a> are specifically designed to meet the stringent requirements of Grade I properties without compromising architectural integrity.</p>
              <h3>Grade II* Listed Buildings</h3>
              <p><strong>Grade II* (Grade Two Star) listed buildings</strong> are particularly important buildings of more than special interest (5.8% of listed buildings). Secondary glazing offers an ideal solution for improving thermal performance without replacing or altering original windows.</p>
              <h3>Grade II Listed Buildings</h3>
              <p><strong>Grade II listed buildings</strong> represent buildings of special interest (91.7% of all listed buildings). While regulations are slightly more flexible, any alterations still require <strong>Listed Building Consent</strong>. Our team provides full support throughout the planning permission process.</p>
            </section>

            <section>
              <h2>Planning Permission for Listed Buildings</h2>
              <p>Installing secondary glazing in a listed building typically requires <strong>Listed Building Consent</strong> from your local planning authority. The process involves:</p>
              <ul>
                <li><strong>Initial consultation</strong> to assess your property and requirements</li>
                <li><strong>Heritage statement</strong> documenting the proposed works</li>
                <li><strong>Detailed drawings</strong> showing the secondary glazing installation</li>
                <li><strong>Materials specification</strong> demonstrating sympathetic approach</li>
                <li><strong>Application submission</strong> to local planning authority</li>
                <li><strong>Conservation officer liaison</strong> to address any concerns</li>
              </ul>
              <p>We provide comprehensive support throughout this process, with a high success rate for planning applications across <a href="/service-areas/kensington-chelsea">Kensington &amp; Chelsea</a>, <a href="/service-areas/westminster">Westminster</a>, <a href="/service-areas/camden">Camden</a>, and other heritage-rich London boroughs.</p>
            </section>

            <section>
              <h2>Benefits of Secondary Glazing for Listed Buildings</h2>
              <h3>Preserve Original Windows</h3>
              <p>Unlike replacement windows, <strong>secondary glazing preserves your original historic windows</strong> intact. The secondary pane is installed on the interior, maintaining the external appearance and architectural character of your listed building.</p>
              <h3>Reversible Installation</h3>
              <p>Secondary glazing is <strong>completely reversible</strong> - a key requirement for listed buildings. If needed, the secondary glazing can be removed without any lasting impact on the original window frames.</p>
              <h3>Superior Thermal Insulation</h3>
              <p>The air gap between original window and secondary pane creates exceptional <a href="/thermal-insulation-secondary-glazing">thermal insulation</a>, reducing heat loss by up to 75% and dramatically lowering energy bills in period properties.</p>
              <h3>Exceptional Noise Reduction</h3>
              <p>Secondary glazing blocks up to 80% of external <a href="/noise-reduction-secondary-glazing">noise pollution</a>, creating peaceful living spaces in busy urban areas like <a href="/service-areas/islington">Islington</a> and <a href="/service-areas/tower-hamlets">Tower Hamlets</a>.</p>
              <h3>Enhanced Security</h3>
              <p>Adding a second layer of glazing provides additional security without compromising the aesthetic of historic windows.</p>
              <h3>Reduced Condensation</h3>
              <p>Proper secondary glazing installation significantly reduces condensation issues common in single-glazed period windows.</p>
            </section>

            <section>
              <h2>Window Types We Work With</h2>
              <ul>
                <li><a href="/sash-window-secondary-glazing"><strong>Sash windows</strong></a> - Maintaining full functionality while adding insulation</li>
                <li><strong>Casement windows</strong> - Side-hinged windows common in Georgian and Victorian properties</li>
                <li><strong>Bay windows</strong> - Complex multi-angled installations requiring specialist expertise</li>
                <li><strong>Dormer windows</strong> - Roof-level windows in period conversions</li>
                <li><strong>Arched windows</strong> - Bespoke solutions for curved and arched heritage features</li>
                <li><strong>Leaded light windows</strong> - Preserving decorative glazing patterns</li>
              </ul>
            </section>

            <section>
              <h2>Areas We Serve</h2>
              <p>We provide specialist <strong>listed building secondary glazing services</strong> across London's most historic boroughs:</p>
              <ul>
                <li><a href="/service-areas/kensington-chelsea">Kensington &amp; Chelsea</a> - Home to some of London's finest listed properties</li>
                <li><a href="/service-areas/westminster">Westminster</a> - Including conservation areas around Parliament and Belgravia</li>
                <li><a href="/service-areas/camden">Camden</a> - Bloomsbury, Hampstead, and historic Camden Town</li>
                <li><a href="/service-areas/islington">Islington</a> - Georgian squares and Victorian terraces</li>
                <li><a href="/service-areas/richmond-upon-thames">Richmond upon Thames</a> - Riverside heritage properties</li>
                <li><a href="/service-areas/wandsworth">Wandsworth</a> - Period homes in Battersea and Clapham</li>
                <li><a href="/service-areas/hammersmith-fulham">Hammersmith &amp; Fulham</a> - Victorian properties across the borough</li>
                <li><a href="/service-areas/lambeth">Lambeth</a> - Historic areas including Brixton and Clapham</li>
                <li><a href="/service-areas/southwark">Southwark</a> - Period properties south of the Thames</li>
                <li><a href="/service-areas/city-of-london">City of London</a> - Historic City properties</li>
              </ul>
              <p><a href="/service-areas">View all 38 service areas</a></p>
            </section>

            <section>
              <h2>Our Process</h2>
              <ol>
                <li><strong>Free Heritage Property Survey</strong> - We visit your listed building to assess requirements and discuss options</li>
                <li><strong>Planning Support</strong> - We help prepare your Listed Building Consent application with detailed drawings and specifications</li>
                <li><strong>Bespoke Manufacturing</strong> - Each installation is custom-made to fit your exact window dimensions and heritage requirements</li>
                <li><strong>Expert Installation</strong> - Our trained specialists install secondary glazing with minimal disruption</li>
                <li><strong>Aftercare</strong> - Comprehensive warranty and ongoing support</li>
              </ol>
            </section>

            <section>
              <h2>Why Choose Secondary Glazing Specialist?</h2>
              <ul>
                <li><strong>15+ years</strong> working exclusively with heritage properties</li>
                <li><strong>High success rate</strong> with Listed Building Consent applications</li>
                <li><strong>Specialist knowledge</strong> of period architecture and conservation requirements</li>
                <li><strong>Bespoke solutions</strong> tailored to your specific property</li>
                <li><strong>Reversible installations</strong> meeting heritage guidelines</li>
                <li><strong>London-wide service</strong> across all boroughs</li>
                <li><strong>Free surveys and quotes</strong> for listed properties</li>
              </ul>
            </section>

            <section>
              <h2>Related Services</h2>
              <ul>
                <li><a href="/conservation-areas-secondary-glazing">Conservation Areas Secondary Glazing</a></li>
                <li><a href="/victorian-windows-secondary-glazing">Victorian Windows Secondary Glazing</a></li>
                <li><a href="/sash-window-secondary-glazing">Sash Window Secondary Glazing</a></li>
                <li><a href="/georgian-windows-secondary-glazing">Georgian Windows Secondary Glazing</a></li>
                <li><a href="/edwardian-property-secondary-glazing">Edwardian Property Secondary Glazing</a></li>
                <li><a href="/thermal-insulation-secondary-glazing">Thermal Insulation Solutions</a></li>
                <li><a href="/noise-reduction-secondary-glazing">Noise Reduction Glazing</a></li>
              </ul>
            </section>

            <section>
              <h2>Get Your Free Listed Building Survey</h2>
              <p>Contact us today for a free, no-obligation survey of your listed building. Our specialist team will assess your property, discuss your requirements, and provide expert guidance on secondary glazing solutions that meet heritage regulations.</p>
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
              <li><a href="/georgian-windows-secondary-glazing">Georgian Windows</a></li>
              <li><a href="/edwardian-property-secondary-glazing">Edwardian Properties</a></li>
            </ul>

            <h3>Popular Areas</h3>
            <ul>
              <li><a href="/service-areas/kensington-chelsea">Kensington &amp; Chelsea</a></li>
              <li><a href="/service-areas/westminster">Westminster</a></li>
              <li><a href="/service-areas/camden">Camden</a></li>
              <li><a href="/service-areas/islington">Islington</a></li>
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
        title="Listed Buildings Secondary Glazing | Expert Heritage Solutions London"
        description="Specialist secondary glazing for Grade I, II*, and II listed buildings. Preserve character, meet conservation requirements, and improve insulation. Free heritage property surveys across London."
        canonicalPath="/listed-buildings-secondary-glazing"
        keywords={[
          "listed building secondary glazing",
          "Grade I listed glazing",
          "Grade II listed windows",
          "heritage window solutions",
          "listed building planning permission",
          "conservation glazing London",
          "heritage property windows",
          "listed building consent"
        ]}
      />
      
      <MainNav />
      
      <div className="container mx-auto px-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-amber-50 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-6">
              <Landmark className="h-5 w-5" />
              <span className="font-medium">Heritage Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Listed Buildings Secondary Glazing | Heritage Window Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Expert secondary glazing solutions for <strong>Grade I, Grade II*, and Grade II listed properties</strong>. 
              We preserve your building's heritage while dramatically improving{" "}
              <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">thermal efficiency</Link> and{" "}
              <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">acoustic performance</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/quote-request">Get Free Heritage Survey</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:02070601572">
                  <Phone className="mr-2 h-4 w-4" />
                  Speak to an Expert
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
                    Expert Secondary Glazing for Listed Buildings Across London
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Secondary Glazing Specialist is London's leading provider of <strong>secondary glazing solutions for listed buildings</strong>. 
                    Whether you own a <strong>Grade I, Grade II*, or Grade II listed property</strong>, we understand the unique challenges of 
                    preserving architectural heritage while improving thermal efficiency and noise reduction.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our specialist team works closely with homeowners, conservation officers, and local planning authorities to deliver{" "}
                    <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">sympathetic secondary glazing installations</Link>{" "}
                    that meet strict heritage regulations while reducing heat loss by up to 75% and blocking up to 80% of external noise pollution.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    With over 15 years of experience working on <strong>period properties across London's most historic boroughs</strong>, 
                    we provide bespoke solutions for{" "}
                    <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian</Link>,{" "}
                    <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline">Georgian</Link>, and{" "}
                    <Link to="/edwardian-property-secondary-glazing" className="text-primary hover:underline">Edwardian homes</Link>{" "}
                    that preserve original windows while dramatically improving comfort and energy efficiency.
                  </p>
                </section>

                {/* Understanding Listed Building Grades */}
                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Understanding Listed Building Grades
                  </h2>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8 not-prose">
                    <Card className="border-amber-200 bg-amber-50/50">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-amber-900 mb-3">Grade I Listed Buildings</h3>
                        <p className="text-amber-800 text-sm mb-4">
                          Buildings of <strong>exceptional interest</strong> (only 2.5% of listed buildings). These require the highest level of 
                          consent and the most sympathetic approach to any alterations.
                        </p>
                        <ul className="space-y-2 text-sm text-amber-700">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span>Internal secondary glazing approved</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span>No external alterations required</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span>Heritage-sensitive installation</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-orange-200 bg-orange-50/50">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-orange-900 mb-3">Grade II* Listed Buildings</h3>
                        <p className="text-orange-800 text-sm mb-4">
                          <strong>Particularly important buildings</strong> of more than special interest (5.8% of listed buildings). 
                          Secondary glazing offers an ideal solution for improving thermal performance.
                        </p>
                        <ul className="space-y-2 text-sm text-orange-700">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span>Reversible installation method</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span>Original features preserved</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span>Bespoke frame matching</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-yellow-200 bg-yellow-50/50">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-yellow-900 mb-3">Grade II Listed Buildings</h3>
                        <p className="text-yellow-800 text-sm mb-4">
                          Buildings of <strong>special interest</strong> (91.7% of all listed buildings). While regulations are slightly 
                          more flexible, alterations still require <strong>Listed Building Consent</strong>.
                        </p>
                        <ul className="space-y-2 text-sm text-yellow-700">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span>Straightforward installation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span>Full planning support provided</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span>Wide frame colour options</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Planning Permission */}
                <section className="mb-12 not-prose">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Planning Permission for Listed Buildings
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Installing secondary glazing in a listed building typically requires <strong>Listed Building Consent</strong> from 
                    your local planning authority. The process involves:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Initial consultation</strong> to assess your property and requirements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Heritage statement</strong> documenting the proposed works</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Detailed drawings</strong> showing the secondary glazing installation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Materials specification</strong> demonstrating sympathetic approach</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Application submission</strong> to local planning authority</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Conservation officer liaison</strong> to address any concerns</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    We provide comprehensive support throughout this process, with a high success rate for planning applications across{" "}
                    <Link to="/service-areas/kensington-chelsea" className="text-primary hover:underline">Kensington & Chelsea</Link>,{" "}
                    <Link to="/service-areas/westminster" className="text-primary hover:underline">Westminster</Link>,{" "}
                    <Link to="/service-areas/camden" className="text-primary hover:underline">Camden</Link>, and other heritage-rich London boroughs.
                  </p>

                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-6">
                    <div className="flex items-start gap-4">
                      <FileText className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Free Planning Guidance</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          We provide comprehensive planning support including technical specifications, 
                          heritage impact assessments, and liaison with conservation officers when required.
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
                    Benefits of Secondary Glazing for Listed Buildings
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Shield className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Preserve Original Windows</h3>
                        <p className="text-sm text-muted-foreground">
                          Unlike replacement windows, <strong>secondary glazing preserves your original historic windows</strong> intact. 
                          The secondary pane is installed on the interior, maintaining the external appearance and architectural character.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Reversible Installation</h3>
                        <p className="text-sm text-muted-foreground">
                          Secondary glazing is <strong>completely reversible</strong> - a key requirement for listed buildings. 
                          If needed, it can be removed without any lasting impact on the original window frames.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <ThermometerSun className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          <Link to="/thermal-insulation-secondary-glazing" className="hover:text-primary">Superior Thermal Insulation</Link>
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          The air gap between original window and secondary pane creates exceptional thermal insulation, 
                          <strong>reducing heat loss by up to 75%</strong> and dramatically lowering energy bills.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <Volume2 className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          <Link to="/noise-reduction-secondary-glazing" className="hover:text-primary">Exceptional Noise Reduction</Link>
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Secondary glazing <strong>blocks up to 80% of external noise pollution</strong>, creating peaceful living spaces 
                          in busy urban areas like <Link to="/service-areas/islington" className="text-primary hover:underline">Islington</Link>.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <Lock className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Enhanced Security</h3>
                        <p className="text-sm text-muted-foreground">
                          Adding a second layer of glazing provides additional security without compromising 
                          the aesthetic of historic windows.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                        <Droplets className="h-6 w-6 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Reduced Condensation</h3>
                        <p className="text-sm text-muted-foreground">
                          Proper secondary glazing installation significantly reduces condensation issues 
                          common in single-glazed period windows.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Window Types */}
                <section className="mb-12 not-prose">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Window Types We Work With
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <Link to="/sash-window-secondary-glazing" className="text-primary hover:underline font-semibold">Sash windows</Link> - 
                        Maintaining full functionality while adding insulation
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <Link to="/residential/casement-windows" className="text-primary hover:underline font-semibold">Casement windows</Link> - 
                        Side-hinged windows common in Georgian and Victorian properties
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <Link to="/residential/bay-windows" className="text-primary hover:underline font-semibold">Bay windows</Link> - 
                        Complex multi-angled installations requiring specialist expertise
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong>Dormer windows</strong> - Roof-level windows in period conversions
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong>Arched windows</strong> - Bespoke solutions for curved and arched heritage features
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong>Leaded light windows</strong> - Preserving decorative glazing patterns
                      </span>
                    </li>
                  </ul>
                </section>

                {/* Areas We Serve */}
                <section className="mb-12 not-prose">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Areas We Serve
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We provide specialist <strong>listed building secondary glazing services</strong> across London's most historic boroughs:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {serviceAreas.map((area, index) => (
                      <Link
                        key={index}
                        to={area.href}
                        className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                      >
                        <Landmark className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{area.title}</span>
                      </Link>
                    ))}
                  </div>
                  <p className="text-muted-foreground mt-4">
                    <Link to="/locations" className="text-primary hover:underline">View all 38 service areas</Link>
                  </p>
                </section>

                {/* Our Process */}
                <section className="mb-12 not-prose">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Our Process
                  </h2>
                  <ol className="space-y-4">
                    <li className="flex items-start gap-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">1</span>
                      <div>
                        <h3 className="font-semibold text-foreground">Free Heritage Property Survey</h3>
                        <p className="text-sm text-muted-foreground">We visit your listed building to assess requirements and discuss options</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">2</span>
                      <div>
                        <h3 className="font-semibold text-foreground">Planning Support</h3>
                        <p className="text-sm text-muted-foreground">We help prepare your Listed Building Consent application with detailed drawings and specifications</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">3</span>
                      <div>
                        <h3 className="font-semibold text-foreground">Bespoke Manufacturing</h3>
                        <p className="text-sm text-muted-foreground">Each installation is custom-made to fit your exact window dimensions and heritage requirements</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">4</span>
                      <div>
                        <h3 className="font-semibold text-foreground">Expert Installation</h3>
                        <p className="text-sm text-muted-foreground">Our trained specialists install secondary glazing with minimal disruption</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">5</span>
                      <div>
                        <h3 className="font-semibold text-foreground">Aftercare</h3>
                        <p className="text-sm text-muted-foreground">Comprehensive warranty and ongoing support</p>
                      </div>
                    </li>
                  </ol>
                </section>

                {/* Why Choose Us */}
                <section className="mb-12 not-prose">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Why Choose Secondary Glazing Specialist?
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>15+ years</strong> working exclusively with heritage properties</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>High success rate</strong> with Listed Building Consent applications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Specialist knowledge</strong> of period architecture and conservation requirements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Bespoke solutions</strong> tailored to your specific property</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Reversible installations</strong> meeting heritage guidelines</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>London-wide service</strong> across all boroughs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Free surveys and quotes</strong> for listed properties</span>
                    </li>
                  </ul>
                </section>

                {/* Related Services */}
                <section className="mb-12 not-prose">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Related Services
                  </h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">Conservation Areas Secondary Glazing</Link>
                    <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian Windows Secondary Glazing</Link>
                    <Link to="/sash-window-secondary-glazing" className="text-primary hover:underline">Sash Window Secondary Glazing</Link>
                    <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline">Georgian Windows Secondary Glazing</Link>
                    <Link to="/edwardian-property-secondary-glazing" className="text-primary hover:underline">Edwardian Property Secondary Glazing</Link>
                    <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">Thermal Insulation Solutions</Link>
                    <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">Noise Reduction Glazing</Link>
                    <Link to="/case-studies" className="text-primary hover:underline">View Case Studies</Link>
                    <Link to="/benefits" className="text-primary hover:underline">Benefits of Secondary Glazing</Link>
                    <Link to="/secondary-glazing-repairs" className="text-primary hover:underline">Repairs & Maintenance</Link>
                  </div>
                </section>

              </article>

              {/* Hero CTA */}
              <div className="mt-12">
                <CTASection 
                  variant="hero"
                  title="Get Your Free Listed Building Survey"
                  description="Contact us today for a free, no-obligation survey of your listed building. Our specialist team will assess your property, discuss your requirements, and provide expert guidance on secondary glazing solutions that meet heritage regulations."
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
                      <li><Link to="/faqs" className="text-primary hover:underline">FAQs</Link></li>
                      <li><Link to="/contact" className="text-primary hover:underline">Contact Us</Link></li>
                      <li><Link to="/guides/secondary-vs-double-glazing" className="text-primary hover:underline">Secondary vs Double Glazing</Link></li>
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

export default ListedBuildingsSecondaryGlazing;
