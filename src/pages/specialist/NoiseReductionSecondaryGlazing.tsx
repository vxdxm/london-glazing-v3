import React from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { Link } from "react-router-dom";
import { Volume2, VolumeX, Plane, Train, Car, Phone, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const NoiseReductionSecondaryGlazing = () => {
  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title="Noise Reduction Secondary Glazing | Block 80% External Noise"
        description="Reduce external noise by up to 80% with our acoustic secondary glazing. Ideal for properties near roads, railways, and flight paths. Expert installation across London."
        canonicalPath="/noise-reduction-secondary-glazing"
        keywords={[
          "noise reduction secondary glazing",
          "acoustic secondary glazing",
          "soundproof windows London",
          "traffic noise reduction",
          "aircraft noise glazing",
          "railway noise reduction windows"
        ]}
      />
      
      <MainNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-50 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full mb-6">
              <VolumeX className="h-5 w-5" />
              <span className="font-medium">Acoustic Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Noise Reduction Secondary Glazing
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Block up to 80% of external noise pollution with our acoustic secondary 
              glazing. Whether you live near a busy road, railway line, or under a 
              flight path, we can transform your home into a peaceful sanctuary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/quote-request">Get Free Acoustic Survey</Link>
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

      {/* Noise Sources Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Common Noise Problems We Solve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4">
              <Car className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold">Road Traffic</h3>
              <p className="text-sm text-muted-foreground">70-85 dB</p>
            </div>
            <div className="text-center p-4">
              <Train className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold">Railways</h3>
              <p className="text-sm text-muted-foreground">75-100 dB</p>
            </div>
            <div className="text-center p-4">
              <Plane className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold">Aircraft</h3>
              <p className="text-sm text-muted-foreground">80-120 dB</p>
            </div>
            <div className="text-center p-4">
              <Volume2 className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold">Urban Noise</h3>
              <p className="text-sm text-muted-foreground">60-80 dB</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              How Acoustic Secondary Glazing Works
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sound travels through windows via two mechanisms: directly through the 
              glass itself, and through gaps and seals around the frame. Secondary 
              glazing addresses both issues by adding a second barrier of glass and 
              creating a substantial air gap that disrupts sound transmission.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              For maximum acoustic performance, we use laminated acoustic glass in our 
              secondary glazing. This specialist glass contains a sound-absorbing 
              interlayer that dampens vibrations, preventing them from passing through 
              to your living space. Combined with the air gap, this can reduce noise 
              levels by up to 45-50 decibels.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6">
              Understanding Decibel Reduction
            </h2>
            
            <div className="not-prose mb-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Noise Reduction Performance</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Single Glazed Window</span>
                        <span className="text-sm text-muted-foreground">18-20 dB reduction</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div className="bg-red-400 h-3 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Double Glazed Window</span>
                        <span className="text-sm text-muted-foreground">25-28 dB reduction</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div className="bg-amber-400 h-3 rounded-full" style={{ width: '50%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Single + Secondary Glazing</span>
                        <span className="text-sm text-muted-foreground">35-40 dB reduction</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div className="bg-green-400 h-3 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Single + Acoustic Secondary</span>
                        <span className="text-sm text-muted-foreground">45-50 dB reduction</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div className="bg-indigo-500 h-3 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Every 10 dB reduction represents a halving of perceived noise. A 45 dB 
                    reduction makes busy traffic sound like a quiet residential street.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6">
              Acoustic Glass Options
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12 not-prose">
              <Card className="border-indigo-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">6.4mm Acoustic Laminated</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Two sheets of glass bonded with an acoustic PVB interlayer. Our 
                    standard choice for moderate noise reduction.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      35-40 dB reduction
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Ideal for road noise
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Safety glass standard
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-indigo-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">10.8mm Acoustic Laminated</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Heavy-duty acoustic glass for severe noise problems, combining 
                    multiple glass thicknesses.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      45-50 dB reduction
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Best for aircraft/railway noise
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Maximum acoustic performance
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6">
              The Importance of the Air Gap
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For optimal acoustic performance, the air gap between your existing window 
              and the secondary glazing should be at least 100mm, with 150-200mm being 
              ideal. This larger gap disrupts the sound waves more effectively than the 
              narrow cavity in standard double glazing.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Using different glass thicknesses in the original window and secondary 
              glazing also helps, as each thickness resonates at a different frequency, 
              providing broader spectrum noise reduction.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-6">
              Areas with High Noise Levels
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We have extensive experience helping London residents affected by noise 
              from various sources:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12 not-prose">
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-3">Heathrow Flight Path</h3>
                <p className="text-sm text-muted-foreground">
                  Properties in West London affected by aircraft noise, including 
                  Hounslow, Richmond, and Twickenham.
                </p>
              </div>
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-3">Railway Lines</h3>
                <p className="text-sm text-muted-foreground">
                  Homes near overground lines, including properties in Clapham, 
                  Brixton, and along the North London Line.
                </p>
              </div>
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-3">Major Roads</h3>
                <p className="text-sm text-muted-foreground">
                  Properties on arterial routes like the A40, A4, South Circular, 
                  and North Circular roads.
                </p>
              </div>
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-3">Urban Centres</h3>
                <p className="text-sm text-muted-foreground">
                  Homes and flats in busy areas including Shoreditch, Soho, 
                  Camden, and around railway stations.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6">
              Benefits of a Quieter Home
            </h2>
            <ul className="list-none space-y-3 mb-8 not-prose">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Better sleep quality without traffic disturbance</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Improved concentration for home working</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Reduced stress and improved wellbeing</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Increased property value in noisy areas</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Peace and quiet to enjoy your home</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default NoiseReductionSecondaryGlazing;
