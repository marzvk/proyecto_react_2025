

import { Link, useSearchParams } from "react-router";
import Respuesta from "../components/Response";
import ProductCardContainer from "../components/ProductCardContainer";
import FrontShowElement from "../components/ProductCard";
import { useCarrito } from "./Carrito";
import styles from "../components/ProductCard.module.css";

export default function BusquedaPage() {
  const { agregarAlCarrito } = useCarrito();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";

  const productos = Respuesta.flatMap((cat) =>
    cat.producto.filter((prod) =>
      prod.title.toLowerCase().includes(query)
    )
  );

  return (
    <>
    <Link to="/products" ><span className={styles.boton} >Volver a Productos</span></Link>

    {query.trim() !== "" && (
      
      <ProductCardContainer title={`Resultados de búsqueda: "${query}"`}>
      {productos.length > 0 ? (
        productos.slice(0, 6).map((prod) => (
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
