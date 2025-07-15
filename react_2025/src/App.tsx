import "./App.css";
import FrontShowElement from "./components/ProductCard.tsx";
import ProductCardContainer from "./components/ProductCardContainer.tsx";
import Respuesta from "./components/Response.tsx";
import Navbar from "./components/Navbar.tsx";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [filtro, setFiltro] = useState("");
  const [categoriaElegida, setCategoriaElegida] = useState("")

  const sumar1 = () => setCount((prev) => prev + 1);
  const restar1 = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  // Actualiza estados basados en el value a minusculas
  const handleSearch = (value: string) => {
    setFiltro(value.toLowerCase());
  };

  // Si hay un filtro, muestra solo los productos filtrados
  const productosFiltrados = Respuesta.flatMap((categoria) =>
    categoria.producto.filter((prod) =>
      prod.title.toLowerCase().includes(filtro)
    )
  );

  const productos = Respuesta.flatMap(
    (cat) => cat.producto)

  const categorias = Array.from(new Set(productos.map((prod) =>
    prod.categoria)))

  const categoriaFiltrada = categoriaElegida ?
    productos.filter((p) => p.categoria === categoriaElegida) :
    [];


  return (
    <>
      <Navbar count={count} filter={filtro} onSearch={handleSearch} categoria={categorias} selecCategoria={setCategoriaElegida} />
      <img className="logo" src="/logoo.png" alt="logo inicio" />

      {categoriaFiltrada.length > 0 ? (
        <>
          <ProductCardContainer title={`Categoria de ${categoriaElegida}`}>
            {categoriaFiltrada.slice(0, 6).map((prod) => (
              <FrontShowElement
                key={prod.id}
                src={prod.src}
                title={prod.title}
                precio={prod.precio}
                ubicacion={prod.ubicacion}
                cuotas={prod.cuotas}
                anio={prod.anio}
                descuento={prod.descuento}
                km={prod.km}
                envio={prod.envio}
                agregar={sumar1}
                quitar={restar1}
              />
            ))}
          </ProductCardContainer>
          <button
            onClick={() => setCategoriaElegida("")}
            className="volver-inicio"
          >
            Volver al Inicio
          </button>

        </>
      ) : filtro ? (
        <div className="resultados-busqueda">
          <ProductCardContainer title="Resultados de búsqueda">
            {productosFiltrados.length > 0 ? (
              productosFiltrados.slice(0, 6).map((prod) => (
                <FrontShowElement
                  key={prod.id}
                  {...prod}
                  agregar={sumar1}
                  quitar={restar1}
                />
              ))
            ) : (
              <p>No se encontraron productos.</p>
            )}
          </ProductCardContainer>
        </div>
      ) : (
        <div className="contenido">

          <div className="ultima-visita">
            {Respuesta.slice(0, 1).map((categoria) => (
              <ProductCardContainer title={categoria.categoryTitle}>
                {categoria.producto.map((prod) => (
                  <FrontShowElement
                    key={prod.id}
                    src={prod.src}
                    title={prod.title}
                    precio={prod.precio}
                    ubicacion={prod.ubicacion}
                    cuotas={prod.cuotas}
                    anio={prod.anio}
                    descuento={prod.descuento}
                    km={prod.km}
                    envio={prod.envio}
                    agregar={sumar1}
                    quitar={restar1}

                  />
                ))}
              </ProductCardContainer>
            ))}
          </div>

          <img
            className="padel"
            src="imagenes/padel.png"
            alt="semana del padel"
          />

          {Respuesta.slice(1).map((categoria) => (
            <ProductCardContainer title={categoria.categoryTitle}>
              {categoria.producto.map((prod) => (
                <FrontShowElement
                  key={prod.id}
                  src={prod.src}
                  title={prod.title}
                  precio={prod.precio}
                  ubicacion={prod.ubicacion}
                  cuotas={prod.cuotas}
                  anio={prod.anio}
                  descuento={prod.descuento}
                  km={prod.km}
                  envio={prod.envio}
                  agregar={sumar1}
                  quitar={restar1}
                />
              ))}
            </ProductCardContainer>
          ))}
        </div>
      )}

    </>
  );
}

export default App;
