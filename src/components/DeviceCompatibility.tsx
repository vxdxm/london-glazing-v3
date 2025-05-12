
import { useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export const DeviceCompatibility = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const browser = detectBrowser(userAgent);
    const deviceType = isMobile ? 'mobile' : 'desktop';
    
    console.log(`DeviceCompatibility: Device type: ${deviceType}`);
    console.log(`DeviceCompatibility: Browser detected: ${browser}`);
    
    // Check for known problematic browsers
    if (browser === 'Safari' && !isMobile) {
      document.documentElement.classList.add('safari-desktop');
      console.log('DeviceCompatibility: Applied Safari-specific fixes');
    }
    
    if (browser === 'Safari' && isMobile) {
      document.documentElement.classList.add('safari-mobile');
      console.log('DeviceCompatibility: Applied iOS Safari-specific fixes');
      
      // Fix for iOS Safari 100vh issue
      const fixIOSHeight = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      };
      
      fixIOSHeight();
      window.addEventListener('resize', fixIOSHeight);
      return () => window.removeEventListener('resize', fixIOSHeight);
    }
  }, [isMobile]);
  
  // No visible UI - this is a utility component
  return null;
};

// Browser detection helper
function detectBrowser(userAgent: string): string {
  const ua = userAgent.toLowerCase();
  
  if (ua.indexOf('edge') > -1 || ua.indexOf('edg/') > -1) {
    return 'Edge';
  } else if (ua.indexOf('chrome') > -1 && ua.indexOf('chromium') === -1) {
    return 'Chrome';
  } else if (ua.indexOf('firefox') > -1) {
    return 'Firefox';
  } else if (ua.indexOf('safari') > -1 && ua.indexOf('chrome') === -1) {
    return 'Safari';
  } else {
    return 'Unknown';
  }
}

export default DeviceCompatibility;
