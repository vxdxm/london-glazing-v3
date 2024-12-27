import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GlassOptions from "@/components/residential/GlassOptions";

const Combination = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">Combination Windows</h1>
            <p className="text-gray-700 mb-6">
              Our combination window solutions offer the ultimate flexibility in design,
              allowing you to mix different window styles to create the perfect balance
              of functionality and aesthetics for your property.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1496307653780-42ee777d4833"
              alt="Modern combination window installation"
              className="rounded-lg w-full h-[300px] object-cover"
            />
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Available Combinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Sash and Casement Combination</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1439337153520-7082a56a81f4"
                    alt="Sash and casement window combination"
                    className="rounded-lg w-full h-[200px] object-cover mb-4"
                  />
                  <p className="text-gray-700">
                    Blend traditional sash windows with modern casement windows for a
                    unique look that combines heritage appeal with contemporary functionality.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Perfect for period properties</li>
                    <li>Maximum ventilation options</li>
                    <li>Flexible opening configurations</li>
                    <li>Enhanced aesthetic appeal</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Bay and Casement Mix</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
                    alt="Bay and casement window combination"
                    className="rounded-lg w-full h-[200px] object-cover mb-4"
                  />
                  <p className="text-gray-700">
                    Combine bay windows with casement windows to create stunning focal points
                    while maintaining practical functionality throughout your property.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Maximizes natural light</li>
                    <li>Creates stunning focal points</li>
                    <li>Practical ventilation options</li>
                    <li>Ideal for modern homes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Frame Construction</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Aluminum alloy frame construction</li>
                  <li>Multiple powder-coated finish options</li>
                  <li>Custom color matching available</li>
                  <li>Thermal break technology</li>
                  <li>Weather-resistant seals</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Enhanced thermal performance</li>
                  <li>Superior sound insulation</li>
                  <li>Advanced security features</li>
                  <li>Customizable ventilation options</li>
                  <li>Easy maintenance design</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <GlassOptions />
      </div>
    </div>
  );
};

export default Combination;