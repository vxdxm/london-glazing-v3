import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
const ContactUsButton = () => {
  return (
    <Link to="/contact">
      <Button 
        className="fixed bottom-6 right-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg transition-all duration-300 hover:scale-110 z-50 rounded-full p-4 min-h-[48px] min-w-[48px]"
        aria-label="Contact us"
      >
        <MessageCircle className="w-6 h-6 mr-2" />
        <span className="font-medium">Contact</span>
      </Button>
    </Link>
  );
};
export default ContactUsButton;