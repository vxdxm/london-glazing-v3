
import { PAGE_CONFIGS } from "@/constants/pageConfigs";

interface PageMeta {
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
  }

  return pageMeta;
}
