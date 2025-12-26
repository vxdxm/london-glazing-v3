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

const Islington = () => {
  const conservationAreas = [
    "Barnsbury", "Canonbury", "Highbury", "Duncan Terrace/Colebrooke Row",
    "Clerkenwell Green", "Charterhouse Square", "Hat and Feathers", "Cross Street",
    "Angel", "Upper Street", "Holloway Road", "Archway", "Tufnell Park", "Highbury Fields"
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
    { title: "North London", href: "/areas/north-london" },
    { title: "Camden", href: "/service-areas/camden" },
    { title: "Westminster", href: "/service-areas/westminster" },
    { title: "Kensington & Chelsea", href: "/service-areas/kensington-chelsea" },
    { title: "Central London", href: "/areas/central-london" },
    { title: "East London", href: "/areas/east-london" },
    { title: "Home Counties", href: "/areas/home-counties" },
  ];

  const nearbyLocations = [
    { title: "Victorian Islington", href: "/locations/victorian-islington" },
    { title: "Victorian Terraces Islington", href: "/locations/victorian-terraces-islington" },
    { title: "Edwardian Hampstead", href: "/locations/edwardian-hampstead" },
    { title: "Hackney Energy Efficiency", href: "/locations/hackney-energy-efficiency" },
    { title: "Kings Cross Train Noise", href: "/locations/kings-cross-train-noise" },
    { title: "Shoreditch Urban Noise", href: "/locations/shoreditch-urban-noise" },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Secondary Glazing Islington | Victorian Terrace Specialists</title>
        <meta 
          name="description" 
          content="Expert secondary glazing for Islington's Victorian terraces and Georgian squares. Specialists in Barnsbury, Canonbury and Highbury conservation areas. Free surveys."
        />
        <meta 
          name="keywords" 
          content="secondary glazing Islington, Victorian terraces Islington, Barnsbury secondary glazing, Canonbury glazing, Highbury conservation area, heritage windows Islington"
        />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/service-areas/islington" />
      </Helmet>

      <MainNav />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">London Borough of Islington</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Secondary Glazing Islington
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Islington is famous for its beautiful <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian terraces</Link> and 
              elegant <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline">Georgian squares</Link>, 
              from Barnsbury to Canonbury. Our specialist secondary glazing solutions protect these 
              <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline"> listed buildings</Link> and 
              <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline"> conservation area</Link> properties 
              while providing exceptional <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">thermal</Link> and 
              <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline"> acoustic performance</Link>.
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
                <p className="text-sm text-muted-foreground">All Islington Postcodes</p>
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
              
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6">Secondary Glazing Experts for Islington</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Islington contains some of London's finest <Link to="/locations/victorian-islington" className="text-primary hover:underline">Victorian architecture</Link>, 
                  with iconic <Link to="/locations/victorian-terraces-islington" className="text-primary hover:underline">Victorian terraces</Link> lining 
                  streets from Angel to Highbury. The borough also boasts stunning Georgian squares in 
                  Barnsbury and Canonbury, all protected by strict conservation area regulations that 
                  prohibit external window alterations.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">conservation-approved secondary glazing</Link> is 
                  the ideal solution. Installed internally behind your existing 
                  <Link to="/sash-window-secondary-glazing" className="text-primary hover:underline"> sash windows</Link>, 
                  it preserves the external appearance while dramatically improving comfort. Most 
                  installations do not require planning permission as they are completely invisible from outside.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Islington properties face significant noise challenges from busy roads like Upper Street 
                  and Essex Road, plus rail lines through the borough. Our <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">acoustic glazing</Link> reduces 
                  external noise by up to 80%, while <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">thermal insulation</Link> cuts 
                  heat loss by up to 65%, dramatically reducing heating bills.
                </p>
              </div>

              {/* Conservation Areas */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Conservation Areas We Serve</h2>
                <p className="text-muted-foreground mb-6">
                  Islington has over 40 conservation areas protecting its architectural heritage. We provide 
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
                <h2 className="text-3xl font-bold mb-6">Benefits for Islington Properties</h2>
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
                        Reduce heat loss by up to 65% through your period windows. Essential for Islington's 
                        tall Victorian sash windows that are often sources of significant draughts.
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
                        Block up to 80% of traffic noise from busy Islington streets with our acoustic 
                        glazing options. Perfect for properties on Upper Street or near Essex Road.
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
                        Preserve your original windows and the character of your Victorian or Georgian 
                        property. Our fully reversible installations leave no permanent alterations.
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
                        Add security with laminated glass options, providing resistance to forced entry 
                        for ground-floor and basement windows common in Islington terraces.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Our Approach */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6">Our Islington Service</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We have been serving Islington homeowners for over 15 years, from Barnsbury to Highbury, 
                  from Clerkenwell to Tufnell Park. Our team understands Islington Council conservation 
                  requirements and has established relationships with local heritage officers.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Whether you have <Link to="/residential/sash-windows" className="text-primary hover:underline">sash windows</Link>, 
                  <Link to="/residential/bay-windows" className="text-primary hover:underline"> bay windows</Link>, or 
                  <Link to="/residential/crittall-windows" className="text-primary hover:underline"> Crittall windows</Link>, 
                  we provide bespoke solutions tailored to your property. We also serve nearby 
                  <Link to="/service-areas/camden" className="text-primary hover:underline"> Camden</Link> and 
                  <Link to="/locations/hackney-energy-efficiency" className="text-primary hover:underline"> Hackney</Link>.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Explore our <Link to="/case-studies" className="text-primary hover:underline">case studies</Link> to see 
                  examples of our Islington work, or learn about the <Link to="/benefits" className="text-primary hover:underline">benefits of secondary glazing</Link>. 
                  For existing installations, see our <Link to="/secondary-glazing-repairs" className="text-primary hover:underline">repairs service</Link>. 
                  Visit our <Link to="/gallery" className="text-sm text-primary hover:underline">gallery</Link> or 
                  read our <Link to="/faqs" className="text-primary hover:underline">FAQs</Link>.
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
                <h2 className="text-2xl font-bold mb-4">Get Your Free Islington Survey</h2>
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

              <Card>
                <CardHeader>
                  <CardTitle>Other Areas We Cover</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {otherAreas.map((area, index) => (
                      <li key={index}>
                        <Link to={area.href} className="text-sm text-primary hover:underline">
                          {area.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Nearby Locations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {nearbyLocations.map((location, index) => (
                      <li key={index}>
                        <Link to={location.href} className="text-sm text-primary hover:underline">
                          {location.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

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

              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-primary-foreground">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm opacity-90">Ready to improve your Islington property?</p>
                  <a href="tel:02070601572" className="flex items-center gap-2 text-sm hover:underline">
                    <Phone className="h-4 w-4" />
                    020 7060 1572
                  </a>
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

export default Islington;
