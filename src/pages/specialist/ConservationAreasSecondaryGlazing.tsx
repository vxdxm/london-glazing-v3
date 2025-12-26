import React from "react";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { Link } from "react-router-dom";
import { TreePine, MapPin, CheckCircle, Home, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/MainNav";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import RelatedContentSidebar from "@/components/seo/RelatedContentSidebar";
import CTASection from "@/components/seo/CTASection";
import { InlineLink, QuickLinksGrid, specialistServicesLinks, serviceAreaLinks } from "@/components/seo/InternalLinks";

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
];

const ConservationAreasSecondaryGlazing = () => {
  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title="Conservation Areas Secondary Glazing | Approved Heritage Solutions"
        description="Secondary glazing solutions designed for conservation areas in London. Meet Article 4 requirements while improving thermal efficiency. No external changes to your property."
        canonicalPath="/conservation-areas-secondary-glazing"
        keywords={[
          "conservation area secondary glazing",
          "Article 4 direction glazing",
          "heritage area windows",
          "conservation approved glazing",
          "period property windows London",
          "conservation officer approved"
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
              Conservation Areas Secondary Glazing
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Preserve the character of your conservation area property while enjoying modern comfort. 
              Our secondary glazing solutions are designed to meet local authority requirements without 
              altering your home's external appearance, providing excellent <InlineLink href="/thermal-insulation-secondary-glazing">thermal insulation</InlineLink> and <InlineLink href="/noise-reduction-secondary-glazing">noise reduction</InlineLink>.
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
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Understanding Conservation Area Restrictions
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Conservation areas are designated to protect the special architectural and historic 
                  interest of a place. If your property falls within a conservation area, you may face 
                  restrictions on changes to windows, particularly if an Article 4 Direction is in place. 
                  This often prevents the installation of uPVC double glazing or other modern window 
                  replacements that would alter the property's appearance, similar to restrictions on <InlineLink href="/listed-buildings-secondary-glazing">listed buildings</InlineLink>.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Secondary glazing offers the perfect solution because it is installed internally, 
                  behind your existing windows. From the street, your property looks exactly the same, 
                  preserving the cohesive character that conservation areas are designed to protect. Whether you have 
                  <InlineLink href="/victorian-windows-secondary-glazing">Victorian sash windows</InlineLink> or 
                  <InlineLink href="/georgian-windows-secondary-glazing">Georgian casements</InlineLink>, we have the solution.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  London Conservation Areas We Serve
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-12 not-prose">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <MapPin className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-semibold">
                          <Link to="/areas/central-london" className="hover:text-primary">Central London</Link>
                        </h3>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Belgravia Conservation Area</li>
                        <li>• Mayfair Conservation Area</li>
                        <li>• Bloomsbury Conservation Area</li>
                        <li>• Marylebone Conservation Area</li>
                        <li>• Pimlico Conservation Area</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <MapPin className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-semibold">
                          <Link to="/areas/north-london" className="hover:text-primary">North London</Link>
                        </h3>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Hampstead Conservation Area</li>
                        <li>• Highgate Conservation Area</li>
                        <li>• Barnsbury Conservation Area</li>
                        <li>• Canonbury Conservation Area</li>
                        <li>• Muswell Hill Conservation Area</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <MapPin className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-semibold">
                          <Link to="/areas/west-london" className="hover:text-primary">West London</Link>
                        </h3>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Holland Park Conservation Area</li>
                        <li>• Notting Hill Conservation Area</li>
                        <li>• Kensington Conservation Areas</li>
                        <li>• Chelsea Conservation Area</li>
                        <li>• Chiswick Conservation Area</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <MapPin className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-semibold">
                          <Link to="/areas/south-london" className="hover:text-primary">South London</Link>
                        </h3>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Dulwich Village Conservation Area</li>
                        <li>• Blackheath Conservation Area</li>
                        <li>• Richmond Conservation Area</li>
                        <li>• Greenwich Conservation Area</li>
                        <li>• Wandsworth Conservation Areas</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Article 4 Directions Explained
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  An Article 4 Direction removes certain permitted development rights, meaning changes 
                  that would normally not need planning permission suddenly require approval. Many 
                  conservation areas in London have Article 4 Directions covering window replacement, 
                  making it extremely difficult to install modern double glazing.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Secondary glazing bypasses these restrictions entirely because:
                </p>
                <ul className="list-none space-y-3 mb-8 not-prose">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">It is installed internally, not affecting the external appearance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Original windows remain in place and fully functional</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">The installation is completely reversible</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">No alterations to the building fabric are required</span>
                  </li>
                </ul>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Benefits for Conservation Area Properties
                </h2>
                <div className="grid md:grid-cols-2 gap-6 mb-12 not-prose">
                  <div className="bg-muted/30 rounded-lg p-6">
                    <Home className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">
                      <Link to="/thermal-insulation-secondary-glazing" className="hover:text-primary">Thermal Efficiency</Link>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Reduce heat loss through single-glazed windows by up to 65%, lowering your 
                      heating bills while maintaining period character.
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-6">
                    <Home className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">
                      <Link to="/noise-reduction-secondary-glazing" className="hover:text-primary">Noise Reduction</Link>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Block up to 80% of external noise, perfect for properties on busy roads 
                      or near transport links.
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-6">
                    <Home className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Draught Elimination</h3>
                    <p className="text-sm text-muted-foreground">
                      Seal gaps around original windows without affecting their operation 
                      or appearance.
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-6">
                    <Home className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Property Value</h3>
                    <p className="text-sm text-muted-foreground">
                      Improve comfort and energy efficiency while preserving the original 
                      features that add value to period homes.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Our Conservation Area Expertise
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We have completed hundreds of secondary glazing installations in conservation areas 
                  across London. Our team understands the sensitivities involved and takes great care 
                  to ensure every installation respects the character of your property and neighbourhood.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  From <InlineLink href="/victorian-windows-secondary-glazing">Victorian terraces</InlineLink> in Islington to 
                  <InlineLink href="/georgian-windows-secondary-glazing">Georgian townhouses</InlineLink> in Greenwich, we have 
                  the experience to deliver a solution that meets your needs while complying with 
                  local planning requirements. We also work on <InlineLink href="/edwardian-property-secondary-glazing">Edwardian properties</InlineLink> throughout the capital.
                </p>

                <QuickLinksGrid 
                  title="Our Specialist Services" 
                  links={specialistServicesLinks.slice(0, 6)} 
                  columns={3}
                />

                <QuickLinksGrid 
                  title="Areas We Cover" 
                  links={serviceAreaLinks} 
                  columns={4}
                />
              </div>

              {/* Hero CTA */}
              <div className="mt-12">
                <CTASection 
                  variant="hero"
                  title="Get Your Free Conservation Area Survey"
                  description="Our specialists will assess your property and provide recommendations that meet conservation requirements."
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
