
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ListedBuildingsSEO from "@/components/commercial/listed/ListedBuildingsSEO";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ListedBuildings = () => {
  return (
    <div className="min-h-screen bg-background">
      <ListedBuildingsSEO />
      <MainNav />
      <div className="container mx-auto px-4 py-8">
        <BreadcrumbNav />
        <h1 className="text-4xl font-bold mb-8">Heritage-Friendly Secondary Glazing for Listed Buildings</h1>
        
        {/* Hero Section */}
        <section className="mb-12">
          <div className="prose max-w-none mb-8">
            <p className="text-lg text-gray-700 mb-6">
              Our specialist secondary glazing solutions are designed specifically for listed buildings and conservation areas,
              providing modern comfort while preserving architectural heritage.
            </p>
          </div>
          
          <AspectRatio ratio={21/9} className="mb-8">
            <img 
              src="/lovable-uploads/1f5c80d9-95be-441b-ab84-b068ce4d1d08.jpg"
              alt="Secondary glazing installation in a listed building"
              className="rounded-lg object-cover w-full h-full"
            />
          </AspectRatio>
        </section>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Conservation-Compliant Secondary Glazing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Our secondary glazing solutions are designed to meet strict conservation requirements while providing modern benefits.
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Preserves original windows</li>
                <li>Meets conservation guidelines</li>
                <li>Reversible installation</li>
                <li>Sympathetic designs</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Modern Comfort for Heritage Buildings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Enhance the comfort of listed buildings while maintaining their historical integrity.
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Improved thermal efficiency</li>
                <li>Noise reduction</li>
                <li>Draft elimination</li>
                <li>Enhanced security</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        {/* Planning Permission Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Listed Building Secondary Glazing & Conservation Guidance</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              Secondary glazing is often the preferred solution for listed buildings as it typically doesn't require planning permission
              and is viewed favorably by conservation officers due to its minimal impact on the building fabric.
            </p>
            <p>
              Our team works closely with conservation officers and has extensive experience navigating the requirements
              for Grade I, II*, and II listed buildings across the UK.
            </p>
          </div>
        </section>
        
        {/* Call to Action */}
        <div className="text-center py-12 bg-gray-50 rounded-lg my-12">
          <h2 className="text-2xl font-bold mb-6">Preserve Your Heritage Property</h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation about your listed property. Our experts understand
            the delicate balance between preservation and modernization.
          </p>
          <a
            href="/quote-request" 
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded font-medium"
          >
            Request a Heritage Consultation
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListedBuildings;
