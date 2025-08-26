import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function FloatingContactForm() {
  const [isOpen, setIsOpen] = useState(false);
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
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 bg-primary hover:bg-primary/90 text-primary-foreground p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center min-h-[48px] min-w-[48px]"
        aria-label="Open contact form"
      >
        <MessageCircle className="w-5 h-5" />
      </button>

      {/* Popup Form */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">Quick Contact</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-6 w-6 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-4 space-y-4">
              <div>
                <label htmlFor="floating-name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input
                  id="floating-name"
                  name="name"
                  required
                  disabled={isSubmitting}
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="floating-email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  id="floating-email"
                  name="email"
                  type="email"
                  required
                  disabled={isSubmitting}
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="floating-phone" className="block text-sm font-medium mb-1">
                  Phone
                </label>
                <Input
                  id="floating-phone"
                  name="phone"
                  type="tel"
                  disabled={isSubmitting}
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="floating-message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea
                  id="floating-message"
                  name="message"
                  required
                  disabled={isSubmitting}
                  placeholder="How can we help you?"
                  className="min-h-[100px]"
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}