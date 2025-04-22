import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Solutions = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-12 space-y-4">
      <h2 className="text-3xl font-semibold mb-6">Explore Our Casement Window Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card 
          className="hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => navigate("/residential/casement-windows/modern-solutions")}
        >
          <CardHeader>
            <div className="w-full h-48 overflow-hidden rounded-t-lg">
              <img 
                src="/lovable-uploads/85a35431-eb67-44c0-bc47-544b29a786f6.png"
                alt="Modern casement window solutions"
                className="w-full h-full object-cover"
              />
            </div>
            <CardTitle>Modern Solutions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Discover our contemporary secondary glazing options for modern properties.
            </p>
          </CardContent>
        </Card>

        <Card 
          className="hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => navigate("/residential/casement-windows/traditional-options")}
        >
          <CardHeader>
            <div className="w-full h-48 overflow-hidden rounded-t-lg">
              <img 
                src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b"
                alt="Traditional casement window options"
                className="w-full h-full object-cover"
              />
            </div>
            <CardTitle>Traditional Options</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Explore our heritage-friendly solutions for period properties.
            </p>
          </CardContent>
        </Card>

        <Card 
          className="hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => navigate("/residential/casement-windows/energy-efficiency")}
        >
          <CardHeader>
            <div className="w-full h-48 overflow-hidden rounded-t-lg">
              <img 
                src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e"
                alt="Energy efficient casement windows"
                className="w-full h-full object-cover"
              />
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
    </div>
  );
};

export default Solutions;
