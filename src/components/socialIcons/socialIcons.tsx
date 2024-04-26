import style from "./socialIcons.module.css";

interface ISocialListItem {
  backgroundImage: string;
  altText: string;
}

interface ISocialIcons {
  socialListData: ISocialListItem[];
}

export function SocialIcons({ socialListData }: ISocialIcons) {
  return (
    <ul className={style.socialIconsList}>
      {socialListData.map((item, index) => (
        <li className={style.socialIconsListItem} key={index}>
          <a href="#" className={style.socialIconsListItemLink}>
            <img
              src={item.backgroundImage}
              alt={item.altText}
              className={style.socialIconsListItemImage}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
