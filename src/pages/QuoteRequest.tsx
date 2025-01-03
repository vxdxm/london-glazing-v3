import { Helmet } from "react-helmet";
import { useState } from "react";
import ContactDetails from "@/components/quote/ContactDetails";
import WindowTypeSelect from "@/components/quote/WindowTypeSelect";
import WindowCount from "@/components/quote/WindowCount";
import WindowDimensions from "@/components/quote/WindowDimensions";
import GlassOptionsSelect from "@/components/quote/GlassOptionsSelect";
import ImageUpload from "@/components/quote/ImageUpload";

const QuoteRequest = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [windowType, setWindowType] = useState("");
  const [windowCount, setWindowCount] = useState(1); // Initialize with number 1 instead of string
  const [dimensions, setDimensions] = useState([{ width: "", height: "" }]);
  const [glassType, setGlassType] = useState("");
  const [images, setImages] = useState<File[]>([]);

  const handleWindowCountChange = (count: number) => {
    setWindowCount(count);
    setDimensions(Array(count).fill({ width: "", height: "" }));
  };

  const handleDimensionChange = (index: number, field: 'width' | 'height', value: string) => {
    const newDimensions = [...dimensions];
    newDimensions[index] = { ...newDimensions[index], [field]: value };
    setDimensions(newDimensions);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files);
      if (images.length + newImages.length <= 5) {
        setImages([...images, ...newImages]);
      }
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Get a Free Secondary Glazing Quote | Expert Installation Services London</title>
        <meta 
          name="description" 
          content="Request a free quote for professional secondary glazing installation in London. Get expert consultation and competitive pricing for all window types." 
        />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Request a Quote</h1>
        <p className="text-lg mb-8">Fill out the form below to receive a free quote for our secondary glazing services.</p>
        
        <form className="space-y-8 max-w-2xl">
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
          
          <WindowTypeSelect onValueChange={setWindowType} />
          
          <WindowCount count={windowCount} onCountChange={handleWindowCountChange} />
          
          <WindowDimensions
            dimensions={dimensions}
            onDimensionChange={handleDimensionChange}
          />
          
          <GlassOptionsSelect onValueChange={setGlassType} />
          
          <ImageUpload
            images={images}
            onImageUpload={handleImageUpload}
            onRemoveImage={handleRemoveImage}
          />
          
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            Submit Quote Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteRequest;