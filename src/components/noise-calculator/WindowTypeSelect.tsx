import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface WindowTypeSelectProps {
  value: 'single' | 'double';
  onChange: (value: 'single' | 'double') => void;
}

const WindowTypeSelect = ({ value, onChange }: WindowTypeSelectProps) => {
  return (
    <div className="space-y-3">
      <Label>Original Window Type</Label>
      <RadioGroup
        defaultValue="single"
        value={value}
        onValueChange={onChange}
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
  );
};

export default WindowTypeSelect;