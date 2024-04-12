import style from "./banner.module.css";
import { Button } from "../button/button";

export function Banner() {
  const handleClick = () => {
    console.log("kurwa!");
  };
  const btnStyleYellow = {
    padding: "28px 39px",
    border_radius: "16px",
    margin_top: "20px",
    border: "none",
    background_color: "#EFD372",
    font_family: "Roboto, sans-serif",
  };
  return (
    <section className={style.main}>
      <div className={style.text}>
        <h2 className={style.natural}>100% натурально</h2>
        <h1 className={style.title}>Масла и мука из фермерского сырья</h1>
        <Button
          text="В КАТАЛОГ"
          arrow={true}
          styles={btnStyleYellow}
          action={handleClick}
        />
      </div>
    </section>
  );
}
