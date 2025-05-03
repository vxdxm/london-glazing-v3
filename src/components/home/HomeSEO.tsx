
import React from "react";
import { Helmet } from "react-helmet";

const HomeSEO = () => {
  return (
    <Helmet>
      <title>Secondary Glazing London | Specialist Installation & Repairs</title>
      <meta 
        name="description" 
        content="London's leading secondary glazing specialists offering expert installation, repairs and acoustic solutions. Enhance your home's thermal efficiency and reduce noise pollution." 
      />
      <link rel="canonical" href="https://secondaryglazingspecialist.com/" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://secondaryglazingspecialist.com/" />
      <meta property="og:title" content="Secondary Glazing London | Specialist Installation & Repairs" />
      <meta property="og:description" content="London's leading secondary glazing specialists offering expert installation, repairs and acoustic solutions. Enhance your home's thermal efficiency and reduce noise." />
      <meta property="og:image" content="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://secondaryglazingspecialist.com/" />
      <meta name="twitter:title" content="Secondary Glazing London | Specialist Installation & Repairs" />
      <meta name="twitter:description" content="London's leading secondary glazing specialists offering expert installation, repairs and acoustic solutions. Enhance your home's thermal efficiency and reduce noise." />
      <meta name="twitter:image" content="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg" />
      
      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Secondary Glazing Specialist",
          "url": "https://secondaryglazingspecialist.com",
          "logo": "https://secondaryglazingspecialist.com/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "0207 060 1572",
            "contactType": "customer service",
            "areaServed": "London"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "London",
            "postalCode": "W12 7LA",
            "streetAddress": "Arch 141, MacFarlane Road"
          }
        })}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://secondaryglazingspecialist.com",
          "name": "Secondary Glazing Specialist London",
          "description": "London's leading secondary glazing specialists offering expert installation, repairs and acoustic solutions. Enhance your home's thermal efficiency and reduce noise pollution."
        })}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://secondaryglazingspecialist.com/"
            }
          ]
        })}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is secondary glazing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Secondary glazing involves adding an additional internal window to your existing windows, creating an insulating gap that improves thermal efficiency and reduces noise."
              }
            },
            {
              "@type": "Question",
              "name": "How effective is secondary glazing for noise reduction?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Secondary glazing can reduce noise by up to 80% when properly installed with optimal air gaps and acoustic glass options."
              }
            },
            {
              "@type": "Question",
              "name": "Can secondary glazing be installed in listed buildings?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, secondary glazing is often the preferred solution for listed buildings as it preserves original windows while improving insulation and is typically approved by conservation officers."
              }
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default HomeSEO;
