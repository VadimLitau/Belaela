import offerBanner1 from "../img/offerBanner1.png";
import offerBanner2 from "../img//offerBanner2.jpg";
import listIcon1 from "../img/listIcon1.svg";
import listIcon2 from "../img/listIcon2.svg";
import product1 from "../img/products1.png";
import product2 from "../img/products2.png";
import galleryBgi1 from "../img/galleryItemBgi1.png";
import galleryBgi2 from "../img//galleryItemBgi2.jpg";
import galleryBgi3 from "../img/galleryItemBgi3.jpg";
import newsBackgroundImage1 from "../img/newsItemBgi1.png";
import newsBackgroundImage2 from "../img/newsItemBgi2.png";
import inst from "../img/Insta.svg";
import facebook from "../img/Fb.svg";
import twit from "../img/twit.svg";
import pint from "../img/pint.svg";

const navigationData = [
  { list: "О нас" },
  { list: "Каталог", uppercase: true },
  { list: "Диллерам" },
  { list: "Новости" },
];

const offerBannersData = [
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
];

const aboutData = [
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
];

const productData = [
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
  {
    type: "Масла",
    photo: `${product2}`,
    name: "Масло тыквенное, 250мл",
  },
  {
    type: "Мука",
    photo: `${product2}`,
    name: "Масло кунжутное, 250мл ",
  },
  {
    type: "Каши",
    photo: `${product2}`,
    name: "Масло грецкого ореха, 250 мл",
  },
  {
    type: "Масла",
    photo: `${product2}`,
    name: "Масло Конопляное, 250мл ",
  },
];

const reviewsData = [
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
];
const offersData = [
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
];
const whoWeAreData = [
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
];

const galleryData = [
  {
    backgroundImage: `${galleryBgi1}`,
    btnText: "Натуральные масла",
  },
  {
    backgroundImage: `${galleryBgi2}`,
    btnText: "НОВИНКИ",
  },
  {
    backgroundImage: `${galleryBgi3}`,
    btnText: "Полезная мука",
  },
];

const newsData = [
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
];

const footerContactsData = [
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
];

const utilityPages = [
  "Style Guide",
  "404 Not Found",
  "Password Protected",
  "Licences",
  "Changelog",
];

const socialListData = [
  { backgroundImage: `${inst}`, altText: "instagram logo" },
  { backgroundImage: `${facebook}`, altText: "facebook logo" },
  { backgroundImage: `${twit}`, altText: "twitter logo" },
  { backgroundImage: `${pint}`, altText: "pinterest logo" },
];
export {
  navigationData,
  offerBannersData,
  aboutData,
  productData,
  reviewsData,
  offersData,
  whoWeAreData,
  galleryData,
  newsData,
  footerContactsData,
  utilityPages,
  socialListData,
};
