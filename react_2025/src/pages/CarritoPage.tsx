
import { useCarrito } from "./Carrito";
import { Link } from "react-router";
import type { Product } from "../components/Response";


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
        <div>
            <h2>Carrito de Compras</h2>

            {carrito.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <>
                    <ul>
                        {carrito.map((prod) => (
                            <li key={prod.id}>
                                {prod.title} - ${prod.precio}
                                <button onClick={() => quitarDelCarrito(prod.id)}> X  Quitar</button>
                            </li>
                        ))}
                    </ul>

                    <h3>Total: ${total}</h3>

                    <button onClick={vaciarCarrito}>🗑 Vaciar carrito</button>

                </>
            )}

            {carrito.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <>
                    <ul>
                        {Object.values(productosAgrupados).map(({ producto, cantidad }) => (
                            <li key={producto.id}>
                                {producto.title} x {cantidad} — ${producto.precio * cantidad}
                                <button onClick={() => quitarDelCarrito(producto.id)}>❌</button>
                            </li>
                        ))}
                    </ul>

                    <h3>Total: ${total}</h3>

                    <button onClick={vaciarCarrito}>🗑 Vaciar carrito</button>
                </>
            )}
            <Link
                to="/"
            >Seguir comprando
            </Link>

            {total > 0 && (
                <Link 
                to="/success"
                state={{totalPasado: total}}
                onClick={vaciarCarrito} ><b>COMPRAR</b></Link>
            )}
            
        </div>
    );
}
