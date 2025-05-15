
// Define common types for page configurations
export type SchemaMarkup = Record<string, any>;

export interface PageConfig {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  keywords?: string;
  schemaMarkup?: SchemaMarkup;
}
