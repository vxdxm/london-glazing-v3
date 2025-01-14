import { useState } from "react";
import { Card } from "./ui/card";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

type WindowType = "single" | "double";
type GlassType = "standard" | "laminated" | "acoustic";
type GapSize = "100" | "150" | "200";
type GasType = "air" | "argon" | "krypton";

const NoiseReductionCalculator = () => {
  const [originalWindow, setOriginalWindow] = useState<WindowType>("single");
  const [glassType, setGlassType] = useState<GlassType>("standard");
  const [gapSize, setGapSize] = useState<GapSize>("100");
  const [gasType, setGasType] = useState<GasType>("air");

  const calculateNoiseReduction = (): number => {
    console.log("Calculating noise reduction with params:", {
      originalWindow,
      glassType,
      gapSize,
      gasType,
    });

    // Base reduction values
    let baseReduction = originalWindow === "single" ? 25 : 30;

    // Glass type modifications
    const glassModifiers = {
      standard: 0,
      laminated: 3,
      acoustic: 5,
    };

    // Gap size modifications
    const gapModifiers = {
      "100": 0,
      "150": 2,
      "200": 3,
    };

    // Gas type modifications
    const gasModifiers = {
      air: 0,
      argon: 1,
      krypton: 2,
    };

    const totalReduction =
      baseReduction +
      glassModifiers[glassType] +
      gapModifiers[gapSize] +
      gasModifiers[gasType];

    return totalReduction;
  };

  const noiseReduction = calculateNoiseReduction();

  return (
    <Card className="p-6">
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="original-window">Original Window Type</Label>
          <Select
            value={originalWindow}
            onValueChange={(value: WindowType) => setOriginalWindow(value)}
          >
            <SelectTrigger id="original-window">
              <SelectValue placeholder="Select original window type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="single">Single Glazed</SelectItem>
              <SelectItem value="double">Double Glazed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="glass-type">Secondary Glass Type</Label>
          <Select
            value={glassType}
            onValueChange={(value: GlassType) => setGlassType(value)}
          >
            <SelectTrigger id="glass-type">
              <SelectValue placeholder="Select glass type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="standard">Standard Glass</SelectItem>
              <SelectItem value="laminated">Laminated Glass</SelectItem>
              <SelectItem value="acoustic">Acoustic Glass</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="gap-size">Air Gap Size (mm)</Label>
          <Select
            value={gapSize}
            onValueChange={(value: GapSize) => setGapSize(value)}
          >
            <SelectTrigger id="gap-size">
              <SelectValue placeholder="Select gap size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="100">100mm</SelectItem>
              <SelectItem value="150">150mm</SelectItem>
              <SelectItem value="200">200mm</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="gas-type">Gas Type</Label>
          <Select
            value={gasType}
            onValueChange={(value: GasType) => setGasType(value)}
          >
            <SelectTrigger id="gas-type">
              <SelectValue placeholder="Select gas type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="air">Air</SelectItem>
              <SelectItem value="argon">Argon</SelectItem>
              <SelectItem value="krypton">Krypton</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mt-6 p-4 bg-secondary rounded-lg">
          <p className="text-lg font-semibold">
            Estimated Noise Reduction: {noiseReduction} dB
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Note: Actual noise reduction may vary based on installation quality,
            window condition, and environmental factors.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default NoiseReductionCalculator;