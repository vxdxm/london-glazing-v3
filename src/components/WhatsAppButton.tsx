
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "447999333533"; // UK format without leading 0
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center gap-2"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-medium">WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
