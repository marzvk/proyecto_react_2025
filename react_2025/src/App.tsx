import "./App.css";
import FrontShowElement from "./components/ProductCard.tsx";
import ProductCardContainer from "./components/ProductCardContainer.tsx";
import Respuesta from "./components/Response.tsx";
import Navbar from "./components/Navbar.tsx";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const sumar1 = () => setCount((prev) => prev + 1);
  const restar1 = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));



  return (
    <>
      <Navbar count={count} />
      <img className="logo" src="/logoo.png" alt="logo inicio" />
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
    </>
  );
}

export default App;
