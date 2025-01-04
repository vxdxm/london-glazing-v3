import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';
import ContactDetails from "@/components/quote/ContactDetails";
import WindowTypeSelect from "@/components/quote/WindowTypeSelect";
import WindowCount from "@/components/quote/WindowCount";
import WindowDimensions from "@/components/quote/WindowDimensions";
import GlassOptionsSelect from "@/components/quote/GlassOptionsSelect";
import ImageUpload from "@/components/quote/ImageUpload";
import { MainNav } from "@/components/MainNav";

// Initialize EmailJS with your public key
emailjs.init("YOUR_PUBLIC_KEY");

const QuoteRequest = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [windowType, setWindowType] = useState("");
  const [windowCount, setWindowCount] = useState(1);
  const [dimensions, setDimensions] = useState([{ width: "", height: "" }]);
  const [glassType, setGlassType] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true);

    try {
      console.log('Starting form submission process...');

      // Convert images to base64 strings
      const imagePromises = images.map(image => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(image);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
        });
      });

      console.log('Converting images to base64...');
      const base64Images = await Promise.all(imagePromises);
      console.log('Images converted successfully');

      // Prepare email template parameters
      const templateParams = {
        from_name: `${firstName} ${lastName}`,
        to_name: 'Secondary Glazing Specialist',
        reply_to: email,
        phone: phone,
        window_type: windowType,
        window_count: windowCount,
        dimensions: JSON.stringify(dimensions),
        glass_type: glassType,
        images: base64Images.join('|'), // Join images with a separator
        message: `
          Window Details:
          Type: ${windowType}
          Count: ${windowCount}
          Dimensions: ${JSON.stringify(dimensions)}
          Glass Type: ${glassType}
        `
      };

      console.log('Sending email via EmailJS...');
      
      // Send email using EmailJS
      const response = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      console.log('Email sent successfully:', response);
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
    } finally {
      setIsSubmitting(false);
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
            disabled={isSubmitting}
            className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit Quote Request"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteRequest;