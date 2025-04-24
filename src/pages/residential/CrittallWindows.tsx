import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Thermometer, PiggyBank, VolumeX } from "lucide-react";
import { Helmet } from "react-helmet";
import { KeyPoint } from "@/components/ui/key-point";
import { CrittallIntro } from "@/components/residential/crittall/CrittallIntro";
import { CrittallDetails } from "@/components/residential/crittall/CrittallDetails";
import { CrittallFAQ } from "@/components/residential/crittall/CrittallFAQ";

const CrittallWindows = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Secondary Glazing for Crittall Windows | Heritage Window Solutions</title>
        <meta 
          name="description" 
          content="Discover how secondary glazing enhances Crittall windows with improved energy efficiency, noise reduction, and value preservation. Perfect for listed buildings and heritage properties." 
        />
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
        
        <CrittallIntro />

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
              <VolumeX className="w-12 h-12 text-primary mb-4" />
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

        <CrittallDetails />
        
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

        <CrittallFAQ />
      </div>
      <Footer />
    </div>
  );
};

export default CrittallWindows;
