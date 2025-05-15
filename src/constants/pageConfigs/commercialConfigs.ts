
import { PageConfig } from "../pageConfigTypes";

export const commercialConfig: PageConfig = {
  title: "Commercial Secondary Glazing | Business Property Solutions",
  description: "Professional secondary glazing solutions for commercial properties. Improve energy efficiency, reduce noise, and enhance security for your business.",
  canonical: "https://secondaryglazingspecialist.com/commercial",
  ogImage: "/lovable-uploads/9161feeb-12cc-4a83-adf6-9c9cc52dc4aa.png",
  keywords: "commercial glazing, office windows, business properties, hotel windows, energy efficiency, noise reduction",
  schemaMarkup: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Secondary Glazing",
    "description": "Professional secondary glazing solutions for commercial buildings.",
    "url": "https://secondaryglazingspecialist.com/commercial",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Secondary Glazing Specialist",
      "telephone": "0207 060 1572"
    },
    "image": "https://secondaryglazingspecialist.com/lovable-uploads/9161feeb-12cc-4a83-adf6-9c9cc52dc4aa.png"
  }
};

export const officeBuildingsConfig: PageConfig = {
  title: "Secondary Glazing for Office Buildings | Commercial Solutions",
  description: "Enhance workplace comfort and productivity with our secondary glazing solutions for commercial offices. Reduce noise and improve energy efficiency.",
  canonical: "https://secondaryglazingspecialist.com/commercial/office-buildings",
  ogImage: "/lovable-uploads/9161feeb-12cc-4a83-adf6-9c9cc52dc4aa.png",
  keywords: "office glazing, commercial glazing, workplace noise reduction, office energy efficiency, business windows",
  schemaMarkup: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Office Building Secondary Glazing",
    "description": "Secondary glazing solutions for commercial office buildings.",
    "url": "https://secondaryglazingspecialist.com/commercial/office-buildings",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Secondary Glazing Specialist",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Arch 141, MacFarlane Road",
        "addressLocality": "London",
        "postalCode": "W12 7LA",
        "addressCountry": "UK"
      },
      "telephone": "0207 060 1572"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "availability": "https://schema.org/InStock"
    },
    "image": "https://secondaryglazingspecialist.com/lovable-uploads/9161feeb-12cc-4a83-adf6-9c9cc52dc4aa.png"
  }
};
