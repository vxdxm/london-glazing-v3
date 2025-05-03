
import React from "react";
import { Helmet } from "react-helmet";

const QuoteRequestSEO = () => {
  return (
    <Helmet>
      <title>Request a Free Secondary Glazing Quote | Expert Installation Services London</title>
      <meta 
        name="description" 
        content="Request a free quote for professional secondary glazing installation in London. Get expert consultation and competitive pricing for all window types." 
      />
      <link rel="canonical" href="https://www.secondaryglazingspecialist.com/quote-request" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.secondaryglazingspecialist.com/quote-request" />
      <meta property="og:title" content="Request a Free Secondary Glazing Quote | No Obligation" />
      <meta property="og:description" content="Get a free, no-obligation quote for your secondary glazing project from London's leading specialist. Professional installation at competitive prices." />
      <meta property="og:image" content="/lovable-uploads/85a35431-eb67-44c0-bc47-544b29a786f6.png" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.secondaryglazingspecialist.com/quote-request" />
      <meta property="twitter:title" content="Request a Free Secondary Glazing Quote | No Obligation" />
      <meta property="twitter:description" content="Get a free, no-obligation quote for your secondary glazing project from London's leading specialist. Professional installation at competitive prices." />
      <meta property="twitter:image" content="/lovable-uploads/85a35431-eb67-44c0-bc47-544b29a786f6.png" />
    </Helmet>
  );
};

export default QuoteRequestSEO;
