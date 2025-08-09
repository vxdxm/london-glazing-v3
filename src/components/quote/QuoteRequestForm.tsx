import { useState } from "react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';
import ContactDetails from "./ContactDetails";
import WindowTypeSelect from "./WindowTypeSelect";
import WindowCount from "./WindowCount";
import WindowDimensions from "./WindowDimensions";
import GlassOptionsSelect from "./GlassOptionsSelect";
import { QuoteRequestSubmitButton } from "./QuoteRequestSubmitButton";

// Initialize EmailJS with proper error handling
try {
  emailjs.init("BRNJRT_YbAUZ3bB-O");
  console.log('EmailJS initialized successfully');
} catch (error) {
  console.error('EmailJS initialization failed:', error);
}

export function QuoteRequestForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [windowType, setWindowType] = useState("");
  const [windowCount, setWindowCount] = useState(1);
  const [dimensions, setDimensions] = useState([{ width: "", height: "" }]);
  const [glassType, setGlassType] = useState("");
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

      // Create template params
      const templateParams = {
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

      // Send email
      console.log('Sending email...');
      await emailjs.send(
        'service_3peq5cu',
        'template_s22oydk',
        templateParams,
        'BRNJRT_YbAUZ3bB-O'
      );

      console.log('Email sent successfully');
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
    } catch (error) {
      console.error('Error sending email:', error);
      const message = error instanceof Error ? error.message : '';
      if (message.toLowerCase().includes('failed to fetch') || error instanceof TypeError) {
        toast.error("Network error while submitting. Please check your internet connection, disable ad blockers, and try again.");
      } else if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("There was an error submitting your request. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl" aria-label="Quote request form">
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
      
      <QuoteRequestSubmitButton isSubmitting={isSubmitting} />
    </form>
  );
}