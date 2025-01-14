import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface GapSizeSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const GapSizeSelect = ({ value, onChange }: GapSizeSelectProps) => {
  return (
    <div className="space-y-3">
      <Label>Air Gap Size</Label>
      <RadioGroup
        defaultValue="100"
        value={value}
        onValueChange={onChange}
        className="flex flex-col space-y-2"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="50" id="gap-50" />
          <Label htmlFor="gap-50">50mm (Minimum recommended gap)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="100" id="gap-100" />
          <Label htmlFor="gap-100">100mm (Standard gap)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="150" id="gap-150" />
          <Label htmlFor="gap-150">150mm (Enhanced performance)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="200" id="gap-200" />
          <Label htmlFor="gap-200">200mm (Maximum performance)</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default GapSizeSelect;