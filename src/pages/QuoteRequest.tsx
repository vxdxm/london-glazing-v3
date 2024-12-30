import { Helmet } from "react-helmet";
import { MainNav } from "@/components/MainNav";
import { useState } from "react";
import WindowTypeSelect from "@/components/quote/WindowTypeSelect";
import WindowDimensions from "@/components/quote/WindowDimensions";
import ImageUpload from "@/components/quote/ImageUpload";
import ContactDetails from "@/components/quote/ContactDetails";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const QuoteRequest = () => {
  const [windowType, setWindowType] = useState("");
  const [dimensions, setDimensions] = useState([{ width: "", height: "" }]);
  const [images, setImages] = useState<File[]>([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { toast } = useToast();

  const handleDimensionChange = (index: number, field: 'width' | 'height', value: string) => {
    const newDimensions = [...dimensions];
    newDimensions[index][field] = value;
    setDimensions(newDimensions);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (images.length + files.length > 5) {
      toast({
        title: "Maximum 5 images allowed",
        description: "Please remove some images before adding more.",
        variant: "destructive",
      });
      return;
    }
    setImages((prev) => [...prev, ...files]);
  };

  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", {
      windowType,
      dimensions,
      images,
      firstName,
      lastName,
      email,
      phone,
    });
    toast({
      title: "Quote Request Submitted",
      description: "We'll get back to you with a quote soon!",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Request a Quote | Secondary Glazing Installation London</title>
        <meta
          name="description"
          content="Get a free quote for secondary glazing installation in London. Expert consultation and competitive pricing for residential and commercial properties."
        />
      </Helmet>
      <MainNav />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Request a Quote</h1>
        
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-8">
            <WindowTypeSelect onValueChange={setWindowType} />
            
            <WindowDimensions
              dimensions={dimensions}
              onDimensionChange={handleDimensionChange}
            />
            
            <ImageUpload
              images={images}
              onImageUpload={handleImageUpload}
              onRemoveImage={handleRemoveImage}
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
            
            <Button type="submit" className="w-full">
              Submit Quote Request
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteRequest;