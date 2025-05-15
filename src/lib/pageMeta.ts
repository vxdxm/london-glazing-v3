
import { PAGE_CONFIGS } from "@/constants/pageConfigs";

export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  keywords?: string;
  schemaMarkup?: Record<string, any>;
}

/**
 * Gets the meta data for a specific URL path
 */
export function getPageMeta(url: string): PageMeta {
  // Default to home if no match is found
  let pageMeta = PAGE_CONFIGS.home;
  
  // Convert URL to path
  const path = url.split('?')[0]; // Remove query parameters
  
  // Map paths to config keys
  if (path === '/' || path === '') {
    pageMeta = PAGE_CONFIGS.home;
  } else if (path === '/specialized-services') {
    pageMeta = PAGE_CONFIGS.specialized;
  } else if (path === '/commercial/office-buildings') {
    pageMeta = PAGE_CONFIGS.officeBuildings;
  } else if (path === '/secondary-glazing-noise-reduction') {
    pageMeta = PAGE_CONFIGS.noiseReduction;
  } else if (path === '/specialized/acoustic-glazing') {
    pageMeta = PAGE_CONFIGS.acousticGlazing;
  } else if (path.includes('/specialized/glass')) {
    pageMeta = PAGE_CONFIGS.glassOptions || {
      title: "Specialized Glass Options | Secondary Glazing Specialist",
      description: "Discover our range of specialized glass options for secondary glazing. From noise reduction to thermal performance, find the perfect glass solution.",
      canonical: `https://secondaryglazingspecialist.com${path}`,
      ogImage: "/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
      keywords: "secondary glazing, specialized glass, acoustic glass, thermal glass, noise reduction"
    };
  } else if (path.includes('/residential')) {
    pageMeta = PAGE_CONFIGS.residential || {
      title: "Residential Secondary Glazing Solutions | Secondary Glazing Specialist",
      description: "High-quality residential secondary glazing solutions for improved insulation, noise reduction, and energy efficiency in your home.",
      canonical: `https://secondaryglazingspecialist.com${path}`,
      ogImage: "/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
      keywords: "residential secondary glazing, home insulation, noise reduction, energy efficiency"
    };
  } else if (path.includes('/commercial')) {
    pageMeta = PAGE_CONFIGS.commercial || {
      title: "Commercial Secondary Glazing Solutions | Secondary Glazing Specialist",
      description: "Professional secondary glazing solutions for commercial properties, offices, and business premises. Enhance comfort and reduce energy costs.",
      canonical: `https://secondaryglazingspecialist.com${path}`,
      ogImage: "/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
      keywords: "commercial secondary glazing, office glazing, business windows, energy efficiency"
    };
  }

  // For dynamic paths like /specialized/glass/*, customize the title based on the path
  if (path.includes('/specialized/glass/')) {
    const segments = path.split('/');
    const lastSegment = segments[segments.length - 1];
    const formattedSegment = lastSegment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    pageMeta = {
      ...pageMeta,
      title: `${formattedSegment} | Secondary Glazing Specialist`,
      canonical: `https://secondaryglazingspecialist.com${path}`
    };
  }

  return pageMeta;
}
