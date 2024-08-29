import useForm from "../../hooks/useForm";
import { Button } from "../button/button";
import style from "./footer.module.css";
import logo from "../../img/BelaelaLogo.svg";
import { utilityPages, urlData } from "../../data/data";
import { useLocation } from "react-router-dom";
import { SocialIcons } from "../socialIcons/socialIcons";
import { useProduct } from "../../store/store";

export function Footer() {
	const { footerContactsData: data, socialListData: socialListData } =
		useProduct();
	const location = useLocation();

	const [values, setValue] = useForm();
	const btnStyles = {
		padding: "28px 48px",
		border_radius: "16px",
		border: "none",
		background_color: "#7eb693",
		text_color: "#FFFFFF",
		font_size: "20px",
		font_weight: 700,
		font_family: "Roboto, sans-serif",
	};
	const handleButton = () => {
		console.log("click NewsItem");
	};
	const getLocation = (loc: string): boolean => {
		return urlData.includes(loc);
	};
	return (
		<section className={style.footer}>
			{getLocation(location.pathname) ? (
				<div className={style.footerWrap}>
					<div className={style.footerPromo}>
						<h2 className={style.footerPromoTitle}>
							Узнайте первыми о новых акциях!
						</h2>
						<label htmlFor="footerEmail">
							<div className={style.footerPromoForm}>
								<input
									id="footerEmail"
									type="text"
									name="footerEmail"
									className={style.footerEmail}
									value={values.footerEmail || ""}
									onChange={setValue}
									placeholder="Введите ваш e-mail адресс"
								/>
								<Button
									action={handleButton}
									text="Подписаться"
									styles={btnStyles}
								/>
							</div>
						</label>
					</div>
				</div>
			) : (
				""
			)}
			<div className={style.footerNav}>
				<nav className={style.footerNavContact}>
					<h3 className={style.footerNavContactTitle}>Contact Us</h3>
					<ul className={style.footerNavContactList}>
						{data.map((item, index) => (
							<li className={style.footerNavContactListItem} key={index}>
								<h4 className={style.footerNavContactListItemTitle}>
									{item.title}
								</h4>
								<p className={style.footerNavContactListItemSubtitle}>
									{item.subtitle}
								</p>
							</li>
						))}
					</ul>
				</nav>
				<div className={style.footerNavSocial}>
					<img
						src={logo}
						alt="логотип Belaela"
						className={style.footerNavSocialLogo}
					/>
					<p className={style.footerNavSocialText}>
						Следите за новостями и акциями
						<br /> в наших социальных сетях, подпишитесь!
					</p>
					<SocialIcons socialListData={socialListData} />
				</div>
				<nav className={style.footerNavUtility}>
					<h3 className={style.footerNavUtilityTitle}>Utility Pages</h3>
					<ul className={style.footerNavUtilityList}>
						{utilityPages.map((item, index) => (
							<li className={style.footerNavUtilityListItem} key={index}>
								<a href="#" className={style.footerNavUtilityListLink}>
									{item}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</section>
	);
}
