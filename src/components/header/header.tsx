import { Navigation } from "../navigation/navigation";
import { Seacrh } from "../search/search";
import styles from "./header.module.css";
import belaelaLogo from "../../img/BelaelaLogo.svg";
import { Link } from "react-router-dom";
import { useStore } from "../../store/store";
export function Header() {
  const { navigationData: data } = useStore();
  return (
    <section className={styles.header}>
      <div className={styles.wrap}>
        <Link to="/">
          <img
            src={belaelaLogo}
            alt="Belaela логотип"
            className={styles.imgLogo}
          />
        </Link>
        <Navigation navData={data} />
        <div className={styles.searchWrap}>
          <Seacrh />
          <div className={styles.contactsWrap}>
            <div className={styles.contactsCircle} />
            <Link to="/contact" className={styles.contactsText}>
              Контакты
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
