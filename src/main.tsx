import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./main.scss";
import Calculator from "./Pages/Calculator.tsx";
import Splash from "./Pages/Splash.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<Splash />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
  </BrowserRouter>
);
