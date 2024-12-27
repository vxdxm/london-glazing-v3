import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const CasementWindows = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <article className="prose lg:prose-xl max-w-none">
          <h1 className="text-4xl font-bold mb-8">Casement Secondary Glazing Windows: Complete Guide</h1>
          
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">What Are Casement Secondary Glazing Windows?</h2>
            <p className="text-gray-700 mb-4">
              Casement secondary glazing is a sophisticated window enhancement system designed to complement existing casement windows. This solution involves installing a secondary window on the interior side of your primary casement window, creating an additional barrier for improved insulation and noise reduction.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Benefits of Casement Secondary Glazing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Enhanced Thermal Insulation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Significantly reduces heat loss through windows, potentially cutting energy bills by up to 40%. Creates an effective thermal barrier between your interior and exterior environments.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Superior Noise Reduction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Reduces external noise by up to 80% when properly installed. Ideal for properties in high-traffic areas or near noise sources.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Enhanced Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Adds an extra layer of security to your windows. Features robust locking mechanisms and toughened glass options for increased protection.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Heritage Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Perfect for listed buildings and conservation areas where maintaining original windows is essential. Preserves historical character while improving performance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Technical Specifications</h2>
            <div className="space-y-4">
              <h3 className="text-2xl font-medium">Glass Options</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>4mm toughened safety glass (standard)</li>
                <li>6.4mm laminated glass (enhanced security)</li>
                <li>6.8mm acoustic laminated glass (maximum noise reduction)</li>
                <li>Low-E glass options for improved thermal efficiency</li>
              </ul>

              <h3 className="text-2xl font-medium">Frame Materials</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Slim aluminum profiles (standard)</li>
                <li>Powder-coated finish in any RAL color</li>
                <li>Anodized options available</li>
                <li>Corrosion-resistant materials throughout</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Installation Process</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Our professional installation process ensures optimal performance:
              </p>
              <ol className="list-decimal pl-6">
                <li>Initial survey and measurement</li>
                <li>Custom manufacturing to exact specifications</li>
                <li>Professional installation by certified technicians</li>
                <li>Quality assurance check and demonstration</li>
                <li>Aftercare support and maintenance guidance</li>
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Maintenance and Care</h2>
            <p className="text-gray-700 mb-4">
              Secondary glazing requires minimal maintenance:
            </p>
            <ul className="list-disc pl-6">
              <li>Regular cleaning with standard glass cleaner</li>
              <li>Annual check of hinges and mechanisms</li>
              <li>Periodic lubrication of moving parts</li>
              <li>Inspection of seals and gaskets</li>
            </ul>
          </section>

          <div className="mt-12 space-y-4">
            <h2 className="text-3xl font-semibold mb-6">Explore Our Casement Window Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card 
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => navigate("/residential/casement-windows/modern-solutions")}
              >
                <CardHeader>
                  <CardTitle>Modern Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Discover our contemporary secondary glazing options for modern properties.
                  </p>
                </CardContent>
              </Card>

              <Card 
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => navigate("/residential/casement-windows/traditional-options")}
              >
                <CardHeader>
                  <CardTitle>Traditional Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Explore our heritage-friendly solutions for period properties.
                  </p>
                </CardContent>
              </Card>

              <Card 
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => navigate("/residential/casement-windows/energy-efficiency")}
              >
                <CardHeader>
                  <CardTitle>Energy Efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Learn about our energy-saving secondary glazing solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default CasementWindows;