/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PageBanner } from "../../components/pageBanner/pageBanner";
import style from "./shopPage.module.css";
import bannerBgi from "../../img/catalogBannerBgi.png";
import { Product } from "../../components/product/product";
import { useProductStore } from "../../store/productStore";
import { useEffect, useState } from "react";

export function ShopPage() {
	const shopData = useProductStore((state) => state.shopData);
	console.log(shopData);

	const [state, setState] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://belaela-backend.vercel.app/api/products"
				);
				if (!response.ok) {
					throw new Error(`Error: ${response.status}`);
				}
				const result = await response.json();
				setState(result);
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} catch (err: any) {
				console.log(err.message);
			}
		};

		fetchData();
	}, []);
	return (
		state && (
			<section className={style.shopPage}>
				<PageBanner
					backgroundImage={bannerBgi}
					text="Каталог"
					marginLeft="100px"
				/>
				<div className={style.offers}>
					<ul className={style.offersList}>
						{state.map((item: any, index) => {
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
