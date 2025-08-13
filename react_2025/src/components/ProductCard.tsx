import { Link } from "react-router";
import styles from "./ProductCard.module.css";


export type ProductCardProps = {
  id?: number;
  image?: string;
  title: string;
  price?: number;
  originalPrice?: number;
  discount?: number;
  brand?: string;

  // src?: string; 
  // precio?: number; 
  // cuotas?: number;
  // descuento?: number;
  // anio?: string;
  // ubicacion?: string;
  // envio?: string;
  // km?: number;
  agregar?: () => void;

};



// parametro props tiene el type ProductCardProps
function FrontShowElement(props: ProductCardProps) {
  const {
    id,
    image,
    title,
    price,
    // originalPrice,
    discount,
    brand,
    // cuotas = 0,
    // ubicacion,
    // anio,
    // descuento = 0,
    // envio,
    // km,
    agregar,


  } = props;

  return (
    <article className={styles.card}>
      <img className={styles.img} src={image} alt="" />
      <h4 className={styles.titulo}>{title}</h4>
      <h2>$ {price}  </h2>
      {/* {discount !== undefined && discount > 0 && <p className={styles.desc}>{discount} % Off</p>} */}
      {discount !== undefined && discount > 0 ? (
        <p className={styles.desc}>{discount} % Off</p>
      ) : (
        <p style={{ visibility: 'hidden', minHeight: '1em' }}>.</p> 
      )}
      <p>{brand}</p>
      {/* {cuotas > 0 && <p>{cuotas} cuotas</p>}
      {descuento > 0 && <p className={styles.desc}>{descuento} % Off</p>}
      <p>{ubicacion}</p>
      <p className={styles.envio}> {envio}</p>
      <h5>
        {anio}
        {km !== undefined && ` | ${km.toLocaleString()} km`}
      </h5> */}

      <div className={styles.botonera}>
        <p>Comprar</p>
        <button className={styles.boton} onClick={agregar}>
          +
        </button>
      </div>
      <Link to={`/products/${id}`}> <span className={styles.link} >Ver el Producto</span></Link>

    </article>
  );
}

export default FrontShowElement;
