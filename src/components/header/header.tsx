import { Navigation } from "../navigation/navigation";
import styles from "./header.module.css";
import belaelaLogo from "../../img/BelaelaLogo.svg";
import { Link } from "react-router-dom";
import { useProduct } from "../../store/store";
import { Search } from "../search/search";
export function Header() {
	const { navigationData: data } = useProduct();
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
					<Search />
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
