import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { MainNav } from '@/components/MainNav';
import { Footer } from '@/components/Footer';
import { MapPin, Phone, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CentralLondon = () => {
  const boroughs = [
    "Westminster", "City of London", "Camden", "Islington", "Kensington & Chelsea",
    "Southwark", "Lambeth", "Tower Hamlets", "Hackney", "Wandsworth"
  ];

  const services = [
    { title: "Listed Buildings Secondary Glazing", href: "/listed-buildings-secondary-glazing" },
    { title: "Conservation Areas Secondary Glazing", href: "/conservation-areas-secondary-glazing" },
    { title: "Victorian Windows Secondary Glazing", href: "/victorian-windows-secondary-glazing" },
    { title: "Sash Window Secondary Glazing", href: "/sash-window-secondary-glazing" },
    { title: "Noise Reduction Secondary Glazing", href: "/noise-reduction-secondary-glazing" },
    { title: "Thermal Insulation Secondary Glazing", href: "/thermal-insulation-secondary-glazing" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Secondary Glazing Central London | Expert Installation Services</title>
        <meta name="description" content="Professional secondary glazing services in Central London. Specialist installations for listed buildings, conservation areas, and period properties in Westminster, Camden, Islington and surrounding areas." />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/areas/central-london" />
        <meta name="keywords" content="secondary glazing Central London, double glazing Westminster, window insulation Camden, soundproof windows Islington, heritage glazing Kensington" />
      </Helmet>
      
      <MainNav />
      
      <main>
        {/* Hero Section */}
        <section className="bg-accent text-accent-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm mb-6 text-accent-foreground/70">
              <Link to="/" className="hover:text-accent-foreground">Home</Link>
              <span>/</span>
              <span>Central London</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Secondary Glazing Specialists in Central London
            </h1>
            <p className="text-xl text-accent-foreground/90 max-w-3xl mb-8">
              Expert <Link to="/residential" className="underline hover:text-white">secondary glazing installation</Link> across Central London boroughs. 
              We specialise in <Link to="/listed-buildings-secondary-glazing" className="underline hover:text-white">listed buildings</Link>, 
              <Link to="/conservation-areas-secondary-glazing" className="underline hover:text-white"> conservation areas</Link>, and 
              <Link to="/victorian-windows-secondary-glazing" className="underline hover:text-white"> Victorian properties</Link>.
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

        {/* Key Info */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4 p-4 bg-background rounded-lg">
                <MapPin className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-semibold">Coverage Area</h3>
                  <p className="text-muted-foreground">All Central London Boroughs</p>
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

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Secondary Glazing Services in Central London</h2>
                  <p className="text-muted-foreground mb-4">
                    Central London is home to some of the UK's most prestigious and historically significant properties. 
                    From the Georgian townhouses of <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline">Mayfair</Link> to 
                    the <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian terraces</Link> of Islington, 
                    these properties require specialist glazing solutions that preserve their character while improving comfort and efficiency.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Our team has extensive experience working with <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">Grade I and Grade II listed buildings</Link> across 
                    Westminster, Camden, and the City of London. We understand the stringent requirements of 
                    <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline"> conservation area planning</Link> and work closely with local authorities to ensure compliance.
                  </p>
                  <p className="text-muted-foreground">
                    Whether you need <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">noise reduction</Link> from busy Central London streets, 
                    improved <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">thermal insulation</Link> for your period property, 
                    or <Link to="/sash-window-secondary-glazing" className="text-primary hover:underline">sash window secondary glazing</Link> that maintains the original aesthetic, 
                    we deliver bespoke solutions tailored to your property.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Boroughs We Cover</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {boroughs.map((borough) => (
                      <div key={borough} className="flex items-center gap-2 p-3 bg-secondary rounded-lg">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>{borough}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Why Choose Us for Central London Properties?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <span>20+ years experience with <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed buildings</Link> and heritage properties</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <span>Approved installers for <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">conservation areas</Link> across London</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <span>Specialist in <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian</Link> and <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline">Georgian window</Link> solutions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <span>Up to 80% <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">noise reduction</Link> for busy London streets</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <span>Improved <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">thermal efficiency</Link> reducing heating costs</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
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
                  <h3 className="text-xl font-bold mb-4">Other Areas</h3>
                  <div className="space-y-2">
                    <Link to="/areas/north-london" className="block p-2 hover:text-primary">North London</Link>
                    <Link to="/areas/south-london" className="block p-2 hover:text-primary">South London</Link>
                    <Link to="/areas/east-london" className="block p-2 hover:text-primary">East London</Link>
                    <Link to="/areas/west-london" className="block p-2 hover:text-primary">West London</Link>
                    <Link to="/areas/greater-london" className="block p-2 hover:text-primary">Greater London</Link>
                    <Link to="/areas/home-counties" className="block p-2 hover:text-primary">Home Counties</Link>
                  </div>
                </div>

                <div className="bg-primary text-primary-foreground p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Get a Free Quote</h3>
                  <p className="mb-4">Contact us today for a free, no-obligation quote for your Central London property.</p>
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

export default CentralLondon;
