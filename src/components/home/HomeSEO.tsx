
import React from 'react';
import { Helmet } from "react-helmet";

const HomeSEO = () => {
  return (
    <Helmet>
      <title>Secondary Glazing London | Premium Secondary Glazing for Noise Reduction & Thermal Insulation</title>
      <meta name="description" content="London's specialist in Secondary Glazing, offering bespoke Secondary Glazing solutions for noise reduction, thermal insulation, and security enhancement. Perfect for listed buildings and conservation areas. Free consultation available." />
      <meta name="keywords" content="secondary glazing, secondary glazing london, window insulation, noise reduction, thermal insulation, security glazing, London windows, energy efficient windows, listed building windows, conservation area windows" />
      <meta property="og:title" content="London's Premium Secondary Glazing Specialists | Expert Secondary Glazing Solutions" />
      <meta property="og:description" content="Transform your property with our bespoke Secondary Glazing solutions. Enhance comfort, reduce noise by up to 80%, improve thermal efficiency, and boost security without compromising character." />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="London Secondary Glazing Solutions | Secondary Glazing for Noise & Thermal Control" />
      <meta name="twitter:description" content="Premium Secondary Glazing solutions for homes and businesses throughout London. Specialist Secondary Glazing for listed buildings and conservation areas." />
      <link rel="canonical" href="https://www.secondaryglazingspecialist.com/" />
      <link rel="sitemap" type="application/xml" href="https://secondaryglazingspecialist.com/sitemap.xml" />

      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "@id": "https://secondaryglazingspecialist.com/#organization",
          "name": "Secondary Glazing Specialist",
          "url": "https://secondaryglazingspecialist.com/",
          "logo": "https://secondaryglazingspecialist.com/og-image.png",
          "image": "https://secondaryglazingspecialist.com/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
          "description": "London's specialist in Secondary Glazing, offering bespoke solutions for noise reduction, thermal insulation, and security enhancement.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "London",
            "postalCode": "W12 7LA",
            "streetAddress": "Arch 141, MacFarlane Road"
          },
          "telephone": "0207 060 1572",
          "priceRange": "££-£££",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "17:30"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/secondaryglazingspecialist",
            "https://www.instagram.com/secondaryglazingspecialist"
          ],
          "areaServed": "Greater London",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Secondary Glazing Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Noise Reduction Secondary Glazing",
                  "description": "Reduce external noise by up to 80% with our acoustic secondary glazing solutions."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Thermal Insulation Secondary Glazing",
                  "description": "Improve energy efficiency and reduce heating costs with thermal secondary glazing."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Heritage Window Secondary Glazing",
                  "description": "Specialist solutions for listed buildings and conservation areas."
                }
              }
            ]
          }
        })}
      </script>

      {/* Structured Data - WebSite */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": "https://secondaryglazingspecialist.com/#website",
          "url": "https://secondaryglazingspecialist.com/",
          "name": "Secondary Glazing Specialist London",
          "description": "Premium Secondary Glazing Solutions in London",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://secondaryglazingspecialist.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>

      {/* Structured Data - BreadcrumbList */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@id": "https://secondaryglazingspecialist.com/",
                "name": "Home"
              }
            }
          ]
        })}
      </script>

      {/* Structured Data - LocalBusiness with FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How much noise can secondary glazing reduce?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our secondary glazing solutions can reduce external noise by up to 80%, depending on the specific system and glass type chosen. Acoustic laminated glass with an optimal air gap provides the best results for noise reduction."
              }
            },
            {
              "@type": "Question",
              "name": "Is secondary glazing suitable for listed buildings?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, secondary glazing is often the preferred solution for listed buildings and properties in conservation areas as it preserves the original windows while improving thermal and acoustic performance. It's generally accepted by conservation officers as it's reversible and doesn't alter the external appearance."
              }
            },
            {
              "@type": "Question",
              "name": "How much can secondary glazing improve thermal efficiency?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Secondary glazing can improve thermal efficiency by up to 60%, significantly reducing heat loss and energy bills. When combined with low-E glass, it provides exceptional thermal insulation while preserving the character of your original windows."
              }
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default HomeSEO;
