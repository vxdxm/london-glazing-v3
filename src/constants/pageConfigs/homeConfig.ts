
import { PageConfig } from "../pageConfigTypes";

export const homeConfig: PageConfig = {
  title: "UK's Leading Secondary Glazing Experts",
  description: "Premium secondary glazing solutions across the UK. Noise reduction + thermal insulation specialists for residential and commercial properties.",
  canonical: "https://secondaryglazingspecialist.com",
  ogImage: "/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
  keywords: "secondary glazing, window insulation, noise reduction, thermal insulation, london glazing",
  schemaMarkup: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Secondary Glazing Specialist",
    "description": "Premium secondary glazing solutions across the UK. Noise reduction + thermal insulation specialists.",
    "url": "https://secondaryglazingspecialist.com",
    "telephone": "0207 060 1572",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Arch 141, MacFarlane Road",
      "addressLocality": "London",
      "postalCode": "W12 7LA",
      "addressCountry": "UK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.505379",
      "longitude": "-0.226773"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    },
    "image": "https://secondaryglazingspecialist.com/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
    "priceRange": "££"
  }
};
