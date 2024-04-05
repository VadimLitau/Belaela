import style from "./newsItem.module.css";
import { btnStyleYellow } from "../../styles/variables/btnStyles";
import { Button } from "../button/button";

interface INewsItem {
  backgroundImage: string;
  date: string;
  title: string;
  supTitle: string;
}

export function NewsItem({
  backgroundImage,
  date,
  title,
  supTitle,
}: INewsItem) {
  const handleButton = () => {
    console.log("click NewsItem");
  };
  return (
    <div
      className={style.newsItem}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={style.newsItemDate}>
        <span className={style.newsItemDateText}>{date}</span>
      </div>
      <div className={style.newsItemText}>
        <div className={style.newsItemTextWrap}>
          <h2 className={style.newsItemTextTitle}>{title}</h2>
          <p className={style.newsItemSupTitle}>{supTitle}</p>
        </div>
        <Button
          action={handleButton}
          text="Подробнее"
          styles={btnStyleYellow}
          arrow={true}
        />
      </div>
    </div>
  );
}
