
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { LazyLoadProvider } from "./providers/LazyLoadProvider";
import { HelmetProvider } from "react-helmet-async";

// Expose helmetContext for SSG/SSR head extraction during build
export const helmetContext = {};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <LazyLoadProvider>
        <App />
      </LazyLoadProvider>
    </HelmetProvider>
  </React.StrictMode>
);
