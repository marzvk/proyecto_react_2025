
import { useCarrito } from "./Carrito";
import { Link } from "react-router";
import type { Product } from "../components/Response";
import styles from "./CarritoPage.module.css"; 



export default function CarritoPage() {
    const { carrito, quitarDelCarrito, vaciarCarrito } = useCarrito();

    const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);

    //  <Record<Clave, Valor>> tipo de objeto con claves y valores específicos(
    //   id:number, producto: Product, cantidad: number)
    const productosAgrupados = carrito.reduce<Record<number, { producto: Product, cantidad: number }>>((acc, prod) => {

        // si ya hay un id asi en acc, suma 1 
        if (acc[prod.id]) {
            acc[prod.id].cantidad += 1;

            // si no, crea el objeto con ese producto y cantidad 1
        } else {
            acc[prod.id] = { producto: prod, cantidad: 1 };
        }
        return acc;
    }, {});

    return (
        <div className={styles.carritoContainer}>
            <h2>Carrito de Compras</h2>

            {carrito.length === 0 ? (
                <p className={styles.emptyCartMessage}>No hay productos en el carrito.</p>
            ) : (
                <>
                    <ul className={styles.productList}>
                        {Object.values(productosAgrupados).map(({ producto, cantidad }) => (
                            <li key={producto.id}
                                className={styles.productItem}>
                                {producto.title} x {cantidad} — ${producto.precio * cantidad}
                                <button
                                    onClick={() => quitarDelCarrito(producto.id)}
                                    className={styles.removeButton}
                                >❌</button>
                            </li>
                        ))}
                    </ul>
                    <h3 className={styles.totalText}>Total: ${total}</h3>
                    <button
                        onClick={vaciarCarrito}
                        className={styles.clearCartButton}
                    >🗑 Vaciar carrito</button>
                </>
            )}
            <Link
                to="/"
                className={styles.continueShoppingLink}
            >Seguir comprando
            </Link>

            {total > 0 && (
                <Link
                    to="/success"
                    state={{ totalPasado: total }}
                    onClick={vaciarCarrito}
                    className={styles.buyButton}
                ><b>COMPRAR</b></Link>
            )}

        </div>
    );
}
