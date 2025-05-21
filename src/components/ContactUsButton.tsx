import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ContactUsButton = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleContactClick = () => {
    // Check if we're already on the home page
    if (location.pathname === "/") {
      // We're on the home page, scroll directly
      document.getElementById('contact-section')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // We're on another page, navigate to home with hash
      navigate('/#contact-section');
    }
  };
  return;
};
export default ContactUsButton;