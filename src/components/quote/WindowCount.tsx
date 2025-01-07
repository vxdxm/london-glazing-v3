import { Input } from "@/components/ui/input";

interface WindowCountProps {
  count: number;
  onCountChange: (count: number) => void;
}

const WindowCount = ({ count, onCountChange }: WindowCountProps) => {
  console.log('Current window count:', count);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Input value changed:', e.target.value);
    const value = e.target.value;
    
    // Allow empty input or values between 1-10
    if (value === '') {
      onCountChange(1); // Reset to 1 if empty
      return;
    }

    const numValue = parseInt(value);
    if (!isNaN(numValue) && numValue >= 1 && numValue <= 10) {
      console.log('Setting new window count:', numValue);
      onCountChange(numValue);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium mb-2">Number of Windows</label>
      <Input
        type="number"
        min="1"
        max="10"
        value={count}
        onChange={handleChange}
        required
        className="w-full"
      />
    </div>
  );
};

export default WindowCount;