import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export const useNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState<string[]>([]);
  const closeTimeoutRef = useRef<NodeJS.Timeout>();

  const handleNavigation = (path: string) => {
    console.log("Navigating to:", path);
    navigate(path);
  };

  const handleContactClick = () => {
    if (location.pathname === '/') {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollToContact: true } });
    }
  };

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollToContact) {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const handleMouseEnter = (menuTitle: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setOpenMenus((prev) => [...new Set([...prev, menuTitle])]);
  };

  const handleMouseLeave = (menuTitle: string) => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenMenus((prev) => prev.filter((title) => title !== menuTitle));
    }, 300);
  };

  return {
    handleNavigation,
    handleContactClick,
    handleMouseEnter,
    handleMouseLeave,
    openMenus,
  };
};