import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import ProductCardContainer from "../components/ProductCardContainer";
import FrontShowElement from "../components/ProductCard";
import Respuesta from "../components/Response";
import { useCarrito } from "../pages/Carrito";
import { useState } from "react";

function Layout() {
    const { agregarAlCarrito } = useCarrito();
    const [count, setCount] = useState(0);
    const [filtro, setFiltro] = useState("");
    const [categoriaElegida, setCategoriaElegida] = useState("");

    const sumar1 = () => setCount((prev) => prev + 1);
    const restar1 = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

    const handleSearch = (value: string) => {
        setFiltro(value.toLowerCase());
    };

    const productos = Respuesta.flatMap((cat) => cat.producto);
    const categorias = Array.from(new Set(productos.map((prod) => prod.categoria)));

    const categoriaFiltrada = categoriaElegida
        ? productos.filter((p) => p.categoria === categoriaElegida)
        : [];

    const productosFiltrados = Respuesta.flatMap((categoria) =>
        categoria.producto.filter((prod) =>
            prod.title.toLowerCase().includes(filtro)
        )
    );

    return (
        <>
            <header>HEADER</header>

            <Navbar
                count={count}
                filter={filtro}
                onSearch={handleSearch}
                categoria={categorias}
                selecCategoria={setCategoriaElegida}
            />

            <img className="logo" src="/logoo.png" alt="logo inicio" />

            {categoriaFiltrada.length > 0 ? (
                <ProductCardContainer title={`Categoria de ${categoriaElegida}`}>
                    {categoriaFiltrada.slice(0, 6).map((prod) => (
                        <FrontShowElement
                            key={prod.id}
                            {...prod}
                            agregar={() => agregarAlCarrito(prod)}
                            quitar={restar1}
                        />
                    ))}
                </ProductCardContainer>
            ) : filtro ? (
                <div className="resultados-busqueda">
                    <ProductCardContainer title="Resultados de búsqueda">
                        {productosFiltrados.length > 0 ? (
                            productosFiltrados.slice(0, 6).map((prod) => (
                                <FrontShowElement
                                    key={prod.id}
                                    {...prod}
                                    agregar={() => agregarAlCarrito(prod)}
                                    quitar={restar1}
                                />
                            ))
                        ) : (
                            <p>No se encontraron productos.</p>
                        )}
                    </ProductCardContainer>
                </div>
            ) : null}

            <main><Outlet /></main>

            <footer>El footer</footer>
        </>
    );
}

export default Layout;
