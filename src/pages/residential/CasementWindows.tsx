import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const CasementWindows = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Casement Windows</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card 
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate("/residential/casement-windows/modern-solutions")}
          >
            <CardHeader>
              <CardTitle>Modern Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Our casement window solutions provide excellent thermal and acoustic insulation for modern homes.
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Easy access to primary windows</li>
                <li>Superior weatherproofing</li>
                <li>Enhanced security features</li>
                <li>Energy-efficient design</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Installation Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Professional installation ensures maximum performance and longevity.
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Minimal disruption</li>
                <li>Custom-fitted panels</li>
                <li>Full operation retained</li>
                <li>No structural changes needed</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CasementWindows;