
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { useLocation } from "react-router-dom";

const SecondaryGlazingOriginalWindows = () => {
  const location = useLocation();
  const canonicalUrl = `https://secondaryglazingspecialist.com${location.pathname}`;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Secondary Glazing for Original Windows | Heritage Window Solutions</title>
        <meta 
          name="description" 
          content="Discover how secondary glazing preserves original windows while improving thermal and acoustic performance. Expert solutions for heritage properties." 
        />
        <meta 
          name="keywords" 
          content="secondary glazing, original windows, heritage windows, window preservation, listed buildings, conservation areas" 
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Secondary Glazing for Original Windows | Heritage Solutions" />
        <meta property="og:description" content="Expert solutions that preserve original windows while improving thermal and acoustic performance for heritage properties." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://secondaryglazingspecialist.com/lovable-uploads/f491fe90-350d-4010-9359-769a93c85044.png" />
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Secondary Glazing for Original Windows",
            "description": "Discover how secondary glazing preserves original windows while improving thermal and acoustic performance. Expert solutions for heritage properties.",
            "image": "https://secondaryglazingspecialist.com/lovable-uploads/f491fe90-350d-4010-9359-769a93c85044.png",
            "author": {
              "@type": "Organization",
              "name": "Secondary Glazing Specialist"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Secondary Glazing Specialist",
              "logo": {
                "@type": "ImageObject",
                "url": "https://secondaryglazingspecialist.com/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "${canonicalUrl}"
            }
          }
        `}
        </script>
      </Helmet>
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <BreadcrumbNav />
        <h1 className="text-4xl font-bold mb-8">Secondary Glazing for Original Windows</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Heritage Preservation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/f491fe90-350d-4010-9359-769a93c85044.png"
                  alt="Traditional sash window with secondary glazing"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Maintains original window character and aesthetics</li>
                <li>No modifications to existing windows required</li>
                <li>Reversible installation process</li>
                <li>Suitable for listed buildings and conservation areas</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Performance Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/f3eb05a4-a9c1-49c4-bc8a-81cb8ef23da9.png"
                  alt="Secondary glazing installation showing thermal improvement"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Enhanced thermal insulation</li>
                <li>Significant noise reduction</li>
                <li>Improved security</li>
                <li>Reduced condensation</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold mb-4">Preserving Historical Value</h2>
          <p className="text-gray-700 mb-6">
            Secondary glazing is an ideal solution for properties where preserving original windows is essential. 
            It allows you to maintain the historical integrity of your building while achieving modern performance standards.
          </p>

          <h2 className="text-2xl font-bold mb-4">Installation Process</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li className="mb-2">Careful assessment of original window condition</li>
            <li className="mb-2">Custom measurements for precise fitting</li>
            <li className="mb-2">Non-invasive installation methods</li>
            <li>Regular maintenance access preserved</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Conservation Compliance</h2>
          <p className="text-gray-700 mb-6">
            Our secondary glazing solutions are designed to meet conservation requirements and are often approved for use in listed buildings and conservation areas.
          </p>

          <div className="bg-secondary/50 p-6 rounded-lg mt-8">
            <h2 className="text-2xl font-bold mb-4">Expert Consultation</h2>
            <p className="text-gray-700">
              Our specialists can provide detailed advice on the most appropriate secondary glazing solutions for your original windows, 
              ensuring both preservation and performance requirements are met.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SecondaryGlazingOriginalWindows;
