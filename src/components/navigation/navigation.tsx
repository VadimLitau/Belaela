import styles from "./navigation.module.css";
import downArrow from "../../img/navArrowDown.jpg";
import { Link } from "react-router-dom";

interface IDataItem {
  list: string;
  to: string;
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
        {navData.map((item, index) => {
          return (
            <li
              key={index}
              className={`${styles.listItem} ${
                item.uppercase ? styles.listItemUppercase : ""
              }`}
            >
              <Link to={item.to} className={styles.listItemLink}>
                {item.list}
                {item.list === "Каталог" ? (
                  <img
                    src={downArrow}
                    style={{
                      width: "6px",
                      height: "3px",
                      marginBottom: "5px",
                      marginLeft: "2px",
                    }}
                  />
                ) : (
                  ""
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
