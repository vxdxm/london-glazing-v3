import { Input } from "@/components/ui/input";

interface WindowDimensionsProps {
  dimensions: Array<{ width: string; height: string }>;
  onDimensionChange: (index: number, field: 'width' | 'height', value: string) => void;
}

const WindowDimensions = ({ dimensions, onDimensionChange }: WindowDimensionsProps) => {
  return (
    <>
      {dimensions.map((dim, index) => (
        <div key={index} className="space-y-4">
          <h3 className="font-medium">Window {index + 1} Dimensions</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Width (mm)</label>
              <Input
                name={`window_${index}_width`}
                type="number"
                placeholder="Width"
                value={dim.width}
                onChange={(e) => onDimensionChange(index, 'width', e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Height (mm)</label>
              <Input
                name={`window_${index}_height`}
                type="number"
                placeholder="Height"
                value={dim.height}
                onChange={(e) => onDimensionChange(index, 'height', e.target.value)}
                required
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WindowDimensions;