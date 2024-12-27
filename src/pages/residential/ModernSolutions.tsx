import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ModernSolutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Modern Solutions for Casement Windows</h1>
        <div className="grid grid-cols-1 gap-8">
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
        </div>
      </div>
    </div>
  );
};

export default ModernSolutions;