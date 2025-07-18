import "./App.css";
import FrontShowElement from "../components/ProductCard.tsx";
import ProductCardContainer from "../components/ProductCardContainer.tsx";
import Respuesta from "../components/Response.tsx";
import { useCarrito } from "./Carrito.tsx";

function App() {  
  const { agregarAlCarrito } = useCarrito();

  return (
    <>


      <img className="logo" src="/logoo.png" alt="logo inicio" />
      <div className="contenido">

        <div className="ultima-visita">
          {Respuesta.slice(0, 1).map((categoria) => (
            <ProductCardContainer title={categoria.categoryTitle}>
              {categoria.producto.map((prod) => (
                <FrontShowElement
                  key={prod.id}
                  {...prod}
                  agregar={() => agregarAlCarrito(prod)}
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
                {...prod}
                agregar={() => agregarAlCarrito(prod)}               
              />
            ))}
          </ProductCardContainer>
        ))}
      </div>


    </>
  );
}

export default App;
