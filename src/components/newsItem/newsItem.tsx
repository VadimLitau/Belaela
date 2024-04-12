import style from "./newsItem.module.css";
import { Button } from "../button/button";

interface INewsItem {
  backgroundImage: string;
  date: string;
  title: string;
  supTitle: string;
}
const btnStyleYellow = {
  padding: "28px 47px",
  border_radius: "16px",
  border: "none",
  background_color: "#EFD372",
  font_family: "Roboto, sans-serif",
};
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
