
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { DollarSign } from "lucide-react";

const InsurancePremiumCalculator = () => {
  const { toast } = useToast();
  const [currentPremium, setCurrentPremium] = useState<string>('');
  const [savings, setSavings] = useState<number | null>(null);

  // Average savings percentage based on industry data
  const AVERAGE_SAVINGS_PERCENTAGE = 0.15; // 15% average reduction

  const calculateSavings = () => {
    if (!currentPremium || isNaN(Number(currentPremium))) {
      toast({
        title: "Please enter a valid premium amount",
        variant: "destructive",
      });
      return;
    }

    const premium = Number(currentPremium);
    const annualSavings = premium * AVERAGE_SAVINGS_PERCENTAGE;
    setSavings(Number(annualSavings.toFixed(2)));

    toast({
      title: "Savings calculated",
      description: "See your potential savings below",
    });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Insurance Premium Savings Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="currentPremium">Current Annual Insurance Premium (£)</Label>
          <Input
            id="currentPremium"
            type="number"
            placeholder="Enter your current premium"
            value={currentPremium}
            onChange={(e) => setCurrentPremium(e.target.value)}
          />
        </div>

        <Button 
          onClick={calculateSavings}
          className="w-full"
        >
          Calculate Potential Savings
        </Button>

        {savings !== null && (
          <Card className="bg-green-50 border-green-200">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-green-100 p-3 rounded-full mb-4">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-green-800">Potential Annual Savings</h3>
                <p className="text-3xl font-bold text-green-600 my-2">£{savings}</p>
                <p className="text-sm text-green-700">Based on average industry data</p>
              </div>
            </CardContent>
          </Card>
        )}

        <p className="text-xs text-muted-foreground text-center mt-4">
          Note: These calculations are estimates based on industry averages. Actual savings may vary depending on your insurance provider, location, and other factors.
        </p>
      </CardContent>
    </Card>
  );
};

export default InsurancePremiumCalculator;
