
import { Helmet } from "react-helmet";

export const EnergyPerformanceSEO = () => {
  return (
    <Helmet>
      <title>Energy Performance & Secondary Glazing | Improve Your Home's Efficiency</title>
      <meta 
        name="description" 
        content="Discover how secondary glazing can improve your home's energy performance. Calculate potential savings and explore energy-efficient solutions with up to 60% improvement in thermal efficiency." 
      />
      <meta 
        name="keywords" 
        content="secondary glazing, energy efficiency, thermal performance, energy savings, window insulation, home improvement"
      />
      <meta property="og:title" content="Energy Performance & Secondary Glazing | Improve Your Home's Efficiency" />
      <meta 
        property="og:description" 
        content="Learn how secondary glazing can enhance your home's energy performance with up to 60% improvement in thermal efficiency. Calculate your potential savings today." 
      />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://secondaryglazingspecialist.com/residential/energy-performance" />
      <link rel="canonical" href="https://secondaryglazingspecialist.com/residential/energy-performance" />
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Energy Performance & Secondary Glazing Guide",
            "description": "Comprehensive guide to improving home energy efficiency with secondary glazing, including benefits, installation techniques, and cost analysis.",
            "author": {
              "@type": "Organization",
              "name": "Secondary Glazing Specialist"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Secondary Glazing Specialist",
              "logo": {
                "@type": "ImageObject",
                "url": "https://secondaryglazingspecialist.com/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://secondaryglazingspecialist.com/residential/energy-performance"
            }
          }
        `}
      </script>
    </Helmet>
  );
};
