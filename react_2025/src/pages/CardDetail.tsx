import { Link, useParams } from "react-router";
// import Respuesta from "../components/Response";
// import type { Product } from "../components/Response";
// import { useCarrito } from "./Carrito";
// import { useCarrito } from "../context/CarritoProvider.tsx";
import { useCarrito } from "../context/UseCarrito.tsx";
import styles from "./CardDetail.module.css";
import { useQuery } from "@tanstack/react-query";
// @ts-expect-error ooo
import { productService } from "../../data/service.js";


// function CardDetail() {
//     const { agregarAlCarrito } = useCarrito();
//     const { id } = useParams<{ id: string }>();
//     const numeroId = Number(id); // el id(string) de la URL a número

//     const productoEncontrado: Product | undefined = Respuesta.flatMap(r => r.producto)
//         .find(p => p.id === numeroId);

//     if (!productoEncontrado) {
//         return <p>Producto no encontrado.</p>;
//     }


//     return (
//         <div className={styles.detailContainer}> 
//       <Link to="/products" className={styles.backLink}> 
//         <b><h3>Volver</h3></b>
//       </Link>
//       <h1 className={styles.productTitle}>{productoEncontrado.title}</h1>
//       <img
//         src={productoEncontrado.src}
//         alt={productoEncontrado.title}
//         className={styles.productImage}
//       />
//       <p className={`${styles.detailParagraph} ${styles.priceText}`}> 
//         <b>Precio:</b> ${productoEncontrado.precio.toLocaleString()}
//       </p>
//       {productoEncontrado.descuento && (
//         <p className={styles.detailParagraph}>
//           <b>Descuento:</b> {productoEncontrado.descuento}%
//         </p>
//       )}
//       {productoEncontrado.envio && (
//         <p className={styles.detailParagraph}>
//           <b>Envío:</b> {productoEncontrado.envio}
//         </p>
//       )}
//       {productoEncontrado.km && (
//         <p className={styles.detailParagraph}>
//           <b>Kilómetros:</b> {productoEncontrado.km} km
//         </p>
//       )}
//       {productoEncontrado.anio && (
//         <p className={styles.detailParagraph}>
//           <b>Año:</b> {productoEncontrado.anio}
//         </p>
//       )}
//       {productoEncontrado.ubicacion && (
//         <p className={styles.detailParagraph}>
//           <b>Ubicación:</b> {productoEncontrado.ubicacion}
//         </p>
//       )}
//       <button onClick={() => agregarAlCarrito(productoEncontrado)} className={styles.addToCartButton}>
//         Agregar al carrito
//       </button>
//     </div>
//     )
// }



// export default CardDetail;

function useProductById(id: string | undefined) {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => productService.getProductById(id),
    enabled: !!id,
  });
}

export default function CardDetail() {
  const { agregarAlCarrito } = useCarrito();
  const { id } = useParams();
  const { data: product, isLoading, error } = useProductById(id);

  if (isLoading) return <h1 style={{ color: 'black' }}>Cargando productos...</h1>;
  if (error) return <h1 style={{ color: 'black' }}>Error al cargar productos</h1>;

  return (
    <div className={styles.detailContainer}>
      <Link to="/products" className={styles.backLink}>
        <b><h3>Volver</h3></b>
      </Link>
      <h1 className={styles.productTitle}>{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className={styles.productImage}
      />
      <p className={`${styles.detailParagraph} ${styles.priceText}`}>
        <b>Precio:</b> ${product.price}
      </p>
      {product.discount ?
        (<p className={styles.detailParagraph}>Precio anterior: <s>{product.originalPrice}</s>
          &emsp;&emsp;<b>Descuento: {product.discount}%</b></p>
        ) : (null
        )}

      <p className={styles.detailParagraph}>Marca: <b>{product.brand}</b></p>
      {<p className={styles.detailParagraph}>
        <b>Descripcion: </b> {product.description}
      </p>
      }


      <button onClick={() => agregarAlCarrito(product)} className={styles.addToCartButton}>
        Agregar al carrito
      </button>
    </div>
  )
}