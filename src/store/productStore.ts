import { create } from "zustand";
import { IProductData, IShopData } from "../types/productStoreTypes";
import product1 from "../img/products1.png";
import product2 from "../img/products2.png";
interface IProductStore {
	bears: number;
	productData: IProductData[];
	shopData: IShopData[];
	fetchProducts: () => Promise<void>;
}

export const useProductStore = create<IProductStore>((set) => ({
	productData: [
		{
			id: 0,
			type: "Масла",
			photo: `${product1}`,
			photoMin: [`${product1}`, `${product1}`, `${product1}`, `${product1}`],
			name: "Масло тыквенное, 250мл",
			title: "Масло тыквенное",
			text: [
				"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
				"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
			],
			wbUrl: "#",
			ozonUrl: "#",
		},
		{
			id: 1,
			type: "Мука",
			photo: `${product1}`,
			photoMin: [`${product1}`, `${product1}`, `${product1}`, `${product1}`],
			name: "Масло кунжутное, 250мл ",
			title: "Масло кунжутное",
			text: [
				"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
				"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
			],
			wbUrl: "#",
			ozonUrl: "#",
		},
		{
			id: 2,
			type: "Каши",
			photo: `${product1}`,
			photoMin: [`${product1}`, `${product1}`, `${product1}`, `${product1}`],
			name: "Масло грецкого ореха, 250 мл",
			title: "Масло грецкого ореха",
			text: [
				"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
				"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
			],
			wbUrl: "#",
			ozonUrl: "#",
		},
		{
			id: 3,
			type: "Масла",
			photo: `${product1}`,
			photoMin: [`${product1}`, `${product1}`, `${product1}`, `${product1}`],
			name: "Масло Конопляное, 250мл ",
			title: "Масло Конопляное",
			text: [
				"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
				"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
			],
			wbUrl: "#",
			ozonUrl: "#",
		},
		{
			id: 4,
			type: "Масла",
			photo: `${product2}`,
			photoMin: [`${product2}`, `${product2}`, `${product2}`, `${product2}`],
			name: "Масло тыквенное, 250мл",
			title: "Масло тыквенное",
			text: [
				"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
				"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
			],
			wbUrl: "#",
			ozonUrl: "#",
		},
		{
			id: 5,
			type: "Мука",
			photo: `${product2}`,
			photoMin: [`${product2}`, `${product2}`, `${product2}`, `${product2}`],
			name: "Масло кунжутное, 250мл ",
			title: "Масло кунжутное",
			text: [
				"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
				"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
			],
			wbUrl: "#",
			ozonUrl: "#",
		},
		{
			id: 6,
			type: "Каши",
			photo: `${product2}`,
			photoMin: [`${product2}`, `${product2}`, `${product2}`, `${product2}`],
			name: "Масло грецкого ореха, 250 мл",
			title: "Масло грецкого ореха",
			text: [
				"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
				"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
			],
			wbUrl: "#",
			ozonUrl: "#",
		},
		{
			id: 7,
			type: "Масла",
			photo: `${product2}`,
			photoMin: [`${product2}`, `${product2}`, `${product2}`, `${product2}`],
			name: "Масло Конопляное, 250мл ",
			title: "Масло Конопляное",
			text: [
				"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
				"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
			],
			wbUrl: "#",
			ozonUrl: "#",
		},
	],
	shopData: [],
	fetchProducts: async () => {
		try {
			const response = await fetch(
				"https://belaela-backend.vercel.app/api/products"
			);
			if (!response.ok) {
				throw new Error(`Error: ${response.status}`);
			}
			const result = await response.json();
			set({ shopData: result });
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			console.log(err.message);
		}
	},
	bears: 0,
	increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
}));
