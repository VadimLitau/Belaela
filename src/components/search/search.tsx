import styles from "./search.module.css";

export const Seacrh = () => {
  return (
    <label htmlFor="headerSearch">
      <div className={styles.wrap}>
        <input id="headerSearch" type="text" className={styles.inputSeacrh} />
        <h1>Search</h1>
      </div>
    </label>
  );
};
