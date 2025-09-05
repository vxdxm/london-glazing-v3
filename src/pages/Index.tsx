import React, { useEffect, useState } from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { LazyLoadWrapper } from "@/components/LazyLoadWrapper";
import HomeExamples from "@/components/home/HomeExamples";
import { useScrollToHash } from "@/hooks/useScrollToHash";

const Index = () => {
  const [isMounted, setIsMounted] = useState(false);
  useScrollToHash();

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

  if (!isMounted) {
    return <div className="min-h-screen bg-background animate-pulse" />;
  }

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <main>
        <section id="examples" className="py-16">
          <LazyLoadWrapper threshold={0.1}>
            <HomeExamples />
          </LazyLoadWrapper>
        </section>
        <section id="contact-section" className="py-16">
          {/* Contact section content */}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;