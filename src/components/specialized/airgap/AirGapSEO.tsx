
import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

export const AirGapSEO = () => {
  const location = useLocation();
  const isDirectPath = location.pathname === "/air-gap-secondary-glazing";
  
  const canonicalUrl = isDirectPath 
    ? "https://secondaryglazingspecialist.com/air-gap-secondary-glazing"
    : "https://secondaryglazingspecialist.com/specialized/air-gap-secondary-glazing";

  return (
    <Helmet>
      <title>Air Gap Secondary Glazing | Optimal Cavity Spacing Guide</title>
      <meta 
        name="description" 
        content="Learn about optimal air gap distances in secondary glazing installations. Expert guide on 100mm and 150mm cavity spacing for maximum thermal and acoustic performance." 
      />
      <meta 
        name="keywords" 
        content="air gap secondary glazing, cavity spacing, window insulation, thermal performance, acoustic insulation, 100mm cavity, 150mm cavity" 
      />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content="Air Gap Secondary Glazing Guide | Optimal Cavity Spacing" />
      <meta property="og:description" content="Expert guide on optimal air gap distances in secondary glazing installations. Discover how 100mm and 150mm cavity spacing affects thermal and acoustic performance." />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content="https://secondaryglazingspecialist.com/lovable-uploads/7891494f-5e77-40d3-b5fc-cabf6262f2fe.png" />
      <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "Air Gap Secondary Glazing Guide: Optimal Cavity Spacing",
          "description": "Comprehensive guide on optimal air gap distances in secondary glazing installations, focusing on 100mm and 150mm cavity spacing for maximum thermal and acoustic performance.",
          "image": "https://secondaryglazingspecialist.com/lovable-uploads/7891494f-5e77-40d3-b5fc-cabf6262f2fe.png",
          "author": {
            "@type": "Organization",
            "name": "Secondary Glazing Specialist"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Secondary Glazing Specialist",
            "logo": {
              "@type": "ImageObject",
              "url": "https://secondaryglazingspecialist.com/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "${canonicalUrl}"
          },
          "dateModified": "2025-05-09",
          "datePublished": "2024-07-10",
          "keywords": "air gap secondary glazing, cavity spacing, window insulation, thermal performance, acoustic insulation, 100mm cavity, 150mm cavity",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", "h2", ".text-gray-700"]
          }
        }
      `}
      </script>
      
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
              "name": "Air Gap Secondary Glazing",
              "item": "${canonicalUrl}"
            }
          ]
        }
      `}
      </script>
    </Helmet>
  );
};
