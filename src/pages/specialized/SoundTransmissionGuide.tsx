
import React from "react";
import SoundGuideLayout from "@/components/sound-guide/SoundGuideLayout";
import SoundGuideHeader from "@/components/sound-guide/SoundGuideHeader";
import SoundGuideContent from "@/components/sound-guide/SoundGuideContent";
import { SeoHead } from "@/components/ui/seo-head";

const SoundTransmissionGuide = () => {
  // Current domain - in a real app, you might get this from environment variables
  const domain = "https://secondaryglazingspecialist.com";
  const pagePath = "/specialized/sound-transmission-guide";
  const canonicalUrl = `${domain}${pagePath}`;
  
  // Structured data for this article page
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Sound Transmission Guide for Secondary Glazing",
    "description": "Comprehensive guide explaining how sound travels through windows and how secondary glazing creates effective barriers to reduce noise pollution.",
    "image": "/lovable-uploads/56e6bf65-3f25-4fcd-b697-e286aa479776.jpg",
    "author": {
      "@type": "Organization",
      "name": "Secondary Glazing Specialist"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Secondary Glazing Specialist",
      "logo": {
        "@type": "ImageObject",
        "url": "/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "datePublished": "2023-12-10",
    "dateModified": "2025-05-14"
  };

  return (
    <>
      <SeoHead
        title="Sound Transmission Guide: How Secondary Glazing Reduces Noise"
        description="Learn how sound travels through windows and how secondary glazing creates effective barriers to reduce noise pollution by up to 80%."
        canonicalUrl={canonicalUrl}
        ogType="article"
        ogTitle="Sound Transmission Guide for Secondary Glazing | Expert Resources"
        ogDescription="Discover the science behind noise reduction with secondary glazing. Expert guide with visual demonstrations of sound wave behaviors."
        ogImage="/lovable-uploads/56e6bf65-3f25-4fcd-b697-e286aa479776.jpg"
        jsonLd={articleSchema}
      />
      <SoundGuideLayout>
        <SoundGuideHeader />
        <SoundGuideContent />
        <div className="container max-w-2xl mx-auto mt-20 mb-16">
          <div className="bg-secondary/60 p-5 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-primary">Next: Discover Practical Noise Reduction!</h2>
            <p className="text-gray-700 mb-2">
              For a real-world look at how secondary glazing technology cuts outside noise by up to 80%, see glass and air gap choices, performance stats, and tips for listed buildings.
            </p>
            <a
              href="/secondary-glazing-noise-reduction"
              className="inline-block mt-2 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
            >
              Visit Secondary Glazing Noise Reduction &rarr;
            </a>
          </div>
        </div>
      </SoundGuideLayout>
    </>
  );
};

export default SoundTransmissionGuide;
