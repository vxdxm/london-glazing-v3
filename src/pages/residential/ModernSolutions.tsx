
import { Helmet } from "react-helmet";
import { MainNav } from "@/components/MainNav";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { useScrollToHash } from "@/hooks/useScrollToHash";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Separator } from "@/components/ui/separator";
import { InfoCard } from "@/components/ui/info-card";
import { KeyPoint } from "@/components/ui/key-point";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const ModernSolutions = () => {
  useScrollToHash();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Modern Secondary Glazing Solutions | Energy Efficiency for Historic Buildings</title>
        <meta name="description" content="Discover how modern secondary glazing solutions can transform historic buildings, providing energy efficiency while preserving architectural integrity." />
        <meta name="keywords" content="secondary glazing, energy efficiency, historic buildings, window insulation, noise reduction, thermal efficiency" />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/residential/modern-solutions" />
      </Helmet>
      
      <MainNav />
      
      <div className="container mx-auto px-4 py-8 md:py-16">
        <BreadcrumbNav />
        
        {/* Table of Contents */}
        <Card className="mb-8 hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle>Contents</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-2 md:grid-cols-2">
              <li>
                <a href="#introduction" className="text-primary hover:underline">Introduction</a>
              </li>
              <li>
                <a href="#historic-buildings" className="text-primary hover:underline">Overview of Historic Buildings</a>
              </li>
              <li>
                <a href="#energy-efficiency" className="text-primary hover:underline">Importance of Energy Efficiency</a>
              </li>
              <li>
                <a href="#benefits" className="text-primary hover:underline">Energy Efficiency Benefits</a>
              </li>
              <li>
                <a href="#preservation" className="text-primary hover:underline">Preservation of Historical Integrity</a>
              </li>
              <li>
                <a href="#comfort" className="text-primary hover:underline">Enhanced Indoor Comfort</a>
              </li>
              <li>
                <a href="#conclusion" className="text-primary hover:underline">Conclusion</a>
              </li>
              <li>
                <a href="#faq" className="text-primary hover:underline">FAQs</a>
              </li>
              <li>
                <a href="#features" className="text-primary hover:underline">Key Features</a>
              </li>
            </ul>
          </CardContent>
        </Card>

        <h1 className="text-4xl font-bold mb-8">Modern Secondary Glazing Solutions for Historic Buildings</h1>

        {/* Introduction Section */}
        <section id="introduction" className="mb-12 scroll-mt-20">
          <SectionHeading title="Introduction" />
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 mb-4">
                The preservation of historic buildings is a delicate balance between maintaining the architectural integrity and enhancing energy efficiency. 
                As concerns over climate change and rising energy costs grow, the need for energy-efficient solutions in older structures has become more pressing.
              </p>
              <p className="text-gray-600">
                This article explores how secondary glazing can transform historic buildings, providing a modern solution that addresses both energy efficiency and 
                the preservation of aesthetic value.
              </p>
            </div>
            <div>
              <AspectRatio ratio={16/9} className="overflow-hidden rounded-lg shadow-md">
                <img 
                  src="/lovable-uploads/96faaaa8-1961-4d56-897f-cf5fba13e0cd.png" 
                  alt="Modern secondary glazing installation in a historic building" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  loading="lazy"
                />
              </AspectRatio>
            </div>
          </div>
        </section>

        {/* Overview of Historic Buildings */}
        <section id="historic-buildings" className="mb-12 scroll-mt-20">
          <SectionHeading title="Overview of Historic Buildings" />
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <AspectRatio ratio={16/9} className="overflow-hidden rounded-lg shadow-md">
                <img 
                  src="/lovable-uploads/49953857-31a7-4076-924c-61a726839d85.jpg" 
                  alt="Historic building with classic architecture" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  loading="lazy"
                />
              </AspectRatio>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-gray-600 mb-4">
                Historic buildings are often cherished for their architectural significance, telling a story of the past through their design and craftsmanship. 
                These structures embody cultural heritage and historical narratives, making their preservation crucial for future generations.
              </p>
              <p className="text-gray-600">
                However, many historic buildings were constructed without consideration for modern energy standards, leading to significant energy loss and comfort issues. 
                The challenge lies in upgrading these buildings to meet contemporary energy efficiency standards without compromising their historical essence.
              </p>
            </div>
          </div>
        </section>

        {/* Importance of Energy Efficiency */}
        <section id="energy-efficiency" className="mb-12 scroll-mt-20">
          <SectionHeading title="Importance of Energy Efficiency in Older Structures" />
          <p className="text-gray-600 mb-6">
            Energy efficiency is essential in all buildings, but it takes on heightened importance in older structures due to their often inefficient original building methods and materials. 
            Inadequate insulation and air leakage can lead to excessive heating and cooling costs, which can be detrimental to both the environment and the economic feasibility of maintaining these buildings.
          </p>
          <p className="text-gray-600">
            Furthermore, retrofitting historic buildings with modern energy-efficient systems can enhance their long-term viability and sustainability.
          </p>
        </section>

        {/* Energy Efficiency Benefits */}
        <section id="benefits" className="mb-12 scroll-mt-20">
          <SectionHeading title="Energy Efficiency Benefits" />
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <InfoCard title="Introduction to Secondary Glazing as a Modern Solution">
              <div className="space-y-4">
                <p className="text-gray-600">
                  Secondary glazing is a relatively simple yet effective solution that involves installing a second pane of glass or acrylic to existing windows. 
                  This system creates an insulating air gap, significantly improving the thermal performance of the window while preserving the building's original appearance.
                </p>
                <p className="text-gray-600">
                  Unlike replacing windows, secondary glazing allows for the retention of historic glass features, ensuring that the character of the building is maintained.
                </p>
              </div>
            </InfoCard>
            
            <InfoCard title="Improvement in Insulation and Energy Savings">
              <div className="space-y-4">
                <p className="text-gray-600">
                  The installation of secondary glazing can dramatically increase a building's insulation properties. Studies have shown that secondary glazing can reduce heat loss through windows by up to 50%. 
                </p>
                <p className="text-gray-600">
                  This enhancement in insulation translates to a reduced need for heating during winter months and cooling in summer, resulting in substantial energy savings. 
                  For historic buildings, where original windows often contribute to energy inefficiency, secondary glazing provides a solution that respects the building's character while improving its performance.
                </p>
              </div>
            </InfoCard>
          </div>
          
          <InfoCard title="Reduction in Heating and Cooling Costs" className="mb-6">
            <div className="space-y-4">
              <p className="text-gray-600">
                By improving window insulation through secondary glazing, historic building owners can experience significant reductions in their heating and cooling costs. 
                With less energy required to maintain comfortable temperatures, the financial burden associated with energy bills diminishes.
              </p>
              <p className="text-gray-600">
                This cost-effectiveness not only benefits the owners in the short term but also contributes to the long-term sustainability of the building by making maintenance more manageable.
              </p>
            </div>
          </InfoCard>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <div className="flex justify-center mb-4">
              <AspectRatio ratio={16/9} className="w-full max-w-2xl overflow-hidden rounded-lg shadow-md">
                <img 
                  src="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg" 
                  alt="Energy efficient secondary glazing installation" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </AspectRatio>
            </div>
            <p className="text-sm text-center text-gray-500 italic">Modern secondary glazing installation showing the air gap that provides thermal insulation</p>
          </div>
        </section>

        {/* Preservation of Historical Integrity */}
        <section id="preservation" className="mb-12 scroll-mt-20">
          <SectionHeading title="Preservation of Historical Integrity" />
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <InfoCard title="Challenges of Retrofitting">
              <p className="text-gray-600">
                Retrofitting historic buildings presents unique challenges. It is essential to balance modern energy demands with the preservation of historical authenticity. 
                Many owners fear that alterations may detract from the architectural significance and historical context of their properties.
              </p>
            </InfoCard>
            
            <InfoCard title="Maintaining Aesthetic Value">
              <p className="text-gray-600">
                One of the most significant advantages of secondary glazing is its ability to maintain the aesthetic value of historic buildings. 
                Unlike full window replacements, which can dramatically alter the appearance of a building, secondary glazing is discreet and often invisible from the exterior.
              </p>
            </InfoCard>
            
            <InfoCard title="Case Examples">
              <p className="text-gray-600">
                Numerous successful case studies illustrate the effectiveness of secondary glazing in preserving historic buildings. 
                One notable example is the restoration of the Royal Exchange in London, where secondary glazing was used to enhance energy efficiency while preserving its grand aesthetic qualities.
              </p>
            </InfoCard>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 mb-4">
                This preservation of sightlines ensures that the building's historical features, such as decorative frames and original glass, remain intact while still benefiting from improved energy performance.
              </p>
              <p className="text-gray-600">
                Similarly, many residential homes in heritage areas have adopted secondary glazing to maintain their charm and comply with local preservation guidelines, 
                thereby demonstrating that modern solutions can complement historical integrity.
              </p>
            </div>
            <div>
              <AspectRatio ratio={16/9} className="overflow-hidden rounded-lg shadow-md">
                <img 
                  src="/lovable-uploads/1c6ae08e-8c9d-4d76-a036-5b7643b5f28a.jpg" 
                  alt="Historic window with discreet secondary glazing" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  loading="lazy"
                />
              </AspectRatio>
            </div>
          </div>
        </section>

        {/* Enhanced Indoor Comfort */}
        <section id="comfort" className="mb-12 scroll-mt-20">
          <SectionHeading title="Enhanced Indoor Comfort" />
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Improved Acoustic Insulation</h3>
              <p className="text-gray-600 mb-4">
                In addition to thermal benefits, secondary glazing also provides substantial acoustic insulation. The additional pane of glass creates a barrier that significantly reduces noise intrusion from the outside, making living spaces more comfortable.
              </p>
              <p className="text-gray-600">
                This is particularly valuable in urban areas or near busy roads, where noise pollution can detract from the quality of life. 
                Residents of buildings with secondary glazing often report a notable improvement in their comfort levels due to reduced noise exposure.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Reduction of Drafts and Temperature Fluctuations</h3>
              <p className="text-gray-600 mb-4">
                Secondary glazing effectively reduces drafts that commonly plague older buildings. By sealing off gaps around windows, 
                it prevents cold air from entering and warm air from escaping, resulting in a more stable indoor climate.
              </p>
              <p className="text-gray-600">
                This stability minimizes temperature fluctuations, creating a more comfortable environment throughout the year. 
                Homeowners and building occupants benefit from consistent temperatures, which can be particularly advantageous in spaces that require specific climate control for preservation purposes.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-3">Feedback from Residents and Users</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-600 italic mb-2">
                  "After installing secondary glazing in our Victorian home, we noticed an immediate difference in warmth and comfort. 
                  The house maintains a steady temperature now, and the street noise has been significantly reduced."
                </p>
                <p className="text-right text-sm font-medium">— Heritage homeowner, Bath</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-600 italic mb-2">
                  "As a museum curator, I was concerned about protecting our exhibits while maintaining visitor comfort. 
                  Secondary glazing has helped us achieve both, regulating temperature and blocking UV rays without altering the building's historic facade."
                </p>
                <p className="text-right text-sm font-medium">— Museum curator, Edinburgh</p>
              </div>
            </div>
          </div>
          
          <AspectRatio ratio={21/9} className="overflow-hidden rounded-lg shadow-md">
            <img 
              src="/lovable-uploads/733d2e89-3c8b-437b-b5a1-074997517da0.jpg" 
              alt="Modern interior with secondary glazed windows" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </AspectRatio>
        </section>

        {/* Conclusion */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <SectionHeading title="Conclusion" />
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Summary of Key Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Secondary glazing emerges as a pivotal solution for enhancing energy efficiency in historic buildings while preserving their architectural integrity. 
                  The dual advantages of improved insulation and reduced noise contribute to a more comfortable indoor environment, while the retention of original windows maintains aesthetic value.
                </p>
                <p className="text-gray-600">
                  As historic buildings face the challenges of modern energy demands, secondary glazing offers a balanced approach that respects the past while looking towards a sustainable future.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>The Future of Historic Building Improvements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  As awareness of energy efficiency continues to grow, it is likely that more historic buildings will adopt secondary glazing solutions. 
                  The emphasis on sustainability and climate-conscious practices will drive further innovations in preservation techniques, 
                  ensuring that these valuable structures can be enjoyed by future generations while meeting modern standards.
                </p>
                <p className="text-gray-600">
                  By bridging the gap between historic preservation and contemporary efficiency, secondary glazing stands out as a forward-thinking solution.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQs */}
        <section id="faq" className="mb-12 scroll-mt-20">
          <SectionHeading title="Frequently Asked Questions" />
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is secondary glazing?</AccordionTrigger>
              <AccordionContent>
                Secondary glazing involves installing a second pane of glass or acrylic to existing windows, 
                creating an insulating air gap that enhances thermal performance and reduces energy loss.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>How does secondary glazing improve energy efficiency?</AccordionTrigger>
              <AccordionContent>
                By adding an additional layer of glass, secondary glazing reduces heat transfer, 
                minimizes air leakage, and significantly improves the insulation properties of windows, leading to energy savings.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>Will secondary glazing alter the appearance of my historic building?</AccordionTrigger>
              <AccordionContent>
                Secondary glazing is designed to be discreet and often invisible from the exterior, 
                allowing the original windows and architectural features to remain intact while enhancing energy efficiency.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>Can secondary glazing help with noise reduction?</AccordionTrigger>
              <AccordionContent>
                Yes, secondary glazing provides excellent acoustic insulation, significantly reducing noise intrusion from outside, 
                which enhances indoor comfort, particularly in noisy environments.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>Is secondary glazing suitable for all historic buildings?</AccordionTrigger>
              <AccordionContent>
                While secondary glazing is suitable for most historic buildings, it is essential to consult local preservation guidelines 
                and experts to ensure compliance with any regulations regarding modifications.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Original Features Section */}
        <section id="features" className="mb-12 scroll-mt-20">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Detailed Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-semibold mb-3">Easy Access to Primary Windows</h3>
                  <p className="text-gray-600">
                    Our secondary glazing solutions are designed to provide seamless access to your primary windows,
                    ensuring easy cleaning and maintenance of both window systems.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-xl font-semibold mb-3">Superior Weatherproofing</h3>
                  <p className="text-gray-600">
                    Advanced sealing technology and high-quality materials ensure excellent protection against drafts,
                    rain, and external weather conditions.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3">Enhanced Security Features</h3>
                  <p className="text-gray-600">
                    Built-in security measures including toughened glass options and robust locking mechanisms
                    provide additional protection for your property.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3">Energy-efficient Design</h3>
                  <p className="text-gray-600">
                    Our modern solutions incorporate the latest in thermal efficiency technology,
                    helping to reduce heat loss and lower energy bills throughout the year.
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="flex justify-between items-center mt-12 border-t pt-6">
          <div>
            <p className="text-sm text-gray-500">Last updated: April 26, 2024</p>
          </div>
          <div>
            <Button variant="outline" size="sm" onClick={scrollToTop} className="flex items-center gap-2">
              <ArrowUp className="w-4 h-4" />
              Back to Top
            </Button>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Need Expert Advice?</h3>
          <p className="mb-4">Our specialists can help you choose the right secondary glazing solution for your historic building.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/quote-request">
              <Button>Get a Quote</Button>
            </Link>
            <Link to="/residential">
              <Button variant="outline">Explore More Solutions</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernSolutions;
