import style from "./banner.module.css";
import { Button } from "../button/button";

export function Banner() {
  const btnStyle = {
    padding: "28px 39px",
    border_radius: "16px",
    border: "none",
    background_color: "#EFD372",
    margin_top: "23px",
  };
  const handleClick = () => {
    console.log("kurwa!");
  };
  return (
    <section className={style.main}>
      <div className={style.text}>
        <h2 className={style.natural}>100% натурально</h2>
        <h1 className={style.title}>Масла и мука из фермерского сырья</h1>
        <Button
          text="В КАТАЛОГ"
          arrow={true}
          styles={btnStyle}
          action={handleClick}
        />
      </div>
    </section>
  );
}
