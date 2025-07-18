
import { Outlet, useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Respuesta from "../components/Response";
import Footer from "./Footer";


function Layout() {
  const navigate = useNavigate();
  const [filtro, setFiltro] = useState("");


  const productos = Respuesta.flatMap((cat) => cat.producto);
  const categorias = Array.from(new Set(productos.map((prod) => prod.categoria)));

  const handleSearch = (value: string) => {
    setFiltro(value);
    navigate("/busqueda?query=" + value.toLowerCase());
  };

  const handleCategoria = (categoria: string) => {

    navigate("/categoria/" + encodeURIComponent(categoria));
  };

  return (
    <>

      <Navbar
        filter={filtro}
        onSearch={handleSearch}
        categoria={categorias}
        selecCategoria={handleCategoria}
      />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Layout;