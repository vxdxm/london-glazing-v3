import React from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { ComprehensiveSchema } from "@/components/seo/ComprehensiveSchema";
import { Link } from "react-router-dom";
import { Building2, FileText, Home, MapPin, Shield, Award, Phone, CheckCircle, Users, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <EnhancedSEO
        title="About Secondary Glazing Specialist | London Heritage Property Experts"
        description="London's leading provider of secondary glazing for listed buildings, conservation areas, and period properties. Specialists in Victorian, Georgian, and Edwardian homes."
        canonicalPath="/about"
        type="website"
        keywords={[
          "secondary glazing specialist",
          "heritage property glazing",
          "listed building glazing London",
          "conservation area windows",
          "period property specialists"
        ]}
      />
      
      <ComprehensiveSchema
        pageName="About Secondary Glazing Specialist"
        pageDescription="London's leading provider of secondary glazing for listed buildings and heritage properties"
        serviceName="Heritage Property Secondary Glazing"
        serviceDescription="Specialist secondary glazing services for listed buildings, conservation areas, and period properties across London. Expert installations that preserve architectural character."
      />

      <MainNav />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Secondary Glazing Specialist
          </h1>
          <p className="text-xl text-primary font-medium mb-6">
            London's Heritage Property Secondary Glazing Experts
          </p>
        </header>

        {/* Who We Are */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Users className="w-8 h-8 text-primary" />
            Who We Are
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Secondary Glazing Specialist is London's leading provider of secondary glazing solutions for{" "}
              <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed buildings</Link>,{" "}
              <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">conservation areas</Link>, and period properties. We specialise in preserving the architectural character of{" "}
              <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian</Link>,{" "}
              <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline">Georgian</Link>, and{" "}
              <Link to="/edwardian-property-secondary-glazing" className="text-primary hover:underline">Edwardian</Link> homes while dramatically improving thermal insulation, noise reduction, and security.
            </p>
            <p>
              Unlike general glazing companies, we focus exclusively on heritage properties where traditional double glazing isn't permitted or appropriate. Our expertise lies in delivering sympathetic installations that satisfy conservation officers while transforming your property's comfort and energy efficiency.
            </p>
            <p>
              Based in London, we've helped hundreds of property owners across{" "}
              <Link to="/service-areas/westminster" className="text-primary hover:underline">Westminster</Link>,{" "}
              <Link to="/service-areas/kensington-chelsea" className="text-primary hover:underline">Kensington & Chelsea</Link>,{" "}
              <Link to="/service-areas/camden" className="text-primary hover:underline">Camden</Link>,{" "}
              <Link to="/areas/west-london" className="text-primary hover:underline">Richmond</Link>, and other historic boroughs achieve modern performance standards while protecting their building's heritage character.
            </p>
          </div>
        </section>

        {/* Heritage Property Expertise */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Heritage Property Expertise</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Listed Buildings */}
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <Building2 className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">Listed Buildings Specialists</h3>
                <p className="text-muted-foreground mb-4">
                  We work extensively with Grade I, Grade II*, and Grade II listed buildings throughout London. Our team understands the unique requirements of historic properties and the complex planning regulations that govern any modifications.
                </p>
                <p className="text-muted-foreground font-medium mb-2">Our listed building services include:</p>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                    Free heritage property assessments
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                    Planning permission guidance and liaison
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                    Conservation officer consultation support
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                    Detailed drawings for Listed Building Consent
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                    Sympathetic installations preserving original features
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                    Fully reversible solutions where required
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Conservation Area */}
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <FileText className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">Conservation Area Authority</h3>
                <p className="text-muted-foreground mb-4">
                  Working in conservation areas requires specialist knowledge of local planning policies. We have extensive experience across London's most restrictive conservation areas including:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                    Westminster (Mayfair, Belgravia, Marylebone)
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                    Kensington & Chelsea (Knightsbridge, South Kensington, Chelsea)
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                    Camden (Bloomsbury, Primrose Hill, Hampstead)
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                    Richmond upon Thames (Richmond Hill, Kew)
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                    Islington (Barnsbury, Canonbury)
                  </li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  We understand what conservation officers will and won't approve, saving you time and ensuring successful applications.
                </p>
              </CardContent>
            </Card>

            {/* Period Property */}
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <Home className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">Period Property Specialists</h3>
                <p className="text-muted-foreground mb-4">
                  Whether your property is Victorian, Georgian, Edwardian, or earlier, we have specific expertise in:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <Link to="/sash-window-secondary-glazing" className="hover:text-primary">Sash window secondary glazing</Link> (maintaining original operation)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <Link to="/residential/casement-windows" className="hover:text-primary">Casement window solutions</Link> (traditional and modern)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <Link to="/residential/bay-windows" className="hover:text-primary">Bay and bow window installations</Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <Link to="/residential/crittall-windows" className="hover:text-primary">Crittall window compatibility</Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                    Irregular and bespoke window shapes
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Service Areas */}
        <section className="mb-16 bg-muted/30 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <MapPin className="w-8 h-8 text-primary" />
            Our Service Areas
          </h2>
          <p className="text-muted-foreground mb-6">
            We provide professional secondary glazing installation throughout:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-foreground mb-3">All London Boroughs</h3>
              <p className="text-muted-foreground text-sm">
                From <Link to="/service-areas/westminster" className="text-primary hover:underline">Westminster</Link> to Waltham Forest,{" "}
                <Link to="/areas/west-london" className="text-primary hover:underline">Richmond</Link> to Redbridge - we cover every London borough with particular expertise in heritage-rich areas.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-3">Home Counties</h3>
              <p className="text-muted-foreground text-sm">
                <Link to="/areas/home-counties" className="text-primary hover:underline">Surrey, Kent, Essex, Hertfordshire, and Buckinghamshire</Link> properties within our service radius.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-3">Focus Areas</h3>
              <p className="text-muted-foreground text-sm">
                Our strongest expertise lies in London's conservation hotspots: Westminster, Kensington & Chelsea, Camden, Richmond, Islington, Hampstead, Belgravia, Chelsea, Notting Hill, and Marylebone.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Choose Secondary Glazing Specialist</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <Building2 className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Heritage Focus</h3>
                <p className="text-muted-foreground text-sm">
                  Unlike general glazing companies, we specialise exclusively in period properties and understand conservation requirements inside out.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <FileText className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Planning Support</h3>
                <p className="text-muted-foreground text-sm">
                  We handle all planning permission liaison, conservation officer consultations, and provide detailed drawings for Listed Building Consent.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <Home className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Tailored Solutions</h3>
                <p className="text-muted-foreground text-sm">
                  Every installation is bespoke. We never compromise your property's character for the sake of convenience.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <Wrench className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Expert Installation</h3>
                <p className="text-muted-foreground text-sm">
                  Our installers are trained specifically in heritage property work, treating your original features with the care they deserve.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Quality Guarantee</h3>
                <p className="text-muted-foreground text-sm">
                  We use only high-quality materials designed for long-term performance and provide comprehensive warranties.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Customer Satisfaction</h3>
                <p className="text-muted-foreground text-sm">
                  Our testimonials speak for themselves. We pride ourselves on exceeding expectations for London's most discerning property owners.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Accreditations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Accreditations & Professional Standards</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-foreground mb-4">Insurance & Guarantees</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                    Full public liability insurance
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                    Comprehensive installation warranties
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                    Materials guarantees from leading manufacturers
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                    Professional indemnity coverage
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <Award className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-foreground mb-4">Quality Standards</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                    Compliant with Building Regulations
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                    Conservation-approved methodologies
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                    Acoustic performance tested and certified
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                    Thermal efficiency verified
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary/10 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Get Your Free Assessment</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every heritage property is unique. We provide free, no-obligation site surveys throughout London where we assess your specific windows and requirements, discuss conservation and planning considerations, and provide detailed specifications with transparent pricing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button size="lg" asChild>
              <Link to="/quote-request">Request a Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:02070601572" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                020 7060 1572
              </a>
            </Button>
          </div>
          
          <p className="text-foreground font-medium">
            Transform your period property's comfort without compromising its character.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;