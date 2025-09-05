
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { ContactFormInput } from "./contact/ContactFormInput";
import { ContactFormTextarea } from "./contact/ContactFormTextarea";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        mode: "cors",
      });
      
      if (response.ok) {
        toast.success("Message sent! We'll get back to you as soon as possible.");
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} action="https://formspree.io/f/mpwlvvvz" method="POST" className="space-y-6">
            <ContactFormInput 
              id="name" 
              label="Name" 
              name="name"
              required 
              disabled={isSubmitting} 
            />
            <ContactFormInput 
              id="email" 
              label="Email" 
              name="email"
              type="email" 
              required 
              disabled={isSubmitting} 
            />
            <ContactFormInput 
              id="phone" 
              label="Phone Number" 
              name="phone"
              type="tel" 
              disabled={isSubmitting} 
            />
            <ContactFormTextarea 
              id="message" 
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
      </div>
    </section>
  );
}
