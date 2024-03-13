import styles from "./navigation.module.css";

interface IDataItem {
  list: string;
  uppercase?: boolean | undefined;
}
interface INavigationData {
  navData: IDataItem[];
}

export const Navigation: React.FC<INavigationData> = ({
  navData,
}: INavigationData) => {
  return (
    <nav className={styles.wrap}>
      <ul className={styles.list}>
        {navData.map((item) => {
          return (
            <li
              className={`${styles.listItem} ${
                item.uppercase ? styles.listItemUppercase : ""
              }`}
            >
              {item.list}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
