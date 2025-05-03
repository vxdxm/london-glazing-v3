
import React from "react";
import { Helmet } from "react-helmet";

const CookiePolicySEO = () => {
  return (
    <Helmet>
      <title>Cookie Policy | Secondary Glazing London</title>
      <meta name="description" content="Learn about how we use cookies on our website." />
      <link rel="canonical" href="https://www.secondaryglazingspecialist.com/cookie-policy" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.secondaryglazingspecialist.com/cookie-policy" />
      <meta property="og:title" content="Cookie Policy | Secondary Glazing Specialist London" />
      <meta property="og:description" content="Learn about the cookies we use on our website, how they work, and how you can manage them." />
      <meta property="og:image" content="https://secondaryglazingspecialist.com/og-image.png" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:url" content="https://www.secondaryglazingspecialist.com/cookie-policy" />
      <meta property="twitter:title" content="Cookie Policy | Secondary Glazing Specialist London" />
      <meta property="twitter:description" content="Learn about the cookies we use on our website, how they work, and how you can manage them." />
      <meta property="twitter:image" content="https://secondaryglazingspecialist.com/og-image.png" />
    </Helmet>
  );
};

export default CookiePolicySEO;
