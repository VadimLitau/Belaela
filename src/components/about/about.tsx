import { Button } from "../button/button";
import styles from "./about.module.css";
import { aboutData } from "../../data/data";

export function About() {
  const handleButton = () => {
    console.log("click about");
  };

  const btnStyles = {
    padding: "28px 39px",
    border_radius: "16px",
    border: "none",
    background_color: "#274C5B",
    margin_top: "46px",
    text_color: "#FFFFFF",
    font_size: "20px",
    font_weight: 700,
    font_family: "Roboto, sans-serif",
  };

  return (
    <div className={styles.aboutWrap}>
      <div className={styles.aboutInfo}>
        <h2 className={styles.aboutTitle}>О нас</h2>
        <p className={styles.aboutSupText}>
          Мы работаем только с качественным сырьём от местных фермеров
        </p>
        <p className={styles.aboutText}>
          Работа с местными фермерами приносит производственным компаниям
          преимущество в виде высококачественного сырья, укрепляет местное
          сообщество, снижает экологический след и способствует устойчивости
          цепочки поставок, обеспечивая надежность и прозрачность.
        </p>
        <ul className={styles.aboutList}>
          {aboutData.map((item) => (
            <li className={styles.aboutListItem}>
              <div className={styles.aboutListItemIconWrap}>
                <img
                  src={item.icon}
                  alt="иконка"
                  className={styles.aboutListItemIcon}
                />
              </div>
              <div className={styles.aboutListItemTextWrap}>
                <h3 className={styles.aboutListItemTextTitle}>
                  {item.textTitle}
                </h3>
                <p className={styles.aboutListItemText}>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <Button
          action={handleButton}
          text="Подробнее"
          styles={btnStyles}
          arrow={true}
        />
      </div>
    </div>
  );
}