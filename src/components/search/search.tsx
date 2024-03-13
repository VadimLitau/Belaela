/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from "./search.module.css";
import useForm from "../../hooks/useForm";

export const Seacrh = () => {
  const [values, setValues] = useForm();
  console.log(values);
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
        <h1>Search</h1>
      </div>
    </label>
  );
};
