import styles from "./products.module.css";
import { productData } from "../../data/data";
import { Button } from "../button/button";
import { btnStyles } from "../../styles/variables/btnStyles";

export function Products() {
  const handleClick = () => {
    console.log("click Products");
  };

  return (
    <section className={styles.productsWrap}>
      <h2 className={styles.productsTitle}>Категории</h2>
      <p className={styles.productsSubTitle}>Наши продукты</p>
      <ul className={styles.productsList}>
        {productData.map((item) => (
          <li className={`${styles.productsListItem} `}>
            <div className={styles.productsListItemType}>{item.type}</div>
            <img
              src={item.photo}
              alt={item.name}
              className={styles.productsListItemPhoto}
            />
            <p className={styles.productsListItemName}>{item.name}</p>
          </li>
        ))}
      </ul>
      <Button
        arrow={true}
        text="Смотреть всё"
        action={handleClick}
        styles={btnStyles}
      />
    </section>
  );
}