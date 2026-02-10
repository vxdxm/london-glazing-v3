import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MainNav } from '@/components/MainNav';
import { Footer } from '@/components/Footer';
import { ServiceAreaSchema } from '@/components/seo/ServiceAreaSchema';
import { MapPin, Phone, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GreaterLondon = () => {
  const areas = [
    "Outer London Boroughs", "Suburban London", "Zone 3-6 Areas", "M25 Corridor",
    "All 32 London Boroughs", "City of London", "Metropolitan Area", "London Suburbs"
  ];

  const services = [
    { title: "Listed Buildings Secondary Glazing", href: "/listed-buildings-secondary-glazing" },
    { title: "Conservation Areas Secondary Glazing", href: "/conservation-areas-secondary-glazing" },
    { title: "Victorian Windows Secondary Glazing", href: "/victorian-windows-secondary-glazing" },
    { title: "Sash Window Secondary Glazing", href: "/sash-window-secondary-glazing" },
    { title: "Noise Reduction Secondary Glazing", href: "/noise-reduction-secondary-glazing" },
    { title: "Thermal Insulation Secondary Glazing", href: "/thermal-insulation-secondary-glazing" },
    { title: "Commercial Office Buildings", href: "/commercial/office-buildings" },
    { title: "Hotels & Hospitality", href: "/commercial/hospitality-sector" },
    { title: "Educational Institutions", href: "/commercial/educational-sector" },
    { title: "Healthcare Facilities", href: "/commercial/healthcare-industry" },
    { title: "Retail Spaces", href: "/commercial/retail-spaces" },
  ];

  const specificLocations = [
    { title: "Heathrow Aircraft Noise", href: "/locations/heathrow-aircraft" },
    { title: "Chelsea Draught Proofing", href: "/locations/chelsea-draught-proofing" },
    { title: "Clapham Busy Roads", href: "/locations/clapham-busy-roads" },
    { title: "Kings Cross Train Noise", href: "/locations/kings-cross-train-noise" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <ServiceAreaSchema
        areaName="Greater London"
        areaDescription="Expert secondary glazing services across all 32 London boroughs. Complete coverage for residential and commercial properties throughout the metropolitan area."
        neighborhoods={areas}
      />
      <Helmet>
        <title>Secondary Glazing Greater London | Expert Installation Services</title>
        <meta name="description" content="Professional secondary glazing services across Greater London. Complete coverage of all 32 London boroughs with specialist installations for residential and commercial properties." />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/areas/greater-london" />
        <meta name="keywords" content="secondary glazing Greater London, double glazing London boroughs, window insulation M25, soundproof windows outer London, heritage glazing suburbs" />
      </Helmet>
      
      <MainNav />
      
      <main>
        <section className="bg-accent text-accent-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm mb-6 text-accent-foreground/70">
              <Link to="/" className="hover:text-accent-foreground">Home</Link>
              <span>/</span>
              <span>Greater London</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Secondary Glazing Across Greater London
            </h1>
            <p className="text-xl text-accent-foreground/90 max-w-3xl mb-8">
              Complete <Link to="/residential" className="underline hover:text-white">secondary glazing coverage</Link> across all 32 London boroughs. 
              From <Link to="/victorian-windows-secondary-glazing" className="underline hover:text-white">Victorian properties</Link> to 
              <Link to="/commercial" className="underline hover:text-white"> commercial buildings</Link>, we serve the entire Greater London area.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/quote-request">Get Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4 p-4 bg-background rounded-lg">
                <MapPin className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-semibold">Coverage Area</h3>
                  <p className="text-muted-foreground">All 32 London Boroughs</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-background rounded-lg">
                <Phone className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-muted-foreground">020 3929 3960</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-background rounded-lg">
                <Clock className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-semibold">Response Time</h3>
                  <p className="text-muted-foreground">Within 24 Hours</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Secondary Glazing Services Across Greater London</h2>
                  <p className="text-muted-foreground mb-4">
                    As London's leading secondary glazing specialists, we provide comprehensive coverage across the entire 
                    Greater London area. Whether your property is in the heart of the city or the outer suburbs, 
                    our expert team delivers the same exceptional service.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    From <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian terraces</Link> in inner London to 
                    <Link to="/edwardian-property-secondary-glazing" className="text-primary hover:underline"> Edwardian semi-detached homes</Link> in the suburbs, 
                    we understand the diverse architectural styles across London's boroughs and provide tailored 
                    <Link to="/sash-window-secondary-glazing" className="text-primary hover:underline"> secondary glazing solutions</Link> for each.
                  </p>
                  <p className="text-muted-foreground">
                    Our services extend to <Link to="/commercial" className="text-primary hover:underline">commercial properties</Link>, 
                    <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline"> listed buildings</Link>, and homes in 
                    <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline"> conservation areas</Link> throughout Greater London.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Coverage</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {areas.map((area) => (
                      <div key={area} className="flex items-center gap-2 p-3 bg-secondary rounded-lg">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">London-Wide Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <span>Coverage of all 32 London boroughs plus City of London</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <span><Link to="/residential" className="text-primary hover:underline">Residential</Link> and <Link to="/commercial" className="text-primary hover:underline">commercial</Link> installations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <span>Approved for <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed buildings</Link> and <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">conservation areas</Link></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <span><Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">Noise reduction</Link> for urban and suburban properties</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <span>Enhanced <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">thermal insulation</Link> for all property types</span>
                    </li>
                  </ul>
                </div>
              </div>

              <aside className="space-y-6">
                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Our Services</h3>
                  <div className="space-y-2">
                    {services.map((service) => (
                      <Link 
                        key={service.href}
                        to={service.href}
                        className="flex items-center justify-between p-3 bg-background rounded hover:bg-primary/5 transition-colors group"
                      >
                        <span>{service.title}</span>
                        <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Specific Locations</h3>
                  <div className="space-y-2">
                    {specificLocations.map((location) => (
                      <Link 
                        key={location.href}
                        to={location.href}
                        className="flex items-center justify-between p-3 bg-background rounded hover:bg-primary/5 transition-colors group"
                      >
                        <span>{location.title}</span>
                        <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Area Pages</h3>
                  <div className="space-y-2">
                    <Link to="/areas/central-london" className="block p-2 hover:text-primary">Central London</Link>
                    <Link to="/areas/north-london" className="block p-2 hover:text-primary">North London</Link>
                    <Link to="/areas/south-london" className="block p-2 hover:text-primary">South London</Link>
                    <Link to="/areas/east-london" className="block p-2 hover:text-primary">East London</Link>
                    <Link to="/areas/west-london" className="block p-2 hover:text-primary">West London</Link>
                    <Link to="/areas/home-counties" className="block p-2 hover:text-primary">Home Counties</Link>
                  </div>
                </div>

                <div className="bg-primary text-primary-foreground p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Get a Free Quote</h3>
                  <p className="mb-4">Contact us today for a free, no-obligation quote anywhere in Greater London.</p>
                  <Button variant="secondary" className="w-full" asChild>
                    <Link to="/quote-request">Request Quote</Link>
                  </Button>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GreaterLondon;
