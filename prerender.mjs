
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readFileSync } from 'fs';

// Get current file location
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import the prerender.js configuration
const prerenderConfig = await import('./prerender.js');

// Export the main methods that are being called by the build script
export const render = prerenderConfig.render;
export const getTitle = prerenderConfig.getTitle;
export const getDescription = prerenderConfig.getDescription;
export default prerenderConfig.default;
