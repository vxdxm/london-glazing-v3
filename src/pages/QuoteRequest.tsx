import { Helmet } from "react-helmet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import ContactDetails from "@/components/quote/ContactDetails";
import WindowTypeSelect from "@/components/quote/WindowTypeSelect";
import WindowCount from "@/components/quote/WindowCount";
import WindowDimensions from "@/components/quote/WindowDimensions";
import GlassOptionsSelect from "@/components/quote/GlassOptionsSelect";
import ImageUpload from "@/components/quote/ImageUpload";
import { MainNav } from "@/components/MainNav";

const QuoteRequest = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [windowType, setWindowType] = useState("");
  const [windowCount, setWindowCount] = useState(1);
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
      } else {
        toast.error("Maximum 5 images allowed");
      }
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Create form data
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('windowType', windowType);
    formData.append('windowCount', windowCount.toString());
    formData.append('dimensions', JSON.stringify(dimensions));
    formData.append('glassType', glassType);
    
    // Append images
    images.forEach((image, index) => {
      formData.append(`image${index + 1}`, image);
    });

    try {
      // Send email using a mailto link
      const mailtoLink = `mailto:info@secondaryglazingspecialist.com?subject=New Quote Request&body=${encodeURIComponent(`
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Window Type: ${windowType}
        Window Count: ${windowCount}
        Glass Type: ${glassType}
        Dimensions: ${JSON.stringify(dimensions)}
      `)}`;

      window.location.href = mailtoLink;

      // Log form data for debugging
      console.log("Form submitted with data:", {
        firstName,
        lastName,
        email,
        phone,
        windowType,
        windowCount,
        dimensions,
        glassType,
        images
      });

      // Show success message
      toast.success("Quote request submitted successfully! We'll be in touch soon.");
      
      // Reset form
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setWindowType("");
      setWindowCount(1);
      setDimensions([{ width: "", height: "" }]);
      setGlassType("");
      setImages([]);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("There was an error submitting your request. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <Helmet>
        <title>Request a Free Secondary Glazing Quote | Expert Installation Services London</title>
        <meta 
          name="description" 
          content="Request a free quote for professional secondary glazing installation in London. Get expert consultation and competitive pricing for all window types." 
        />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Request a Quote</h1>
        <p className="text-lg mb-8">Fill out the form below to receive a free quote for our secondary glazing services.</p>
        
        <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl">
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