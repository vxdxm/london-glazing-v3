import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/components/ui/use-toast";

const CostCalculator = () => {
  const { toast } = useToast();
  const [windowArea, setWindowArea] = useState<number>(10);
  const [currentBill, setCurrentBill] = useState<string>('');
  const [savings, setSavings] = useState<number | null>(null);

  // Average energy loss reduction from secondary glazing (20-30%)
  const energyReductionFactor = 0.25;
  // Estimated window heat loss contribution (25-30% of total heat loss)
  const windowHeatLossFactor = 0.275;

  const calculateSavings = () => {
    console.log('Calculating savings with current bill:', currentBill);
    
    if (!currentBill || isNaN(Number(currentBill))) {
      toast({
        title: "Please enter a valid annual energy bill",
        variant: "destructive",
      });
      return;
    }

    const annualBill = Number(currentBill);
    const estimatedSavings = annualBill * windowHeatLossFactor * energyReductionFactor;
    console.log('Estimated annual savings:', estimatedSavings);
    
    setSavings(Math.round(estimatedSavings));
    
    toast({
      title: "Calculation Complete",
      description: "Your estimated annual savings have been calculated.",
    });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Cost Saving Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="windowArea">Total Window Area (m²)</Label>
          <div className="space-y-4">
            <Slider
              id="windowArea"
              min={1}
              max={50}
              step={1}
              value={[windowArea]}
              onValueChange={(value) => setWindowArea(value[0])}
              className="w-full"
            />
            <div className="text-center text-sm text-muted-foreground">
              {windowArea} m²
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="currentBill">Annual Energy Bill (£)</Label>
          <Input
            id="currentBill"
            type="number"
            placeholder="Enter your annual energy bill"
            value={currentBill}
            onChange={(e) => setCurrentBill(e.target.value)}
          />
        </div>

        <Button 
          onClick={calculateSavings}
          className="w-full"
        >
          Calculate Savings
        </Button>

        {savings !== null && (
          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <h3 className="text-lg font-semibold text-center text-green-800">
              Estimated Annual Savings
            </h3>
            <p className="text-2xl font-bold text-center text-green-600 mt-2">
              £{savings}
            </p>
            <p className="text-sm text-center text-green-700 mt-2">
              Based on average energy loss reduction through windows
            </p>
          </div>
        )}

        <p className="text-xs text-muted-foreground text-center mt-4">
          Note: This is an estimate based on average values. Actual savings may vary depending on various factors including window condition, property insulation, and local climate.
        </p>
      </CardContent>
    </Card>
  );
};

export default CostCalculator;