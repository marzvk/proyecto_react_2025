import { Link, useParams } from "react-router";
import Respuesta from "../components/Response";
import type { Product } from "../components/Response";
import { useCarrito } from "./Carrito";
import styles from "./CardDetail.module.css"; 


function CardDetail() {
    const { agregarAlCarrito } = useCarrito();
    const { id } = useParams<{ id: string }>();
    const numeroId = Number(id); // el id(string) de la URL a número

    const productoEncontrado: Product | undefined = Respuesta.flatMap(r => r.producto)
        .find(p => p.id === numeroId);

    if (!productoEncontrado) {
        return <p>Producto no encontrado.</p>;
    }


    return (
        <div className={styles.detailContainer}> 
      <Link to="/products" className={styles.backLink}> 
        <b><h3>Volver</h3></b>
      </Link>
      <h1 className={styles.productTitle}>{productoEncontrado.title}</h1>
      <img
        src={productoEncontrado.src}
        alt={productoEncontrado.title}
        className={styles.productImage}
      />
      <p className={`${styles.detailParagraph} ${styles.priceText}`}> 
        <b>Precio:</b> ${productoEncontrado.precio.toLocaleString()}
      </p>
      {productoEncontrado.descuento && (
        <p className={styles.detailParagraph}>
          <b>Descuento:</b> {productoEncontrado.descuento}%
        </p>
      )}
      {productoEncontrado.envio && (
        <p className={styles.detailParagraph}>
          <b>Envío:</b> {productoEncontrado.envio}
        </p>
      )}
      {productoEncontrado.km && (
        <p className={styles.detailParagraph}>
          <b>Kilómetros:</b> {productoEncontrado.km} km
        </p>
      )}
      {productoEncontrado.anio && (
        <p className={styles.detailParagraph}>
          <b>Año:</b> {productoEncontrado.anio}
        </p>
      )}
      {productoEncontrado.ubicacion && (
        <p className={styles.detailParagraph}>
          <b>Ubicación:</b> {productoEncontrado.ubicacion}
        </p>
      )}
      <button onClick={() => agregarAlCarrito(productoEncontrado)} className={styles.addToCartButton}>
        Agregar al carrito
      </button>
    </div>
    )
}


export default CardDetail;
