import { Button } from "@/components/ui/button";
import { MessageSquarePlus } from "lucide-react";
import { Link } from "react-router-dom";
const GetQuoteButton = () => {
  return <Link to="/quote-request">
      <Button className="fixed bottom-20 right-6 bg-primary hover:bg-primary/90 text-white shadow-lg transition-all duration-300 hover:scale-110 z-50 rounded-full p-6 min-h-[64px] min-w-[64px]" aria-label="Get a quote">
        <MessageSquarePlus className="w-8 h-8 mr-2" />
        <span className="font-medium text-lg px-0 py-[16px]">Get Quote</span>
      </Button>
    </Link>;
};
export default GetQuoteButton;