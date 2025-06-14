import styles from "./ProductCard.module.css";

export type ProductCardProps = {
  src: string;
  title: string;
  precio: number;
  cuotas?: number;
  descuento?: number;
  anio?: string;
  ubicacion?: string;
  envio?: string;
  km?: number;
};

// parametro props tiene el type ProductCardProps
function FrontShowElement(props: ProductCardProps) {
  const {
    src,
    title,
    precio,
    cuotas = 0,
    ubicacion,
    anio,
    descuento = 0,
    envio,
    km,
  } = props;
  return (
    <article className={styles.card}>
      <img className={styles.img} src={src} alt="" />
      <h4 className={styles.titulo}>{title}</h4>
      <h2>$ {precio.toLocaleString()}</h2>
      {cuotas > 0 && <p>{cuotas} cuotas</p>}
      {descuento > 0 && <p className={styles.desc}>{descuento} % Off</p>}
      <p>{ubicacion}</p>
      <p className={styles.envio}> {envio}</p>
      <h5>
        {anio}
        {km !== undefined && ` | ${km.toLocaleString()} km`}
      </h5>
    </article>
  );
}

export default FrontShowElement;
