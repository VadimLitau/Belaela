import { Button } from "../button/button";
import styles from "./offers.module.css";
import { btnStyleYellowOffer } from "../../styles/variables/btnStyles";
import { Product } from "../product/product";
import { useProduct } from "../../store/store";
import { useNavigate } from "react-router-dom";

export function Offers() {
	const { offersData: data } = useProduct();
	const navigate = useNavigate();
	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
		navigate("/shop");
	};
	return (
		<section className={styles.offersWrap}>
			<div className={styles.offers}>
				<div className={styles.offersTitle}>
					<h2 className={styles.offersTitleText}>Лучшие предложения месяца</h2>
					<div className={styles.offersTitleBtn}>
						<Button
							text="Смотреть все"
							arrow={true}
							styles={btnStyleYellowOffer}
							action={handleClick}
						/>
					</div>
				</div>
				<ul className={styles.offersList}>
					{data.map((item, index) => (
						<li className={styles.offersListItem} key={index}>
							<Product name={item.name} photo={item.photo} type={item.type} />
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
