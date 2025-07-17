import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { StrictMode } from "react";
import Home from "./pages/Home.tsx";
import CardDetail from "./pages/CardDetail.tsx";
import NotFound from "./pages/NotFound.tsx";
import { CarritoProvider } from "./pages/Carrito.tsx";
import CarritoPage from "./pages/CarritoPage.tsx";
import Layout from "./components/Layout.tsx";


// App va con mayuscula, el llamado App
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* provider permite manejar las rutas */}
    <BrowserRouter>
      <CarritoProvider>
        {/* Switch de las rutas  */}
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<App />} />
            <Route path="/products/:id" element={<CardDetail />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/carrito" element={<CarritoPage />} />
          </Route>
        </Routes>
      </CarritoProvider>
    </BrowserRouter>
  </StrictMode>
);
