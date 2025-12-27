
import React from "react";
import { Helmet } from "react-helmet";

const RepairsSEO = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I know if spiral balances need replacing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Key signs include sashes dropping suddenly, requiring excessive force to lift, slowly falling when positioned mid-height, uneven operation, or visible damage to balance components."
        }
      },
      {
        "@type": "Question",
        "name": "How long do repairs typically take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Spiral balance replacement takes 30-45 minutes for the first window, plus 20-25 minutes for each additional unit. Most repairs are completed in a single visit when parts are in stock."
        }
      },
      {
        "@type": "Question",
        "name": "Can you repair any brand of secondary glazing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we service Selectaglaze, Anglian, Storm, Everest, and custom installations. Our universal parts compatibility covers 95% of systems regardless of age or manufacturer."
        }
      },
      {
        "@type": "Question",
        "name": "Is it better to repair or replace?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Repair makes sense when addressing single component failures in systems under 15 years old, where repair costs remain under 60% of replacement cost. Multiple component failures or extensive damage may justify full replacement."
        }
      },
      {
        "@type": "Question",
        "name": "What warranty do you provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "12 months on parts (spiral balances, hinges, locks, glass), 6 months on labor. This excludes accidental damage, normal wear and tear, or DIY interference."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Secondary Glazing Repairs London",
    "description": "Expert secondary glazing repair services in London. Specialists in spiral balance replacements, hinge repairs, lock services, seal replacement, and glass repairs. All major brands serviced including Selectaglaze, Anglian, Storm, and Everest.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Secondary Glazing Specialist",
      "telephone": "0207 060 1572",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "London",
        "addressRegion": "London",
        "addressCountry": "UK"
      },
      "priceRange": "£85-£280"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 51.5074,
        "longitude": -0.1278
      },
      "geoRadius": "50 mi"
    },
    "serviceType": ["Window Repair", "Spiral Balance Replacement", "Glass Replacement", "Lock Repair"],
    "offers": [
      {
        "@type": "Offer",
        "name": "Spiral Balance Replacement",
        "priceCurrency": "GBP",
        "price": "85-150",
        "priceValidUntil": "2025-12-31"
      },
      {
        "@type": "Offer",
        "name": "Hinge Repairs",
        "priceCurrency": "GBP",
        "price": "60-95",
        "priceValidUntil": "2025-12-31"
      },
      {
        "@type": "Offer",
        "name": "Glass Replacement",
        "priceCurrency": "GBP",
        "price": "95-280",
        "priceValidUntil": "2025-12-31"
      }
    ],
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.9",
        "bestRating": "5"
      },
      "author": {
        "@type": "Organization",
        "name": "Secondary Glazing Specialist"
      }
    },
    "datePublished": "2024-01-01",
    "dateModified": currentDate
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://secondaryglazingspecialist.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Secondary Glazing Repairs",
        "item": "https://secondaryglazingspecialist.com/secondary-glazing-repairs"
      }
    ]
  };
  
  return (
    <Helmet>
      <title>Secondary Glazing Repairs London | Spiral Balance & Window Repairs from £85</title>
      <meta 
        name="description" 
        content="Expert secondary glazing repairs in London from £85-£280. Spiral balance replacement, hinge repairs, lock services & glass replacement. All brands including Selectaglaze, Anglian, Storm. Same-day emergency service available." 
      />
      <meta name="keywords" content="secondary glazing repairs london, spiral balance replacement, window repairs, selectaglaze repairs, anglian repairs, storm window repairs, glazing maintenance, sliding window repairs, secondary glazing service" />
      <link rel="canonical" href="https://secondaryglazingspecialist.com/secondary-glazing-repairs" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://secondaryglazingspecialist.com/secondary-glazing-repairs" />
      <meta property="og:title" content="Secondary Glazing Repairs London | Expert Repair Services from £85" />
      <meta property="og:description" content="Expert secondary glazing repairs in London. Spiral balance replacement, hinge repairs, glass & seal services. All major brands. Same-day emergency available." />
      <meta property="og:image" content="https://cdn.marblism.com/4dXO_4Rof-e.webp" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://secondaryglazingspecialist.com/secondary-glazing-repairs" />
      <meta property="twitter:title" content="Secondary Glazing Repairs London | Expert Services from £85" />
      <meta property="twitter:description" content="Expert secondary glazing repairs in London. Spiral balance, hinges, glass & seals. All brands serviced. Same-day emergency available." />
      <meta property="twitter:image" content="https://cdn.marblism.com/4dXO_4Rof-e.webp" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default RepairsSEO;
