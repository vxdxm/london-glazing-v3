
import React from "react";
import ReactDOM, { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { LazyLoadProvider } from "./providers/LazyLoadProvider";

const root = document.getElementById("root")!;
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <LazyLoadProvider>
        <App />
      </LazyLoadProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// Use hydration for SSR in production
if (import.meta.env.PROD) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
