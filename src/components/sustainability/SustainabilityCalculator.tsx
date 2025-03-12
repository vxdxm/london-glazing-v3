
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/components/ui/use-toast";
import { Leaf, Gauge, Recycle } from "lucide-react";

const SustainabilityCalculator = () => {
  const { toast } = useToast();
  const [numberOfWindows, setNumberOfWindows] = useState<number>(4);
  const [homeSize, setHomeSize] = useState<string>('150');
  const [heatingType, setHeatingType] = useState<string>('gas');
  
  const [co2Reduction, setCo2Reduction] = useState<number | null>(null);
  const [energySaved, setEnergySaved] = useState<number | null>(null);
  const [treesEquivalent, setTreesEquivalent] = useState<number | null>(null);

  // Constants for calculations (based on average industry data)
  const CO2_PER_KWH: Record<string, number> = {
    gas: 0.198, // kg CO2 per kWh
    electricity: 0.233, // kg CO2 per kWh
    oil: 0.247, // kg CO2 per kWh
  };
  
  // Average energy saving from secondary glazing (in kWh per m² per year)
  const ENERGY_SAVING_PER_SQM = 55;
  
  // Average CO2 absorption by a mature tree per year (in kg)
  const CO2_PER_TREE_PER_YEAR = 22;

  const calculateImpact = () => {
    if (!homeSize || isNaN(Number(homeSize))) {
      toast({
        title: "Please enter a valid home size",
        variant: "destructive",
      });
      return;
    }

    const homeSizeNum = Number(homeSize);
    
    // Estimate window area based on number of windows and home size
    // Assume average window is 1.5m²
    const windowArea = numberOfWindows * 1.5;
    
    // Calculate energy savings in kWh per year
    const annualEnergySavings = windowArea * ENERGY_SAVING_PER_SQM;
    
    // Calculate CO2 reduction based on heating type
    const annualCO2Reduction = annualEnergySavings * CO2_PER_KWH[heatingType];
    
    // Calculate tree equivalent
    const treesNeeded = annualCO2Reduction / CO2_PER_TREE_PER_YEAR;
    
    // Set results with 2 decimal places
    setEnergySaved(Math.round(annualEnergySavings));
    setCo2Reduction(Math.round(annualCO2Reduction * 10) / 10);
    setTreesEquivalent(Math.round(treesNeeded));
    
    toast({
      title: "Impact calculated",
      description: "See your environmental impact below",
    });
  };

  // Recalculate when key values change
  useEffect(() => {
    if (homeSize && !isNaN(Number(homeSize))) {
      calculateImpact();
    }
  }, [numberOfWindows, homeSize, heatingType]);

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Environmental Impact Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="numberOfWindows">Number of Windows</Label>
          <div className="space-y-4">
            <Slider
              id="numberOfWindows"
              min={1}
              max={20}
              step={1}
              value={[numberOfWindows]}
              onValueChange={(value) => setNumberOfWindows(value[0])}
              className="w-full"
            />
            <div className="text-center text-sm text-muted-foreground">
              {numberOfWindows} windows
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="homeSize">Home Size (m²)</Label>
          <Input
            id="homeSize"
            type="number"
            placeholder="Enter your home size"
            value={homeSize}
            onChange={(e) => setHomeSize(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="heatingType">Primary Heating Type</Label>
          <select
            id="heatingType"
            value={heatingType}
            onChange={(e) => setHeatingType(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="gas">Natural Gas</option>
            <option value="electricity">Electricity</option>
            <option value="oil">Oil</option>
          </select>
        </div>

        <Button 
          onClick={calculateImpact}
          className="w-full"
        >
          Calculate Environmental Impact
        </Button>

        {co2Reduction !== null && energySaved !== null && treesEquivalent !== null && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-green-50 border-green-200">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-green-100 p-3 rounded-full mb-4">
                    <Recycle className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-green-800">CO₂ Reduction</h3>
                  <p className="text-3xl font-bold text-green-600 my-2">{co2Reduction} kg</p>
                  <p className="text-sm text-green-700">per year</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-3 rounded-full mb-4">
                    <Gauge className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-800">Energy Saved</h3>
                  <p className="text-3xl font-bold text-blue-600 my-2">{energySaved} kWh</p>
                  <p className="text-sm text-blue-700">per year</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-amber-100 p-3 rounded-full mb-4">
                    <Leaf className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-amber-800">Trees Equivalent</h3>
                  <p className="text-3xl font-bold text-amber-600 my-2">{treesEquivalent}</p>
                  <p className="text-sm text-amber-700">mature trees per year</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <p className="text-xs text-muted-foreground text-center mt-4">
          Note: These calculations are estimates based on industry standards and averages. Actual environmental impact may vary based on local climate, building characteristics, and energy sources.
        </p>
      </CardContent>
    </Card>
  );
};

export default SustainabilityCalculator;
