import { Button } from "@/components/ui/button";

interface FloatingButtonProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
  [key: string]: any;
}

const FloatingButton = ({ icon, text, className, ...props }: FloatingButtonProps) => (
  <Button
    className={`fixed right-6 text-white shadow-lg transition-all duration-300 hover:scale-110 z-50 rounded-full p-6 min-h-[64px] min-w-[64px] flex items-center whitespace-nowrap ${className}`}
    {...props}
  >
    {icon}
    <span className="font-medium px-3 py-2">{text}</span>
  </Button>
);

export default FloatingButton;