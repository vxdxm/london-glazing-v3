import React from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Volume2, 
  Thermometer, 
  Shield, 
  Leaf, 
  PoundSterling, 
  Sun,
  Wind,
  Droplets,
  Clock,
  CheckCircle2
} from "lucide-react";

const benefits = [
  {
    title: "Noise Reduction",
    icon: Volume2,
    description: "Reduce external noise by up to 80% with acoustic secondary glazing. Perfect for homes near busy roads, railways, or flight paths.",
    stats: "Up to 80% noise reduction",
    link: "/noise-reduction-secondary-glazing"
  },
  {
    title: "Thermal Insulation",
    icon: Thermometer,
    description: "Improve your home's thermal efficiency by up to 65%. Reduce heat loss in winter and keep cool in summer.",
    stats: "65% heat loss reduction",
    link: "/thermal-insulation-secondary-glazing"
  },
  {
    title: "Enhanced Security",
    icon: Shield,
    description: "Add an extra layer of protection to your windows. Secondary glazing makes break-ins significantly more difficult.",
    stats: "Additional security barrier",
    link: "/specialized/security-glazing"
  },
  {
    title: "Energy Savings",
    icon: PoundSterling,
    description: "Reduce your heating bills by up to 40% annually. Secondary glazing pays for itself through energy savings.",
    stats: "Up to £600/year savings",
    link: "/residential/energy-performance"
  },
  {
    title: "UV Protection",
    icon: Sun,
    description: "Protect your furniture, artwork, and carpets from UV damage. Our glazing blocks up to 99% of harmful UV rays.",
    stats: "99% UV protection",
    link: "/specialized/uv-protection"
  },
  {
    title: "Draught Elimination",
    icon: Wind,
    description: "Eliminate cold draughts from old or ill-fitting windows. Enjoy consistent room temperatures year-round.",
    stats: "Complete draught sealing",
    link: "/thermal-insulation-secondary-glazing"
  },
  {
    title: "Condensation Control",
    icon: Droplets,
    description: "Reduce or eliminate condensation on your windows. Protect window frames from moisture damage and mould.",
    stats: "Condensation eliminated",
    link: "/specialized/condensation-control"
  },
  {
    title: "Preserve Original Windows",
    icon: Clock,
    description: "Keep your beautiful original windows while adding modern performance. Perfect for listed buildings and period properties.",
    stats: "Heritage preservation",
    link: "/listed-buildings-secondary-glazing"
  }
];

const comparisonData = [
  { feature: "Noise Reduction", secondary: "Up to 80%", double: "25-30%" },
  { feature: "Thermal Improvement", secondary: "60-65%", double: "50-60%" },
  { feature: "Preserves Original Windows", secondary: "Yes", double: "No" },
  { feature: "Planning Permission", secondary: "Rarely needed", double: "Often required" },
  { feature: "Installation Time", secondary: "1-2 hours/window", double: "Full day" },
  { feature: "Disruption Level", secondary: "Minimal", double: "Significant" },
  { feature: "Cost", secondary: "£200-600/window", double: "£400-1000/window" },
  { feature: "Listed Building Suitable", secondary: "Yes", double: "Rarely" }
];

const Benefits = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Benefits of Secondary Glazing | Noise, Thermal, Security | London</title>
        <meta 
          name="description" 
          content="Discover the benefits of secondary glazing: noise reduction up to 80%, thermal insulation, enhanced security, energy savings, and heritage preservation. Free quotes."
        />
        <meta name="keywords" content="secondary glazing benefits, noise reduction windows, thermal insulation, energy saving glazing, heritage window solutions" />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/benefits" />
      </Helmet>

      <MainNav />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Benefits of Secondary Glazing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From dramatic noise reduction to significant energy savings, secondary glazing transforms your home's 
            comfort, security, and efficiency – all while preserving your original windows.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group">
                <CardHeader className="pb-2">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-3 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  <p className="text-sm font-semibold text-primary">{benefit.stats}</p>
                  <Link to={benefit.link} className="text-sm text-primary hover:underline block">
                    Learn more →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Secondary vs Double Glazing</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            See how secondary glazing compares to replacement double glazing – especially for period properties.
          </p>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse bg-background rounded-lg shadow">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold text-primary">Secondary Glazing</th>
                  <th className="text-center p-4 font-semibold">Double Glazing</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b last:border-0">
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center gap-1">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        {row.secondary}
                      </span>
                    </td>
                    <td className="p-4 text-center text-muted-foreground">{row.double}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <Link to="/guides/secondary-vs-double-glazing">
              <Button variant="outline">Read Full Comparison Guide</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Secondary Glazing?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Perfect for Period Properties</h3>
                <p className="text-muted-foreground">
                  If you live in a listed building, conservation area, or simply love your original windows, 
                  secondary glazing is the ideal solution. It adds modern performance without altering the 
                  character of your property.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Preserves original windows and character</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Usually no planning permission required</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Reversible installation</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Cost-Effective Solution</h3>
                <p className="text-muted-foreground">
                  Secondary glazing typically costs 30-50% less than replacement double glazing, with faster 
                  installation and less disruption. Plus, the energy savings mean it pays for itself over time.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Lower upfront cost than replacement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Quick, clean installation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Ongoing energy bill savings</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the Benefits Yourself</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get a free survey and quote to discover how secondary glazing can transform your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote-request">
              <Button size="lg" variant="secondary">
                Get Your Free Quote
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Benefits;
