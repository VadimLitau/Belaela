import offerBanner1 from "../img/offerBanner1.png";
import offerBanner2 from "../img//offerBanner2.jpg";
import listIcon1 from "../img/listIcon1.svg";
import listIcon2 from "../img/listIcon2.svg";

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
export { navigationData, offerBannersData, aboutData };
