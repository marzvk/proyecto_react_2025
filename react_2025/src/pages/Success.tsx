import { Link, useLocation } from "react-router";
import styles from "./Success.module.css";


function Success() {

    const location = useLocation();
    const totalPasado = location.state?.totalPasado; // Obtener el total

    return (
        < div className={styles.successContainer}>
            <h1 className={styles.mainTitle}>Compra efectuada
                con éxito</h1>
            <h1 className={styles.subTitle}
            >¡Gracias por tu compra!</h1>
            <h2 className={styles.totalText}
            >El total fue de  <b>${totalPasado}</b>  </h2>
            <p className={styles.emailConfirmation}
            >Te hemos enviado un correo con los detalles de tu compra.</p>
            <div className={styles.buttonContainer}>
                <Link to="/" className={styles.finalizarButton}>
                    <b>FINALIZAR</b>
                </Link>
                <Link to="/products" className={styles.viewMoreProductsButton}>
                    <b>VER MÁS PRODUCTOS</b>
                </Link>
            </div>
        </div>
    )
}

export default Success;