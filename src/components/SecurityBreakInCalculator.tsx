import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";

const SecurityBreakInCalculator = () => {
  const { toast } = useToast();
  const [glassType, setGlassType] = useState<string>('standard');
  const [result, setResult] = useState<number | null>(null);

  // Base resistance times (in minutes)
  const resistanceTimes = {
    standard: 2,      // 4mm standard glass
    entry: 4,         // 6.4mm entry-level glass
    enhanced: 6,      // 6.8mm enhanced entry glass
    medium: 8,        // 8.8mm medium performance glass
    high: 12,         // 10.8mm high performance glass
    premium: 15,      // 12.8mm premium laminated glass
  };

  const calculateResistanceTime = () => {
    console.log('Calculating resistance time for:', glassType);
    
    const baseTime = resistanceTimes[glassType as keyof typeof resistanceTimes];
    setResult(baseTime);
    
    toast({
      title: "Calculation Updated",
      description: `Estimated break-in resistance time: ${baseTime} minutes`,
    });
  };

  // Automatically calculate when selections change
  React.useEffect(() => {
    calculateResistanceTime();
  }, [glassType]);

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Security Break-in Resistance Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <Label>Glass Type Selection</Label>
          <RadioGroup
            defaultValue="standard"
            value={glassType}
            onValueChange={setGlassType}
            className="flex flex-col space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="standard" id="standard" />
              <Label htmlFor="standard">Standard (4mm - Basic protection)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="entry" id="entry" />
              <Label htmlFor="entry">Entry Level (6.4mm - Enhanced protection)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="enhanced" id="enhanced" />
              <Label htmlFor="enhanced">Enhanced Entry (6.8mm - Advanced protection)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="medium" id="medium" />
              <Label htmlFor="medium">Medium Performance (8.8mm - Superior protection)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="high" id="high" />
              <Label htmlFor="high">High Performance (10.8mm - Maximum protection)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="premium" id="premium" />
              <Label htmlFor="premium">Premium (12.8mm - Ultimate protection)</Label>
            </div>
          </RadioGroup>
        </div>

        {result !== null && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold text-center text-blue-800">
              Estimated Break-in Resistance Time
            </h3>
            <p className="text-2xl font-bold text-center text-blue-600 mt-2">
              {result} minutes
            </p>
            <p className="text-sm text-center text-blue-700 mt-2">
              Estimated time to breach secondary glazing under controlled conditions
            </p>
          </div>
        )}

        <p className="text-xs text-muted-foreground text-center mt-4">
          Note: These are estimated values based on laboratory testing. Actual resistance times may vary depending on various factors including tools used, environmental conditions, and installation quality.
        </p>
      </CardContent>
    </Card>
  );
};

export default SecurityBreakInCalculator;