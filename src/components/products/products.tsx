import styles from "./products.module.css";
import { Button } from "../button/button";
import { productBtnStyles } from "../../styles/variables/btnStyles";
import { Product } from "../product/product";
import { useProductStore } from "../../store/productStore";

export function Products() {
  const { productData: data } = useProductStore();

  const handleClick = () => {
    console.log("click Products");
  };

  return (
    <section className={styles.productsWrap}>
      <h2 className={styles.productsTitle}>Категории</h2>
      <p className={styles.productsSubTitle}>Наши продукты</p>
      <ul className={styles.productsList}>
        {data.map((item) => (
          <li className={styles.productsListItem} key={item.id}>
            <Product name={item.name} photo={item.photo} type={item.type} />
          </li>
        ))}
      </ul>
      <Button
        arrow={true}
        text="Смотреть всё"
        action={handleClick}
        styles={productBtnStyles}
      />
    </section>
  );
}
