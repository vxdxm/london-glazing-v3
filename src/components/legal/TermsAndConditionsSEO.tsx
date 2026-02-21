
import React from "react";
import { Helmet } from "react-helmet-async";

const TermsAndConditionsSEO = () => {
  return (
    <Helmet>
      <title>Terms and Conditions | Secondary Glazing London</title>
      <meta 
        name="description" 
        content="Our terms outline the guidelines for using our secondary glazing services and website. Understand our policies on quotes, installations, repairs and guarantees." 
      />
      <link rel="canonical" href="https://secondaryglazingspecialist.com/terms-and-conditions" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://secondaryglazingspecialist.com/terms-and-conditions" />
      <meta property="og:title" content="Terms and Conditions | Secondary Glazing Specialist London" />
      <meta property="og:description" content="Our terms outline the guidelines for using our secondary glazing services and website. Understand our policies on quotes, installations, repairs and guarantees." />
      <meta property="og:image" content="https://secondaryglazingspecialist.com/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://secondaryglazingspecialist.com/terms-and-conditions" />
      <meta name="twitter:title" content="Terms and Conditions | Secondary Glazing Specialist London" />
      <meta name="twitter:description" content="Our terms outline the guidelines for using our secondary glazing services and website. Understand our policies on quotes, installations, repairs and guarantees." />
      <meta name="twitter:image" content="https://secondaryglazingspecialist.com/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg" />
    </Helmet>
  );
};

export default TermsAndConditionsSEO;
