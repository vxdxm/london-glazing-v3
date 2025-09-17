
import { MessageCircle } from "lucide-react";
import FloatingButton from "./FloatingButton";

const WhatsAppButton = () => {
  const phoneNumber = "447999333533"; // UK format without leading 0
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6"
    >
      <FloatingButton
        icon={<MessageCircle className="w-8 h-8 mr-2" />}
        text="WhatsApp"
        className="bg-green-500 hover:bg-green-600 static"
        aria-label="Contact us on WhatsApp"
      />
    </a>
  );
};

export default WhatsAppButton;
