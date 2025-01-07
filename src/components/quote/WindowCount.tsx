import { Input } from "@/components/ui/input";
import { useState } from "react";

interface WindowCountProps {
  count: number;
  onCountChange: (count: number) => void;
}

const WindowCount = ({ count, onCountChange }: WindowCountProps) => {
  const [inputValue, setInputValue] = useState(count.toString());

  console.log('Current window count:', count);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Input value changed:', e.target.value);
    const value = e.target.value;
    
    // Allow empty input while typing
    setInputValue(value);
    
    if (value === '') {
      return;
    }

    const numValue = parseInt(value);
    if (!isNaN(numValue) && numValue >= 1 && numValue <= 10) {
      console.log('Setting new window count:', numValue);
      onCountChange(numValue);
    }
  };

  // Update input value when count prop changes
  if (count.toString() !== inputValue && !isNaN(parseInt(inputValue))) {
    setInputValue(count.toString());
  }

  return (
    <div>
      <label className="block text-sm font-medium mb-2">Number of Windows</label>
      <Input
        type="number"
        min="1"
        max="10"
        value={inputValue}
        onChange={handleChange}
        required
        className="w-full"
      />
    </div>
  );
};

export default WindowCount;