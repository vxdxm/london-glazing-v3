
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import viteCompression from 'vite-plugin-compression';
import vitePrerender from 'vite-plugin-prerender';
const PuppeteerRenderer = vitePrerender.PuppeteerRenderer;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react({
      // SWC configuration options
    }),
    mode === 'development' &&
    componentTagger(),
    // Add compression plugin for production builds
    mode === 'production' && viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240, // Only compress files > 10KB
      deleteOriginFile: false, // Keep original files for browsers without gzip support
      filter: /\.(js|css|html|svg|json)$/i, // Compress only these file types
    }),
    // Also add brotli compression which is more efficient than gzip
    mode === 'production' && viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
      deleteOriginFile: false,
      filter: /\.(js|css|html|svg|json)$/i,
    }),
    // Prerender key pages for SSG with helmet extraction
    mode === 'production' && vitePrerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: [
        '/',
        '/contact',
        '/quote-request',
        '/gallery',
        '/faqs',
        '/about',
        '/case-studies',
        '/benefits',
        '/residential',
        '/commercial',
        '/specialized',
        '/blog',
        '/listed-buildings-secondary-glazing',
        '/conservation-areas-secondary-glazing',
        '/victorian-windows-secondary-glazing',
        '/sash-window-secondary-glazing',
        '/georgian-windows-secondary-glazing',
        '/edwardian-property-secondary-glazing',
        '/thermal-insulation-secondary-glazing',
        '/noise-reduction-secondary-glazing',
        '/areas/central-london',
        '/areas/north-london',
        '/areas/south-london',
        '/areas/east-london',
        '/areas/west-london',
        '/areas/greater-london',
        '/areas/home-counties',
        '/areas/kensington-chelsea',
        '/blog/acoustic-secondary-glazing-guide',
        '/blog/listed-building-secondary-glazing-guide',
        '/blog/epc-energy-efficiency-guide',
        '/blog/condensation-mould-prevention-guide',
        '/blog/commercial-mees-compliance-secondary-glazing',
        '/blog/hospitality-secondary-glazing-noise-reduction',
        '/blog/education-secondary-glazing-schools',
        '/blog/secondary-glazing-london-borough-guide',
        '/blog/secondary-glazing-london-cost-guide',
      ],
      renderer: new PuppeteerRenderer({
        renderAfterDocumentEvent: 'x-app-rendered',
        renderAfterTime: 5000,
        headless: true,
      }),
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Reduce chunk size to improve caching
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-components': ['@/components/ui/index'],
          'charts': ['recharts'],
          'forms': ['react-hook-form', '@hookform/resolvers', 'zod'],
          'utils': ['@/lib/utils'],
          'lucide': ['lucide-react'],
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    cssMinify: true,
    minify: true,
    sourcemap: mode === 'development',
    // Improve bundle size in production builds
    target: 'es2018',
    reportCompressedSize: false,
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom', 
      'recharts',
      '@hookform/resolvers',
      'zod',
      '@radix-ui/react-navigation-menu',
    ],
    // Disable dependency optimization scanning in node_modules
    exclude: ['lovable-tagger'],
  },
  // Add compression options
  esbuild: {
    // Remove console.log in production
    drop: mode === 'production' ? ['console', 'debugger'] : [],
    // Enable JSX optimization
    jsx: 'automatic',
  },
}));
