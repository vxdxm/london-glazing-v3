import { MessageSquarePlus } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingButton from "./FloatingButton";

const GetQuoteButton = () => {
  return (
    <Link to="/quote-request">
      <FloatingButton
        icon={<MessageSquarePlus className="w-8 h-8 mr-2" />}
        text="Get Quote"
        className="bottom-[108px] bg-primary hover:bg-primary/90"
        aria-label="Get a quote"
      />
    </Link>
  );
};
export default GetQuoteButton;