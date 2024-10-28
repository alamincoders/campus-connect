import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MainLayout from "./layouts/MainLayout.jsx";
import "./styles/globals.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainLayout />
  </StrictMode>
);
