import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const NoiseReductionCalculator = () => {
  const { toast } = useToast();
  const [originalWindow, setOriginalWindow] = useState<'single' | 'double'>('single');
  const [secondaryGlassType, setSecondaryGlassType] = useState<string>('standard');
  const [result, setResult] = useState<number | null>(null);

  // Base noise reduction values (in dB)
  const baseReduction = {
    single: 25,
    double: 30,
  };

  // Additional reduction based on secondary glazing type
  const glassTypeReduction = {
    standard: 5,    // 4mm standard glass
    enhanced: 8,    // 6.8mm enhanced entry glass
    medium: 10,     // 8.8mm medium performance glass
    high: 13,       // 10.8mm high performance glass
    premium: 16,    // 12.8mm premium acoustic glass
  };

  const calculateNoiseReduction = () => {
    console.log('Calculating noise reduction with:', {
      originalWindow,
      secondaryGlassType,
      baseReduction: baseReduction[originalWindow],
      additionalReduction: glassTypeReduction[secondaryGlassType as keyof typeof glassTypeReduction],
    });

    const baseValue = baseReduction[originalWindow];
    const additionalValue = glassTypeReduction[secondaryGlassType as keyof typeof glassTypeReduction];
    const totalReduction = baseValue + additionalValue;

    setResult(totalReduction);
    
    toast({
      title: "Calculation Complete",
      description: `Estimated noise reduction: ${totalReduction}dB`,
    });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Noise Reduction Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <Label>Original Window Type</Label>
          <RadioGroup
            defaultValue="single"
            value={originalWindow}
            onValueChange={(value) => setOriginalWindow(value as 'single' | 'double')}
            className="flex flex-col space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="single" id="single" />
              <Label htmlFor="single">Single Glazed (Basic sound insulation)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="double" id="double" />
              <Label htmlFor="double">Double Glazed (Enhanced sound insulation)</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <Label>Secondary Glazing Glass Type</Label>
          <RadioGroup
            defaultValue="standard"
            value={secondaryGlassType}
            onValueChange={setSecondaryGlassType}
            className="flex flex-col space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="standard" id="standard" />
              <Label htmlFor="standard">Standard (4mm - Basic noise reduction)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="enhanced" id="enhanced" />
              <Label htmlFor="enhanced">Enhanced Entry (6.8mm - Improved noise reduction)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="medium" id="medium" />
              <Label htmlFor="medium">Medium Performance (8.8mm - Enhanced noise reduction)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="high" id="high" />
              <Label htmlFor="high">High Performance (10.8mm - Superior noise reduction)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="premium" id="premium" />
              <Label htmlFor="premium">Premium (12.8mm - Maximum noise reduction)</Label>
            </div>
          </RadioGroup>
        </div>

        <Button 
          onClick={calculateNoiseReduction}
          className="w-full"
        >
          Calculate Noise Reduction
        </Button>

        {result !== null && (
          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <h3 className="text-lg font-semibold text-center text-green-800">
              Estimated Noise Reduction
            </h3>
            <p className="text-2xl font-bold text-center text-green-600 mt-2">
              {result}dB
            </p>
            <p className="text-sm text-center text-green-700 mt-2">
              Combined noise reduction with secondary glazing
            </p>
          </div>
        )}

        <p className="text-xs text-muted-foreground text-center mt-4">
          Note: These are estimated values. Actual noise reduction may vary depending on various factors including installation quality, window condition, and specific noise frequencies.
        </p>
      </CardContent>
    </Card>
  );
};

export default NoiseReductionCalculator;