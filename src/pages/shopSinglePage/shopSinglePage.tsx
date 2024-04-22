import style from "./shopSinglePage.module.css";
import { offersData, shopData } from "../../data/data";
import bgi from "../../img/shopSinglePageBannerBgi.png";
import { PageBanner } from "../../components/pageBanner/pageBanner";
import { Product } from "../../components/product/product";
import { useState } from "react";

export function ShopSinglePage() {
  const [imgState, setImgState] = useState(shopData[0].photo);
  return (
    <section className={style.shopSinglePage}>
      <PageBanner
        backgroundImage={bgi}
        text={shopData[0].title}
        marginLeft="0"
      />
      <div className={style.productWrap}>
        <div className={style.imgProduct}>
          <div className={style.imgProductWrap}>
            <div className={style.imgProductTypeWrap}>
              <p className={style.imgProductType}>{shopData[0].type}</p>
            </div>
            <img src={imgState} alt="Photo" className={style.imgProductPhoto} />
          </div>
          <ul className={style.galleryProductList}>
            {shopData[0].photoMin.map((item, index) => (
              <li
                className={style.galleryProductItem}
                key={index}
                onClick={() => {
                  setImgState(item);
                }}
              >
                <img
                  className={style.galleryProductItemImg}
                  src={item}
                  alt="photoMin"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className={style.infoProduct}>
          <h2 className={style.infoProductTitle}>{shopData[0].title}</h2>
          {shopData[0].text.map((item, index) => (
            <p className={style.infoProductText} key={index}>
              {item}
            </p>
          ))}
          <div className={style.infoProductBnts}>
            {shopData[0].wbUrl != "" && (
              <div className={style.infoProductBntWb}>
                <a
                  className={style.infoProductBntWbLink}
                  href={shopData[0].wbUrl}
                >
                  Wildberries
                </a>
              </div>
            )}
            {shopData[0].wbUrl != "" && (
              <div className={style.infoProductBntOzon}>
                <a
                  className={style.infoProductBntOzonLink}
                  href={shopData[0].ozonUrl}
                >
                  OZON
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={style.simularProducts}>
        <h3 className={style.simularProductsTitle}>Похожие продукты</h3>
        <ul className={style.simularProductsList}>
          {offersData.map((item, index) => (
            <li className={style.simularProductsListItem} key={index}>
              <Product name={item.name} photo={item.photo} type={item.type} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
