
import React from "react";
import { Helmet } from "react-helmet-async";

const FAQSEO = () => {
  return (
    <Helmet>
      <title>Secondary Glazing FAQs | Expert Advice & Information London</title>
      <meta 
        name="description" 
        content="Answers to common secondary glazing questions covering installation, acoustics, thermal benefits and costs. Expert advice from London's leading glazing specialists." 
      />
      <link rel="canonical" href="https://www.secondaryglazingspecialist.com/faqs" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.secondaryglazingspecialist.com/faqs" />
      <meta property="og:title" content="Secondary Glazing FAQs | Expert Answers to Common Questions" />
      <meta property="og:description" content="Answers to common secondary glazing questions covering installation, acoustics, thermal benefits and costs. Expert advice from London's leading glazing specialists." />
      <meta property="og:image" content="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.secondaryglazingspecialist.com/faqs" />
      <meta property="twitter:title" content="Secondary Glazing FAQs | Expert Answers to Common Questions" />
      <meta property="twitter:description" content="Answers to common secondary glazing questions covering installation, acoustics, thermal benefits and costs. Expert advice from London's leading glazing specialists." />
      <meta property="twitter:image" content="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg" />
      
      {/* Structured Data */}
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
                "text": "Secondary glazing involves installing a supplementary internal window behind your existing windows. This creates an insulating layer of air that improves thermal efficiency, reduces noise, and enhances security without altering the external appearance of your property."
              }
            },
            {
              "@type": "Question",
              "name": "How effective is secondary glazing at reducing noise?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Secondary glazing is highly effective at reducing noise, capable of reducing external noise by up to 80% when properly installed. The air gap between the primary and secondary glazing acts as an excellent sound barrier."
              }
            },
            {
              "@type": "Question",
              "name": "Will secondary glazing affect the appearance of my property?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Secondary glazing is installed on the room side of your existing windows, so it doesn't affect the external appearance of your property. This makes it particularly suitable for listed buildings and conservation areas."
              }
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default FAQSEO;
