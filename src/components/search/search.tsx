/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from "./search.module.css";
import useForm from "../../hooks/useForm";
import searchBtn from "../../img/SearchBtn.svg";

export const Seacrh = () => {
  const [values, setValues] = useForm();
  return (
    <label htmlFor="headerSearch">
      <div className={styles.wrap}>
        <input
          id="headerSearch"
          type="text"
          name="headerSearch"
          className={styles.inputSeacrh}
          value={values.headerSearch || ""}
          onChange={setValues}
        />
        <button
          className={styles.btn}
          type={"button"}
          onClick={() => {
            console.log("button pressed");
          }}
        >
          <img src={searchBtn} alt="Кнопка поиска" className={styles.wrapImg} />
        </button>
      </div>
    </label>
  );
};
