import React from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { Link } from "react-router-dom";
import { Building2, Sun, Leaf, CheckCircle, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const EdwardianPropertySecondaryGlazing = () => {
  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title="Edwardian Property Secondary Glazing | Sympathetic Period Solutions"
        description="Expert secondary glazing for Edwardian homes in London. Preserve decorative features, stained glass, and original windows. Improve insulation while maintaining character."
        canonicalPath="/edwardian-property-secondary-glazing"
        keywords={[
          "Edwardian property secondary glazing",
          "Edwardian house windows",
          "Edwardian window insulation",
          "stained glass secondary glazing",
          "Edwardian bay window glazing",
          "period property London glazing"
        ]}
      />
      
      <MainNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-emerald-50 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full mb-6">
              <Building2 className="h-5 w-5" />
              <span className="font-medium">Edwardian Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Edwardian Property Secondary Glazing
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Sympathetic secondary glazing solutions for Edwardian homes. We understand 
              the Arts and Crafts influences and decorative features that make Edwardian 
              properties unique, and our installations are designed to complement them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/quote-request">Get Free Edwardian Survey</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+442034888227">
                  <Phone className="mr-2 h-4 w-4" />
                  Speak to an Expert
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
              The Edwardian Era (1901-1910)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The Edwardian period, though brief, produced some of London's most beloved 
              residential architecture. Reacting against the heavier Victorian styles, 
              Edwardian homes embrace lighter colours, larger windows, and a connection 
              with nature through the Arts and Crafts movement. These properties feature 
              generous proportions, decorative plasterwork, and distinctive window designs.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Edwardian windows often incorporate stained glass, leaded lights, and 
              decorative fanlights that require special consideration when installing 
              secondary glazing. Our approach ensures these beautiful features remain 
              visible and protected.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6">
              Distinctive Edwardian Window Features
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12 not-prose">
              <Card className="border-emerald-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Sun className="h-6 w-6 text-emerald-600" />
                    <h3 className="text-lg font-semibold">Stained Glass Panels</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Many Edwardian windows feature beautiful stained glass in the upper 
                    sashes, often with Art Nouveau or stylised floral motifs.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Clear secondary glass preserves views
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      UV protection for coloured glass
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-emerald-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Leaf className="h-6 w-6 text-emerald-600" />
                    <h3 className="text-lg font-semibold">Leaded Lights</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Diamond or rectangular leaded panels in clear or textured glass, 
                    typical of the Arts and Crafts style.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Protects delicate leadwork
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Reduces maintenance needs
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-emerald-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="h-6 w-6 text-emerald-600" />
                    <h3 className="text-lg font-semibold">Square Bay Windows</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Unlike Victorian curved bays, Edwardian bays are typically square 
                    with distinct side windows.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Multi-section fitting
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Individual panel access
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-emerald-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Sun className="h-6 w-6 text-emerald-600" />
                    <h3 className="text-lg font-semibold">Generous Glazing</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Edwardian homes prioritised natural light with larger windows 
                    than Victorian properties.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Maintains light levels
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Reduces glare and UV
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6">
              Protecting Decorative Glass
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Stained glass and leaded lights are among the most valuable features of 
              Edwardian properties. These delicate elements are vulnerable to weathering, 
              impact damage, and deterioration of the lead came. Secondary glazing provides 
              an important protective layer, shielding the original glass from the elements 
              while maintaining its visibility.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We always use clear glass in the secondary glazing to ensure that the 
              decorative elements remain the focal point. For enhanced protection, we can 
              specify UV-filtering glass that prevents fading of coloured glass while 
              remaining optically clear.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6">
              Benefits for Edwardian Homes
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12 not-prose">
              <div className="bg-muted/30 rounded-lg p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-emerald-700 font-bold text-lg">65%</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Heat Retention</h3>
                <p className="text-sm text-muted-foreground">
                  Reduce heat loss through large Edwardian windows by up to 65%.
                </p>
              </div>
              <div className="bg-muted/30 rounded-lg p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-emerald-700 font-bold text-lg">80%</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Noise Reduction</h3>
                <p className="text-sm text-muted-foreground">
                  Acoustic glass options dramatically reduce traffic noise.
                </p>
              </div>
              <div className="bg-muted/30 rounded-lg p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-emerald-700 font-bold text-lg">99%</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">UV Protection</h3>
                <p className="text-sm text-muted-foreground">
                  Protect interiors and stained glass from harmful UV rays.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6">
              Edwardian Areas We Serve
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              London has extensive areas of Edwardian housing, and we have particular 
              experience in these neighbourhoods:
            </p>
            <ul className="list-none space-y-2 mb-8 not-prose">
              <li className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Hampstead Garden Suburb
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Bedford Park, Chiswick
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Muswell Hill and Crouch End
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Forest Hill and Brockley
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Ealing and Acton
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Approach
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every Edwardian property is surveyed individually, with particular attention 
              to decorative features that need to be accommodated. We work with you to 
              choose frame colours that complement your interior décor, and our installation 
              teams take great care to protect period features throughout the process.
            </p>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default EdwardianPropertySecondaryGlazing;
