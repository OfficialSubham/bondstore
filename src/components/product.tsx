import type { ProductInter } from "@codersubham/bond-store-types";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { addedToCartState, cartState } from "../store/cart";
import { useRef } from "react";

type ProductSemiDetails = Pick<
  ProductInter,
  | "productImages"
  | "productName"
  | "productAcutalPrice"
  | "productId"
  | "productDiscountedPrice"
>;

const Product = ({
  productImages,
  productName,
  productAcutalPrice,
  productDiscountedPrice,
  productId,
}: ProductSemiDetails) => {
  const [cart, setCart] = useRecoilState(cartState);
  const addToCartNotification = useSetRecoilState(addedToCartState);
  const navigate = useNavigate();
  const timeId = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    let isMoreThanFive = false;
    addToCartNotification(true);
    if (timeId.current) {
      clearInterval(timeId.current);
    }
    timeId.current = setTimeout(() => {
      addToCartNotification(false);
    }, 1500);
    const isThere = cart.find((eachItem) => {
      if (eachItem.productId == productId) {
        if (eachItem.quantity < 5) {
          return true;
        } else {
          isMoreThanFive = true;
        }
      }
    });
    if (isMoreThanFive) {
      return alert("Not more than 5 items");
    }
    if (isThere) {
      setCart((currentCart) => {
        return currentCart.map((eachItem) => {
          if (eachItem.productId == productId) {
            return {
              ...eachItem,
              quantity: eachItem.quantity + 1,
            };
          }
          return eachItem;
        });
      });
    } else {
      setCart((cart) =>
        cart.concat({
          productId,
          productName,
          productImage: productImages[0],
          productAcutalPrice,
          productDiscountedPrice,
          quantity: 1,
        })
      );
    }
  };

  return (
    <div
      className="h-full snap-center w-50 mx-auto shrink-0 flex justify-center flex-col gap-2"
      onClick={() => {
        navigate(`/product/${productId}`);
      }}
    >
      <div className="h-40 flex-1 rounded-md w-full relative">
        <div className="absolute top-2 h-6 text-white font-bold w-12 bg-black rounded-md text-center right-2">
          {Math.floor(
            ((productAcutalPrice - productDiscountedPrice) /
              productAcutalPrice) *
              100
          )}
          % off
        </div>
        <img
          src={productImages[0].imgUrl}
          alt="this is alt"
          className="h-full w-full object-cover rounded-md"
        />
      </div>
      <div className="font-toreadore">
        Name :{" "}
        {productName.length > 1
          ? `${productName.slice(0, 10)}...`
          : productName}
        <br />
        Price :{" "}
        <span className="text-xs line-through text-slate-500">
          {productAcutalPrice}
        </span>
        <span className="font-bold ml-2">{productDiscountedPrice}</span>
      </div>
      <button
        className="bg-black text-white border rounded-md hover:bg-transparent hover:border border-black hover:text-black transition-all duration-300 px-5 py-2 font-toreadore"
        onClick={handleAddToCart}
      >
        Add to cart
      </button>
    </div>
  );
};

export const FilterProduct = ({
  productImages,
  productName,
  productAcutalPrice,
  productDiscountedPrice,
  productId,
}: ProductSemiDetails) => {
  const [cart, setCart] = useRecoilState(cartState);
  const addToCartNotification = useSetRecoilState(addedToCartState);
  const navigate = useNavigate();
  const timeId = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    let isMoreThanFive = false;
    addToCartNotification(true);
    if (timeId.current) {
      clearInterval(timeId.current);
    }
    timeId.current = setTimeout(() => {
      addToCartNotification(false);
    }, 1500);
    const isThere = cart.find((eachItem) => {
      if (eachItem.productId == productId) {
        if (eachItem.quantity < 5) {
          return true;
        } else {
          isMoreThanFive = true;
        }
      }
    });
    if (isMoreThanFive) {
      return alert("Not more than 5 items");
    }
    if (isThere) {
      setCart((currentCart) => {
        return currentCart.map((eachItem) => {
          if (eachItem.productId == productId) {
            return {
              ...eachItem,
              quantity: eachItem.quantity + 1,
            };
          }
          return eachItem;
        });
      });
    } else {
      setCart((cart) =>
        cart.concat({
          productId,
          productName,
          productImage: productImages[0],
          productAcutalPrice,
          productDiscountedPrice,
          quantity: 1,
        })
      );
    }
  };

  return (
    <div
      className="h-full snap-center sm:w-40 md:w-58 mx-auto shrink-0 flex justify-center flex-col gap-2"
      onClick={() => {
        navigate(`/product/${productId}`);
      }}
    >
      <div className="h-40 flex-1 rounded-md w-full relative">
        <div className="absolute top-2 h-6 text-white font-bold w-12 bg-black rounded-md text-xs flex items-center justify-center right-2">
          {Math.floor(
            ((productAcutalPrice - productDiscountedPrice) /
              productAcutalPrice) *
              100
          )}
          % off
        </div>
        <img
          src={productImages[0].imgUrl}
          alt="this is alt"
          className="h-full w-full object-cover rounded-md"
        />
      </div>
      <div className="font-toreadore">
        Name :{" "}
        {productName.length > 1
          ? `${productName.slice(0, 10)}...`
          : productName}
        <br />
        Price :{" "}
        <span className="text-xs line-through text-slate-500">
          {productAcutalPrice}
        </span>
        <span className="font-bold ml-2">{productDiscountedPrice}</span>
      </div>
      <button
        className="bg-black border text-white rounded-md hover:bg-transparent hover:border border-black hover:text-black transition-all duration-300 px-5 py-2 font-toreadore"
        onClick={handleAddToCart}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
