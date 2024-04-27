import { PageBanner } from "../../components/pageBanner/pageBanner";
import style from "./shopPage.module.css";
import bannerBgi from "../../img/catalogBannerBgi.png";
import { Product } from "../../components/product/product";
import { useProductStore } from "../../store/productStore";

export function ShopPage() {
  const { shopData: data } = useProductStore();
  return (
    <section className={style.shopPage}>
      <PageBanner
        backgroundImage={bannerBgi}
        text="Каталог"
        marginLeft="100px"
      />
      <div className={style.offers}>
        <ul className={style.offersList}>
          {data.map((item, index) => (
            <li className={style.offersListItem} key={index}>
              <Product name={item.name} photo={item.photo} type={item.type} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
