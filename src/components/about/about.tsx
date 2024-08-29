import { Button } from "../button/button";
import styles from "./about.module.css";
import { btnStyles } from "../../styles/variables/btnStyles";
import { useProduct } from "../../store/store";

export function About() {
	const { aboutData: data } = useProduct();

	const handleButton = () => {
		console.log("click about");
	};

	return (
		<div className={styles.aboutWrap}>
			<div className={styles.aboutInfo}>
				<h2 className={styles.aboutTitle}>О нас</h2>
				<p className={styles.aboutSupText}>
					Мы работаем только с качественным сырьём от местных фермеров
				</p>
				<p className={styles.aboutText}>
					Работа с местными фермерами приносит производственным компаниям
					преимущество в виде высококачественного сырья, укрепляет местное
					сообщество, снижает экологический след и способствует устойчивости
					цепочки поставок, обеспечивая надежность и прозрачность.
				</p>
				<ul className={styles.aboutList}>
					{data.map((item, index) => (
						<li className={styles.aboutListItem} key={index}>
							<div className={styles.aboutListItemIconWrap}>
								<img
									src={item.icon}
									alt="иконка"
									className={styles.aboutListItemIcon}
								/>
							</div>
							<div className={styles.aboutListItemTextWrap}>
								<h3 className={styles.aboutListItemTextTitle}>
									{item.textTitle}
								</h3>
								<p className={styles.aboutListItemText}>{item.text}</p>
							</div>
						</li>
					))}
				</ul>
				<Button
					action={handleButton}
					text="Подробнее"
					styles={btnStyles}
					arrow={true}
				/>
			</div>
		</div>
	);
}
