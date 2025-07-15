import { Link, useParams } from "react-router";
import Respuesta from "../components/Response";
import type { Product } from "../components/Response";


function CardDetail() {
    const { id } = useParams<{ id: string }>();
    const numeroId = Number(id); // Convertimos el id de la URL a número

    const productoEncontrado: Product | undefined = Respuesta.flatMap(r => r.producto)
        .find(p => p.id === numeroId);

    if (!productoEncontrado) {
        return <p>Producto no encontrado.</p>;
    }


    return (
        // <div>
        //     <Link to="/products"><b><h3>Volver</h3></b></Link>
        //     <h1>Card Detail Page</h1>
        // </div>


        <div>
            <Link to="/products"><b><h3>Volver</h3></b></Link>
            <h1>{productoEncontrado.title}</h1>
            <img src={productoEncontrado.src} alt={productoEncontrado.title} style={{ maxWidth: '300px' }} />
            <p><b>Precio:</b> ${productoEncontrado.precio}</p>
            {productoEncontrado.descuento && <p><b>Descuento:</b> {productoEncontrado.descuento}%</p>}
            {productoEncontrado.envio && <p><b>Envío:</b> {productoEncontrado.envio}</p>}
            {productoEncontrado.km && <p><b>Kilómetros:</b> {productoEncontrado.km} km</p>}
            {productoEncontrado.anio && <p><b>Año:</b> {productoEncontrado.anio}</p>}
            {productoEncontrado.ubicacion && <p><b>Ubicación:</b> {productoEncontrado.ubicacion}</p>}
        </div >
    )
}


export default CardDetail;
