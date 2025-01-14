import { useState } from "react";
import { Card } from "./ui/card";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

type WindowType = "single" | "double";
type GlassType = "standard" | "laminated" | "acoustic";
type GapSize = "100" | "150" | "200";
type GasType = "air" | "argon" | "krypton";

const NoiseReductionCalculator = () => {
  const [originalWindow, setOriginalWindow] = useState<WindowType>("single");
  const [selectedGlassTypes, setSelectedGlassTypes] = useState<GlassType[]>([]);
  const [selectedGapSizes, setSelectedGapSizes] = useState<GapSize[]>([]);
  const [selectedGasTypes, setSelectedGasTypes] = useState<GasType[]>([]);

  console.log("Calculating noise reduction with params:", {
    originalWindow,
    selectedGlassTypes,
    selectedGapSizes,
    selectedGasTypes,
  });

  const calculateNoiseReduction = (
    glassType: GlassType,
    gapSize: GapSize,
    gasType: GasType
  ): number => {
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

    return (
      baseReduction +
      glassModifiers[glassType] +
      gapModifiers[gapSize] +
      gasModifiers[gasType]
    );
  };

  const handleGlassTypeToggle = (type: GlassType) => {
    setSelectedGlassTypes((current) =>
      current.includes(type)
        ? current.filter((t) => t !== type)
        : [...current, type]
    );
  };

  const handleGapSizeToggle = (size: GapSize) => {
    setSelectedGapSizes((current) =>
      current.includes(size)
        ? current.filter((s) => s !== size)
        : [...current, size]
    );
  };

  const handleGasTypeToggle = (type: GasType) => {
    setSelectedGasTypes((current) =>
      current.includes(type)
        ? current.filter((t) => t !== type)
        : [...current, type]
    );
  };

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
          <Label>Secondary Glass Types</Label>
          <div className="grid gap-2">
            {["standard", "laminated", "acoustic"].map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox
                  id={`glass-${type}`}
                  checked={selectedGlassTypes.includes(type as GlassType)}
                  onCheckedChange={() => handleGlassTypeToggle(type as GlassType)}
                />
                <label
                  htmlFor={`glass-${type}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)} Glass
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <Label>Air Gap Sizes (mm)</Label>
          <div className="grid gap-2">
            {["100", "150", "200"].map((size) => (
              <div key={size} className="flex items-center space-x-2">
                <Checkbox
                  id={`gap-${size}`}
                  checked={selectedGapSizes.includes(size as GapSize)}
                  onCheckedChange={() => handleGapSizeToggle(size as GapSize)}
                />
                <label
                  htmlFor={`gap-${size}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {size}mm
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <Label>Gas Types</Label>
          <div className="grid gap-2">
            {["air", "argon", "krypton"].map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox
                  id={`gas-${type}`}
                  checked={selectedGasTypes.includes(type as GasType)}
                  onCheckedChange={() => handleGasTypeToggle(type as GasType)}
                />
                <label
                  htmlFor={`gas-${type}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {selectedGlassTypes.length > 0 &&
            selectedGapSizes.length > 0 &&
            selectedGasTypes.length > 0 && (
              <div className="grid gap-4">
                {selectedGlassTypes.map((glassType) =>
                  selectedGapSizes.map((gapSize) =>
                    selectedGasTypes.map((gasType) => (
                      <div
                        key={`${glassType}-${gapSize}-${gasType}`}
                        className="p-4 bg-secondary rounded-lg"
                      >
                        <p className="text-lg font-semibold">
                          Configuration: {glassType} glass, {gapSize}mm gap,{" "}
                          {gasType}
                        </p>
                        <p className="text-lg">
                          Estimated Noise Reduction:{" "}
                          {calculateNoiseReduction(glassType, gapSize, gasType)} dB
                        </p>
                      </div>
                    ))
                  )
                )}
              </div>
            )}
          {(!selectedGlassTypes.length ||
            !selectedGapSizes.length ||
            !selectedGasTypes.length) && (
            <p className="text-sm text-gray-500">
              Please select at least one option from each category to see noise
              reduction estimates.
            </p>
          )}
          <p className="text-sm text-gray-500">
            Note: Actual noise reduction may vary based on installation quality,
            window condition, and environmental factors.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default NoiseReductionCalculator;