import { Helmet } from "react-helmet";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';
import ContactDetails from "@/components/quote/ContactDetails";
import WindowTypeSelect from "@/components/quote/WindowTypeSelect";
import WindowCount from "@/components/quote/WindowCount";
import WindowDimensions from "@/components/quote/WindowDimensions";
import GlassOptionsSelect from "@/components/quote/GlassOptionsSelect";
import ImageUpload from "@/components/quote/ImageUpload";
import { MainNav } from "@/components/MainNav";

// Initialize EmailJS
emailjs.init("BRNJRT_YbAUZ3bB-O");

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
    console.log('Starting quote request form submission...');

    try {
      // Validate required fields
      if (!firstName || !lastName || !email || !phone || !windowType || !glassType) {
        throw new Error("Please fill in all required fields");
      }

      // Validate dimensions
      const invalidDimensions = dimensions.some(dim => !dim.width || !dim.height);
      if (invalidDimensions) {
        throw new Error("Please provide all window dimensions");
      }

      console.log('Converting images to base64...');
      // Convert images to base64 strings with reduced size
      const imagePromises: Promise<string>[] = images.map(image => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          const img = new Image();
          
          img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            // Calculate new dimensions (max 800px width/height)
            let width = img.width;
            let height = img.height;
            const maxSize = 800;
            
            if (width > height && width > maxSize) {
              height = (height * maxSize) / width;
              width = maxSize;
            } else if (height > maxSize) {
              width = (width * maxSize) / height;
              height = maxSize;
            }
            
            canvas.width = width;
            canvas.height = height;
            
            ctx?.drawImage(img, 0, 0, width, height);
            
            // Convert to base64 with reduced quality
            const base64String = canvas.toDataURL('image/jpeg', 0.7);
            resolve(base64String);
          };
          
          img.onerror = reject;
          
          reader.onload = (e) => {
            if (e.target?.result) {
              img.src = e.target.result as string;
            }
          };
          reader.onerror = reject;
          reader.readAsDataURL(image);
        });
      });

      const base64Images = await Promise.all(imagePromises);
      console.log('Images converted successfully');

      // Split images into chunks if needed
      const imageChunks: string[][] = [];
      const chunkSize = 3;
      for (let i = 0; i < base64Images.length; i += chunkSize) {
        imageChunks.push(base64Images.slice(i, i + chunkSize));
      }

      // Create template params without images first
      const baseTemplateParams = {
        from_name: `${firstName} ${lastName}`,
        to_name: 'Secondary Glazing Specialist',
        reply_to: email,
        phone: phone,
        window_type: windowType,
        window_count: windowCount,
        dimensions: JSON.stringify(dimensions),
        glass_type: glassType,
        message: `
          Window Details:
          Type: ${windowType}
          Count: ${windowCount}
          Dimensions: ${JSON.stringify(dimensions)}
          Glass Type: ${glassType}
        `
      };

      // Send initial email with form data
      console.log('Sending initial email...');
      await emailjs.send(
        'service_3peq5cu',
        'template_s22oydk',
        baseTemplateParams
      );

      // Send additional emails with images if there are any
      if (imageChunks.length > 0) {
        console.log('Sending images in separate emails...');
        for (let i = 0; i < imageChunks.length; i++) {
          const imageParams = {
            ...baseTemplateParams,
            images: imageChunks[i].join('|'),
            part: `Images part ${i + 1} of ${imageChunks.length}`
          };

          await emailjs.send(
            'service_3peq5cu',
            'template_s22oydk',
            imageParams
          );
        }
      }

      console.log('All emails sent successfully');
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
      console.error('Error sending email:', error);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("There was an error submitting your request. Please try again.");
      }
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
            className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full"
          >
            {isSubmitting ? "Submitting..." : "Submit Quote Request"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteRequest;