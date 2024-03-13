import { Header } from "./components/header/header";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.wrap}>
      <Header />
      <div>Hello World</div>
    </div>
  );
}

export default App;
