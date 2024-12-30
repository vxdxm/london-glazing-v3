import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface GlassOptionsSelectProps {
  onValueChange: (value: string) => void;
}

const GlassOptionsSelect = ({ onValueChange }: GlassOptionsSelectProps) => {
  console.log('Rendering GlassOptionsSelect component');
  
  return (
    <div>
      <label className="block text-sm font-medium mb-2">Glass Type</label>
      <Select onValueChange={onValueChange} required>
        <SelectTrigger className="hover:bg-white hover:bg-opacity-100">
          <SelectValue placeholder="Select glass type" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectItem value="standard">Standard Glass (4mm)</SelectItem>
          <SelectItem value="entry">Entry-Level Acoustic Glass (6.4mm)</SelectItem>
          <SelectItem value="enhanced">Enhanced Entry Glass (6.8mm)</SelectItem>
          <SelectItem value="medium">Medium Performance Glass (8.8mm)</SelectItem>
          <SelectItem value="high">High Performance Glass (10.8mm)</SelectItem>
          <SelectItem value="premium">Premium Glass (12.8mm)</SelectItem>
          <SelectItem value="double">Double Glazing</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default GlassOptionsSelect;