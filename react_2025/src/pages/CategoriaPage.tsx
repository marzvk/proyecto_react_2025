

import { useParams } from "react-router";
import { type Product } from "../components/Response";
import ProductCardContainer from "../components/ProductCardContainer";
import FrontShowElement from "../components/ProductCard";
// import { useCarrito } from "./Carrito";
// import { useCarrito } from "../context/CarritoProvider.tsx";
import { useCarrito } from "../context/UseCarrito.tsx";
import { Link } from "react-router";
import styles from "../components/ProductCard.module.css";
import { useQuery } from "@tanstack/react-query";
// @ts-expect-error ooo
import { productService } from "../../data/service.js";


function useProductsByCategory(options = {}) {
  return useQuery({
    queryKey: ['category', options],
    queryFn: () => productService.getProductsByCategory(options),

  });
}

export default function CategoriaPage() {
  const { nombre } = useParams();
  const { agregarAlCarrito } = useCarrito();
  const { data: products, isLoading, error } = useProductsByCategory(nombre);


  // const productos = Respuesta.flatMap((cat) =>
  //   cat.producto.filter((prod) => prod.categoria === nombre)
  // );

  if (isLoading) return <p>Cargando productos...</p>;
  if (error) return <p>Error al cargar productos de la categoría: {nombre}</p>;


  return (
    <>
      <Link to="/products" ><span className={styles.boton}
        style={{ marginTop: '10px', display: 'inline-block' }}
      >Volver al inicio</span></Link>
      <ProductCardContainer title={`Categoría: ${nombre}`}>
        {products.slice(0, 6).map((prod: Product) => (
          <FrontShowElement
            key={prod.id}
            {...prod}
            agregar={() => agregarAlCarrito(prod)}
          />
        ))}
      </ProductCardContainer>
    </>
  );
}
