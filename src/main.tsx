import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./assets/fonts/fonts.css";
import RequestPage from "./components/pages/requestPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RequestPage />
  </StrictMode>,
);
