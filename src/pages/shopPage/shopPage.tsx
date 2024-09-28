/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PageBanner } from "../../components/pageBanner/pageBanner";
import style from "./shopPage.module.css";
import bannerBgi from "../../img/catalogBannerBgi.png";
import { Product } from "../../components/product/product";
import { useProductStore } from "../../store/productStore";
import { useEffect } from "react";

export function ShopPage() {
	const { shopData, fetchProducts } = useProductStore();

	useEffect(() => {
		if (shopData.length === 0) {
			fetchProducts();
		}
	}, [fetchProducts, shopData]);
	return (
		shopData && (
			<section className={style.shopPage}>
				<PageBanner
					backgroundImage={bannerBgi}
					text="Каталог"
					marginLeft="100px"
				/>
				<div className={style.offers}>
					<ul className={style.offersList}>
						{shopData.map((item: any, index) => {
							return (
								<li className={style.offersListItem} key={index}>
									<Product
										name={item.name}
										photo={item.photo}
										// photo={item.photo}
										type={item.type}
									/>
								</li>
							);
						})}
					</ul>
				</div>
			</section>
		)
	);
}
