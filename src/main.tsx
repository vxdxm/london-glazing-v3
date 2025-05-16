
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { LazyLoadProvider } from "./providers/LazyLoadProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LazyLoadProvider>
      <App />
    </LazyLoadProvider>
  </React.StrictMode>
);
