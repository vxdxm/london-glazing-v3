
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Building2, Thermometer, PiggyBank, Sound } from "lucide-react";
import { Helmet } from "react-helmet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { KeyPoint } from "@/components/ui/key-point";

const CrittallWindows = () => {
  return <div className="min-h-screen bg-background">
      <Helmet>
        <title>Secondary Glazing for Crittall Windows | Heritage Window Solutions</title>
        <meta name="description" content="Discover how secondary glazing enhances Crittall windows with improved energy efficiency, noise reduction, and value preservation. Perfect for listed buildings and heritage properties." />
        <meta name="keywords" content="crittall windows, secondary glazing, energy efficiency, noise reduction, heritage windows, window insulation" />
        <meta property="og:title" content="Secondary Glazing for Crittall Windows | Heritage Window Solutions" />
        <meta property="og:description" content="Enhance your Crittall windows with secondary glazing - improved energy efficiency, noise reduction, and heritage preservation." />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/residential/crittall-windows" />
      </Helmet>
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Secondary Glazing for Crittall Windows</h1>

        <div className="mb-12 w-full max-w-4xl mx-auto">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <img 
              src="/lovable-uploads/bb016762-b43f-498a-be1c-7e477fcb368a.jpg" 
              alt="Modern Crittall windows with secondary glazing installed"
              className="object-cover w-full h-full rounded-lg"
            />
          </AspectRatio>
        </div>

        <div className="prose max-w-none mb-12">
          <p className="text-lg text-gray-700 mb-8">
            When it comes to maintaining historical properties or enhancing window performance, 
            Crittall windows offer unique charm and functionality. Our secondary glazing solutions 
            provide effective improvements in energy efficiency and noise reduction while preserving 
            their distinctive character.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Building2 className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Heritage Preservation</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Maintain original Crittall window features</li>
                <li>No modifications to existing frames</li>
                <li>Reversible installation process</li>
                <li>Listed building compliant</li>
                <li>Preserve architectural character</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Thermometer className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Insulation Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Significantly reduce heat loss up to 50%</li>
                <li>Eliminate drafts and cold spots</li>
                <li>Lower energy bills</li>
                <li>Improved thermal efficiency</li>
                <li>Reduced condensation</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Sound className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Noise Reduction</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Significant sound insulation</li>
                <li>Perfect for urban environments</li>
                <li>Improved sleep quality</li>
                <li>Reduced traffic noise</li>
                <li>Enhanced living comfort</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <PiggyBank className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Investment Value</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Increase property value</li>
                <li>Cost-effective solution</li>
                <li>Long-term energy savings</li>
                <li>Enhanced market appeal</li>
                <li>Sustainable investment</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Why Choose Secondary Glazing?</h2>
          <div className="space-y-6">
            <KeyPoint title="Energy Efficiency" variant="default">
              Secondary glazing creates an insulating air gap that significantly reduces heat loss,
              helping to maintain stable indoor temperatures and reduce energy bills.
            </KeyPoint>
            <KeyPoint title="Heritage Compliance" variant="secondary">
              Perfect for listed buildings and conservation areas, our solutions preserve the original
              window features while improving performance.
            </KeyPoint>
            <KeyPoint title="Sound Insulation" variant="outline">
              The additional glazing layer and air gap provide excellent sound insulation,
              particularly beneficial in urban environments.
            </KeyPoint>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="what-is">
              <AccordionTrigger>What is secondary glazing?</AccordionTrigger>
              <AccordionContent>
                Secondary glazing involves adding a second layer of glass to existing windows, 
                creating an insulating barrier that improves energy efficiency and reduces noise.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="energy-efficiency">
              <AccordionTrigger>How does secondary glazing enhance energy efficiency?</AccordionTrigger>
              <AccordionContent>
                Secondary glazing reduces heat loss by creating an air gap between two panes of glass, 
                helping to maintain indoor temperatures and lower energy bills.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="noise-reduction">
              <AccordionTrigger>Can secondary glazing help with noise reduction?</AccordionTrigger>
              <AccordionContent>
                Yes, secondary glazing significantly reduces sound transmission, making homes quieter, 
                especially in urban settings.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="cost-effective">
              <AccordionTrigger>Is secondary glazing a cost-effective solution?</AccordionTrigger>
              <AccordionContent>
                Secondary glazing is often more cost-effective than replacing windows, allowing 
                homeowners to enhance performance without extensive renovations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="appearance">
              <AccordionTrigger>Will secondary glazing alter the appearance of my Crittall windows?</AccordionTrigger>
              <AccordionContent>
                No, secondary glazing can be designed to blend seamlessly with existing Crittall 
                windows, preserving their unique aesthetic while improving functionality.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>;
};

export default CrittallWindows;
