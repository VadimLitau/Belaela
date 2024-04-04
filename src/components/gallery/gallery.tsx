import { Button } from "../button/button";
import style from "./gallery.module.css";
import { galleryData } from "../../data/data";

export function Gallery() {
  const btnStyles = {
    padding: "28px 39px",
    border_radius: "16px",
    border: "none",
    background_color: "#FFFFFF",
    margin_top: "46px",
    font_size: "20px",
    font_weight: 700,
    font_family: "Roboto, sans-serif",
  };
  const handleButton = () => {
    console.log("click about");
  };
  return (
    <div className={style.galleryWrap}>
      <div className={style.gallery}>
        <ul className={style.galleryList}>
          {galleryData.map((item, index) => (
            <li className={style.galleryListItem} key={index}>
              <div
                className={style.galleryListBtnWrap}
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              >
                <Button
                  action={handleButton}
                  text={item.btnText}
                  styles={btnStyles}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
