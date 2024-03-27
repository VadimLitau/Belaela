import { Header } from "./components/header/header";
import styles from "./App.module.css";
import { Banner } from "./components/banner/banner";

function App() {
  return (
    <div className={styles.wrap}>
      <Header />
      <Banner />
      <div>Hello World</div>
    </div>
  );
}

export default App;
