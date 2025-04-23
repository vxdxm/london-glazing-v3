import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const Solutions = () => {
  const navigate = useNavigate();
  return <div className="mt-12 space-y-4">
      <h2 className="text-3xl font-semibold mb-6">Explore Our Casement Window Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/residential/casement-windows/modern-solutions")}>
          <CardHeader>
            <div className="w-full h-48 overflow-hidden rounded-t-lg">
              <img alt="Modern casement window solutions" src="/lovable-uploads/43d4f1cb-1c9a-460e-b2f5-37e4c742df34.jpg" className="w-full h-full object-scale-down" />
            </div>
            <CardTitle>Modern Solutions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Discover our contemporary secondary glazing options for modern properties.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/residential/casement-windows/traditional-options")}>
          <CardHeader>
            <div className="w-full h-48 overflow-hidden rounded-t-lg">
              <img alt="Traditional casement window options" src="/lovable-uploads/1f5c80d9-95be-441b-ab84-b068ce4d1d08.jpg" className="w-full h-full object-scale-down" />
            </div>
            <CardTitle>Traditional Options</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Explore our heritage-friendly solutions for period properties.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/residential/casement-windows/energy-efficiency")}>
          <CardHeader>
            <div className="w-full h-48 overflow-hidden rounded-t-lg">
              <img alt="Energy efficient casement windows" src="/lovable-uploads/2f4fa321-a97b-487b-a0f2-bb38093e6ca3.jpg" className="w-full h-full object-scale-down" />
            </div>
            <CardTitle>Energy Efficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Learn about our energy-saving secondary glazing solutions.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default Solutions;