
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
      <link rel="canonical" href="https://secondaryglazingspecialist.com/privacy-policy" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://secondaryglazingspecialist.com/privacy-policy" />
      <meta property="og:title" content="Privacy Policy | Secondary Glazing Specialist London" />
      <meta property="og:description" content="Our privacy policy explains how we collect, use and protect your data when using our secondary glazing services and website. Transparent information handling practices." />
      <meta property="og:image" content="https://secondaryglazingspecialist.com/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://secondaryglazingspecialist.com/privacy-policy" />
      <meta name="twitter:title" content="Privacy Policy | Secondary Glazing Specialist London" />
      <meta name="twitter:description" content="Our privacy policy explains how we collect, use and protect your data when using our secondary glazing services and website. Transparent information handling practices." />
      <meta name="twitter:image" content="https://secondaryglazingspecialist.com/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg" />
    </Helmet>
  );
};

export default PrivacyPolicySEO;
