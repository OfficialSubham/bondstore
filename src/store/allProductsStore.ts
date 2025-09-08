import type { ProductInter } from "@codersubham/bond-store-types";
import axios from "axios";
import { atom, selector } from "recoil";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// export const categoryProductSelector = selectorFamily({
//   key: "categoryProducts",
//   get:
//     ({ category, page }: { category: string; page: number }) =>
//     async () => {
//       try {
//         const res = await axios.get(
//           `${BACKEND_URL}/allproduct/category/${category}?page=${page}`
//         );
//         const products = res.data.products as ProductInter[];
//         console.log(res.data.products);
//         return products;
//       } catch (error) {
//         console.log(error);
//       }
//     },
// });

export const oneProductPerCategorySelector = selector<ProductInter[]>({
  key: "oneProductPerCategorySelector",
  get: ({ get }) => {
    const products = get(categoryProductsState);
    const flatProduct = Object.values(products).flat();
    if (!products) return [];

    const categoryMap = new Map<string, ProductInter>();

    for (const product of flatProduct) {
      if (!categoryMap.has(product.productCategory)) {
        categoryMap.set(product.productCategory, product);
      }
    }

    return Array.from(categoryMap.values());
  },
});

export const categoryPageState = atom<Record<string, number>>({
  key: "categoryPageState",
  default: {},
});

export const categoryProductsState = atom<Record<string, ProductInter[]>>({
  key: "categoryProductsState",
  default: selector({
    key: "categoryProductsStateSelector",
    get: async () => {
      try {
        // const res = await axios.get(`${BACKEND_URL}/allproduct/bulk`);
        const initialData = await axios.get(
          `${BACKEND_URL}/allproduct/giveinitial`
        );
        // console.log(initialData.data.productsByCategory);

        return initialData.data.productsByCategory;
      } catch (error) {
        console.log(error);
      }
      return [];
    },
  }), // { "importedbags": [4 products], "menswallet": [4 products] }
});
