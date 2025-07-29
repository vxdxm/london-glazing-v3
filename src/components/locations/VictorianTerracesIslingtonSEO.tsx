import { Helmet } from "react-helmet";

export const VictorianTerracesIslingtonSEO = () => {
  return (
    <Helmet>
      <title>Secondary Glazing for Victorian Terraces in Islington | Sash Window Solutions</title>
      <meta name="description" content="Specialist secondary glazing for Victorian terraces in Islington. Preserve period character while improving thermal efficiency, reducing noise and eliminating draughts. Conservation area approved." />
      <meta name="keywords" content="secondary glazing Islington, Victorian terrace windows, sash window secondary glazing, conservation area glazing, period property insulation, Islington window solutions, Victorian house modernisation, draught proofing sash windows" />
      <link rel="canonical" href="https://secondaryglazingspecialist.com/locations/victorian-terraces-islington" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://secondaryglazingspecialist.com/locations/victorian-terraces-islington" />
      <meta property="og:title" content="Secondary Glazing for Victorian Terraces in Islington | Period Property Specialists" />
      <meta property="og:description" content="Transform your Victorian terrace with sympathetic secondary glazing. Maintain conservation area compliance while achieving modern thermal and acoustic performance." />
      <meta property="og:image" content="https://secondaryglazingspecialist.com/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://secondaryglazingspecialist.com/locations/victorian-terraces-islington" />
      <meta property="twitter:title" content="Secondary Glazing for Victorian Terraces in Islington" />
      <meta property="twitter:description" content="Specialist solutions for Victorian terraces in Islington. Conservation approved secondary glazing that preserves character while improving performance." />
      <meta property="twitter:image" content="https://secondaryglazingspecialist.com/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Secondary Glazing Specialist - Victorian Terraces Islington",
          "description": "Specialist secondary glazing installation for Victorian terraces in Islington, maintaining period character while improving thermal efficiency and noise reduction.",
          "url": "https://secondaryglazingspecialist.com/locations/victorian-terraces-islington",
          "areaServed": {
            "@type": "Place",
            "name": "Islington, London"
          },
          "serviceType": "Secondary Glazing Installation",
          "additionalType": "https://schema.org/GlazierService"
        })}
      </script>
    </Helmet>
  );
};