import { Input } from "@/components/ui/input";

interface WindowCountProps {
  count: number;
  onCountChange: (count: number) => void;
}

const WindowCount = ({ count, onCountChange }: WindowCountProps) => {
  console.log('Current window count:', count);

  return (
    <div>
      <label className="block text-sm font-medium mb-2">Number of Windows</label>
      <Input
        type="number"
        min="1"
        max="10"
        value={count || ''}
        onChange={(e) => {
          console.log('Input value changed:', e.target.value);
          const value = e.target.value;
          
          if (value === '') {
            // Keep the current count if input is empty
            return;
          }

          const numValue = parseInt(value);
          if (!isNaN(numValue) && numValue >= 1 && numValue <= 10) {
            console.log('Setting new window count:', numValue);
            onCountChange(numValue);
          }
        }}
        required
      />
    </div>
  );
};

export default WindowCount;
