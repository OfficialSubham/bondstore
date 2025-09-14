import { useRecoilState, useSetRecoilState } from "recoil";
import {
  categoryPageState,
  categoryProductsState,
} from "../store/allProductsStore";
import axios from "axios";
import { loadingState } from "../store/loadingState";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export function useLoadMoreProducts() {
  const [, setProducts] = useRecoilState(categoryProductsState);
  const [pages, setPages] = useRecoilState(categoryPageState);
  const setLoading = useSetRecoilState(loadingState);
  return async (category: string) => {
    const nextPage = (pages[category] || 1) + 1;
    console.log("Next", nextPage);
    setLoading(true);
    try {
      const res = await axios.get(
        `${BACKEND_URL}/allproduct/category/${category}?page=${nextPage}`
      );
      // console.log("Check", res.data.products);
      if (!res.data.products || res.data.products.length === 0) {
        alert("No more products");
        return;
      }

      setProducts((prev) => {
        const existing = prev[category] || [];
        const merged = [...existing, ...res.data.products];
        const unique = merged.filter(
          (item, index, self) =>
            index === self.findIndex((p) => p.productId === item.productId)
        );
        console.log(unique.length);
        return { ...prev, [category]: unique };
      });
      setPages((prev) => ({ ...prev, [category]: nextPage }));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
}
