import { PageBanner } from "../../components/pageBanner/pageBanner";
import style from "./shopPage.module.css";
import bannerBgi from "../../img/catalogBannerBgi.png";
import { shopData } from "../../data/data";

export function ShopPage() {
  return (
    <section className={style.shopPage}>
      <PageBanner
        backgroundImage={bannerBgi}
        text="Каталог"
        marginLeft="100px"
      />
      <div className={style.offers}>
        <ul className={style.offersList}>
          {shopData.map((item, index) => (
            <li className={style.offersListItem} key={index}>
              <div className={style.offersListItemType}>{item.type}</div>
              <img
                src={item.photo}
                alt={item.name}
                className={style.offersListItemPhoto}
              />
              <p className={style.offersListItemName}>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
