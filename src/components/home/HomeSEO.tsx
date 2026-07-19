
import React from "react";
import { Helmet } from "react-helmet-async";

const HomeSEO = () => {
  return (
    <Helmet>
      {/* Title, description, canonical, og:*, twitter:* are emitted by EnhancedSEO
          on the Index page to avoid duplicate meta tags. Only unique JSON-LD lives here. */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Secondary Glazing Specialist",
          "url": "https://secondaryglazingspecialist.com",
          "logo": "https://secondaryglazingspecialist.com/lovable-uploads/b39446b8-e7b5-4000-ac4b-a7a691a5bb14.png",
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
          },
          "sameAs": [
            "https://www.instagram.com/secondaryglazinglondon/",
            "https://www.linkedin.com/in/secondary-glazing-specialist-7500653a2/",
            "https://x.com/Sec0ndaryGlazin",
            "https://web.facebook.com/profile.php?id=61585744672659"
          ]
        })}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://secondaryglazingspecialist.com",
          "name": "Secondary Glazing Specialist London",
          "description": "London's leading secondary glazing specialists offering expert installation, repairs and acoustic solutions. Enhance your home's thermal efficiency and reduce noise pollution.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://secondaryglazingspecialist.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
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
    </Helmet>
  );
};

export default HomeSEO;
