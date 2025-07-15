import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { StrictMode } from "react";
import Home from "./pages/Home.tsx";
import CardDetail from "./pages/CardDetail.tsx";
import NotFound from "./pages/NotFound.tsx";

// App va con mayuscula, el llamado App
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* provider permite manejar las rutas */}
    <BrowserRouter>
      {/* Switch de las rutas  */}
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/products" element={<App />} />
        <Route path="/products/:id" element={<CardDetail />} />
        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  </StrictMode>
);
