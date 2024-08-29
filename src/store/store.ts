import offerBanner1 from "../img/offerBanner1.png";
import offerBanner2 from "../img//offerBanner2.jpg";
import listIcon1 from "../img/listIcon1.svg";
import listIcon2 from "../img/listIcon2.svg";
import product1 from "../img/products1.png";
import galleryBgi1 from "../img/galleryItemBgi1.png";
import galleryBgi2 from "../img//galleryItemBgi2.jpg";
import galleryBgi3 from "../img/galleryItemBgi3.jpg";
import newsBackgroundImage1 from "../img/newsItemBgi1.png";
import newsBackgroundImage2 from "../img/newsItemBgi2.png";
import newsBackgroundImage3 from "../img/newsItemBgi3.png";
import newsBackgroundImage4 from "../img/newsItemBgi4.png";
import newsBackgroundImage5 from "../img/newsItemBgi5.png";
import newsBackgroundImage6 from "../img/newsItemBgi6.png";
import inst from "../img/Insta.svg";
import facebook from "../img/Fb.svg";
import twit from "../img/twit.svg";
import pint from "../img/pint.svg";
import { create } from "zustand";
import {
	IAboutData,
	INavigationData,
	IOfferBannersData,
	IReviewsData,
	IOffersData,
	IWhoWeAreData,
	IGalleryData,
	INewsData,
	IFooterContactsData,
	ISocialListData,
	IBlogData,
} from "../types/storeTypes";

interface IStore {
	navigationData: INavigationData[];
	offerBannersData: IOfferBannersData[];
	aboutData: IAboutData[];
	reviewsData: IReviewsData[];
	offersData: IOffersData[];
	whoWeAreData: IWhoWeAreData[];
	galleryData: IGalleryData[];
	newsData: INewsData[];
	footerContactsData: IFooterContactsData[];
	socialListData: ISocialListData[];
	blogData: IBlogData[];
	bears: number;
	increasePopulation: () => void;
	removeAllBears: () => void;
	updateBears: (newBears: number) => void;
}

export const useProduct = create<IStore>((set) => ({
	navigationData: [
		{ list: "О нас", to: "/about" },
		{ list: "Каталог", to: "/shop", uppercase: true },
		{ list: "Диллерам", to: "/#" },
		{ list: "Новости", to: "/blog" },
	],
	offerBannersData: [
		{
			img: `${offerBanner1}`,
			colorTitle: "#ffffff",
			title: "Новинки!",
			colorText: "#ffffff",
			text: "Свежайшее штирийское масло",
		},
		{
			img: `${offerBanner2}`,
			colorTitle: "#7EB693",
			title: "Скидка!",
			colorText: "#274C5B",
			text: "Скидка 20% за подписку",
		},
	],
	aboutData: [
		{
			icon: `${listIcon1}`,
			textTitle: "Только Натуральная продукция",
			text: "Полагаясь на природу, мы предлагаем продукты без искусственных добавок, гарантируя вам чистоту и качество.",
		},
		{
			icon: `${listIcon2}`,
			textTitle: "Высокие стандарты качества",
			text: "На каждом этапе производства мы стремимся к совершенству,  чтобы вы могли наслаждаться продуктами с превосходным качеством и вкусом.",
		},
	],
	reviewsData: [
		{
			title: "100%",
			text: "Органически",
		},
		{
			title: "15",
			text: `Продуктов на рынке`,
		},
		{
			title: "150+",
			text: "Торгорвых точек",
		},
		{
			title: "5+",
			text: "Лет на рынке",
		},
	],
	offersData: [
		{
			type: "Масла",
			photo: `${product1}`,
			name: "Масло тыквенное, 250мл",
		},
		{
			type: "Мука",
			photo: `${product1}`,
			name: "Масло кунжутное, 250мл ",
		},
		{
			type: "Каши",
			photo: `${product1}`,
			name: "Масло грецкого ореха, 250 мл",
		},
		{
			type: "Масла",
			photo: `${product1}`,
			name: "Масло Конопляное, 250мл ",
		},
	],
	whoWeAreData: [
		{
			title: "Современное сельское хозяйство",
			text: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.",
		},
		{
			title: "Технологичный подход в производстве",
			text: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.",
		},
		{
			title: "Популяризация натуральных продуктов",
			text: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.",
		},
	],
	galleryData: [
		{
			backgroundImage: `${galleryBgi1}`,
			btnText: "Натуральные масла",
		},
		{
			backgroundImage: `${galleryBgi3}`,
			btnText: "НОВИНКИ",
		},
		{
			backgroundImage: `${galleryBgi2}`,
			btnText: "Полезная мука",
		},
	],
	newsData: [
		{
			backgroundImage: `${newsBackgroundImage1}`,
			date: "25 Авг.",
			title: "Витаминная заправка для летнего салата",
			supTitle:
				"Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
		},
		{
			backgroundImage: `${newsBackgroundImage2}`,
			date: "25 Окт.",
			title: "Каих витаминов не хватает осенью?",
			supTitle:
				"Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
		},
	],
	footerContactsData: [
		{
			title: "Email",
			subtitle: "needhelp@Organia.com",
		},
		{
			title: "Phone",
			subtitle: "666 888 888",
		},
		{
			title: "Address",
			subtitle: "88 road, borklyn street, USA   ",
		},
	],
	socialListData: [
		{ backgroundImage: `${inst}`, altText: "instagram logo" },
		{ backgroundImage: `${facebook}`, altText: "facebook logo" },
		{ backgroundImage: `${twit}`, altText: "twitter logo" },
		{ backgroundImage: `${pint}`, altText: "pinterest logo" },
	],
	blogData: [
		{
			backgroundImage: `${newsBackgroundImage1}`,
			date: "25 Авг.",
			title: "Витаминная заправка для летнего салата",
			supTitle:
				"Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
		},
		{
			backgroundImage: `${newsBackgroundImage2}`,
			date: "25 Окт.",
			title: "Каих витаминов не хватает осенью?",
			supTitle:
				"Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
		},
		{
			backgroundImage: `${newsBackgroundImage3}`,
			date: "25 Авг.",
			title: "Benefits of Vitamin C & How to Get It",
			supTitle:
				"Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
		},
		{
			backgroundImage: `${newsBackgroundImage4}`,
			date: "25 Окт.",
			title: "Research More Organic Foods",
			supTitle:
				"Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
		},
		{
			backgroundImage: `${newsBackgroundImage5}`,
			date: "25 Авг.",
			title: "Everyday Fresh Fruites",
			supTitle:
				"Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
		},
		{
			backgroundImage: `${newsBackgroundImage6}`,
			date: "25 Окт.",
			title: "Don’t Use Plastic Product! it’s Kill Nature",
			supTitle:
				"Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
		},
	],
	bears: 0,
	increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
	removeAllBears: () => set({ bears: 0 }),
	updateBears: (newBears) => set({ bears: newBears }),
}));
