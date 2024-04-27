import styles from "./reviews.module.css";
import avatar from "../../img/avatar.png";
import starGold from "../../img/starGold.svg";
import starGray from "../../img/starGray.svg";
import circle from "../../img/circle.png";
import { useStore } from "../../store/store";
/* здесь будет слайдер*/
export function Reviews() {
  const { reviewsData: data } = useStore();
  return (
    <section className={styles.reviewsWrap}>
      <div className={styles.rewievsContent}>
        <h2 className={styles.rewievsContentTitle}>Отзывы</h2>
        <p className={styles.rewievsContentText}>
          Что говорят наши покупатели?
        </p>
        <img
          className={styles.rewievsContentAvatar}
          src={avatar}
          alt="аватар"
        />
        <div className={styles.rewievsContentStarsWrap}>
          <img
            className={styles.rewievsContentStar}
            src={starGold}
            alt="звездошка"
          />
          <img
            className={styles.rewievsContentStar}
            src={starGold}
            alt="звездошка"
          />
          <img
            className={styles.rewievsContentStar}
            src={starGold}
            alt="звездошка"
          />
          <img
            className={styles.rewievsContentStar}
            src={starGold}
            alt="звездошка"
          />
          <img
            className={styles.rewievsContentStar}
            src={starGray}
            alt="звездошка"
          />
        </div>
        <p className={styles.rewievText}>
          Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been.
        </p>
        {/* в последствии здесь будет реализован слайдер и часть элементов заменена им */}
        <img className={styles.reviewsCircle} src={circle} alt="" />
      </div>
      <div className={styles.rewievsInfoWrap}>
        {data.map((item, index) => (
          <div className={styles.rewievsInfo} key={index}>
            <div className={styles.rewievsInfoCircle}>
              <h2 className={styles.rewievsInfoTitle}>{item.title}</h2>
              <p className={styles.rewievsInfoText}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
