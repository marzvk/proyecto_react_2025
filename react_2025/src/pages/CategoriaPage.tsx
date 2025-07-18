

import { useParams } from "react-router";
import Respuesta from "../components/Response";
import ProductCardContainer from "../components/ProductCardContainer";
import FrontShowElement from "../components/ProductCard";
import { useCarrito } from "./Carrito";
import { Link } from "react-router";

export default function CategoriaPage() {
  const { nombre } = useParams();
  const { agregarAlCarrito } = useCarrito();

  const productos = Respuesta.flatMap((cat) =>
    cat.producto.filter((prod) => prod.categoria === nombre)
  );

  return (
    <>
    <Link to="/products" >Volver al inicio</Link>
    <ProductCardContainer title={`Categoría: ${nombre}`}>
      {productos.slice(0, 6).map((prod) => (
        <FrontShowElement
          key={prod.id}
          {...prod}
          agregar={() => agregarAlCarrito(prod)}
          quitar={() => {}}
        />
      ))}
    </ProductCardContainer>    
    </>
  );
}
