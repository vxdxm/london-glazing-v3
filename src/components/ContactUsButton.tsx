
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ContactUsButton = () => {
  return (
    <Link to="/#contact-section">
      <Button 
        className="fixed bottom-36 right-6 bg-primary hover:bg-primary/90 text-white shadow-lg transition-all duration-300 hover:scale-110 z-50 rounded-full p-3"
        aria-label="Contact Us"
        style={{ 
          // Ensure consistent positioning on mobile devices
          WebkitTransform: "translateZ(0)",
          transform: "translateZ(0)",
          willChange: "transform"
        }}
      >
        <MessageCircle className="w-6 h-6 mr-2" />
        <span className="font-medium">Contact Us</span>
      </Button>
    </Link>
  );
};

export default ContactUsButton;
