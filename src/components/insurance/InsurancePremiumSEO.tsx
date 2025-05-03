
import React from "react";
import { Helmet } from "react-helmet";

const InsurancePremiumSEO = () => {
  return (
    <Helmet>
      <title>Insurance Premium Savings with Security Glazing | Secondary Glazing Specialist</title>
      <meta name="description" content="Learn how secondary security glazing can reduce your insurance premiums. Calculate potential savings and understand the benefits of enhanced window security." />
      <link rel="canonical" href="https://secondaryglazingspecialist.com/specialized/insurance-premiums" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://secondaryglazingspecialist.com/specialized/insurance-premiums" />
      <meta property="og:title" content="Reduce Insurance Premiums with Security Glazing | Secondary Glazing" />
      <meta property="og:description" content="Discover how security secondary glazing can lower your insurance costs while providing enhanced protection for your property. Calculate your potential savings." />
      <meta property="og:image" content="/lovable-uploads/3d97865e-eb3e-4558-adcf-5fef6f809746.jpg" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://secondaryglazingspecialist.com/specialized/insurance-premiums" />
      <meta property="twitter:title" content="Reduce Insurance Premiums with Security Glazing | Secondary Glazing" />
      <meta property="twitter:description" content="Discover how security secondary glazing can lower your insurance costs while providing enhanced protection for your property. Calculate your potential savings." />
      <meta property="twitter:image" content="/lovable-uploads/3d97865e-eb3e-4558-adcf-5fef6f809746.jpg" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "headline": "Insurance Premium Savings with Secondary Security Glazing",
          "description": "Learn how installing secondary security glazing can reduce your insurance premiums while enhancing the protection of your property.",
          "image": "/lovable-uploads/3d97865e-eb3e-4558-adcf-5fef6f809746.jpg",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": [".text-4xl", ".prose"]
          },
          "mainEntity": {
            "@type": "Service",
            "name": "Security Secondary Glazing",
            "description": "Enhanced security glazing solutions that may qualify for insurance premium reductions.",
            "provider": {
              "@type": "Organization",
              "name": "Secondary Glazing Specialist",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "London",
                "postalCode": "W12 7LA",
                "streetAddress": "Arch 141, MacFarlane Road"
              },
              "telephone": "0207 060 1572"
            }
          }
        })}
      </script>
    </Helmet>
  );
};

export default InsurancePremiumSEO;
