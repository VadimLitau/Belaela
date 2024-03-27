import style from "./button.module.css";
import arrowRight from "../../img/arrow.svg";
import { IButtonStyles } from "../../types/globalTypes";

interface IButton {
  text: string;
  arrow?: boolean;
  styles: IButtonStyles;
}

export function Button({ text, arrow, styles }: IButton) {
  return (
    <button
      className={style.btn}
      style={{
        padding: `${styles.padding}`,
        borderRadius: `${styles.border_radius}`,
        border: `${styles.border}`,
        backgroundColor: `${styles.background_color}`,
        marginTop: `${styles.margin_top}`,
      }}
    >
      <span>{text}</span>
      {arrow ? (
        <div className={style.arrowWrap}>
          <img src={arrowRight} alt="arrow" />
        </div>
      ) : (
        false
      )}
    </button>
  );
}
