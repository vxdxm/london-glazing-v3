import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { MainNav } from '@/components/MainNav';
import { Footer } from '@/components/Footer';
import { MapPin, Phone, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SouthLondon = () => {
  const boroughs = [
    "Southwark", "Lambeth", "Lewisham", "Greenwich", "Bromley",
    "Croydon", "Wandsworth", "Merton", "Sutton", "Kingston"
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
        <title>Secondary Glazing South London | Expert Installation Services</title>
        <meta name="description" content="Professional secondary glazing services in South London. Specialist installations for period properties in Greenwich, Dulwich, Blackheath, Wandsworth and surrounding areas." />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/areas/south-london" />
        <meta name="keywords" content="secondary glazing South London, double glazing Greenwich, window insulation Dulwich, soundproof windows Wandsworth, heritage glazing Blackheath" />
      </Helmet>
      
      <MainNav />
      
      <main>
        <section className="bg-accent text-accent-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm mb-6 text-accent-foreground/70">
              <Link to="/" className="hover:text-accent-foreground">Home</Link>
              <span>/</span>
              <span>South London</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Secondary Glazing Specialists in South London
            </h1>
            <p className="text-xl text-accent-foreground/90 max-w-3xl mb-8">
              Expert <Link to="/residential" className="underline hover:text-white">secondary glazing installation</Link> across South London. 
              From the <Link to="/georgian-windows-secondary-glazing" className="underline hover:text-white">Georgian houses</Link> of Greenwich to 
              the <Link to="/victorian-windows-secondary-glazing" className="underline hover:text-white">Victorian villas</Link> of Dulwich.
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
                  <p className="text-muted-foreground">All South London Boroughs</p>
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
                  <h2 className="text-3xl font-bold mb-4">Secondary Glazing Services in South London</h2>
                  <p className="text-muted-foreground mb-4">
                    South London offers a rich architectural heritage, from the <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline">Georgian elegance</Link> of 
                    Blackheath to the <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian grandeur</Link> of Dulwich Village. 
                    Our specialist secondary glazing solutions preserve these period features while dramatically improving comfort.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    We work extensively in South London's numerous <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">conservation areas</Link>, 
                    including Greenwich, Dulwich, and Blackheath. Our team understands the planning requirements and delivers solutions 
                    that satisfy both homeowners and conservation officers.
                  </p>
                  <p className="text-muted-foreground">
                    From <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">reducing railway noise</Link> near busy South London stations to 
                    improving <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">thermal performance</Link> in period properties, 
                    we provide comprehensive <Link to="/sash-window-secondary-glazing" className="text-primary hover:underline">secondary glazing solutions</Link>.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Areas We Cover</h3>
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
                  <h3 className="text-2xl font-bold mb-4">Why Choose Us for South London Properties?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <span>Extensive experience in Greenwich and Dulwich <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">conservation areas</Link></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <span>Specialists in <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline">Georgian</Link> and <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian</Link> properties</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <span>Expert <Link to="/sash-window-secondary-glazing" className="text-primary hover:underline">sash window solutions</Link></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <span>Effective <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">railway and traffic noise reduction</Link></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <span>Approved for <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed building installations</Link></span>
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
                  <h3 className="text-xl font-bold mb-4">Other Areas</h3>
                  <div className="space-y-2">
                    <Link to="/areas/central-london" className="block p-2 hover:text-primary">Central London</Link>
                    <Link to="/areas/north-london" className="block p-2 hover:text-primary">North London</Link>
                    <Link to="/areas/east-london" className="block p-2 hover:text-primary">East London</Link>
                    <Link to="/areas/west-london" className="block p-2 hover:text-primary">West London</Link>
                    <Link to="/areas/greater-london" className="block p-2 hover:text-primary">Greater London</Link>
                    <Link to="/areas/home-counties" className="block p-2 hover:text-primary">Home Counties</Link>
                  </div>
                </div>

                <div className="bg-primary text-primary-foreground p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Get a Free Quote</h3>
                  <p className="mb-4">Contact us today for a free, no-obligation quote for your South London property.</p>
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

export default SouthLondon;
