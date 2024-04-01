import { Header } from "./components/header/header";
import styles from "./App.module.css";
import { Banner } from "./components/banner/banner";
import { OfferBanners } from "./components/offerBanners/offerBanners";
import { offerBannersData } from "./data/data";
import { About } from "./components/about/about";
import { Products } from "./components/products/products";
function App() {
  return (
    <div className={styles.wrap}>
      <Header />
      <Banner />
      <OfferBanners props={offerBannersData} />
      <About />
      <Products />
    </div>
  );
}

export default App;
