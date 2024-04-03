import style from "./banner.module.css";
import { Button } from "../button/button";
import { btnStyleYellow } from "../../styles/variables/btnStyles";

export function Banner() {
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
          styles={btnStyleYellow}
          action={handleClick}
        />
      </div>
    </section>
  );
}
