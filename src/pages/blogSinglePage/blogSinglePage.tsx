import style from "./blogSinglePage.module.css";

export function BlogSinglePage() {
  return (
    <section className={style.blogSinglePage}>
      <div className={style.headerSinglePage}>
        <div className={style.headerSinglePageInfoWrap}>
          <div className={style.headerSinglePageInfo}>
            <p className={style.headerSinglePageInfoDate}>
              <span className={style.headerSinglePageInfoDateBold}>
                Дата публикации:
              </span>{" "}
              Январь 6, 2024
            </p>
            <h1 className={style.headerSinglePageName}>
              Research More Organic Food
            </h1>
            <p className={style.headerSinglePageText}>
              Established fact that a reader will be distracted by the readable
              content of a page when looking a layout. The point of using Lorem
              Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed
            </p>
          </div>
        </div>
        <div className={style.headerSinglePageBody}>
          <p className={style.headerSinglePageBodyText}>
            Uniquely matrix economically sound value through cooperative
            technology. Competently parallel task fully researched data and
            enterprise process improvements. Collaboratively expedite quality
            manufactured products via client-focused results quickly communicate
            enabled technology and turnkey leadership skills. Uniquely enable
            accurate supply chains rather than friction technology.
          </p>
          <h2 className={style.headerSinglePageBodyTitle}>
            Preferred Form of Vitamin D?
          </h2>
          <p className={style.headerSinglePageBodyText}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking a layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English.
          </p>
          <ul className={style.headerSinglePageBodyList}>
            <li className={style.headerSinglePageBodyListItem}>
              Publishing packages and web pageLorem Ipsum as their default
            </li>
            <li className={style.headerSinglePageBodyListItem}>
              Content here, content here', making it look like readable
            </li>
            <li className={style.headerSinglePageBodyListItem}>
              Content here, content here', making it look like readable
            </li>
          </ul>
          <div className={style.headerSinglePageBodyWrap}>
            <p className={style.headerSinglePageBodyWrappedText}>
              “The first rule of any organic used in a business is that nature
              applied to an efficient operation will magnify the efficiency. The
              second is that organic applied to an inefficient operation will
              magnify the health.”
            </p>
          </div>
          <h2 className={style.headerSinglePageBodyFooterTitle}>
            Make perfect organic product with us
          </h2>
          <p className={style.headerSinglePageBodyText}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking a layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English.
          </p>
          <ol className={style.headerSinglePageBodyListSecond}>
            <li className={style.headerSinglePageBodyListItemSecond}>
              Publishing packages and web pageLorem Ipsum as their default
            </li>
            <li className={style.headerSinglePageBodyListItemSecond}>
              Content here, content here', making it look like readable
            </li>
            <li className={style.headerSinglePageBodyListItemSecond}>
              Packages and web pageLorem Ipsum as their default
            </li>
            <li className={style.headerSinglePageBodyListItemSecond}>
              more-or-less normal distribution of letters
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
