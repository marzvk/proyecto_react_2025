import React from "react";
import { useCarrito } from "./Carrito";
import { Link } from "react-router";
import type { Product } from "../components/Response";

export default function CarritoPage() {
    const { carrito, quitarDelCarrito, vaciarCarrito } = useCarrito();

    const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);

    const productosAgrupados = carrito.reduce<Record<number, { producto: Product, cantidad: number }>>((acc, prod) => {
        if (acc[prod.id]) {
            acc[prod.id].cantidad += 1;
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
                                <button onClick={() => quitarDelCarrito(prod.id)}>❌ X  x Quitar</button>

                                {/* VER CUAL X QUEDA EN BOTON */}

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
                                {producto.title} × {cantidad} — ${producto.precio * cantidad}
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
                className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Seguir comprando
            </Link>
        </div>
    );
}
