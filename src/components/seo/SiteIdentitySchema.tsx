import React from "react";
import { Helmet } from "react-helmet-async";

const SITE = "https://secondaryglazingspecialist.com";

const ORG_ID = `${SITE}/#organization`;
const WEBSITE_ID = `${SITE}/#website`;

const SAME_AS = [
  "https://www.instagram.com/secondaryglazinglondon/",
  "https://www.linkedin.com/in/secondary-glazing-specialist-7500653a2/",
  "https://x.com/Sec0ndaryGlazin",
  "https://web.facebook.com/profile.php?id=61585744672659",
];

/**
 * Sitewide Organization + WebSite JSON-LD.
 * Rendered once from AppRoutes so every route carries consistent
 * publisher, logo, social profile and sitename signals.
 */
export const SiteIdentitySchema: React.FC = () => {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: "Secondary Glazing Specialist",
        alternateName: [
          "Secondary Glazing Specialist London",
          "Secondary Glazing Specialists",
        ],
        url: `${SITE}/`,
        logo: {
          "@type": "ImageObject",
          "@id": `${SITE}/#logo`,
          url: `${SITE}/lovable-uploads/b39446b8-e7b5-4000-ac4b-a7a691a5bb14.png`,
          contentUrl: `${SITE}/lovable-uploads/b39446b8-e7b5-4000-ac4b-a7a691a5bb14.png`,
          caption: "Secondary Glazing Specialist",
          width: 512,
          height: 512,
        },
        image: { "@id": `${SITE}/#logo` },
        description:
          "London secondary glazing specialists delivering acoustic, thermal and heritage-compliant window upgrades for listed buildings, conservation areas and commercial properties.",
        email: "info@secondaryglazingspecialist.com",
        telephone: "+44 20 7060 1572",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Arch 141, MacFarlane Road",
          addressLocality: "London",
          addressRegion: "Greater London",
          postalCode: "W12 7LA",
          addressCountry: "GB",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+44 20 7060 1572",
            contactType: "customer service",
            areaServed: "GB",
            availableLanguage: ["English"],
          },
        ],
        sameAs: SAME_AS,
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: `${SITE}/`,
        name: "Secondary Glazing Specialist",
        alternateName: "Secondary Glazing Specialist London",
        description:
          "Expert secondary glazing installation across London and the Home Counties — up to 54dB noise reduction and 60% heat retention without altering original windows.",
        inLanguage: "en-GB",
        publisher: { "@id": ORG_ID },
        copyrightHolder: { "@id": ORG_ID },
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(graph)}</script>
    </Helmet>
  );
};

export default SiteIdentitySchema;