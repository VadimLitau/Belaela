/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import style from "./shopSinglePage.module.css";
import bgi from "../../img/shopSinglePageBannerBgi.png";
import { PageBanner } from "../../components/pageBanner/pageBanner";
import { Product } from "../../components/product/product";
import { Key, useEffect, useState } from "react";
import { useProduct } from "../../store/store";
import { useProductStore } from "../../store/productStore";

export function ShopSinglePage() {
	const { offersData: data } = useProduct();
	const { shopData: shopData } = useProductStore();
	const [imgState, setImgState] = useState(shopData[11].photo);
	const [state, setState] = useState<any>([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://belaela-backend.vercel.app/api/products/"
				);
				// console.log(response);
				if (!response.ok) {
					throw new Error(`Error: ${response.status}`);
				}
				const result = await response.json();
				setState(result[11]);
				setImgState(result[11].photo);
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} catch (err: any) {
				console.log(err.message);
			}
		};

		fetchData();
	}, []);
	// console.log(state);
	return (
		state.photoMin && (
			<section className={style.shopSinglePage}>
				<PageBanner backgroundImage={bgi} text={state.title} marginLeft="0" />
				<div className={style.productWrap}>
					<div className={style.imgProduct}>
						<div className={style.imgProductWrap}>
							<div className={style.imgProductTypeWrap}>
								<p className={style.imgProductType}>{shopData[0].type}</p>
							</div>
							{/* <img src={imgState} alt="Photo" className={style.imgProductPhoto} /> */}
							<img
								src={imgState}
								alt="Photo"
								className={style.imgProductPhoto}
							/>
						</div>
						<ul className={style.galleryProductList}>
							{/* {shopData[0].photoMin.map((item, index) => ( */}
							{state.photoMin.map(
								(item: any, index: Key | null | undefined) => (
									<li
										className={style.galleryProductItem}
										key={index}
										onClick={() => {
											setImgState(item);
										}}
									>
										<img
											className={style.galleryProductItemImg}
											// src={item}
											src={item}
											alt="photoMin"
										/>
									</li>
								)
							)}
						</ul>
					</div>
					<div className={style.infoProduct}>
						<h2 className={style.infoProductTitle}>{state.title}</h2>
						{state.text.map((item: any, index: any) => (
							<p className={style.infoProductText} key={index}>
								{item}
							</p>
						))}
						<div className={style.infoProductBnts}>
							{shopData[0].wbUrl != "" && (
								<div className={style.infoProductBntWb}>
									<a
										className={style.infoProductBntWbLink}
										href={shopData[0].wbUrl}
									>
										Wildberries
									</a>
								</div>
							)}
							{shopData[0].wbUrl != "" && (
								<div className={style.infoProductBntOzon}>
									<a
										className={style.infoProductBntOzonLink}
										href={shopData[0].ozonUrl}
									>
										OZON
									</a>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className={style.simularProducts}>
					<h3 className={style.simularProductsTitle}>Похожие продукты</h3>
					<ul className={style.simularProductsList}>
						{data.map((item, index) => (
							<li className={style.simularProductsListItem} key={index}>
								<Product name={item.name} photo={item.photo} type={item.type} />
							</li>
						))}
					</ul>
				</div>
			</section>
		)
	);
}
