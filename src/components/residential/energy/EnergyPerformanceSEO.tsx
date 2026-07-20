
import { Helmet } from "react-helmet-async";

export const EnergyPerformanceSEO = () => {
  return (
    <Helmet>
      <title>Energy Performance & Secondary Glazing | Improve Your Home's Efficiency</title>
      <meta 
        name="description" 
        content="Boost your home's energy performance with secondary glazing. Calculate your potential savings from improved insulation and reduced heat loss - up to 60% more efficient." 
      />
      <meta 
        name="keywords" 
        content="secondary glazing, energy efficiency, thermal performance, energy savings, window insulation, home improvement"
      />
      <meta property="og:title" content="Energy Performance & Secondary Glazing | Improve Your Home's Efficiency" />
      <meta 
        property="og:description" 
        content="Boost your home's energy performance with secondary glazing. Calculate your potential savings from improved insulation and reduced heat loss - up to 60% more efficient." 
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
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How does secondary glazing improve energy performance?",
              "acceptedAnswer": { "@type": "Answer", "text": "By adding a sealed inner pane with a 100mm+ air cavity, secondary glazing reduces conductive and convective heat loss through windows by up to 60%, lowering the whole-window U-value from ~4.8 W/m²K to 1.6–1.9 W/m²K." }
            },
            {
              "@type": "Question",
              "name": "Will secondary glazing improve my EPC rating?",
              "acceptedAnswer": { "@type": "Answer", "text": "Yes. When entered as a retrofit measure in RdSAP with low-e glass, secondary glazing typically lifts an EPC by 3–8 points, often enough to move a D-rated Victorian terrace into a C band." }
            },
            {
              "@type": "Question",
              "name": "What's the payback period?",
              "acceptedAnswer": { "@type": "Answer", "text": "For a typical London home, energy savings of £400–£900 per year give payback of 6–10 years, with the additional benefit of eliminating draughts and cold-radiant discomfort from day one." }
            },
            {
              "@type": "Question",
              "name": "Does secondary glazing qualify under PAS 2035?",
              "acceptedAnswer": { "@type": "Answer", "text": "Yes. It is recognised in PAS 2035:2019 as an appropriate retrofit measure for traditional and heritage buildings where primary window replacement would compromise fabric or character." }
            },
            {
              "@type": "Question",
              "name": "Is condensation a risk after fitting?",
              "acceptedAnswer": { "@type": "Answer", "text": "Interstitial condensation is prevented by the warm inner pane raising interior surface temperatures above dew point. Minor trickle ventilation of the cavity is specified where existing sashes are not draught-proofed." }
            }
          ]
        })}
      </script>
    </Helmet>
  );
};
