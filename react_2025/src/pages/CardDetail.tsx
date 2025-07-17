import { Link, useParams } from "react-router";
import Respuesta from "../components/Response";
import type { Product } from "../components/Response";
import { useCarrito } from "./Carrito";


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

        <div>
            <Link to="/products"><b><h3>Volver</h3></b></Link>
            <h1>{productoEncontrado.title}</h1>
            <img src={productoEncontrado.src} alt={productoEncontrado.title} />
            <p><b>Precio:</b> ${productoEncontrado.precio}</p>
            {productoEncontrado.descuento && <p><b>Descuento:</b> {productoEncontrado.descuento}%</p>}
            {productoEncontrado.envio && <p><b>Envío:</b> {productoEncontrado.envio}</p>}
            {productoEncontrado.km && <p><b>Kilómetros:</b> {productoEncontrado.km} km</p>}
            {productoEncontrado.anio && <p><b>Año:</b> {productoEncontrado.anio}</p>}
            {productoEncontrado.ubicacion && <p><b>Ubicación:</b> {productoEncontrado.ubicacion}</p>}
            <button onClick={() => agregarAlCarrito(productoEncontrado)}>
                Agregar al carrito
            </button>
        </div >
    )
}


export default CardDetail;
