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
              <p className="text-gray-600">
                Discover our cutting-edge solutions for casement windows, featuring advanced technology and superior performance.
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
              <p className="text-gray-600">
                Explore our traditional casement window solutions that maintain period charm while offering modern benefits.
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
              <p className="text-gray-600">
                Learn about our energy-efficient options that help reduce heating costs and improve comfort.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CasementWindows;