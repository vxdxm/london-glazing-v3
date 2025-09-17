import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { ContactFormInput } from "./contact/ContactFormInput";
import { ContactFormTextarea } from "./contact/ContactFormTextarea";

const FloatingContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/mpwlvvvz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        toast.success("Message sent! We'll get back to you soon.");
        form.reset();
        setIsOpen(false);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button 
          className="fixed bottom-20 right-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 z-50 rounded-full p-4 min-h-[48px] min-w-[48px]"
          aria-label="Quick contact form"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-80 p-4 mr-4 mb-4"
        side="top"
        align="end"
      >
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Contact</h3>
          <form onSubmit={handleSubmit} className="space-y-3">
            <ContactFormInput 
              id="floating-name" 
              label="Name" 
              name="name"
              required 
              disabled={isSubmitting} 
            />
            <ContactFormInput 
              id="floating-email" 
              label="Email" 
              name="email"
              type="email" 
              required 
              disabled={isSubmitting} 
            />
            <ContactFormInput 
              id="floating-phone" 
              label="Phone" 
              name="phone"
              type="tel" 
              disabled={isSubmitting} 
            />
            <ContactFormTextarea 
              id="floating-message" 
              label="Message" 
              name="message"
              required 
              disabled={isSubmitting} 
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default FloatingContactForm;