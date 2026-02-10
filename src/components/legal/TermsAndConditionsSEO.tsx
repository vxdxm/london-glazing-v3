
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
      <link rel="canonical" href="https://www.secondaryglazingspecialist.com/terms-and-conditions" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.secondaryglazingspecialist.com/terms-and-conditions" />
      <meta property="og:title" content="Terms and Conditions | Secondary Glazing Specialist London" />
      <meta property="og:description" content="Our terms outline the guidelines for using our secondary glazing services and website. Understand our policies on quotes, installations, repairs and guarantees." />
      <meta property="og:image" content="https://secondaryglazingspecialist.com/og-image.png" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:url" content="https://www.secondaryglazingspecialist.com/terms-and-conditions" />
      <meta property="twitter:title" content="Terms and Conditions | Secondary Glazing Specialist London" />
      <meta property="twitter:description" content="Our terms outline the guidelines for using our secondary glazing services and website. Understand our policies on quotes, installations, repairs and guarantees." />
      <meta property="twitter:image" content="https://secondaryglazingspecialist.com/og-image.png" />
    </Helmet>
  );
};

export default TermsAndConditionsSEO;
