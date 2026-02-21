
import React from "react";
import { Helmet } from "react-helmet-async";

const CookiePolicySEO = () => {
  return (
    <Helmet>
      <title>Cookie Policy | Secondary Glazing London</title>
      <meta 
        name="description" 
        content="Learn how we use cookies on our secondary glazing website. We explain cookie types, purposes and how to manage your preferences for a better browsing experience." 
      />
      <link rel="canonical" href="https://secondaryglazingspecialist.com/cookie-policy" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://secondaryglazingspecialist.com/cookie-policy" />
      <meta property="og:title" content="Cookie Policy | Secondary Glazing Specialist London" />
      <meta property="og:description" content="Learn how we use cookies on our secondary glazing website. We explain cookie types, purposes and how to manage your preferences for a better browsing experience." />
      <meta property="og:image" content="https://secondaryglazingspecialist.com/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://secondaryglazingspecialist.com/cookie-policy" />
      <meta name="twitter:title" content="Cookie Policy | Secondary Glazing Specialist London" />
      <meta name="twitter:description" content="Learn how we use cookies on our secondary glazing website. We explain cookie types, purposes and how to manage your preferences for a better browsing experience." />
      <meta name="twitter:image" content="https://secondaryglazingspecialist.com/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg" />
    </Helmet>
  );
};

export default CookiePolicySEO;
