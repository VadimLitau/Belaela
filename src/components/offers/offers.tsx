import { Button } from "../button/button";
import styles from "./offers.module.css";
import { btnStyleYellowOffer } from "../../styles/variables/btnStyles";
import { offersData } from "../../data/data";

export function Offers() {
  const handleClick = () => {
    console.log("kurwa!");
  };
  return (
    <section className={styles.offersWrap}>
      <div className={styles.offers}>
        <div className={styles.offersTitle}>
          <h2 className={styles.offersTitleText}>Лучшие предложения месяца</h2>
          <div className={styles.offersTitleBtn}>
            <Button
              text="Смотреть все"
              arrow={true}
              styles={btnStyleYellowOffer}
              action={handleClick}
            />
          </div>
        </div>
        <ul className={styles.offersList}>
          {offersData.map((item, index) => (
            <li className={styles.offersListItem} key={index}>
              <div className={styles.offersListItemType}>{item.type}</div>
              <img
                src={item.photo}
                alt={item.name}
                className={styles.offersListItemPhoto}
              />
              <p className={styles.offersListItemName}>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
