import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EnergyEfficiency = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Energy Efficiency Solutions for Casement Windows</h1>
        <div className="grid grid-cols-1 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Energy Saving Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-semibold mb-3">Thermal Performance</h3>
                  <p className="text-gray-600">
                    Our energy-efficient secondary glazing significantly reduces heat loss through your windows,
                    helping to maintain comfortable temperatures and reduce energy bills.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-xl font-semibold mb-3">Advanced Glazing Options</h3>
                  <p className="text-gray-600">
                    Choose from a range of specialized glass options including low-E coatings and
                    argon-filled units for maximum thermal efficiency.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3">Draft Elimination</h3>
                  <p className="text-gray-600">
                    Our precision-fitted secondary glazing effectively eliminates drafts,
                    creating a more comfortable living environment and reducing heating costs.
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

export default EnergyEfficiency;