import { Link } from "react-router";
import styles from "./Navbar.module.css";
import { useState } from "react";
// import { useCarrito } from "../pages/Carrito";
import { useCarrito } from "../context/UseCarrito.tsx";

type Category = {
  id: string;
  name: string;
};

type NavbarProps = {
  filter: string;
  onSearch: (value: string) => void;
  categoria: Category[];
  selecCategoria: (categoria: string) => void;

}

function Navbar({ filter, onSearch, categoria, selecCategoria }: NavbarProps) {
  const { carrito } = useCarrito();

  const [mostrarCategorias, setMostrarCategorias] = useState(false);
  const showCategoria = () => {
    setMostrarCategorias(!mostrarCategorias);

  }


  return (
    <nav className={styles.naveg}>
      <div className={styles.superior}>
        <Link to="/"><img src="/logop.png" alt="" className={styles.logo} /></Link>
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

          {/* {mostrarCategorias && (
            <ul className={styles.categoryList}>
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
          )} */}
          
          {mostrarCategorias && (
            <ul className={styles.categoryList}>
              
              {categoria.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      selecCategoria(cat.id);
                      setMostrarCategorias(false);
                    }}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li className={styles.listText}>Ofertas</li>
        <li className={styles.listText}>Registrate</li>
        <li>
          <Link to="/carrito" className={styles.carrito}>
            🛒 <span className={styles.contadorItems}>{carrito.length}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
