import { IPageBanner } from "../../types/globalTypes";
import style from "./pageBanner.module.css";

export function PageBanner({ backgroundImage, text, marginLeft }: IPageBanner) {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className={style.pageBanner}
    >
      <h1
        className={style.pageBannerText}
        style={{ marginLeft: `${marginLeft}` }}
      >
        {text}
      </h1>
    </div>
  );
}
