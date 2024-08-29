import style from "./contactPage.module.css";
import bgi from "../../img/contactsPageBannerBgi.jpg";
import { PageBanner } from "../../components/pageBanner/pageBanner";
import socialImg from "../../img/contactsPhoto.jpg";
import email from "../../img/contactEmail.svg";
import phone from "../../img/contactPhone.svg";
import locationIcon from "../../img/locationIcon.png";
import { Button } from "../../components/button/button";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { SocialIcons } from "../../components/socialIcons/socialIcons";
import { useProduct } from "../../store/store";

interface MyForm {
	name: string;
	email: string;
	company: string;
	theme: string;
	message: string;
}

export function ContactPage() {
	const { socialListData: socialListData } = useProduct();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<MyForm>({ defaultValues: {} });

	const submit: SubmitHandler<MyForm> = (data) => {
		console.log(data);
	};
	const error: SubmitErrorHandler<MyForm> = (data) => {
		console.log(data);
	};

	const EMAIL_REGEXP =
		/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

	const btnStyles = {
		padding: "28px 60px",
		border_radius: "16px",
		border: "none",
		background_color: "#274C5B",
		text_color: "#FFFFFF",
		font_size: "20px",
		font_weight: 700,
		font_family: "Roboto, sans-serif",
	};

	return (
		<section className={style.contactPage}>
			<PageBanner backgroundImage={bgi} text="Контакты" marginLeft="0" />
			<div className={style.contactPageSocial}>
				<img
					src={socialImg}
					alt="photo"
					className={style.contactPageSocialImg}
				/>
				<div className={style.contactPageSocialWrap}>
					<h1 className={style.contactPageSocialTitle}>
						Мы с удовольствием поговорим о том, как мы можем работать вместе.
					</h1>
					<p className={style.contactPageSocialText}>
						Simply dummy text of the printing and typesetting industry. Lorem
						had ceased to been the industry's standard dummy text ever since the
						1500s, when an unknown printer took a galley.
					</p>
					<div className={style.contactPageSocialBtn}>
						<div className={style.contactPageSocialBtnImgWrap}>
							<img
								src={email}
								alt="image"
								className={style.contactPageSocialBtnImg}
							/>
						</div>
						<div className={style.contactPageSocialBtnWrap}>
							<p className={style.contactPageSocialBtnTitle}>Cообщение</p>
							<p className={style.contactPageSocialBtnSupTitle}>
								support@belalea.by
							</p>
						</div>
					</div>
					<div className={style.contactPageSocialBtn}>
						<div className={style.contactPageSocialBtnImgWrap}>
							<img
								src={phone}
								alt="image"
								className={style.contactPageSocialBtnImg}
							/>
						</div>
						<div className={style.contactPageSocialBtnWrap}>
							<p className={style.contactPageSocialBtnTitle}>Звонок</p>
							<p className={style.contactPageSocialBtnSupTitle}>
								+375 (29) 789 789 5
							</p>
						</div>
					</div>
					<SocialIcons socialListData={socialListData} />
				</div>
			</div>
			<div className={style.whereAreWeWrap}>
				<div className={style.whereAreWe}>
					<h2 className={style.whereAreWeTitle}>Где мы?</h2>
					<p className={style.whereAreWeSupTitle}>Наш адресс</p>
					<p className={style.whereAreWeText}>
						Мы находимся в самом экологически чистом районе Беларуси.
					</p>
					<ul className={style.whereAreWeAdressList}>
						<li className={style.whereAreWeListItem}>
							<img
								src={locationIcon}
								alt="locationIcon"
								className={style.whereAreWeListItemIcon}
							/>
							<div className={style.whereAreWeListItemWrap}>
								<p className={style.whereAreWeListItemTitle}>Офис: </p>
								<p className={style.whereAreWeListItemSupTitle}>
									г.Клецк, ул. Аветисова
								</p>
							</div>
						</li>
						<li className={style.whereAreWeListItem}>
							<img
								src={locationIcon}
								alt=""
								className={style.whereAreWeListItemIcon}
							/>
							<div className={style.whereAreWeListItemWrap}>
								<p className={style.whereAreWeListItemTitle}> Производство: </p>
								<p className={style.whereAreWeListItemSupTitle}>
									г.Клецк, ул. Нагдаляна
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div className={style.contanctPageFormWrap}>
				<form
					action=""
					className={style.contanctPageForm}
					onSubmit={handleSubmit(submit, error)}
				>
					<div className={style.formInputWrap}>
						<label htmlFor="name" className={style.contanctPageFormLabel}>
							Как вас зовут?*
						</label>
						<input
							type="text"
							id="name"
							className={
								!errors.name
									? `${style.contanctPageFormInput}`
									: `${style.contanctPageFormInputError}`
							}
							placeholder="Ирина, Денис, Елена"
							{...register("name", { required: true, maxLength: 20 })}
						/>
						{errors.name && (
							<p className={style.inputErrorMessage}>
								Пожалуйста представьтесь
							</p>
						)}
					</div>
					<div className={style.formInputWrap}>
						<label htmlFor="email" className={style.contanctPageFormLabel}>
							Ваша почта*
						</label>
						<input
							type="text"
							id="email"
							className={
								!errors.email
									? `${style.contanctPageFormInput}`
									: `${style.contanctPageFormInputError}`
							}
							placeholder="example@yourmail.com"
							{...register("email", {
								pattern: EMAIL_REGEXP,
								required: true,
								maxLength: 20,
							})}
						/>
						{errors.email && (
							<p className={style.inputErrorMessage}>
								Пожалуйста введите вашу почту
							</p>
						)}
					</div>
					<div className={style.formInputWrap}>
						<label htmlFor="company" className={style.contanctPageFormLabel}>
							Компания
						</label>
						<input
							type="text"
							id="company"
							className={style.contanctPageFormInput}
							placeholder="Название вашей компании"
							{...register("company")}
						/>
					</div>
					<div className={style.formInputWrap}>
						<label htmlFor="theme" className={style.contanctPageFormLabel}>
							Тема обращения*
						</label>
						<input
							type="text"
							id="theme"
							className={
								!errors.theme
									? `${style.contanctPageFormInput}`
									: `${style.contanctPageFormInputError}`
							}
							placeholder="Напишите ваше предложение или вопрос"
							{...register("theme", { required: true, maxLength: 20 })}
						/>
						{errors.theme && (
							<p className={style.inputErrorMessage}>
								Пожалуйста введите тему обращения
							</p>
						)}
					</div>
					<div className={style.formInputWrap}>
						<label htmlFor="message" className={style.contanctPageFormLabel}>
							Сообщение*
						</label>
						<textarea
							id="message"
							className={
								!errors.message
									? `${style.contanctPageFormTextArea}`
									: `${style.contanctPageFormTextAreaError}`
							}
							placeholder="Не забудьте поздороваться :)"
							{...register("message", { required: true })}
						/>
						{errors.message && (
							<p
								className={`${style.inputErrorMessage} ${style.inputErrorMessageTextArea}`}
							>
								Пожалуйста введите сообщение
							</p>
						)}
					</div>
					<Button text="Отправить" styles={btnStyles} type="submit" />
				</form>
			</div>
		</section>
	);
}
