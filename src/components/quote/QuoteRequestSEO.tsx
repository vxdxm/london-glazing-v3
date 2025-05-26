
import React from "react";
import { Helmet } from "react-helmet";

const QuoteRequestSEO = () => {
  return (
    <Helmet>
      <title>Free Secondary Glazing Quote Request | London Specialists</title>
      <meta 
        name="description" 
        content="Request your free, no-obligation secondary glazing quote from London's specialists. Enhance thermal efficiency and reduce noise with our bespoke window solutions." 
      />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://secondaryglazingspecialist.com/quote-request" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://secondaryglazingspecialist.com/quote-request" />
      <meta property="og:title" content="Free Secondary Glazing Quote Request | London Specialists" />
      <meta property="og:description" content="Request your free, no-obligation secondary glazing quote from London's specialists. Enhance thermal efficiency and reduce noise with our bespoke window solutions." />
      <meta property="og:image" content="https://secondaryglazingspecialist.com/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://secondaryglazingspecialist.com/quote-request" />
      <meta property="twitter:title" content="Free Secondary Glazing Quote Request | London Specialists" />
      <meta property="twitter:description" content="Request your free, no-obligation secondary glazing quote from London's specialists. Enhance thermal efficiency and reduce noise with our bespoke window solutions." />
      <meta property="twitter:image" content="https://secondaryglazingspecialist.com/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "headline": "Free Secondary Glazing Quote Request",
          "description": "Request your free, no-obligation secondary glazing quote from London's specialists. Enhance thermal efficiency and reduce noise with our bespoke window solutions.",
          "url": "https://secondaryglazingspecialist.com/quote-request",
          "image": "https://secondaryglazingspecialist.com/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
          "author": {
            "@type": "Organization",
            "name": "Secondary Glazing Specialist",
            "url": "https://secondaryglazingspecialist.com"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Secondary Glazing Specialist",
            "logo": {
              "@type": "ImageObject",
              "url": "https://secondaryglazingspecialist.com/lovable-uploads/b39446b8-e7b5-4000-ac4b-a7a691a5bb14.png"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://secondaryglazingspecialist.com/quote-request"
          }
        })}
      </script>
    </Helmet>
  );
};

export default QuoteRequestSEO;
