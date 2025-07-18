import { Link } from "react-router";
import { useLocation } from "react-router";


function Success() {
        
    const location = useLocation();
    const totalPasado = location.state?.totalPasado; // Obtener el total

    return (
        <>
            <h1>Compra efectuada
                con éxito</h1>
            <h1>¡Gracias por tu compra!</h1>            
            <h2>El total fue de <b>${totalPasado}</b>  </h2>
            <p>Te hemos enviado un correo con los detalles de tu compra.</p>
            <Link to="/" ><b>FINALIZAR</b></Link>
            <Link to="/products" ><b>VER MÁS PRODUCTOS</b></Link>
    </>
)
}

export default Success;