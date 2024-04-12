import { Button } from "../button/button";
import style from "./gallery.module.css";
import { galleryData } from "../../data/data";

export function Gallery() {
  const btnStyles = {
    padding: "34px 83px",
    border_radius: "16px",
    border: "none",
    background_color: "#FFFFFF",
    // margin_top: "10px",
    font_size: "25px",
    font_weight: 500,
    font_family: "Roboto, sans-serif",
  };
  const handleButton = () => {
    console.log("click about");
  };
  return (
    <section className={style.galleryWrap}>
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
    </section>
  );
}
