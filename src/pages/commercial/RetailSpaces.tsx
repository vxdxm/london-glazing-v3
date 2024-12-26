import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RetailSpaces = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Retail Spaces</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Energy Efficiency Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Our energy-efficient secondary glazing solutions help retail spaces maintain comfortable temperatures while reducing energy costs.
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Enhanced temperature control</li>
                <li>Reduced energy bills</li>
                <li>Improved customer comfort</li>
                <li>Sustainable solution</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Display Window Enhancement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Protect and enhance your retail displays with our specialized secondary glazing solutions.
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>UV protection for merchandise</li>
                <li>Enhanced security features</li>
                <li>Clear visibility</li>
                <li>Condensation reduction</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RetailSpaces;