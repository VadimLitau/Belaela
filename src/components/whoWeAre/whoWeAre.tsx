import style from "./whoWeAre.module.css";
import { whoWeAreData } from "../../data/data";

export function WhoWeAre() {
  return (
    <section className={style.whoWeAreWrap}>
      <div className={style.whoWeAre}>
        <h2 className={style.whoWeAreTitle}>Eco Friendly</h2>
        <p className={style.whoWeAreText}>Создаём здоровое будущее </p>
        <ul className={style.whoWeAreList}>
          {whoWeAreData.map((item) => (
            <li className={style.whoWeAreListItem}>
              <p className={style.whoWeAreListItemTitle}>{item.title}</p>
              <p className={style.whoWeAreListItemText}>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
