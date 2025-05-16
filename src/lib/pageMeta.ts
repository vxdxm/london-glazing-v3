
import { PAGE_CONFIGS } from "@/constants/pageConfigs";
import { PageConfig, SchemaMarkup } from "@/constants/pageConfigTypes";

export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  keywords?: string;
  schemaMarkup?: SchemaMarkup;
}

/**
 * Gets the meta data for a specific URL path
 */
export function getPageMeta(url: string): PageMeta {
  // Convert URL to clean path
  const cleanPath = getCleanPath(url);
  
  // Check different path categories
  if (isHomePath(cleanPath)) {
    return getHomePageMeta();
  } else if (isSpecializedPath(cleanPath)) {
    return getSpecializedPageMeta(cleanPath);
  } else if (isCommercialPath(cleanPath)) {
    return getCommercialPageMeta(cleanPath);
  } else if (isResidentialPath(cleanPath)) {
    return getResidentialPageMeta(cleanPath);
  }
  
  // Default to home if no match is found
  return PAGE_CONFIGS.home;
}

/**
 * Cleans the URL by removing query parameters
 */
function getCleanPath(url: string): string {
  return url.split('?')[0]; // Remove query parameters
}

/**
 * Checks if the path is the home page
 */
function isHomePath(path: string): boolean {
  return path === '/' || path === '';
}

/**
 * Gets meta data for the home page
 */
function getHomePageMeta(): PageMeta {
  return PAGE_CONFIGS.home;
}

/**
 * Checks if the path is a specialized services path
 */
function isSpecializedPath(path: string): boolean {
  return path === '/specialized-services' || 
         path === '/secondary-glazing-noise-reduction' || 
         path.includes('/specialized/') ||
         path === '/specialized-services';
}

/**
 * Gets meta data for specialized service pages
 */
function getSpecializedPageMeta(path: string): PageMeta {
  if (path === '/specialized-services') {
    return PAGE_CONFIGS.specialized;
  } else if (path === '/secondary-glazing-noise-reduction') {
    return PAGE_CONFIGS.noiseReduction;
  } else if (path === '/specialized/acoustic-glazing') {
    return PAGE_CONFIGS.acousticGlazing;
  } else if (path.includes('/specialized/glass')) {
    return handleSpecializedGlassPath(path);
  }
  
  return PAGE_CONFIGS.specialized;
}

/**
 * Handles specialized glass paths and customizes the title 
 */
function handleSpecializedGlassPath(path: string): PageMeta {
  // Start with the base glass options config
  let pageMeta = PAGE_CONFIGS.glassOptions || {
    title: "Specialized Glass Options | Secondary Glazing Specialist",
    description: "Discover our range of specialized glass options for secondary glazing. From noise reduction to thermal performance, find the perfect glass solution.",
    canonical: `https://secondaryglazingspecialist.com${path}`,
    ogImage: "/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
    keywords: "secondary glazing, specialized glass, acoustic glass, thermal glass, noise reduction"
  };
  
  // For dynamic paths, customize the title based on the path
  if (path.includes('/specialized/glass/')) {
    const segments = path.split('/');
    const lastSegment = segments[segments.length - 1];
    const formattedSegment = formatPathSegment(lastSegment);
    
    return {
      ...pageMeta,
      title: `${formattedSegment} | Secondary Glazing Specialist`,
      canonical: `https://secondaryglazingspecialist.com${path}`
    };
  }
  
  return pageMeta;
}

/**
 * Checks if the path is a commercial services path
 */
function isCommercialPath(path: string): boolean {
  return path.includes('/commercial');
}

/**
 * Gets meta data for commercial pages
 */
function getCommercialPageMeta(path: string): PageMeta {
  if (path === '/commercial/office-buildings') {
    return PAGE_CONFIGS.officeBuildings;
  }
  
  // Default commercial page
  return PAGE_CONFIGS.commercial || {
    title: "Commercial Secondary Glazing Solutions | Secondary Glazing Specialist",
    description: "Professional secondary glazing solutions for commercial properties, offices, and business premises. Enhance comfort and reduce energy costs.",
    canonical: `https://secondaryglazingspecialist.com${path}`,
    ogImage: "/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
    keywords: "commercial secondary glazing, office glazing, business windows, energy efficiency"
  };
}

/**
 * Checks if the path is a residential services path
 */
function isResidentialPath(path: string): boolean {
  return path.includes('/residential');
}

/**
 * Gets meta data for residential pages
 */
function getResidentialPageMeta(path: string): PageMeta {
  // Default residential page
  return PAGE_CONFIGS.residential || {
    title: "Residential Secondary Glazing Solutions | Secondary Glazing Specialist",
    description: "High-quality residential secondary glazing solutions for improved insulation, noise reduction, and energy efficiency in your home.",
    canonical: `https://secondaryglazingspecialist.com${path}`,
    ogImage: "/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
    keywords: "residential secondary glazing, home insulation, noise reduction, energy efficiency"
  };
}

/**
 * Formats a path segment to be title case
 */
function formatPathSegment(segment: string): string {
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
