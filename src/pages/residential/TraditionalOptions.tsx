import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const TraditionalOptions = () => {
  return <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Traditional Secondary Glazing Options for Listed Windows</h1>
        <div className="grid grid-cols-1 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Heritage Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-semibold mb-3">Period-Appropriate Design</h3>
                  <p className="text-gray-600">
                    Our traditional casement window solutions are carefully designed to complement period properties,
                    maintaining authentic aesthetics while providing modern performance benefits.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-xl font-semibold mb-3">Authentic Materials</h3>
                  <p className="text-gray-600">
                    We use traditional materials and finishing techniques to ensure our secondary glazing
                    matches the character of your original windows perfectly.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3">Sympathetic Installation</h3>
                  <p className="text-gray-600">
                    Our installation methods respect the original fabric of your building while providing
                    effective secondary glazing solutions.
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>;
};
export default TraditionalOptions;