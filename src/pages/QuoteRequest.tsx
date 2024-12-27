import { MainNav } from "@/components/MainNav";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WindowTypeSelect from "@/components/quote/WindowTypeSelect";
import WindowDimensions from "@/components/quote/WindowDimensions";
import ContactDetails from "@/components/quote/ContactDetails";
import ImageUpload from "@/components/quote/ImageUpload";

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

    // Open default email client
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
            <WindowTypeSelect onValueChange={setWindowType} />
            
            <div>
              <label className="block text-sm font-medium mb-2">Number of Windows</label>
              <input 
                type="number" 
                min="1" 
                value={numberOfWindows}
                onChange={handleNumberOfWindowsChange}
                required 
                className="w-full rounded-md border border-input bg-background px-3 py-2"
              />
            </div>

            <WindowDimensions 
              dimensions={dimensions}
              onDimensionChange={handleDimensionChange}
            />

            <ContactDetails 
              firstName={firstName}
              lastName={lastName}
              email={email}
              phone={phone}
              onFirstNameChange={setFirstName}
              onLastNameChange={setLastName}
              onEmailChange={setEmail}
              onPhoneChange={setPhone}
            />

            <div>
              <label className="block text-sm font-medium mb-2">Additional Requirements</label>
              <Textarea 
                placeholder="Tell us more about your requirements..."
                value={additionalRequirements}
                onChange={(e) => setAdditionalRequirements(e.target.value)}
              />
            </div>

            <ImageUpload 
              images={images}
              onImageUpload={handleImageUpload}
              onRemoveImage={removeImage}
            />

            <Button type="submit" className="w-full">Submit Quote Request</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteRequest;