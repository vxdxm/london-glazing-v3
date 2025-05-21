
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ContactUsButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = () => {
    // Check if we're already on the home page
    if (location.pathname === "/") {
      // We're on the home page, scroll directly with a slight delay to ensure rendering
      setTimeout(() => {
        document.getElementById('contact-form-section')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    } else {
      // We're on another page, navigate to home with hash
      navigate('/#contact-form-section');
    }
  };

  return (
    <Button 
      onClick={handleContactClick}
      className="fixed bottom-[8.5rem] right-6 bg-primary hover:bg-primary/90 text-white shadow-lg transition-all duration-300 hover:scale-110 z-50 rounded-full p-4 min-h-[48px] min-w-[48px]"
      aria-label="Contact Us"
    >
      <MessageCircle className="w-6 h-6 mr-2" />
      <span className="font-medium">Contact Us</span>
    </Button>
  );
};

export default ContactUsButton;
