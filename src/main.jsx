import App from "../src/components/App";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "normalize.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
