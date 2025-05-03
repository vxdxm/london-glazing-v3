
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
      <link rel="canonical" href="https://www.secondaryglazingspecialist.com/quote-request" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.secondaryglazingspecialist.com/quote-request" />
      <meta property="og:title" content="Free Secondary Glazing Quote Request | London Specialists" />
      <meta property="og:description" content="Request your free, no-obligation secondary glazing quote from London's specialists. Enhance thermal efficiency and reduce noise with our bespoke window solutions." />
      <meta property="og:image" content="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.secondaryglazingspecialist.com/quote-request" />
      <meta property="twitter:title" content="Free Secondary Glazing Quote Request | London Specialists" />
      <meta property="twitter:description" content="Request your free, no-obligation secondary glazing quote from London's specialists. Enhance thermal efficiency and reduce noise with our bespoke window solutions." />
      <meta property="twitter:image" content="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg" />
    </Helmet>
  );
};

export default QuoteRequestSEO;
