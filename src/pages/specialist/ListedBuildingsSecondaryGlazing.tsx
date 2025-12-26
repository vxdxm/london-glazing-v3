import React from "react";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { Link } from "react-router-dom";
import { Landmark, Shield, CheckCircle, FileText, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import RelatedContentSidebar from "@/components/seo/RelatedContentSidebar";
import CTASection from "@/components/seo/CTASection";
import { MainNav } from "@/components/MainNav";
import { InlineLink, QuickLinksGrid, specialistServicesLinks, residentialGlazingLinks, serviceAreaLinks } from "@/components/seo/InternalLinks";

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
];

const ListedBuildingsSecondaryGlazing = () => {
  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title="Listed Buildings Secondary Glazing | Grade I, II*, II Solutions"
        description="Expert secondary glazing for listed buildings in London. Approved solutions for Grade I, II*, and II properties with planning guidance. Preserve heritage while improving insulation."
        canonicalPath="/listed-buildings-secondary-glazing"
        keywords={[
          "listed building secondary glazing",
          "Grade I listed glazing",
          "Grade II listed windows",
          "heritage window solutions",
          "listed building planning permission",
          "conservation glazing London"
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
              Listed Buildings Secondary Glazing
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Expert secondary glazing solutions for Grade I, Grade II*, and Grade II listed properties. 
              We provide approved installations that preserve your building's heritage while dramatically 
              improving <InlineLink href="/thermal-insulation-secondary-glazing">thermal</InlineLink> and <InlineLink href="/noise-reduction-secondary-glazing">acoustic performance</InlineLink>.
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
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Why Secondary Glazing is Ideal for Listed Buildings
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Listed buildings present unique challenges when it comes to improving energy efficiency and comfort. 
                  Unlike replacement double glazing, secondary glazing is installed on the room side of existing windows, 
                  leaving the original historic windows completely untouched. This makes it the preferred solution 
                  recommended by conservation officers across England, especially in <InlineLink href="/conservation-areas-secondary-glazing">conservation areas</InlineLink>.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our secondary glazing systems are specifically designed for heritage properties, with slim aluminium 
                  frames that can be powder-coated to match existing woodwork. Whether you have <InlineLink href="/victorian-windows-secondary-glazing">Victorian sash windows</InlineLink>, 
                  <InlineLink href="/georgian-windows-secondary-glazing">Georgian casements</InlineLink>, or <InlineLink href="/edwardian-property-secondary-glazing">Edwardian bays</InlineLink>, 
                  the discrete internal installation means no visible changes to the external appearance of your listed building.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Understanding Listed Building Grades
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-12 not-prose">
                  <Card className="border-amber-200 bg-amber-50/50">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-amber-900 mb-3">Grade I Listed</h3>
                      <p className="text-amber-800 text-sm mb-4">
                        Buildings of exceptional interest, representing only 2.5% of all listed buildings.
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
                      <h3 className="text-xl font-semibold text-orange-900 mb-3">Grade II* Listed</h3>
                      <p className="text-orange-800 text-sm mb-4">
                        Particularly important buildings of more than special interest, about 5.8% of listings.
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
                      <h3 className="text-xl font-semibold text-yellow-900 mb-3">Grade II Listed</h3>
                      <p className="text-yellow-800 text-sm mb-4">
                        Nationally important buildings of special interest, comprising 91.7% of all listings.
                      </p>
                      <ul className="space-y-2 text-sm text-yellow-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>Straightforward installation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>Usually no consent needed</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>Wide frame colour options</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Planning Permission and Listed Building Consent
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  One of the key advantages of secondary glazing is that it rarely requires Listed Building Consent 
                  because it does not alter the external appearance or the fabric of the original windows. The 
                  installation is fully reversible, meaning it can be removed in the future without any damage 
                  to the historic building. This is particularly important for properties in <InlineLink href="/conservation-areas-secondary-glazing">conservation areas</InlineLink>.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  However, we always recommend consulting with your local conservation officer before proceeding. 
                  Our team has extensive experience working with local authorities across <InlineLink href="/areas/central-london">Central London</InlineLink>, 
                  <InlineLink href="/areas/west-london">West London</InlineLink>, and the <InlineLink href="/areas/home-counties">Home Counties</InlineLink>.
                </p>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8 not-prose">
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

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Benefits for Listed Building Owners
                </h2>
                <div className="grid md:grid-cols-2 gap-6 mb-12 not-prose">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Preserve Original Windows</h3>
                      <p className="text-sm text-muted-foreground">
                        Your historic windows remain completely untouched and can be maintained as normal.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        <Link to="/thermal-insulation-secondary-glazing" className="hover:text-primary">Reduce Heat Loss by 65%</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Create an insulating air gap that dramatically improves thermal performance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        <Link to="/noise-reduction-secondary-glazing" className="hover:text-primary">Cut Noise by up to 80%</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Acoustic glass options provide exceptional sound insulation for urban properties.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Eliminate Draughts</h3>
                      <p className="text-sm text-muted-foreground">
                        Seal gaps and improve comfort without affecting window operation.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Our Listed Building Experience
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With over 15 years of experience working on heritage properties across London, we understand 
                  the unique requirements of listed buildings. Our portfolio includes Grade I listed Georgian 
                  townhouses in Mayfair, Grade II* <InlineLink href="/victorian-windows-secondary-glazing">Victorian mansions</InlineLink> in Hampstead, and Grade II 
                  <InlineLink href="/edwardian-property-secondary-glazing">Edwardian properties</InlineLink> throughout the capital.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Every installation is carried out by trained heritage specialists who respect the 
                  craftsmanship of your building. We offer various glazing solutions including 
                  <InlineLink href="/residential/sash-windows">vertical sliding sash</InlineLink>, 
                  <InlineLink href="/residential/casement-windows">hinged casement</InlineLink>, and 
                  <InlineLink href="/residential/fixed-secondary-glazing">fixed panel</InlineLink> systems.
                </p>

                <QuickLinksGrid 
                  title="Explore Our Glazing Types" 
                  links={residentialGlazingLinks} 
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
                  title="Get Your Free Listed Building Survey"
                  description="Our heritage specialists will assess your property and provide expert recommendations for secondary glazing that meets conservation requirements."
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

export default ListedBuildingsSecondaryGlazing;
