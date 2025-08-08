import "./App.css";
import FrontShowElement from "../components/ProductCard.tsx";
import ProductCardContainer from "../components/ProductCardContainer.tsx";
// import Respuesta from "../components/Response.tsx";
// import { useCarrito } from "./Carrito.tsx";
// import { useCarrito } from "../context/CarritoProvider.tsx";
import { useCarrito } from "../context/UseCarrito.tsx";
// @ts-expect-error ooo
import { productService } from "../../data/service.js";
import { useQuery } from "@tanstack/react-query";
import type { Product } from "../components/Response.tsx";
import { useCrearProducto } from "../components/ProdForm.tsx";
import { useState } from "react";
import styles from "../components/ProductCard.module.css";
import styless from "../components/ProductCardContainer.module.css";



function App() {
  const { agregarAlCarrito } = useCarrito();
  const crearProductoMutation = useCrearProducto();
  const [titulo, setTitulo] = useState('');

  const handleSubmit = () => {
    if (!titulo.trim()) return alert('Debe ingresar un título');

    crearProductoMutation.mutate({
      title: titulo,
      description: 'Descripción por defecto',
      price: 199,
      categoria: 'ropa',
      brand: 'MarcaX',
      rating: { rate: 0, count: 0 },
      inStock: true,
      colors: ['black'],
      prime: false,
      id: Date.now(),
    });

    setTitulo('');
    alert('Producto creado con éxito');
  };

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


        <div className={styless.section} >
          <h2>Crear producto simulado</h2>
          <div style={{ paddingBottom: '10px' }}>
            <input
              type="text"
              placeholder="Título del producto"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              style={{ marginRight: '0.5rem' }}
            />
            <button className={styles.boton} onClick={handleSubmit}>Crear producto</button>
          </div>
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

        <ProductCardContainer title="Ofertas">
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
