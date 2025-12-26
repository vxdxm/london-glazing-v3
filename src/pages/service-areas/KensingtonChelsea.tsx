import React from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  CheckCircle, 
  Landmark, 
  Shield, 
  Thermometer,
  Volume2,
  Clock,
  Award
} from "lucide-react";

const KensingtonChelsea = () => {
  const conservationAreas = [
    "Kensington Palace", "Holland Park", "Kensington Court", "De Vere", "Edwardes Square",
    "Brompton", "Hans Town", "Chelsea", "Cheyne", "Royal Hospital", "Sloane Square",
    "South Kensington", "Thurloe/Smith's Charity", "Courtfield", "Earl's Court Square",
    "Nevern Square", "Philbeach", "Queen's Gate", "Kensington Green", "Pembridge"
  ];

  const services = [
    { title: "Listed Buildings Secondary Glazing", href: "/listed-buildings-secondary-glazing", icon: Landmark },
    { title: "Conservation Areas Secondary Glazing", href: "/conservation-areas-secondary-glazing", icon: Shield },
    { title: "Victorian Windows Secondary Glazing", href: "/victorian-windows-secondary-glazing", icon: Clock },
    { title: "Georgian Windows Secondary Glazing", href: "/georgian-windows-secondary-glazing", icon: Award },
    { title: "Sash Window Secondary Glazing", href: "/sash-window-secondary-glazing", icon: CheckCircle },
    { title: "Thermal Insulation Secondary Glazing", href: "/thermal-insulation-secondary-glazing", icon: Thermometer },
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
    { title: "Central London", href: "/areas/central-london" },
    { title: "West London", href: "/areas/west-london" },
    { title: "North London", href: "/areas/north-london" },
    { title: "South London", href: "/areas/south-london" },
    { title: "East London", href: "/areas/east-london" },
    { title: "Greater London", href: "/areas/greater-london" },
    { title: "Home Counties", href: "/areas/home-counties" },
  ];

  const nearbyLocations = [
    { title: "Listed Kensington", href: "/locations/listed-kensington" },
    { title: "Chelsea Draught Proofing", href: "/locations/chelsea-draught-proofing" },
    { title: "Notting Hill Security", href: "/locations/notting-hill-security" },
    { title: "Georgian Belgravia", href: "/locations/georgian-belgravia" },
    { title: "Conservation Richmond", href: "/locations/conservation-richmond" },
    { title: "Edwardian Hampstead", href: "/locations/edwardian-hampstead" },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Secondary Glazing Kensington & Chelsea | Heritage Window Specialists</title>
        <meta 
          name="description" 
          content="Expert secondary glazing services for Kensington & Chelsea's listed buildings and conservation areas. Approved solutions for period properties. Free heritage surveys available."
        />
        <meta 
          name="keywords" 
          content="secondary glazing Kensington, Chelsea secondary glazing, RBKC glazing, listed building glazing Kensington, conservation area windows Chelsea, heritage glazing Kensington Chelsea"
        />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/service-areas/kensington-chelsea" />
      </Helmet>

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
              Secondary Glazing Kensington & Chelsea
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              The Royal Borough of Kensington and Chelsea is home to some of London's finest period 
              architecture, with over 4,000 <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed buildings</Link> and 
              more than 35 <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">conservation areas</Link>. 
              Our specialist secondary glazing solutions are designed specifically for these heritage 
              properties, providing exceptional <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">thermal insulation</Link> and 
              <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline"> noise reduction</Link> without 
              compromising their historic character.
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
              
              {/* Why Kensington & Chelsea */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6">Secondary Glazing Experts for Kensington & Chelsea</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Kensington and Chelsea presents unique challenges for homeowners seeking to improve their 
                  property's energy efficiency and comfort. The borough contains the highest concentration of 
                  Grade I and Grade II* <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed buildings</Link> in 
                  London, along with stringent <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">conservation area</Link> regulations 
                  that prohibit external window alterations.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our secondary glazing solutions are the ideal answer to these restrictions. Installed internally 
                  behind your existing <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian</Link>, 
                  <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline"> Georgian</Link>, or 
                  <Link to="/edwardian-property-secondary-glazing" className="text-primary hover:underline"> Edwardian windows</Link>, 
                  secondary glazing is completely invisible from the street. This means no planning permission is 
                  typically required, even in the most strictly protected areas.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Whether you own a period townhouse in Chelsea, a mansion flat in South Kensington, or a 
                  <Link to="/sash-window-secondary-glazing" className="text-primary hover:underline"> traditional sash-windowed</Link> property 
                  in Holland Park, we have the expertise to deliver a bespoke solution that meets both your 
                  comfort requirements and the borough's heritage standards. Our team regularly works with 
                  RBKC conservation officers and understands the local planning requirements intimately.
                </p>
              </div>

              {/* Conservation Areas */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Conservation Areas We Serve</h2>
                <p className="text-muted-foreground mb-6">
                  Kensington and Chelsea has over 35 designated conservation areas. We provide specialist 
                  <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline"> conservation-approved secondary glazing</Link> across 
                  all of them, including:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {conservationAreas.map((area, index) => (
                    <div key={index} className="bg-muted/50 px-3 py-2 rounded text-sm">
                      {area}
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits Section */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Benefits for Kensington & Chelsea Properties</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <Thermometer className="h-6 w-6 text-primary" />
                        <CardTitle className="text-lg">
                          <Link to="/thermal-insulation-secondary-glazing" className="hover:text-primary">Thermal Insulation</Link>
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Reduce heat loss by up to 65% through your period windows. Essential for the large 
                        bay windows and floor-to-ceiling sashes common in Kensington properties.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <Volume2 className="h-6 w-6 text-primary" />
                        <CardTitle className="text-lg">
                          <Link to="/noise-reduction-secondary-glazing" className="hover:text-primary">Noise Reduction</Link>
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Block up to 80% of traffic noise from busy roads like Kensington High Street, 
                        King's Road, and Cromwell Road with our acoustic glazing options.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <Landmark className="h-6 w-6 text-primary" />
                        <CardTitle className="text-lg">
                          <Link to="/listed-buildings-secondary-glazing" className="hover:text-primary">Heritage Preservation</Link>
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Preserve your original windows and the character of your listed building while 
                        enjoying modern comfort. Fully reversible installation leaves no trace.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <Shield className="h-6 w-6 text-primary" />
                        <CardTitle className="text-lg">
                          <Link to="/specialized/security-glazing" className="hover:text-primary">Enhanced Security</Link>
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Add an extra layer of security to ground-floor and basement windows. Our 
                        laminated glass options provide significant resistance to forced entry.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Our Approach */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6">Our Kensington & Chelsea Service</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We have been providing secondary glazing solutions to properties in Kensington and Chelsea 
                  for over 15 years. During this time, we have developed strong relationships with local 
                  conservation officers and a deep understanding of what is required to gain approval for 
                  installations in even the most sensitive heritage settings.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our process begins with a comprehensive survey of your property. We assess your existing 
                  windows, whether they are <Link to="/residential/sash-windows" className="text-primary hover:underline">sash</Link>, 
                  <Link to="/residential/casement-windows" className="text-primary hover:underline"> casement</Link>, 
                  <Link to="/residential/bay-windows" className="text-primary hover:underline"> bay</Link>, or 
                  <Link to="/residential/crittall-windows" className="text-primary hover:underline"> Crittall</Link>, and 
                  recommend the most appropriate secondary glazing system. We provide detailed specifications 
                  and, where required, support for any planning applications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Installation is carried out by our trained heritage specialists with minimal disruption to 
                  your home. Most rooms can be completed within a single day, and we always leave your property 
                  clean and tidy. Explore our <Link to="/case-studies" className="text-primary hover:underline">case studies</Link> to 
                  see examples of our work in similar properties, or read about the 
                  <Link to="/benefits" className="text-primary hover:underline"> benefits of secondary glazing</Link>.
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
                <h2 className="text-2xl font-bold mb-4">Get Your Free Kensington & Chelsea Survey</h2>
                <p className="mb-6 opacity-90">
                  Our heritage specialists will visit your property, assess your windows, and provide 
                  a detailed quote with no obligation.
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
              {/* Services */}
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

              {/* Other Areas */}
              <Card>
                <CardHeader>
                  <CardTitle>Other Areas We Cover</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {otherAreas.map((area, index) => (
                      <li key={index}>
                        <Link 
                          to={area.href}
                          className="text-sm text-primary hover:underline"
                        >
                          {area.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Nearby Locations */}
              <Card>
                <CardHeader>
                  <CardTitle>Nearby Locations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {nearbyLocations.map((location, index) => (
                      <li key={index}>
                        <Link 
                          to={location.href}
                          className="text-sm text-primary hover:underline"
                        >
                          {location.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Quick Links */}
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

              {/* Contact Card */}
              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-primary-foreground">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm opacity-90">
                    Ready to improve your Kensington or Chelsea property?
                  </p>
                  <div className="space-y-2">
                    <a href="tel:02070601572" className="flex items-center gap-2 text-sm hover:underline">
                      <Phone className="h-4 w-4" />
                      020 7060 1572
                    </a>
                  </div>
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
