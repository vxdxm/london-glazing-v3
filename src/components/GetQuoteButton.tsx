
import { Button } from "@/components/ui/button";
import { MessageSquarePlus } from "lucide-react";
import { Link } from "react-router-dom";

const GetQuoteButton = () => {
  return (
    <Link to="/quote-request">
      <Button 
        className="fixed bottom-20 right-6 bg-primary hover:bg-primary/90 text-white shadow-lg transition-all duration-300 hover:scale-110 z-50 rounded-full p-3"
        aria-label="Get a quote"
        style={{ 
          // Ensure consistent positioning on mobile devices
          WebkitTransform: "translateZ(0)",
          transform: "translateZ(0)",
          willChange: "transform"
        }}
      >
        <MessageSquarePlus className="w-6 h-6 mr-2" />
        <span className="font-medium">Get Quote</span>
      </Button>
    </Link>
  );
};

export default GetQuoteButton;
