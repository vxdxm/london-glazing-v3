import { Helmet } from "react-helmet-async";

const LiftOutSEO = () => {
    const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Lift-Out Secondary Glazing",
    "description": "Removable secondary glazing panels for seasonal use. Install in winter for 50-60% heat loss reduction, remove in summer for natural ventilation. Perfect for rental properties and listed building trials.",
    "brand": {
      "@type": "Brand",
      "name": "Secondary Glazing Specialist"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "GBP",
      "lowPrice": "300",
      "highPrice": "500",
      "offerCount": "3",
      "availability": "https://schema.org/InStock"
    },
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
        "name": "Residential",
        "item": "https://secondaryglazingspecialist.com/residential"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Lift-Out Secondary Glazing",
        "item": "https://secondaryglazingspecialist.com/residential/lift-out"
      }
    ]
  };

  return (
    <Helmet>
      <title>Lift-Out Secondary Glazing London | Seasonal Flexibility £300-£500 | Removable Panels</title>
      <meta 
        name="description" 
        content="Lift-out secondary glazing offers seasonal flexibility at £300-£500 per window. Install in winter for 50-60% heat savings, remove in summer. Perfect for rentals and listed building trials. Free consultation." 
      />
      <meta 
        name="keywords" 
        content="lift-out secondary glazing, removable secondary glazing, seasonal secondary glazing London, rental property glazing, listed building trial glazing, magnetic secondary glazing, clip-in glazing panels, reversible window insulation" 
      />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://secondaryglazingspecialist.com/residential/lift-out" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Lift-Out Secondary Glazing London | Seasonal Flexibility" />
      <meta property="og:description" content="Removable secondary glazing panels for seasonal use. £300-£500 per window. Install in winter, remove in summer. Perfect for rentals and heritage trials." />
      <meta property="og:type" content="product" />
      <meta property="og:url" content="https://secondaryglazingspecialist.com/residential/lift-out" />
      <meta property="og:image" content="https://cdn.marblism.com/teuTWb0RCMD.webp" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Lift-Out Secondary Glazing | Seasonal Flexibility London" />
      <meta name="twitter:description" content="Removable secondary glazing: Install in winter, remove in summer. £300-£500 per window. Perfect for rentals and listed building trials." />
      <meta name="twitter:image" content="https://cdn.marblism.com/teuTWb0RCMD.webp" />
      <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
    </Helmet>
  );
};

export default LiftOutSEO;

export const PAGE_FAQS = [
  { question: "How long does removal take for lift-out secondary glazing?", answer: "5-10 minutes per window using simple lift/click release — tool-free and straightforward." },
  { question: "Where do I store lift-out panels?", answer: "Loft storage is most common, though garage, under-bed, or basement work well. You'll need 2-3 square metres for a typical 12-window property." },
  { question: "Is lift-out cheaper than hinged secondary glazing?", answer: "Yes — you save £1,200-£2,400 on a 12-window property compared to hinged systems." },
  { question: "Can I install and remove lift-out panels myself?", answer: "Absolutely. Training is provided at installation, and the process is designed to be homeowner-friendly." },
  { question: "How much does lift-out secondary glazing cost?", answer: "Lift-out secondary glazing costs £300-£500 per window, making it a mid-range option between fixed (£250-£550) and hinged (£400-£700) systems." }
];
