

import { Link, useSearchParams } from "react-router";
// import Respuesta from "../components/Response";
import ProductCardContainer from "../components/ProductCardContainer";
import FrontShowElement from "../components/ProductCard";
// import { useCarrito } from "./Carrito";
// import { useCarrito } from "../context/CarritoProvider.tsx";
import { useCarrito } from "../context/UseCarrito.tsx";
import styles from "../components/ProductCard.module.css";
import { useQuery } from "@tanstack/react-query";
// @ts-expect-error ooo
import { productService } from "../../data/service.js";
import type { Product } from "../components/Response.tsx";

export default function BusquedaPage() {
  const { agregarAlCarrito } = useCarrito();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";

  // const productos = Respuesta.flatMap((cat) =>
  //   cat.producto.filter((prod) =>
  //     prod.title.toLowerCase().includes(query)
  //   )
  // );

  const { data: productos = [], isLoading, isError } = useQuery({
    queryKey: ["productos", query],
    queryFn: () => productService.searchProducts(query),
    staleTime: 1000 * 60 * 5, // cache por 5 minutos
  });

  if (isLoading) return <p>Cargando productos...</p>;
  if (isError) return <p>Hubo un error cargando productos.</p>;


  return (
    <>
    <Link to="/products" ><span className={styles.boton} >Volver a Productos</span></Link>

    {query.trim() !== "" && (
      
      <ProductCardContainer title={`Resultados de búsqueda: "${query}"`}>
      {productos.length > 0 ? (
        productos.slice(0, 6).map((prod:Product) => (
          <FrontShowElement
            key={prod.id}
            {...prod}
            agregar={() => agregarAlCarrito(prod)}            
          />
        ))
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </ProductCardContainer>

    )}
    
    </>
    
  );
}
