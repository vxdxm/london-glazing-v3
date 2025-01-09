import { MainNav } from "@/components/MainNav";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const NotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Show toast notification
    toast.info("Page not found. Redirecting to homepage...");

    // Start countdown
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    // Redirect after countdown
    const redirect = setTimeout(() => {
      navigate("/");
    }, 5000);

    // Cleanup
    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-4">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <p className="text-gray-600 mb-8">
          Redirecting to homepage in {countdown} seconds...
        </p>
        <Button 
          onClick={() => navigate("/")} 
          className="mx-auto"
        >
          Return to Home Now
        </Button>
      </div>
    </div>
  );
};

export default NotFound;