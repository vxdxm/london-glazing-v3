// Base URL for canonical links
const BASE_URL = "https://secondaryglazingspecialist.com";

export const PAGE_CONFIGS = {
  home: {
    title: "UK's Leading Secondary Glazing Experts",
    description: "Premium secondary glazing solutions across the UK. Noise reduction + thermal insulation specialists.",
    canonical: `${BASE_URL}/`,
    ogImage: "/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
    keywords: "secondary glazing, window insulation, noise reduction, thermal insulation, London glazing specialists",
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Secondary Glazing Specialist",
      "url": "https://secondaryglazingspecialist.com",
      "logo": "https://secondaryglazingspecialist.com/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "0207 060 1572",
        "contactType": "customer service",
        "areaServed": "London"
      }
    }
  },
  specialized: {
    title: "Specialized Secondary Glazing Services",
    description: "Expert specialized secondary glazing services including acoustic glazing, thermal insulation, and security solutions. Professional installation for specific requirements.",
    canonical: `${BASE_URL}/specialized`,
    ogImage: "/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
    keywords: "specialized glazing, acoustic glazing, thermal insulation, security glazing, noise reduction, energy efficiency"
  },
  acousticGlazing: {
    title: "Acoustic Glazing | Reduce Noise with Secondary Glazing Solutions",
    description: "Explore our acoustic glazing solutions for effective noise reduction. Our secondary glazing provides superior soundproofing for homes and commercial properties.",
    canonical: `${BASE_URL}/specialized/acoustic-glazing`,
    ogImage: "/lovable-uploads/3ad0aa57-ae50-4494-9fb7-f0420cffc5aa.png",
    keywords: "acoustic glazing, noise reduction, soundproofing windows, secondary glazing, sound insulation, noise pollution",
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Acoustic Glazing Solutions for Noise Reduction",
      "description": "Expert acoustic glazing solutions that can reduce external noise by up to 80% compared to single glazing, creating a more peaceful living or working environment.",
      "image": "https://secondaryglazingspecialist.com/lovable-uploads/3ad0aa57-ae50-4494-9fb7-f0420cffc5aa.png",
      "datePublished": "2024-07-10",
      "dateModified": "2025-05-09",
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
        "@id": "https://secondaryglazingspecialist.com/specialized/acoustic-glazing"
      },
      "keywords": "acoustic glazing, noise reduction, soundproofing windows, secondary glazing, sound insulation, noise pollution"
    }
  },
  noiseReduction: {
    title: "Secondary Glazing Noise Reduction | Up to 80% Noise Reduction Solutions",
    description: "Discover how secondary glazing can reduce noise by up to 80%. Expert acoustic solutions for London homes near busy roads, flight paths and urban areas.",
    canonical: `${BASE_URL}/secondary-glazing-noise-reduction`,
    ogImage: "/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
    keywords: "noise reduction glazing, soundproofing, acoustic glass, sound insulation, London noise solution",
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "headline": "Secondary Glazing Noise Reduction Solutions",
      "description": "Discover how secondary glazing can reduce noise by up to 80%. Expert acoustic solutions for London homes near busy roads, flight paths and urban areas.",
      "image": "/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
      "url": "https://secondaryglazingspecialist.com/secondary-glazing-noise-reduction",
      "mainEntity": {
        "@type": "Service",
        "name": "Noise Reduction Secondary Glazing",
        "description": "Professional installation of acoustic secondary glazing that significantly reduces external noise pollution.",
        "provider": {
          "@type": "Organization",
          "name": "Secondary Glazing Specialist",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "London",
            "postalCode": "W12 7LA",
            "streetAddress": "Arch 141, MacFarlane Road"
          },
          "telephone": "0207 060 1572"
        }
      }
    }
  },
  officeBuildings: {
    title: "Secondary Glazing for Office Buildings | Noise & Energy Solutions",
    description: "Transform your office with secondary glazing - reduce workplace noise by up to 80% and improve energy efficiency. Create comfortable, productive workspaces in London.",
    canonical: `${BASE_URL}/commercial/office-buildings`,
    ogImage: "/lovable-uploads/9161feeb-12cc-4a83-adf6-9c9cc52dc4aa.png",
    keywords: "office glazing, commercial glazing, office noise reduction, business energy efficiency, workspace insulation",
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "headline": "Secondary Glazing Solutions for Office Buildings",
      "description": "Our expert secondary glazing solutions for office buildings are designed to enhance workplace comfort and productivity.",
      "image": "/lovable-uploads/9161feeb-12cc-4a83-adf6-9c9cc52dc4aa.png",
      "mainEntity": {
        "@type": "Service",
        "name": "Office Building Secondary Glazing",
        "description": "Specialized glazing solutions for commercial office buildings.",
        "provider": {
          "@type": "Organization",
          "name": "Secondary Glazing Specialist",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "London",
            "postalCode": "W12 7LA",
            "streetAddress": "Arch 141, MacFarlane Road"
          },
          "telephone": "0207 060 1572"
        }
      }
    }
  },
  hospitalitySector: {
    title: "Hospitality Secondary Glazing | Hotels & Restaurants Solutions",
    description: "Specialist secondary glazing for hotels and restaurants. Create peaceful guest environments, reduce street noise, and enhance energy efficiency in your hospitality venue.",
    canonical: `${BASE_URL}/commercial/hospitality-sector`,
    ogImage: "/lovable-uploads/96faaaa8-1961-4d56-897f-cf5fba13e0cd.png",
    keywords: "hotel glazing, restaurant glazing, hospitality windows, noise reduction, hotel sound insulation",
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "headline": "Secondary Glazing Solutions for the Hospitality Industry",
      "description": "Create the perfect environment for your guests with our premium secondary glazing solutions, designed specifically for hotels, restaurants, and leisure facilities.",
      "image": "/lovable-uploads/96faaaa8-1961-4d56-897f-cf5fba13e0cd.png",
      "mainEntity": {
        "@type": "Service",
        "name": "Hospitality Secondary Glazing",
        "description": "Specialized glazing solutions for hotels, restaurants, and bars.",
        "provider": {
          "@type": "Organization",
          "name": "Secondary Glazing Specialist",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "London",
            "postalCode": "W12 7LA",
            "streetAddress": "Arch 141, MacFarlane Road"
          },
          "telephone": "0207 060 1572"
        }
      }
    }
  },
  listedBuildings: {
    title: "Secondary Glazing for Listed Buildings | Heritage Conservation London",
    description: "Conservation-compliant secondary glazing for listed buildings. Improve thermal and acoustic performance while preserving architectural heritage - planning permission friendly.",
    canonical: `${BASE_URL}/commercial/listed-buildings`,
    ogImage: "/lovable-uploads/5592528a-f976-44e2-a6af-e79c4a3c3f18.png",
    keywords: "listed buildings secondary glazing, conservation area windows, heritage glazing London",
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "headline": "Secondary Glazing Solutions for Listed Buildings and Conservation Areas",
      "description": "Our specialist secondary glazing solutions are designed to meet strict conservation requirements while providing modern comfort benefits to listed and heritage properties in London.",
      "image": "https://secondaryglazingspecialist.com/lovable-uploads/5592528a-f976-44e2-a6af-e79c4a3c3f18.png",
      "mainEntity": {
        "@type": "Service",
        "name": "Listed Building Secondary Glazing",
        "description": "Specialized glazing solutions for listed buildings and conservation areas.",
        "provider": {
          "@type": "Organization",
          "name": "Secondary Glazing Specialist",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "London",
            "postalCode": "W12 7LA",
            "streetAddress": "Arch 141, MacFarlane Road"
          },
          "telephone": "0207 060 1572"
        }
      }
    }
  }
  // Other pages can be added here as needed
};
