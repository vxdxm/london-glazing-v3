
import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Wrench, ShieldCheck, ArrowRight, Hammer, Info, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const SecondaryGlazingRepairs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Secondary Glazing Repairs | Spiral Balances for Vertical Sliding Units</title>
        <meta name="description" content="Expert secondary glazing repair services specializing in spiral balances for vertical sliding units. Professional repairs to extend the lifespan of your glazing." />
      </Helmet>
      <MainNav />
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Secondary Glazing Repairs</h1>
              <p className="text-xl text-gray-700 mb-6">
                Specialized repair services for your secondary glazing systems, with expertise in spiral balances for vertical sliding units.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/quote-request">
                    Request Repair Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#spiral-balances">
                    Learn About Spiral Balances <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="/lovable-uploads/c2f200dd-d56e-45c6-9eaf-0aeb8ccde2a2.png" 
                alt="Secondary glazing repair specialist fixing a vertical sliding unit"
                className="rounded-lg shadow-xl w-full object-cover max-h-[400px]"
              />
            </div>
          </div>
        </section>

        {/* Common Repair Issues */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Common Secondary Glazing Issues</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-sky-100 p-3 rounded-full">
                  <Wrench className="h-6 w-6 text-sky-700" />
                </div>
                <CardTitle>Spiral Balance Failures</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Worn or broken spiral balances causing sashes to drop or become difficult to operate. 
                  This common issue can make vertical sliding units virtually unusable if not repaired.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-sky-100 p-3 rounded-full">
                  <ShieldCheck className="h-6 w-6 text-sky-700" />
                </div>
                <CardTitle>Alignment Problems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Misaligned frames causing sticking, dragging, or gaps that reduce energy efficiency and 
                  noise insulation capabilities of your secondary glazing.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-sky-100 p-3 rounded-full">
                  <Hammer className="h-6 w-6 text-sky-700" />
                </div>
                <CardTitle>Hardware Damage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Broken locks, handles, or catches that compromise security and functionality. 
                  Our repair service includes replacement of all secondary glazing hardware.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Spiral Balance Section */}
        <section id="spiral-balances" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-semibold mb-8">Spiral Balance Repair & Replacement</h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <div className="flex-1">
              <h3 className="text-2xl font-medium mb-4">What Are Spiral Balances?</h3>
              <p className="text-gray-700 mb-4">
                Spiral balances are the spring-loaded mechanism that enables vertical sliding sashes to 
                operate smoothly and stay in position when raised. They provide the counterbalance for 
                the weight of the glass, making operation effortless.
              </p>
              <p className="text-gray-700 mb-4">
                Over time, these balances can wear out, lose tension, or break completely, resulting in 
                windows that slam shut, won't stay open, or become extremely difficult to operate.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
                <div className="flex">
                  <Info className="h-6 w-6 text-amber-500 mr-2 flex-shrink-0" />
                  <p className="text-amber-700">
                    Signs your spiral balances need attention include: windows that won't stay open, 
                    sashes that are hard to move, or sudden slamming when trying to open the window.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="/lovable-uploads/3fab2280-476f-4095-a2cf-83d2f4485ca3.png" 
                alt="Spiral balance mechanism for vertical sliding secondary glazing"
                className="rounded-lg shadow-xl w-full object-cover"
              />
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-2xl font-medium mb-4">Our Spiral Balance Repair Process</h3>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <div className="bg-sky-700 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h4 className="font-medium text-lg">Detailed Assessment</h4>
                  <p className="text-gray-600">
                    Our technicians will examine your vertical sliding units to diagnose the exact issue with your spiral balances,
                    identifying whether repair or replacement is needed.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-sky-700 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h4 className="font-medium text-lg">Balance Replacement</h4>
                  <p className="text-gray-600">
                    Using manufacturer-matched components, we'll carefully remove the damaged balances and 
                    install new ones calibrated to the precise weight of your sashes.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-sky-700 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h4 className="font-medium text-lg">System Testing</h4>
                  <p className="text-gray-600">
                    We'll test the operation multiple times to ensure smooth movement, 
                    proper balance, and verify that sashes remain in position when opened.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-sky-700 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
                <div>
                  <h4 className="font-medium text-lg">Final Adjustment</h4>
                  <p className="text-gray-600">
                    Fine-tuning of the tension and alignment to optimize performance and extend the lifespan of your secondary glazing system.
                  </p>
                </div>
              </li>
            </ol>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <Leaf className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-medium mb-2">Sustainability Benefits</h3>
                <p className="text-gray-700">
                  Repairing your existing secondary glazing rather than replacing it entirely reduces waste and preserves the embodied carbon 
                  in your current installation. Our repair service extends the life of your secondary glazing by 10-15 years, 
                  making it a sustainable and cost-effective choice.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Service Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Additional Repair Services</h2>
          <p className="text-gray-700 mb-8">
            Beyond spiral balance repairs, we offer a comprehensive range of repair services for all types of secondary glazing systems:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Frame Repairs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-sky-500 flex-shrink-0 mt-0.5" />
                    <span>Realignment of frames that have shifted over time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-sky-500 flex-shrink-0 mt-0.5" />
                    <span>Fixing or replacing damaged frame sections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-sky-500 flex-shrink-0 mt-0.5" />
                    <span>Sealing gaps to restore thermal and acoustic performance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Hardware Replacement</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-sky-500 flex-shrink-0 mt-0.5" />
                    <span>Lock and hinge replacements with security-enhanced options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-sky-500 flex-shrink-0 mt-0.5" />
                    <span>Handle and catch repairs or upgrades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-sky-500 flex-shrink-0 mt-0.5" />
                    <span>Child-safety mechanisms for family homes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Glass Replacement</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-sky-500 flex-shrink-0 mt-0.5" />
                    <span>Replacement of cracked or damaged glazing panels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-sky-500 flex-shrink-0 mt-0.5" />
                    <span>Upgrading to enhanced acoustic or thermal glass</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-sky-500 flex-shrink-0 mt-0.5" />
                    <span>Fixing condensation issues between panes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Maintenance Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-sky-500 flex-shrink-0 mt-0.5" />
                    <span>Comprehensive servicing to extend lifespan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-sky-500 flex-shrink-0 mt-0.5" />
                    <span>Lubrication of sliding channels and mechanisms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-sky-500 flex-shrink-0 mt-0.5" />
                    <span>Brush seal replacement for improved draught-proofing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-sky-50 p-8 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Ready to Restore Your Secondary Glazing?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Whether it's spiral balance issues or any other secondary glazing repairs, our specialist team is ready to help.
              Contact us today for a no-obligation assessment and quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/quote-request">
                  Request Repair Quote
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+448001234567">
                  Call Us: 0800 123 4567
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SecondaryGlazingRepairs;
