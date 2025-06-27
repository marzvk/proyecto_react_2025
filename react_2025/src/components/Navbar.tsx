import styles from "./Navbar.module.css";
import { useState } from "react";

type NavbarProps = {
  count: number;
  filter: string;
  onSearch: (value: string) => void;
  categoria: string[];
  selecCategoria: (categoria: string) => void;

}

function Navbar({ count, filter, onSearch, categoria, selecCategoria }: NavbarProps) {

  const [mostrarCategorias, setMostrarCategorias] = useState(false);
  const showCategoria = () => {
    setMostrarCategorias(!mostrarCategorias);

  }


  return (
    <nav className={styles.naveg}>
      <div className={styles.superior}>
        <img src="/logop.png" alt="" className={styles.logo} />
        <input type="text"
          placeholder="Buscar"
          className={styles.buscador}
          value={filter}
          onChange={(event) => onSearch(event.target.value)} />
      </div>
      <ul className={styles.lista}>

        <li className={styles.listText}>
          <button onClick={showCategoria}
            className={styles.botonCategorias}>
            Categorias
          </button>

          {mostrarCategorias && (
            <ul >
              {categoria.map((cat) => (
                <li key={cat}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      selecCategoria(cat);
                      setMostrarCategorias(false);
                    }}
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          )}


        </li>

        <li className={styles.listText}>Ofertas</li>
        <li className={styles.listText}>Registrate</li>
        <li>
          <img
            className={styles.carrito}
            src="/icons8-carrito-de-compras-50.png"
            alt=""
          />
          <span className={styles.cantidad}>{count}</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
