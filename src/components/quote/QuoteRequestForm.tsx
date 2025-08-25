import { useState } from "react";
import { toast } from "sonner";
import ContactDetails from "./ContactDetails";
import WindowTypeSelect from "./WindowTypeSelect";
import WindowCount from "./WindowCount";
import WindowDimensions from "./WindowDimensions";
import GlassOptionsSelect from "./GlassOptionsSelect";
import { QuoteRequestSubmitButton } from "./QuoteRequestSubmitButton";

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
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Add window details as a formatted message
    const windowDetails = `
Window Details:
Type: ${windowType}
Count: ${windowCount}
Dimensions: ${dimensions.map((dim, i) => `Window ${i+1}: ${dim.width}" x ${dim.height}"`).join(', ')}
Glass Type: ${glassType}
    `;
    formData.append('window_details', windowDetails);
    
    try {
      const response = await fetch("https://formspree.io/f/mpwlvvvz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
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
        form.reset();
      } else {
        throw new Error("Failed to submit quote request");
      }
    } catch (error) {
      toast.error("There was an error submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} action="https://formspree.io/f/mpwlvvvz" method="POST" className="space-y-8 max-w-2xl" aria-label="Quote request form">
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
      
      <WindowTypeSelect onValueChange={setWindowType} value={windowType} />
      
      <WindowCount count={windowCount} onCountChange={handleWindowCountChange} />
      <input type="hidden" name="windowCount" value={windowCount} />
      
      <WindowDimensions
        dimensions={dimensions}
        onDimensionChange={handleDimensionChange}
      />
      
      <GlassOptionsSelect onValueChange={setGlassType} value={glassType} />
      
      <QuoteRequestSubmitButton isSubmitting={isSubmitting} />
    </form>
  );
}