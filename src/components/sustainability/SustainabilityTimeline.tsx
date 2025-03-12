
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SustainabilityTimeline = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Long-term Environmental Benefits
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute h-full w-0.5 bg-green-300 left-1/2 transform -translate-x-1/2"></div>
          
          <div className="relative z-10">
            {/* 1 Year milestone */}
            <div className="flex items-center justify-center mb-16">
              <div className="w-full md:w-5/12 text-right pr-8 hidden md:block">
                <h3 className="text-xl font-bold text-green-700">Year 1</h3>
                <p className="text-gray-600">Immediate energy savings of up to 330 kWh for an average home, reducing CO₂ emissions by approximately 70kg.</p>
              </div>
              
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center relative z-10">
                <span className="text-white font-bold">1</span>
              </div>
              
              <div className="w-full md:w-5/12 pl-8 md:hidden">
                <h3 className="text-xl font-bold text-green-700">Year 1</h3>
                <p className="text-gray-600">Immediate energy savings of up to 330 kWh for an average home, reducing CO₂ emissions by approximately 70kg.</p>
              </div>
            </div>
            
            {/* 5 Year milestone */}
            <div className="flex items-center justify-center mb-16">
              <div className="w-full md:w-5/12 pr-8 md:text-right md:block hidden">
                <p className="text-gray-600">Cumulative CO₂ reduction of over 350kg, equivalent to planting 16 trees or taking a small car off the road for 3 months.</p>
              </div>
              
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center relative z-10">
                <span className="text-white font-bold">5</span>
              </div>
              
              <div className="w-full md:w-5/12 pl-8">
                <h3 className="text-xl font-bold text-green-700">Year 5</h3>
                <p className="text-gray-600 md:hidden">Cumulative CO₂ reduction of over 350kg, equivalent to planting 16 trees or taking a small car off the road for 3 months.</p>
              </div>
            </div>
            
            {/* 10 Year milestone */}
            <div className="flex items-center justify-center mb-16">
              <div className="w-full md:w-5/12 text-right pr-8 hidden md:block">
                <h3 className="text-xl font-bold text-green-700">Year 10</h3>
                <p className="text-gray-600">Total energy savings of approximately 3,300 kWh, reducing carbon footprint by 700kg, equivalent to not driving 1,700 miles.</p>
              </div>
              
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center relative z-10">
                <span className="text-white font-bold">10</span>
              </div>
              
              <div className="w-full md:w-5/12 pl-8 md:hidden">
                <h3 className="text-xl font-bold text-green-700">Year 10</h3>
                <p className="text-gray-600">Total energy savings of approximately 3,300 kWh, reducing carbon footprint by 700kg, equivalent to not driving 1,700 miles.</p>
              </div>
            </div>
            
            {/* 20 Year milestone */}
            <div className="flex items-center justify-center">
              <div className="w-full md:w-5/12 pr-8 md:text-right md:block hidden">
                <p className="text-gray-600">Long-term impact of over 1.4 tonnes of CO₂ prevented from entering the atmosphere, equivalent to planting and maintaining a small forest of 64 trees.</p>
              </div>
              
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center relative z-10">
                <span className="text-white font-bold">20</span>
              </div>
              
              <div className="w-full md:w-5/12 pl-8">
                <h3 className="text-xl font-bold text-green-700">Year 20</h3>
                <p className="text-gray-600 md:hidden">Long-term impact of over 1.4 tonnes of CO₂ prevented from entering the atmosphere, equivalent to planting and maintaining a small forest of 64 trees.</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SustainabilityTimeline;
