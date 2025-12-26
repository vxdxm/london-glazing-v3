import React from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { Link } from "react-router-dom";
import { TreePine, MapPin, CheckCircle, Home, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
              altering your home's external appearance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/quote-request">Get Free Survey</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+442034888227">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Our Experts
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Understanding Conservation Area Restrictions
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Conservation areas are designated to protect the special architectural and historic 
              interest of a place. If your property falls within a conservation area, you may face 
              restrictions on changes to windows, particularly if an Article 4 Direction is in place. 
              This often prevents the installation of uPVC double glazing or other modern window 
              replacements that would alter the property's appearance.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Secondary glazing offers the perfect solution because it is installed internally, 
              behind your existing windows. From the street, your property looks exactly the same, 
              preserving the cohesive character that conservation areas are designed to protect.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6">
              London Conservation Areas We Serve
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12 not-prose">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold">Central London</h3>
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
                    <h3 className="text-lg font-semibold">North London</h3>
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
                    <h3 className="text-lg font-semibold">West London</h3>
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
                    <h3 className="text-lg font-semibold">South London</h3>
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
                <h3 className="font-semibold text-foreground mb-2">Thermal Efficiency</h3>
                <p className="text-sm text-muted-foreground">
                  Reduce heat loss through single-glazed windows by up to 65%, lowering your 
                  heating bills while maintaining period character.
                </p>
              </div>
              <div className="bg-muted/30 rounded-lg p-6">
                <Home className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Noise Reduction</h3>
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
              From Victorian terraces in Islington to Georgian townhouses in Greenwich, we have 
              the experience to deliver a solution that meets your needs while complying with 
              local planning requirements.
            </p>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default ConservationAreasSecondaryGlazing;
