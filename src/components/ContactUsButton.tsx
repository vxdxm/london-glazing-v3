
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ContactUsButton = () => {
  return (
    <Link to="/#contact-section">
      <Button 
        className="fixed bottom-[8.5rem] right-6 bg-primary hover:bg-primary/90 text-white shadow-lg transition-all duration-300 hover:scale-110 z-50 rounded-full p-4 min-h-[48px] min-w-[48px]"
        aria-label="Contact Us"
      >
        <MessageCircle className="w-6 h-6 mr-2" />
        <span className="font-medium">Contact Us</span>
      </Button>
    </Link>
  );
};

export default ContactUsButton;
