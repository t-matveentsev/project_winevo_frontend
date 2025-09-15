import App from "../src/components/App";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "normalize.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
