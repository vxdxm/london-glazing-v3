import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";

const EnergyEfficiency = () => {
  return (
    <div className="min-h-screen bg-background">
      <EnhancedSEO
        title="Energy Efficient Casement Window Secondary Glazing | London"
        description="Cut heat loss and lower energy bills with energy-efficient secondary glazing for casement windows. Low-E coatings, argon-filled units & draft elimination across London."
        canonicalPath="/residential/energy-efficiency"
        type="service"
        serviceName="Energy Efficient Secondary Glazing for Casement Windows"
        keywords={["energy efficient secondary glazing", "casement window insulation", "low-e secondary glazing London", "thermal secondary glazing"]}
        includeLocalBusiness
      />
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