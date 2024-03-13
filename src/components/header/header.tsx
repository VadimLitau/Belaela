import { navigationData } from "../../data/data";
import { Navigation } from "../navigation/navigation";
import { Seacrh } from "../search/search";
import styles from "./header.module.css";

export function Header() {
  return (
    <div className={styles.wrap}>
      <img src="../../public/belaelaLogo.svg" alt="Belaela логотип" />
      <Navigation navData={navigationData} />
      <Seacrh />
    </div>
  );
}
