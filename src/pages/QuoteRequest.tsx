import { MainNav } from "@/components/MainNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const QuoteRequest = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [windowType, setWindowType] = useState("");
  const [numberOfWindows, setNumberOfWindows] = useState<number>(1);
  const [dimensions, setDimensions] = useState<Array<{ width: string; height: string }>>([{ width: '', height: '' }]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [additionalRequirements, setAdditionalRequirements] = useState("");
  const [images, setImages] = useState<File[]>([]);

  const handleNumberOfWindowsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = parseInt(e.target.value) || 1;
    setNumberOfWindows(num);
    setDimensions(Array(num).fill({ width: '', height: '' }));
  };

  const handleDimensionChange = (index: number, field: 'width' | 'height', value: string) => {
    const newDimensions = [...dimensions];
    newDimensions[index] = { ...newDimensions[index], [field]: value };
    setDimensions(newDimensions);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length + images.length > 5) {
      toast({
        title: "Maximum 5 images allowed",
        description: "Please remove some images before adding more.",
        variant: "destructive",
      });
      return;
    }
    setImages(prev => [...prev, ...files]);
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with data:", {
      windowType,
      dimensions,
      firstName,
      lastName,
      email,
      phone,
      additionalRequirements,
      images: images.map(img => img.name)
    });

    // Convert images to base64 strings for email attachment
    const imagePromises = images.map(file => {
      return new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result as string);
        };
        reader.readAsDataURL(file);
      });
    });

    const base64Images = await Promise.all(imagePromises);

    // Prepare email content
    const subject = "New Quote Request";
    const body = `
Window Type: ${windowType}
Number of Windows: ${numberOfWindows}
Dimensions: ${dimensions.map((dim, index) => `
  Window ${index + 1}: ${dim.width}mm x ${dim.height}mm`).join('')}
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Additional Requirements: ${additionalRequirements}

Images attached: ${images.map(img => img.name).join(', ')}
    `;

    // Create form data for sending
    const formData = new FormData();
    images.forEach((file, index) => {
      formData.append(`image${index}`, file);
    });

    // Open default email client with attachments
    window.location.href = `mailto:info@secondaryglazingspecialist.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    toast({
      title: "Quote Request Received",
      description: "We'll get back to you within 24 hours.",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Request a Free Quote</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Window Type</label>
              <Select onValueChange={setWindowType} required>
                <SelectTrigger className="hover:bg-white hover:bg-opacity-100">
                  <SelectValue placeholder="Select window type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sash">Sash Windows</SelectItem>
                  <SelectItem value="casement">Casement Windows</SelectItem>
                  <SelectItem value="bay">Bay Windows</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Number of Windows</label>
              <Input 
                type="number" 
                min="1" 
                value={numberOfWindows}
                onChange={handleNumberOfWindowsChange}
                required 
              />
            </div>

            {dimensions.map((dim, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-medium">Window {index + 1} Dimensions</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Width (mm)</label>
                    <Input
                      type="number"
                      placeholder="Width"
                      value={dim.width}
                      onChange={(e) => handleDimensionChange(index, 'width', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Height (mm)</label>
                    <Input
                      type="number"
                      placeholder="Height"
                      value={dim.height}
                      onChange={(e) => handleDimensionChange(index, 'height', e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            ))}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">First Name</label>
                <Input 
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name</label>
                <Input 
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <Input 
                type="tel" 
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Additional Requirements</label>
              <Textarea 
                placeholder="Tell us more about your requirements..."
                value={additionalRequirements}
                onChange={(e) => setAdditionalRequirements(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Upload Images (Max 5)</label>
              <Input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
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
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Button type="submit" className="w-full">Submit Quote Request</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteRequest;