import { PageBanner } from "../../components/pageBanner/pageBanner";
import style from "./aboutPage.module.css";
import bgi from "../../img/aboutPageBannerBgi.png";
import { Button } from "../../components/button/button";
import { useNavigate } from "react-router-dom";
import aboutImage from "../../img/aboutPageImage.png";
import tractorIcon from "../../img/tractor.svg";
import plantIcon from "../../img/plant.svg";
import whyWeImg from "../../img/whyWeImg.jpg";
import cartIcon from "../../img/cartIcon.svg";
import leafIcon from "../../img/leafIcon.svg";
import supportIcon from "../../img/supportIcon.svg";
import { Offers } from "../../components/offers/offers";

export function AboutPage() {
  const navigate = useNavigate();
  const btnClick = () => {
    navigate("/contacts");
  };
  const btnStyles = {
    padding: "29px 39px",
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
    <section className={style.aboutPage}>
      <PageBanner backgroundImage={bgi} text="О нас" marginLeft="-112px" />
      <div className={style.about}>
        <img src={aboutImage} alt="about img" className={style.aboutImg} />
        <div className={style.aboutWrap}>
          <h2 className={style.aboutTitle}>О нас</h2>
          <p className={style.aboutTitleText}>
            Натуральне продукты - здоровое население
          </p>
          <p className={style.aboutText}>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <p className={style.aboutText}>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley
          </p>
          <div className={style.aboutImageWrap}>
            <div className={style.aboutImageItem}>
              <img
                src={tractorIcon}
                alt="ictractorIconon"
                className={style.aboutImage}
              />
              <p className={style.aboutImageText}>
                Современная сельхоз. техника
              </p>
            </div>
            <div className={style.aboutImageItem}>
              <img
                src={plantIcon}
                alt="plantIcon"
                className={style.aboutImage}
              />
              <p className={style.aboutImageText}>
                Выращивание <br />
                без гормонов
              </p>
            </div>
          </div>
          <Button
            styles={btnStyles}
            text="Контакты"
            arrow={true}
            action={btnClick}
          />
        </div>
      </div>
      <div className={style.whyWeWrap}>
        <div className={style.whyWe}>
          <div className={style.whyWeInfo}>
            <h2 className={style.whyWeTitle}>Почему мы ?</h2>
            <p className={style.whyWeSupTitle}>
              Мы закупаем семена и орехи у лучших фермеров.
            </p>
            <p className={style.whyWeText}>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard the 1500s, when an
              unknown
            </p>
            <div className={style.whyWeArgWrap}>
              <p className={style.whyWeArg}>100% Натуральные продукты</p>
            </div>
            <p className={style.whyWeSupArg}>
              Simply dummy text of the printing and typesetting industry Lorem
              Ipsum
            </p>
            <div className={style.whyWeArgWrap}>
              <p className={style.whyWeArg}>
                Сертификаты качества и соответсвия
              </p>
            </div>
            <p className={style.whyWeSupArg}>
              Filling, and temptingly healthy, our Biona Organic Granola with
              Wild Berries is just the thing
            </p>
          </div>
          <img src={whyWeImg} alt="whyWeImg" className={style.whyWeImg} />
        </div>
        <div className={style.aboutCards}>
          <div className={style.aboutCard}>
            <div className={style.aboutCardImageWrap}>
              <img
                src={cartIcon}
                alt="cartIcon"
                className={style.aboutCardImage}
              />
            </div>
            <h3 className={style.aboutCardTitle}>Доступность</h3>
            <p className={style.aboutCardText}>
              Наша продукция во всех гипермаркетах
            </p>
          </div>
          <div className={style.aboutCard}>
            <div className={style.aboutCardImageWrap}>
              <img
                src={leafIcon}
                alt="leafIcon"
                className={style.aboutCardImage}
              />
            </div>
            <h3 className={style.aboutCardTitle}>100% Свежесть</h3>
            <p className={style.aboutCardText}>Мы - местный производитель</p>
          </div>
          <div className={style.aboutCard}>
            <div className={style.aboutCardImageWrap}>
              <img
                src={supportIcon}
                alt={supportIcon}
                className={style.aboutCardImage}
              />
            </div>
            <h3 className={style.aboutCardTitle}>Поддержка</h3>
            <p className={style.aboutCardText}>
              Мы всегда готовы ответить на все вопросы
            </p>
          </div>
        </div>
      </div>
      <Offers />
    </section>
  );
}
