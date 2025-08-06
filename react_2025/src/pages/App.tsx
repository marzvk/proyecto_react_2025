import "./App.css";
import FrontShowElement from "../components/ProductCard.tsx";
import ProductCardContainer from "../components/ProductCardContainer.tsx";
// import Respuesta from "../components/Response.tsx";
import { useCarrito } from "./Carrito.tsx";
// @ts-ignore
import { productService } from "../../data/service.js";
import { useQuery } from "@tanstack/react-query";
import type { Product } from "../components/Response.tsx";


function App() {
  const { agregarAlCarrito } = useCarrito();

  function useAllProducts(options = {}) {
    return useQuery({
      queryKey: ['products', options],
      queryFn: () => productService.getAllProducts(options),
    });
  }
  const { data: products, isLoading, error } = useAllProducts();

  if (isLoading) return <h1 style={{ color: 'black' }}>Cargando productos...</h1>;
  if (error) return <h1 style={{ color: 'black' }}>Error al cargar productos</h1>;


  return (
    <>
      <img className="logo" src="/logoo.png" alt="logo inicio" />
      <div className="contenido">
        {/* 
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
        </div> */}

        <div className="ultima-visita">

          <ProductCardContainer title="Productos Destacados">
            {products.slice(0, 6).map((prod: Product) => (

              <FrontShowElement
                key={prod.id}
                // title={prod.title}
                // image={prod.image}
                // price={prod.price}
                {...prod}

                // descuento={prod.discount}

                agregar={() => agregarAlCarrito(prod)} />
            ))
            }
          </ProductCardContainer>
        </div>


        {/* <div>
          <h1>Productos</h1>
          <ul>
            {products.map((prod) => (
              <FrontShowElement
                key={prod.id}
                title={prod.title}
                src={prod.image}
                precio={prod.price}
                cuotas={prod.installments}
                descuento={prod.discountPercentage}
                anio={prod.year}
              />
            ))}
          </ul>


        </div> */}


        <img
          className="padel"
          src="imagenes/padel.png"
          alt="semana del padel"
        />


        <ProductCardContainer title="Productos Destacados">
          {products.slice(6, 12).map((prod: Product) => (

            <FrontShowElement
              key={prod.id}
              {...prod}
              agregar={() => agregarAlCarrito(prod)} />
          ))
          }
        </ProductCardContainer>

        <ProductCardContainer title="Productos Destacados">
          {products.slice(12, 18).map((prod: Product) => (

            <FrontShowElement
              key={prod.id}
              {...prod}
              agregar={() => agregarAlCarrito(prod)} />

          ))
          }
        </ProductCardContainer>


        {/* {Respuesta.slice(1).map((categoria) => (
          <ProductCardContainer title={categoria.categoryTitle}>
            {categoria.producto.map((prod) => (
              <FrontShowElement
                key={prod.id}
                {...prod}
                agregar={() => agregarAlCarrito(prod)}
              />
            ))}
          </ProductCardContainer>
        ))} */}

      </div>


    </>
  );
}

export default App;
