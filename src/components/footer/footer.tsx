import useForm from "../../hooks/useForm";
import { Button } from "../button/button";
import style from "./footer.module.css";
import logo from "../../img/BelaelaLogo.svg";
import {
  footerContactsData,
  utilityPages,
  socialListData,
} from "../../data/data";

export function Footer() {
  const [values, setValue] = useForm();
  const btnStyles = {
    padding: "28px 48px",
    border_radius: "16px",
    border: "none",
    background_color: "#7eb693",
    text_color: "#FFFFFF",
    font_size: "20px",
    font_weight: 700,
    font_family: "Roboto, sans-serif",
  };
  const handleButton = () => {
    console.log("click NewsItem");
  };
  return (
    <section className={style.footer}>
      <div className={style.footerWrap}>
        <div className={style.footerPromo}>
          <h2 className={style.footerPromoTitle}>
            Узнайте первыми о новых акциях!
          </h2>
          <label htmlFor="footerEmail">
            <div className={style.footerPromoForm}>
              <input
                id="footerEmail"
                type="text"
                name="footerEmail"
                className={style.footerEmail}
                value={values.footerEmail || ""}
                onChange={setValue}
                placeholder="Введите ваш e-mail адресс"
              />
              <Button
                action={handleButton}
                text="Подписаться"
                styles={btnStyles}
              />
            </div>
          </label>
        </div>
      </div>
      <div className={style.footerNav}>
        <nav className={style.footerNavContact}>
          <h3 className={style.footerNavContactTitle}>Contact Us</h3>
          <ul className={style.footerNavContactList}>
            {footerContactsData.map((item, index) => (
              <li className={style.footerNavContactListItem} key={index}>
                <h4 className={style.footerNavContactListItemTitle}>
                  {item.title}
                </h4>
                <p className={style.footerNavContactListItemSubtitle}>
                  {item.subtitle}
                </p>
              </li>
            ))}
          </ul>
        </nav>
        <div className={style.footerNavSocial}>
          <img
            src={logo}
            alt="логотип Belaela"
            className={style.footerNavSocialLogo}
          />
          <p className={style.footerNavSocialText}>
            Следите за новостями и акциями
            <br /> в наших социальных сетях, подпишитесь!
          </p>
          <ul className={style.footerNavSocialList}>
            {socialListData.map((item, index) => (
              <li className={style.footerNavSocialListItem} key={index}>
                <a href="#" className={style.footerNavSocialListItemLink}>
                  <img
                    src={item.backgroundImage}
                    alt={item.altText}
                    className={style.footerNavSocialListItemImage}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <nav className={style.footerNavUtility}>
          <h3 className={style.footerNavUtilityTitle}>Utility Pages</h3>
          <ul className={style.footerNavUtilityList}>
            {utilityPages.map((item, index) => (
              <li className={style.footerNavUtilityListItem} key={index}>
                <a href="#" className={style.footerNavUtilityListLink}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}