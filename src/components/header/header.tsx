import { navigationData } from "../../data/data";
import { Navigation } from "../navigation/navigation";
import { Seacrh } from "../search/search";
import styles from "./header.module.css";
import belaelaLogo from "../../img/BelaelaLogo.svg";

export function Header() {
  return (
    <section className={styles.header}>
      <div className={styles.wrap}>
        <img src={belaelaLogo} alt="Belaela логотип" />
        <Navigation navData={navigationData} />
        <div className={styles.searchWrap}>
          <Seacrh />
          <div className={styles.contactsWrap}>
            <div className={styles.contactsCircle} />
            <a href="#" className={styles.contactsText}>
              Контакты
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
