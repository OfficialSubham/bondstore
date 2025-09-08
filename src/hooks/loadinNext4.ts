import { useRecoilState } from "recoil";
import {
  categoryPageState,
  categoryProductsState,
} from "../store/allProductsStore";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export function useLoadMoreProducts() {
  const [, setProducts] = useRecoilState(categoryProductsState);
  const [pages, setPages] = useRecoilState(categoryPageState);

  return async (category: string) => {
    const nextPage = (pages[category] || 1) + 1;

    const res = await axios.get(
      `${BACKEND_URL}/allproduct/category/${category}?page=${nextPage}`
    );
    // console.log("Check", res.data.products);
    if (!res.data.products || res.data.products.length === 0) {
      alert("No more products");
      return;
    }

    setProducts((prev) => ({
      ...prev,
      [category]: [...(prev[category] || []), ...res.data.products],
    }));

    setPages((prev) => ({ ...prev, [category]: nextPage }));
  };
}
