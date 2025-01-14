import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface GlassTypeSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const GlassTypeSelect = ({ value, onChange }: GlassTypeSelectProps) => {
  return (
    <div className="space-y-3">
      <Label>Secondary Glazing Glass Type</Label>
      <RadioGroup
        defaultValue="standard"
        value={value}
        onValueChange={onChange}
        className="flex flex-col space-y-2"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="standard" id="standard" />
          <Label htmlFor="standard">Standard (4mm - Basic noise reduction)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="entry" id="entry" />
          <Label htmlFor="entry">Entry Level (6.4mm - Basic+ noise reduction)</Label>
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
  );
};

export default GlassTypeSelect;