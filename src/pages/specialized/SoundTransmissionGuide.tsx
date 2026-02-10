
import React from "react";
import SoundGuideLayout from "@/components/sound-guide/SoundGuideLayout";
import SoundGuideHeader from "@/components/sound-guide/SoundGuideHeader";
import SoundGuideContent from "@/components/sound-guide/SoundGuideContent";
import { Helmet } from "react-helmet-async";
import { createPageSchema } from "@/utils/seo";

const SoundTransmissionGuide = () => {
  const pageMetadata = {
    title: "Sound Transmission Guide | Acoustic Secondary Glazing",
    description: "Comprehensive guide to sound transmission through windows and how secondary glazing creates effective acoustic barriers. Expert explanations and practical solutions.",
    canonicalPath: "/specialized/sound-transmission-guide",
    imageUrl: "/lovable-uploads/56e6bf65-3f25-4fcd-b697-e286aa479776.jpg",
    type: "article" as const,
    publishedDate: "2024-06-15",
    modifiedDate: "2025-05-17",
    keywords: ["sound transmission", "acoustic barriers", "secondary glazing", "sound waves", "noise reduction", "soundproofing windows", "sound insulation"]
  };

  const pageSchema = createPageSchema(pageMetadata);

  return (
    <>
      <Helmet>
        <title>{pageMetadata.title}</title>
        <meta name="description" content={pageMetadata.description} />
        <meta name="keywords" content={pageMetadata.keywords?.join(", ")} />
        <link rel="canonical" href={`https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}`} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={pageMetadata.title} />
        <meta property="og:description" content={pageMetadata.description} />
        <meta property="og:type" content={pageMetadata.type} />
        <meta property="og:url" content={`https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}`} />
        {pageMetadata.imageUrl && <meta property="og:image" content={pageMetadata.imageUrl} />}
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageMetadata.title} />
        <meta name="twitter:description" content={pageMetadata.description} />
        {pageMetadata.imageUrl && <meta name="twitter:image" content={pageMetadata.imageUrl} />}
        
        {/* JSON-LD structured data */}
        <script type="application/ld+json">{pageSchema}</script>
        
        {/* Breadcrumb structured data */}
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://secondaryglazingspecialist.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Specialized Services",
                "item": "https://secondaryglazingspecialist.com/specialized"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Sound Transmission Guide",
                "item": "https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}"
              }
            ]
          }
        `}
        </script>
      </Helmet>
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
