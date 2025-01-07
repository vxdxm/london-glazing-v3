import { Input } from "@/components/ui/input";

interface WindowCountProps {
  count: number;
  onCountChange: (count: number) => void;
}

const WindowCount = ({ count, onCountChange }: WindowCountProps) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">Number of Windows</label>
      <Input
        type="number"
        min="1"
        max="10"
        value={count}
        onChange={(e) => {
          const value = e.target.value;
          const numValue = parseInt(value);
          if (!isNaN(numValue) && numValue >= 1 && numValue <= 10) {
            onCountChange(numValue);
          }
        }}
        required
      />
    </div>
  );
};

export default WindowCount;