import React from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { Link } from "react-router-dom";
import { Castle, Eye, Shield, CheckCircle, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const GeorgianWindowsSecondaryGlazing = () => {
  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title="Georgian Windows Secondary Glazing | Period-Appropriate Solutions"
        description="Specialist secondary glazing for Georgian windows in London. Preserve original 6-over-6 and 12-pane sash windows while improving insulation. Heritage-sensitive installation."
        canonicalPath="/georgian-windows-secondary-glazing"
        keywords={[
          "Georgian windows secondary glazing",
          "Georgian sash window insulation",
          "6 over 6 window glazing",
          "12 pane window secondary glazing",
          "Georgian townhouse windows",
          "Regency window solutions"
        ]}
      />
      
      <MainNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-100 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-slate-200 text-slate-800 px-4 py-2 rounded-full mb-6">
              <Castle className="h-5 w-5" />
              <span className="font-medium">Georgian Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Georgian Windows Secondary Glazing
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Period-appropriate secondary glazing for Georgian properties. We understand 
              the architectural significance of Georgian windows and provide solutions 
              that respect their elegant proportions and historical importance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/quote-request">Get Free Georgian Survey</Link>
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
              The Georgian Window Tradition
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Georgian architecture (1714-1830) is defined by its symmetry, proportion, and 
              classical elegance. The windows of this era, typically featuring six-over-six 
              or twelve-over-twelve pane configurations, are central to the Georgian aesthetic. 
              Their multiple glazing bars and slender timber frames create the distinctive 
              appearance that makes Georgian properties so desirable.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              These windows often feature crown glass or early cylinder glass, with their 
              characteristic slight imperfections and beautiful light quality. Replacing 
              such windows with modern alternatives would be an architectural tragedy, 
              which is why secondary glazing offers the ideal solution for improving 
              performance without compromise.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6">
              Georgian Window Configurations
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12 not-prose">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Six-Over-Six Sash</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    The classic Georgian configuration with six panes in each sash, creating 
                    twelve panes in total. Common in townhouses from 1720-1780.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Slim sightline options
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Optional glazing bar detail
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Twelve-Over-Twelve</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Earlier Georgian style with smaller panes, reflecting the technical 
                    limitations of early glass manufacturing.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Heritage-sensitive design
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Minimal visual impact
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Regency Windows</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Later Georgian/Regency style (1811-1820) with larger panes as glass 
                    technology improved, often two-over-two or three-over-three.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Larger opening sashes
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Elegant curved heads
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Tall First Floor</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    The principal floor (piano nobile) features taller windows, often 
                    with decorative surrounds and pediments.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Extended height units
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Balanced proportions
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6">
              Preserving Georgian Character
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our approach to Georgian properties is guided by respect for the original 
              architecture. We use the slimmest possible frame profiles to maintain 
              sightlines, and our vertical sliding secondary glazing replicates the 
              operation of traditional sash windows.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              For properties with particularly important interiors, we can also provide 
              secondary glazing with dummy glazing bars that align with the original 
              window divisions, creating an almost invisible installation when viewed 
              from inside the room.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12 not-prose">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <Eye className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Slim Sightlines</h3>
                  <p className="text-sm text-muted-foreground">
                    Frame profiles as narrow as 20mm to minimise visual intrusion.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Original Glass Protected</h3>
                  <p className="text-sm text-muted-foreground">
                    Preserve irreplaceable crown glass and early cylinder glass.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6">
              Georgian Areas in London
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              London has some of the finest Georgian architecture in the world, and we have 
              extensive experience working in these prestigious areas:
            </p>
            <ul className="list-none space-y-2 mb-8 not-prose">
              <li className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Belgravia and Mayfair townhouses
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Bloomsbury and Fitzrovia squares
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Spitalfields Georgian houses
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Greenwich and Blackheath terraces
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Islington and Canonbury crescents
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mb-6">
              Technical Considerations
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Georgian windows often have deep timber box frames which provide an ideal 
              cavity for secondary glazing. The greater the air gap between the original 
              window and secondary glazing, the better the thermal and acoustic performance. 
              With Georgian windows, we can typically achieve gaps of 100-150mm, providing 
              exceptional insulation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The substantial timber reveals also allow for neat installation with the 
              secondary glazing frames hidden within the window opening, further reducing 
              visual impact from inside the room.
            </p>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default GeorgianWindowsSecondaryGlazing;
