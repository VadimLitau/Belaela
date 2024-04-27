import { PageBanner } from "../../components/pageBanner/pageBanner";
import style from "./blogPage.module.css";
import bgi from "../../img/blogPageBannerBgi.png";
import { NewsItem } from "../../components/newsItem/newsItem";
import { useStore } from "../../store/store";

export function BlogPage() {
  const { blogData: data } = useStore();
  return (
    <section className={style.blogPage}>
      <PageBanner backgroundImage={bgi} text="Новости" marginLeft="-112px" />
      <ul className={style.blogList}>
        {data.map((item, index) => (
          <li key={index} className={style.blogListItem}>
            <NewsItem
              backgroundImage={item.backgroundImage}
              date={item.date}
              title={item.title}
              supTitle={item.supTitle}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
