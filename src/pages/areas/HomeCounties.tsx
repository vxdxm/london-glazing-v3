import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MainNav } from '@/components/MainNav';
import { Footer } from '@/components/Footer';
import { ServiceAreaSchema } from '@/components/seo/ServiceAreaSchema';
import { MapPin, Phone, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomeCounties = () => {
  const counties = [
    "Surrey", "Kent", "Essex", "Hertfordshire", "Buckinghamshire",
    "Berkshire", "Middlesex", "Sussex", "Hampshire", "Oxfordshire"
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
    { title: "Virginia Water", href: "/locations/virginia-water" },
    { title: "Weybridge", href: "/locations/weybridge" },
    { title: "Beaconsfield", href: "/locations/beaconsfield" },
    { title: "Sevenoaks", href: "/locations/sevenoaks" },
    { title: "Guildford", href: "/locations/guildford" },
    { title: "Ascot", href: "/locations/ascot" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <ServiceAreaSchema
        areaName="Home Counties"
        areaDescription="Expert secondary glazing services for country houses and period properties across the Home Counties, including Surrey, Kent, Essex, Hertfordshire, and Buckinghamshire."
        neighborhoods={counties}
      />
      <Helmet>
        <title>Secondary Glazing Home Counties | Expert Installation Services</title>
        <meta name="description" content="Professional secondary glazing services across the Home Counties. Specialist installations for country houses and period properties in Surrey, Kent, Essex, Hertfordshire and surrounding areas." />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/areas/home-counties" />
        <meta name="keywords" content="secondary glazing Home Counties, double glazing Surrey, window insulation Kent, soundproof windows Essex, heritage glazing Hertfordshire" />
      </Helmet>
      
      <MainNav />
      
      <main>
        <section className="bg-accent text-accent-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm mb-6 text-accent-foreground/70">
              <Link to="/" className="hover:text-accent-foreground">Home</Link>
              <span>/</span>
              <span>Home Counties</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Secondary Glazing Specialists in the Home Counties
            </h1>
            <p className="text-xl text-accent-foreground/90 max-w-3xl mb-8">
              Expert <Link to="/residential" className="underline hover:text-white">secondary glazing installation</Link> throughout the Home Counties. 
              From <Link to="/listed-buildings-secondary-glazing" className="underline hover:text-white">historic country houses</Link> to 
              <Link to="/victorian-windows-secondary-glazing" className="underline hover:text-white"> Victorian properties</Link> in Surrey, Kent, and beyond.
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
                  <p className="text-muted-foreground">All Home Counties</p>
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
                  <p className="text-muted-foreground">Within 48 Hours</p>
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
                  <h2 className="text-3xl font-bold mb-4">Secondary Glazing Services in the Home Counties</h2>
                  <p className="text-muted-foreground mb-4">
                    The Home Counties are renowned for their beautiful countryside and exceptional period properties. 
                    From <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">Grade I listed manor houses</Link> in 
                    the Chilterns to <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian rectories</Link> in Kent, 
                    these properties require specialist glazing solutions that respect their heritage.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Our team has extensive experience working with local <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">conservation officers</Link> and 
                    Historic England to ensure all installations meet the required standards for 
                    <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline"> listed buildings</Link> and protected properties.
                  </p>
                  <p className="text-muted-foreground">
                    Whether you need <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">improved thermal insulation</Link> for 
                    a draughty country house, <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">noise reduction</Link> near 
                    busy motorways, or sympathetic <Link to="/sash-window-secondary-glazing" className="text-primary hover:underline">sash window glazing</Link>, 
                    we deliver bespoke solutions for Home Counties properties.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Counties We Cover</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {counties.map((county) => (
                      <div key={county} className="flex items-center gap-2 p-3 bg-secondary rounded-lg">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>{county}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Why Choose Us for Home Counties Properties?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <span>Specialists in <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">country house</Link> and manor house glazing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <span>Experience with rural <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">conservation areas</Link></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <span><Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline">Georgian</Link> and <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian</Link> property expertise</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <span>Motorway and airport <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">noise reduction</Link></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <span>Enhanced <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">energy efficiency</Link> for large properties</span>
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
                  <h3 className="text-xl font-bold mb-4">London Areas</h3>
                  <div className="space-y-2">
                    <Link to="/areas/central-london" className="block p-2 hover:text-primary">Central London</Link>
                    <Link to="/areas/north-london" className="block p-2 hover:text-primary">North London</Link>
                    <Link to="/areas/south-london" className="block p-2 hover:text-primary">South London</Link>
                    <Link to="/areas/east-london" className="block p-2 hover:text-primary">East London</Link>
                    <Link to="/areas/west-london" className="block p-2 hover:text-primary">West London</Link>
                    <Link to="/areas/greater-london" className="block p-2 hover:text-primary">Greater London</Link>
                  </div>
                </div>

                <div className="bg-primary text-primary-foreground p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Get a Free Quote</h3>
                  <p className="mb-4">Contact us today for a free, no-obligation quote for your Home Counties property.</p>
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

export default HomeCounties;
