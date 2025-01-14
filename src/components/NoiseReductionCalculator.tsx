import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import WindowTypeSelect from './noise-calculator/WindowTypeSelect';
import GlassTypeSelect from './noise-calculator/GlassTypeSelect';
import GapSizeSelect from './noise-calculator/GapSizeSelect';
import ResultDisplay from './noise-calculator/ResultDisplay';

const NoiseReductionCalculator = () => {
  const { toast } = useToast();
  const [originalWindow, setOriginalWindow] = useState<'single' | 'double'>('single');
  const [secondaryGlassType, setSecondaryGlassType] = useState<string>('standard');
  const [gapSize, setGapSize] = useState<string>('100');
  const [result, setResult] = useState<number | null>(null);

  // Base noise reduction values (in dB)
  const baseReduction = {
    single: 25,
    double: 30,
  };

  // Additional reduction based on secondary glazing type
  const glassTypeReduction = {
    standard: 5,    // 4mm standard glass
    entry: 7,       // 6.4mm entry-level glass
    enhanced: 8,    // 6.8mm enhanced entry glass
    medium: 10,     // 8.8mm medium performance glass
    high: 13,       // 10.8mm high performance glass
    premium: 16,    // 12.8mm premium acoustic glass
  };

  // Additional reduction based on gap size
  const gapReduction = {
    '50': 2,      // 50mm gap
    '100': 4,     // 100mm gap (standard)
    '150': 6,     // 150mm gap
    '200': 7,     // 200mm gap
  };

  const calculateNoiseReduction = () => {
    console.log('Calculating noise reduction with:', {
      originalWindow,
      secondaryGlassType,
      gapSize,
      baseReduction: baseReduction[originalWindow],
      glassReduction: glassTypeReduction[secondaryGlassType as keyof typeof glassTypeReduction],
      gapReduction: gapReduction[gapSize as keyof typeof gapReduction],
    });

    const baseValue = baseReduction[originalWindow];
    const glassValue = glassTypeReduction[secondaryGlassType as keyof typeof glassTypeReduction];
    const gapValue = gapReduction[gapSize as keyof typeof gapReduction];
    const totalReduction = baseValue + glassValue + gapValue;

    setResult(totalReduction);
    
    toast({
      title: "Calculation Updated",
      description: `Estimated noise reduction: ${totalReduction}dB`,
    });
  };

  // Automatically calculate when selections change
  useEffect(() => {
    calculateNoiseReduction();
  }, [originalWindow, secondaryGlassType, gapSize]);

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Noise Reduction Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <WindowTypeSelect 
          value={originalWindow} 
          onChange={(value) => setOriginalWindow(value)} 
        />
        
        <GlassTypeSelect 
          value={secondaryGlassType} 
          onChange={setSecondaryGlassType} 
        />
        
        <GapSizeSelect 
          value={gapSize} 
          onChange={setGapSize} 
        />

        <ResultDisplay result={result} />

        <p className="text-xs text-muted-foreground text-center mt-4">
          Note: These are estimated values. Actual noise reduction may vary depending on various factors including installation quality, window condition, and specific noise frequencies.
        </p>
      </CardContent>
    </Card>
  );
};

export default NoiseReductionCalculator;