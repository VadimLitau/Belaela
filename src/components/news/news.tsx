import { useProduct } from "../../store/store";
import { Button } from "../button/button";
import { NewsItem } from "../newsItem/newsItem";
import style from "./news.module.css";

export function News() {
	const { newsData: data } = useProduct();

	const btnStyles = {
		padding: "25px",
		border_radius: "16px",
		border: "2px solid #274c5b",
		background_color: "#FFFFFF",
		margin_top: "74px",
		font_size: "20px",
		font_weight: 700,
		font_family: "Roboto, sans-serif",
	};
	const handleButton = () => {
		console.log("click about");
	};
	return (
		<section className={style.newsWrap}>
			<div className={style.news}>
				<div className={style.newsHeader}>
					<div className={style.newsHeaderWrap}>
						<h2 className={style.newsHeaderWrapTitle}>Новости</h2>
						<p className={style.newsHeaderWrapText}>
							Новости об органических продуктах и многом другом
						</p>
					</div>
					<Button
						action={handleButton}
						text="Больше новостей"
						styles={btnStyles}
						arrow={true}
					/>
				</div>
			</div>
			<ul className={style.newsList}>
				{data.map((item, index) => (
					<li className={style.newsListItem} key={index}>
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
