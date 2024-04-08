import { Routes, Route } from "react-router-dom";
import { MainPage } from "../../pages/mainPage/mainPage";
import { AboutPage } from "../../pages/aboutPage/aboutPage";
import { ShopPage } from "../../pages/shopPage/shopPage";
import { ShopSinglePage } from "../../pages/shopSinglePage/shopSinglePage";
import { BlogPage } from "../../pages/blogPage/blogPage";
import { BlogSinglePage } from "../../pages/blogSinglePage/blogSinglePage";
import { ContactPage } from "../../pages/contactPage/contactPage";
import { NotFoundPage } from "../../pages/notFoundPage/notFoundPage";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import style from "./App.module.css";
function App() {
  return (
    <>
      <section className={style.main}>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop-single" element={<ShopSinglePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog-single" element={<BlogSinglePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/notFoundPage" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </section>
    </>
  );
}

export default App;
