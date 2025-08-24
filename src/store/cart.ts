import type { productPurchased } from "@codersubham/bond-store-types";
import { atom, selector } from "recoil";

export const cartState = atom({
  key: "cartState",
  default: [] as productPurchased[],
});

export const cartHydratedState = atom({
  key: "cartHydratedState",
  default: false,
});

export const totalPrice = selector({
  key: "totalPrice",
  get: ({ get }) => {
    const cart = get(cartState);
    let total = 0;
    cart.forEach((item) => {
      total += (item.productPrice / 100) * item.quantity;
    });
    return total;
  },
});

export const totalProduct = selector({
  key: "totalProduct",
  get: ({ get }) => {
    const cart = get(cartState);
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  },
});

export const addedToCartState = atom({
  key: "addedToCartState",
  default: false,
});
