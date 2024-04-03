import { Header } from "./components/header/header";
import styles from "./App.module.css";
import { Banner } from "./components/banner/banner";
import { OfferBanners } from "./components/offerBanners/offerBanners";
import { offerBannersData } from "./data/data";
import { About } from "./components/about/about";
import { Products } from "./components/products/products";
import { Reviews } from "./components/reviews/reviews";
import { Offers } from "./components/offers/offers";
import { WhoWeAre } from "./components/whoWeAre/whoWeAre";
function App() {
  return (
    <div className={styles.wrap}>
      <Header />
      <Banner />
      <OfferBanners props={offerBannersData} />
      <About />
      <Products />
      <Reviews />
      <Offers />
      <WhoWeAre />
    </div>
  );
}

export default App;
