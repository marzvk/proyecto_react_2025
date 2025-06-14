import { type ReactNode } from "react";
import styles from "./ProductCardContainer.module.css";

type ProductCardContainerProps = {
  title: string;
  children: ReactNode;
};

function ProductCardContainer(props: ProductCardContainerProps) {
  const { title, children } = props;

  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.cardContainer}>{children}</div>
    </section>
  );
}

export default ProductCardContainer;
