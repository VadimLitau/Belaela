import style from "./offerBanners.module.css";

interface IOfferBanners {
  props: {
    img: string;
    colorTitle: string;
    title: string;
    colorText: string;
    text: string;
  }[];
}
export function OfferBanners({ props }: IOfferBanners) {
  return (
    <div className={style.main}>
      {props.map((item, index) => {
        return (
          <div
            key={index}
            className={style.banner}
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className={style.bannerWrap}>
              <h2
                className={style.bannerTitle}
                style={{ color: `${item.colorTitle}` }}
              >
                {item.title}
              </h2>
              <p
                className={style.bannerText}
                style={{ color: `${item.colorText}` }}
              >
                {item.text}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
