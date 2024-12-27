import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

interface ImageUploadProps {
  images: File[];
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveImage: (index: number) => void;
}

const ImageUpload = ({ images, onImageUpload, onRemoveImage }: ImageUploadProps) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">Upload Images (Max 5)</label>
      <Input
        type="file"
        accept="image/*"
        multiple
        onChange={onImageUpload}
        className="mb-2"
      />
      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <img
                src={URL.createObjectURL(image)}
                alt={`Upload ${index + 1}`}
                className="w-full h-24 object-cover rounded-md"
              />
              <button
                type="button"
                onClick={() => onRemoveImage(index)}
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;