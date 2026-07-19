
import React from "react";
import { Helmet } from "react-helmet-async";

const HomeSEO = () => {
  return (
    <Helmet>
      {/* Title, description, canonical, og:*, twitter:* are emitted by EnhancedSEO
          on the Index page to avoid duplicate meta tags. Only unique JSON-LD lives here. */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Secondary Glazing Specialist",
          "url": "https://secondaryglazingspecialist.com",
          "logo": "https://secondaryglazingspecialist.com/lovable-uploads/b39446b8-e7b5-4000-ac4b-a7a691a5bb14.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "0207 060 1572",
            "contactType": "customer service",
            "areaServed": "London"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "London",
            "postalCode": "W12 7LA",
            "streetAddress": "Arch 141, MacFarlane Road"
          },
          "sameAs": [
            "https://www.instagram.com/secondaryglazinglondon/",
            "https://www.linkedin.com/in/secondary-glazing-specialist-7500653a2/",
            "https://x.com/Sec0ndaryGlazin",
            "https://web.facebook.com/profile.php?id=61585744672659"
          ]
        })}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://secondaryglazingspecialist.com",
          "name": "Secondary Glazing Specialist London",
          "description": "London's leading secondary glazing specialists offering expert installation, repairs and acoustic solutions. Enhance your home's thermal efficiency and reduce noise pollution.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://secondaryglazingspecialist.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://secondaryglazingspecialist.com/"
            }
          ]
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is secondary glazing and how does it differ from double glazing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Secondary glazing is a fully independent inner window installed behind your existing primary window, creating a sealed air cavity (typically 100mm) that dramatically improves acoustic and thermal performance. Unlike double glazing, it does not replace the original window, making it the only compliant upgrade for listed buildings and conservation areas. It also outperforms double glazing acoustically because the wider cavity attenuates low-frequency traffic and aircraft noise more effectively."
              }
            },
            {
              "@type": "Question",
              "name": "How much noise reduction does secondary glazing provide?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "With 10.8mm Stadip Silence acoustic laminated glass and a 100mm air gap, our secondary glazing achieves up to 54dB noise reduction — cutting perceived external noise by 70–80%. This is significantly better than standard double glazing (typically 28–32dB) and is effective against traffic, trains, aircraft, and low-frequency urban rumble."
              }
            },
            {
              "@type": "Question",
              "name": "Do I need planning permission or listed building consent for secondary glazing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Secondary glazing is generally classed as a reversible internal alteration and rarely requires planning permission. For Grade I and Grade II listed buildings, Listed Building Consent is usually required but almost always granted because the original window is preserved. In conservation areas or Article 4 zones, we recommend a short pre-application enquiry with the LPA — our Compliance Hub includes a ready-to-send email template."
              }
            },
            {
              "@type": "Question",
              "name": "How much does secondary glazing cost in London?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Secondary glazing in London typically ranges from £350 per window for entry-level fixed panels to £1,200+ for large acoustic vertical-sliding units using 10.8mm Stadip Silence glass. Most residential projects average £550–£850 per window installed. Pricing depends on glass specification, window size, opening type (fixed, lift-out, hinged, horizontal or vertical sliding), and finish."
              }
            },
            {
              "@type": "Question",
              "name": "Will secondary glazing improve my EPC rating and reduce heating bills?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Secondary glazing with Pilkington K low-emissivity glass retains up to 60% more heat than single glazing, typically cutting heating bills by 15–30% and improving whole-window U-values from ~4.8 to ~1.9 W/m²K. It is a recognised measure under PAS 2035 retrofit assessments and helps landlords meet MEES minimum EPC standards without replacing original windows."
              }
            },
            {
              "@type": "Question",
              "name": "Does secondary glazing prevent condensation and mould?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes — by raising the internal glass surface temperature above the room's dew point, secondary glazing eliminates the cold thermal bridge that causes condensation on single-glazed sash windows. In monitored London installations, we typically see a 99% reduction in condensation events, which in turn prevents the damp conditions mould requires to grow."
              }
            },
            {
              "@type": "Question",
              "name": "How long does installation take and is it disruptive?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A typical residential window is installed in 2–4 hours, and most homes are completed in a single day. There is no wet trade, no scaffolding, and no damage to the original window or surrounding joinery. Commercial and hotel installations are phased room-by-room so occupancy and trading continue uninterrupted."
              }
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default HomeSEO;
