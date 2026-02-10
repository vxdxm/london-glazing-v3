
import React from "react";
import { Helmet } from "react-helmet-async";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { useScrollToHash } from "@/hooks/useScrollToHash";

interface SoundGuideLayoutProps {
  children: React.ReactNode;
}

const SoundGuideLayout = ({ children }: SoundGuideLayoutProps) => {
  useScrollToHash();
  
  // Add logging for indexing
  React.useEffect(() => {
    console.log("Sound Transmission Guide page loaded for indexing");
  }, []);
  
  const currentDate = "2026-01-01"; // Keep updated with the current date
  
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Sound Transmission Guide | Secondary Glazing Noise Reduction</title>
        <meta name="description" content="Comprehensive guide to sound transmission, decibel levels, and how secondary glazing reduces noise. Learn about acoustic ratings, STC values, and effective noise reduction solutions." />
        <meta name="keywords" content="sound transmission, secondary glazing, noise reduction, acoustic glass, decibel reduction, sound insulation, STC rating, sound proof windows" />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/specialized/sound-transmission-guide" />
        <meta property="og:title" content="Sound Transmission Guide | Secondary Glazing Noise Reduction" />
        <meta property="og:description" content="Expert guide to understanding sound transmission and how secondary glazing significantly reduces noise pollution in homes and offices." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://secondaryglazingspecialist.com/specialized/sound-transmission-guide" />
        <meta property="og:image" content="https://secondaryglazingspecialist.com/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg" />
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Sound Transmission Guide: Understanding Noise Reduction with Secondary Glazing",
            "description": "Comprehensive guide to sound transmission, decibel levels, and how secondary glazing effectively reduces noise pollution in residential and commercial settings.",
            "image": "https://secondaryglazingspecialist.com/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
            "author": {
              "@type": "Organization",
              "name": "Secondary Glazing Specialist"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Secondary Glazing Specialist",
              "logo": {
                "@type": "ImageObject",
                "url": "https://secondaryglazingspecialist.com/og-image.png"
              }
            },
            "datePublished": "2026-01-01",
            "dateModified": "${currentDate}"
          }
        `}
        </script>
      </Helmet>
      <MainNav />
      
      <div className="container mx-auto px-4 py-12">
        <BreadcrumbNav />
        {children}
      </div>
      
      <Footer />
    </div>
  );
};

export default SoundGuideLayout;
