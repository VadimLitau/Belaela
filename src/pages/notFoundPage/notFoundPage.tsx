import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/button";
import style from "./notFoundPage.module.css";

export function NotFoundPage() {
  const navigate = useNavigate();
  const btnClick = () => {
    navigate("/shop");
  };
  const btnStyles = {
    padding: "28px 48px",
    border_radius: "16px",
    border: "none",
    background_color: "#274C5B",
    margin_top: "46px",
    text_color: "#FFFFFF",
    font_size: "20px",
    font_weight: 700,
    font_family: "Roboto, sans-serif",
  };
  return (
    <section className={style.notFoundPage}>
      <div className={style.notFoundPageWrap}>
        <h1 className={style.notFoundPageTitle}>404</h1>
        <p className={style.notFoundPageSupTitle}>Страница не найдена</p>
        <p className={style.notFoundPageText}>
          The page you are looking for doesn't exist or has been moved
        </p>
        <div className={style.notFoundPageBtnWrap}>
          <Button
            styles={btnStyles}
            text="В каталог "
            arrow
            action={btnClick}
          />
        </div>
      </div>
    </section>
  );
}
