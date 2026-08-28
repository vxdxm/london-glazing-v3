
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import viteCompression from 'vite-plugin-compression';

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
        // NOTE: do not hand-split React out of the vendor chunk — doing so
        // reorders module init and breaks with "undefined reading createContext".
        // Rollup's default chunking already splits lazy routes per page.
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
