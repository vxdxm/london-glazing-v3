
import React from "react";
import { Helmet } from "react-helmet";
import { MainNav } from "@/components/MainNav";
import Footer from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import SoundTravelSection from "@/components/sound-guide/SoundTravelSection";
import SecondaryGlazingSection from "@/components/sound-guide/SecondaryGlazingSection";
import DecibelsCard from "@/components/sound-guide/DecibelsCard";
import STCCard from "@/components/sound-guide/STCCard";
import NoiseSourcesTable from "@/components/sound-guide/NoiseSourcesTable";
import AcousticSolutions from "@/components/sound-guide/AcousticSolutions";
import NoiseReductionPractice from "@/components/sound-guide/NoiseReductionPractice";
import { useScrollToHash } from "@/hooks/useScrollToHash";

const SoundTransmissionGuide = () => {
  useScrollToHash();
  
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
            "datePublished": "2024-07-01",
            "dateModified": "2024-07-01"
          }
        `}
        </script>
      </Helmet>
      <MainNav />
      
      <div className="container mx-auto px-4 py-12">
        <BreadcrumbNav />
        
        <h1 className="text-4xl font-bold mb-6">Sound Transmission Guide</h1>
        <p className="text-lg text-gray-600 mb-8">
          Understanding how sound travels through windows and how secondary glazing can 
          effectively reduce noise pollution in your home or office.
        </p>
        
        <div className="space-y-16">
          <SoundTravelSection />
          <SecondaryGlazingSection />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DecibelsCard />
            <STCCard />
          </div>
          
          <NoiseSourcesTable />
          <AcousticSolutions />
          <NoiseReductionPractice />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SoundTransmissionGuide;
