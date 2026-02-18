
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { LazyLoadProvider } from "./providers/LazyLoadProvider";
import { HelmetProvider } from "react-helmet-async";

// Expose helmetContext for SSG/SSR head extraction during build
export const helmetContext = {};

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <LazyLoadProvider>
        <App />
      </LazyLoadProvider>
    </HelmetProvider>
  </React.StrictMode>
);

// Signal to vite-plugin-prerender that the app has rendered and helmet tags are ready
requestAnimationFrame(() => {
  document.dispatchEvent(new Event('x-app-rendered'));
});
