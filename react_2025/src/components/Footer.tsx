

import styles from './Footer.module.css'; 

const Footer = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Sección de Contacto */}
        <div className={styles.section}>
          <h3>Contacto</h3>
          <p>Email: <a href="mailto:contacto@tucomercio.com" className={styles.link}>contacto@tucomercio.com</a></p>
          <p>Teléfono: <a href="tel:+541123456789" className={styles.link}>+54 11 2345-6789</a></p>
          <p>Dirección: Calle Falsa 123, Ciudad, País</p>
        </div>

        {/* Sección de Enlaces Rápidos */}
        <div className={styles.section}>
          <h3>Navegación Rápida</h3>
          <ul>
            <li><a href="/productos" className={styles.link}>Todos los Productos</a></li>
            <li><a href="/categorias" className={styles.link}>Categorías</a></li>
            <li><a href="/ofertas" className={styles.link}>Ofertas del Día</a></li>
            <li><a href="/sobre-nosotros" className={styles.link}>Sobre Nosotros</a></li>
            <li><a href="/preguntas-frecuentes" className={styles.link}>Preguntas Frecuentes</a></li>
          </ul>
        </div>

        {/* Sección de Información Legal/Ayuda */}
        <div className={styles.section}>
          <h3>Ayuda y Legal</h3>
          <ul>
            <li><a href="/terminos-y-condiciones" className={styles.link}>Términos y Condiciones</a></li>
            <li><a href="/politica-privacidad" className={styles.link}>Política de Privacidad</a></li>
            <li><a href="/devoluciones" className={styles.link}>Política de Devoluciones</a></li>
            <li><a href="/como-comprar" className={styles.link}>¿Cómo comprar?</a></li>
          </ul>
        </div>

        {/* Enlaces a Redes Sociales o Sitios Conocidos */}
        <div className={styles.section}>
          <h3>Síguenos</h3>
          <div className={styles.socialLinks}>
            <a href="https://facebook.com/tucomercio" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <img src="https://img.icons8.com/ios-filled/24/ffffff/facebook-new.png" alt="Facebook" />
            </a>
            <a href="https://instagram.com/tucomercio" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <img src="https://img.icons8.com/ios-filled/24/ffffff/instagram-new--v1.png" alt="Instagram" />
            </a>
            <a href="https://twitter.com/tucomercio" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <img src="https://img.icons8.com/ios-filled/24/ffffff/twitterx--v2.png" alt="Twitter" />
            </a>
            
          </div>
          
          <h3 className={styles.paymentMethodsTitle}>Métodos de Pago</h3>
          <div className={styles.paymentMethods}>
             <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className={styles.paymentIcon}/>
             <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" className={styles.paymentIcon}/>
             <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="PayPal" className={styles.paymentIcon}/>
             
          </div>
        </div>
      </div>

      {/* Derechos de Autor y Año */}
      <div className={styles.bottomBar}>
        <p>&copy; {currentYear} Tu Nombre de Comercio. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;