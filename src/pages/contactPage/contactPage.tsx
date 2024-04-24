import style from "./contactPage.module.css";
import bgi from "../../img/contactsPageBannerBgi.jpg";
import { PageBanner } from "../../components/pageBanner/pageBanner";
import socialImg from "../../img/contactsPhoto.jpg";
import email from "../../img/contactEmail.svg";
import phone from "../../img/contactPhone.svg";
import { socialListData } from "../../data/data";
import locationIcon from "../../img/locationIcon.png";
import { Button } from "../../components/button/button";

export function ContactPage() {
  const handleClick = () => {
    console.log("kurwa!");
  };
  const btnStyles = {
    padding: "28px 60px",
    border_radius: "16px",
    border: "none",
    background_color: "#274C5B",
    text_color: "#FFFFFF",
    font_size: "20px",
    font_weight: 700,
    font_family: "Roboto, sans-serif",
  };
  return (
    <section className={style.contactPage}>
      <PageBanner backgroundImage={bgi} text="Контакты" marginLeft="0" />
      <div className={style.contactPageSocial}>
        <img
          src={socialImg}
          alt="photo"
          className={style.contactPageSocialImg}
        />
        <div className={style.contactPageSocialWrap}>
          <h1 className={style.contactPageSocialTitle}>
            Мы с удовольствием поговорим о том, как мы можем работать вместе.
          </h1>
          <p className={style.contactPageSocialText}>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className={style.contactPageSocialBtn}>
            <div className={style.contactPageSocialBtnImgWrap}>
              <img
                src={email}
                alt="image"
                className={style.contactPageSocialBtnImg}
              />
            </div>
            <div className={style.contactPageSocialBtnWrap}>
              <p className={style.contactPageSocialBtnTitle}>Cообщение</p>
              <p className={style.contactPageSocialBtnSupTitle}>
                support@belalea.by
              </p>
            </div>
          </div>
          <div className={style.contactPageSocialBtn}>
            <div className={style.contactPageSocialBtnImgWrap}>
              <img
                src={phone}
                alt="image"
                className={style.contactPageSocialBtnImg}
              />
            </div>
            <div className={style.contactPageSocialBtnWrap}>
              <p className={style.contactPageSocialBtnTitle}>Звонок</p>
              <p className={style.contactPageSocialBtnSupTitle}>
                +375 (29) 789 789 5
              </p>
            </div>
          </div>
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
      </div>
      <div className={style.whereAreWeWrap}>
        <div className={style.whereAreWe}>
          <h2 className={style.whereAreWeTitle}>Где мы?</h2>
          <p className={style.whereAreWeSupTitle}>Наш адресс</p>
          <p className={style.whereAreWeText}>
            Мы находимся в самом экологически чистом районе Беларуси.
          </p>
          <ul className={style.whereAreWeAdressList}>
            <li className={style.whereAreWeListItem}>
              <img
                src={locationIcon}
                alt="locationIcon"
                className={style.whereAreWeListItemIcon}
              />
              <div className={style.whereAreWeListItemWrap}>
                <p className={style.whereAreWeListItemTitle}>Офис: </p>
                <p className={style.whereAreWeListItemSupTitle}>
                  г.Клецк, ул. Аветисова
                </p>
              </div>
            </li>
            <li className={style.whereAreWeListItem}>
              <img
                src={locationIcon}
                alt=""
                className={style.whereAreWeListItemIcon}
              />
              <div className={style.whereAreWeListItemWrap}>
                <p className={style.whereAreWeListItemTitle}> Производство: </p>
                <p className={style.whereAreWeListItemSupTitle}>
                  г.Клецк, ул. Нагдаляна
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.contanctPageFormWrap}>
        <form action="" className={style.contanctPageForm}>
          <div className={style.formInputWrap}>
            <label htmlFor="name" className={style.contanctPageFormLabel}>
              Как вас зовут?*
            </label>
            <input
              type="text"
              id="name"
              className={style.contanctPageFormInput}
              placeholder="Ирина, Денис, Елена"
              required
            />
          </div>
          <div className={style.formInputWrap}>
            <label htmlFor="email" className={style.contanctPageFormLabel}>
              Ваша почта*
            </label>
            <input
              type="text"
              id="email"
              className={style.contanctPageFormInput}
              placeholder="example@yourmail.com"
              required
            />
          </div>
          <div className={style.formInputWrap}>
            <label htmlFor="company" className={style.contanctPageFormLabel}>
              Компания
            </label>
            <input
              type="text"
              id="company"
              className={style.contanctPageFormInput}
              placeholder="Название вашей компании"
            />
          </div>
          <div className={style.formInputWrap}>
            <label htmlFor="theme" className={style.contanctPageFormLabel}>
              Тема обращения*
            </label>
            <input
              type="text"
              id="theme"
              className={style.contanctPageFormInput}
              placeholder="Напишите ваше предложение или вопрос"
              required
            />
          </div>
          <div className={style.formInputWrap}>
            <label htmlFor="message" className={style.contanctPageFormLabel}>
              Сообщение*
            </label>
            <textarea
              id="message"
              className={style.contanctPageFormTextArea}
              placeholder="Не забудьте поздороваться :)"
              required
            />
          </div>
        </form>
        <Button text="Отправить" styles={btnStyles} action={handleClick} />
      </div>
    </section>
  );
}
