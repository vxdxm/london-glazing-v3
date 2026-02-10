
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
      <link rel="canonical" href="https://www.secondaryglazingspecialist.com/cookie-policy" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.secondaryglazingspecialist.com/cookie-policy" />
      <meta property="og:title" content="Cookie Policy | Secondary Glazing Specialist London" />
      <meta property="og:description" content="Learn how we use cookies on our secondary glazing website. We explain cookie types, purposes and how to manage your preferences for a better browsing experience." />
      <meta property="og:image" content="https://secondaryglazingspecialist.com/og-image.png" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:url" content="https://www.secondaryglazingspecialist.com/cookie-policy" />
      <meta property="twitter:title" content="Cookie Policy | Secondary Glazing Specialist London" />
      <meta property="twitter:description" content="Learn how we use cookies on our secondary glazing website. We explain cookie types, purposes and how to manage your preferences for a better browsing experience." />
      <meta property="twitter:image" content="https://secondaryglazingspecialist.com/og-image.png" />
    </Helmet>
  );
};

export default CookiePolicySEO;
