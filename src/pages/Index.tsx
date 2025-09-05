useEffect(() => {
  console.log("Home page loaded");
  setIsMounted(true);
  
  if (typeof window !== 'undefined') {
    const handleHashScroll = () => {
      if (window.location.hash === '#contact-section') {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
          // Use requestAnimationFrame for smoother animation
          requestAnimationFrame(() => {
            contactSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          });
        }
      }
    };

    // Handle initial load
    handleHashScroll();
    
    // Also handle hash changes after load
    window.addEventListener('hashchange', handleHashScroll);
    
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }
}, []);