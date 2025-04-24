import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Building2 } from "lucide-react";
import { Helmet } from "react-helmet";
const CrittallWindows = () => {
  return <div className="min-h-screen bg-background">
      <Helmet>
        <title>Secondary Glazing for Crittall Windows | Heritage Window Solutions</title>
        <meta name="description" content="Discover how secondary glazing can enhance the thermal performance of Crittall windows while preserving their iconic aesthetic. Perfect for listed buildings and heritage properties." />
      </Helmet>
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Secondary Glazing for Crittall Windows</h1>

        <div className="mb-12 w-full max-w-4xl mx-auto">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <img alt="Modern Crittall windows with secondary glazing installed" className="object-cover w-full h-full rounded-lg" src="/lovable-uploads/bb016762-b43f-498a-be1c-7e477fcb368a.jpg" />
          </AspectRatio>
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
              <CardTitle>Insulation Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Significantly reduce heat loss</li>
                <li>Eliminate drafts and cold spots</li>
                <li>Lower energy bills</li>
                <li>Improved thermal efficiency</li>
                <li>Reduced condensation</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="prose max-w-none text-gray-600">
          <h2 className="text-3xl font-semibold mb-4">Why Choose Secondary Glazing for Crittall Windows?</h2>
          <p className="mb-4">
            Crittall windows are iconic features of many period properties, known for their slim profiles and 
            industrial aesthetic. While beautiful, these steel-framed windows often suffer from poor thermal 
            performance. Secondary glazing provides the perfect solution, offering improved insulation without 
            compromising the distinctive appearance of your Crittall windows.
          </p>
          <p className="mb-4">
            Our secondary glazing solutions are specifically designed to complement Crittall windows, with 
            slimline frames that minimize visual impact while maximizing thermal efficiency. This approach 
            allows you to retain the character of your original windows while enjoying modern comfort standards.
          </p>
        </div>
      </div>
      <Footer />
    </div>;
};
export default CrittallWindows;