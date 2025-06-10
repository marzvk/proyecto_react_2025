import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.naveg}>
      <div className={styles.superior}>
        <img src="/logop.png" alt="" className={styles.logo} />
        <input type="text" placeholder="Buscar" className={styles.buscador} />
      </div>
      <ul className={styles.lista}>
        <li className={styles.listText}>Categorias</li>
        <li className={styles.listText}>Ofertas</li>
        <li className={styles.listText}>Registrate</li>
        <li>
          <img
            className={styles.carrito}
            src="/icons8-carrito-de-compras-50.png"
            alt=""
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
