import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SashWindowGlassOptions from "@/components/residential/SashWindowGlassOptions";

const SashWindows = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <article className="prose lg:prose-xl max-w-none">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-8">Sash Window Secondary Glazing: Complete Guide</h1>
              <p className="text-gray-700 mb-4">
                Our sash window secondary glazing solutions are designed to preserve the original character 
                of your period property while providing modern insulation benefits. We use specially designed 
                systems that complement existing window frames, enhancing both aesthetics and functionality.
              </p>
            </div>
            <div className="flex-1">
              <img 
                src="/lovable-uploads/5592528a-f976-44e2-a6af-e79c4a3c3f18.png"
                alt="Three elegant sash windows with Roman blinds, overlooking brick buildings and trees, demonstrating classic period property features"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Window Styles Available</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Standard Vertical Sliding</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <img 
                      src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2"
                      alt="Vertical sliding sash window"
                      className="rounded-lg w-full h-[200px] object-cover mb-4"
                    />
                    <div className="text-gray-700 space-y-4">
                      <p>
                        Our traditional vertical sliding secondary glazing is expertly designed to complement your existing sash windows
                        while providing superior insulation and noise reduction benefits. The system features:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Smooth, balanced operation with high-quality spring balances</li>
                        <li>Custom-matched frame colors to blend seamlessly with your existing windows</li>
                        <li>Precision-engineered sliding mechanism for effortless use</li>
                        <li>Discrete brush seals for enhanced draught proofing</li>
                        <li>Optional tilt-in facility for easy cleaning access</li>
                      </ul>
                      <p>
                        Perfect for period properties, our vertical sliding secondary glazing maintains the original character
                        while significantly improving thermal and acoustic performance. The system can reduce heat loss by up
                        to 65% and noise levels by up to 80%.
                      </p>
                      <p>
                        Installation is carried out with minimal disruption to your property, and our expert fitters ensure
                        perfect alignment and operation. The result is a virtually invisible solution that enhances your
                        windows' performance without compromising their historic charm.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Tilt-In Sash Windows</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <img 
                      src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace"
                      alt="Tilt-in sash window demonstration"
                      className="rounded-lg w-full h-[200px] object-cover mb-4"
                    />
                    <div className="text-gray-700 space-y-4">
                      <p>
                        Our innovative tilt-in secondary glazing system combines traditional aesthetics with modern convenience,
                        offering exceptional accessibility for cleaning and maintenance. Key features include:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>90-degree tilt-in functionality for safe and easy cleaning from inside</li>
                        <li>Advanced safety mechanisms to prevent accidental release</li>
                        <li>Suitable for high-rise applications where external access is challenging</li>
                        <li>Integrated child safety locks</li>
                        <li>Weather-resistant seals for superior draught protection</li>
                      </ul>
                      <p>
                        The tilt-in mechanism is particularly valuable for upper-floor installations where external cleaning
                        would be difficult or dangerous. The system maintains all the thermal and acoustic benefits of our
                        standard vertical sliding units while adding unprecedented accessibility.
                      </p>
                      <p>
                        Each unit is custom-manufactured to your exact specifications, ensuring perfect fit and operation.
                        Our expert installation team will demonstrate the safe operation of the tilt-in mechanism and provide
                        comprehensive care instructions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Performance Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Thermal Efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Up to 65% reduction in heat loss</li>
                    <li>Significant decrease in energy bills</li>
                    <li>Enhanced comfort in all seasons</li>
                    <li>Reduced carbon footprint</li>
                    <li>Meets modern building regulations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Noise Reduction</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Up to 80% noise reduction</li>
                    <li>Ideal for urban environments</li>
                    <li>Perfect for properties near transport links</li>
                    <li>Enhanced sleep quality</li>
                    <li>Improved living environment</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Security Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Additional physical barrier</li>
                    <li>High-security locking mechanisms</li>
                    <li>Toughened safety glass options</li>
                    <li>Child safety features</li>
                    <li>Insurance-approved specifications</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <SashWindowGlassOptions />
        </article>
      </div>
    </div>
  );
};

export default SashWindows;