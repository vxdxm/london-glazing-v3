
import React from "react";
import { Helmet } from "react-helmet-async";

const PrivacyPolicySEO = () => {
  return (
    <Helmet>
      <title>Privacy Policy | Secondary Glazing London</title>
      <meta 
        name="description" 
        content="Our privacy policy explains how we collect, use and protect your data when using our secondary glazing services and website. Transparent information handling practices." 
      />
      <link rel="canonical" href="https://www.secondaryglazingspecialist.com/privacy-policy" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.secondaryglazingspecialist.com/privacy-policy" />
      <meta property="og:title" content="Privacy Policy | Secondary Glazing Specialist London" />
      <meta property="og:description" content="Our privacy policy explains how we collect, use and protect your data when using our secondary glazing services and website. Transparent information handling practices." />
      <meta property="og:image" content="https://secondaryglazingspecialist.com/og-image.png" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:url" content="https://www.secondaryglazingspecialist.com/privacy-policy" />
      <meta property="twitter:title" content="Privacy Policy | Secondary Glazing Specialist London" />
      <meta property="twitter:description" content="Our privacy policy explains how we collect, use and protect your data when using our secondary glazing services and website. Transparent information handling practices." />
      <meta property="twitter:image" content="https://secondaryglazingspecialist.com/og-image.png" />
    </Helmet>
  );
};

export default PrivacyPolicySEO;
