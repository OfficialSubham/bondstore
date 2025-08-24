import { useEffect, useRef, useState } from "react";
import Carousel from "../components/carousel";
import type {
  ProductInter,
  productPurchased,
} from "@codersubham/bond-store-types";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { bulkProduct } from "../store/allProductsStore";
import { useParams } from "react-router-dom";
import { addedToCartState, cartState } from "../store/cart";

const EachProduct = () => {
  const { id } = useParams<{ id: string }>();
  const [cart, setCart] = useRecoilState(cartState);
  const addToCartNotification = useSetRecoilState(addedToCartState);
  const [currentProduct, setCurrentProduct] = useState<
    ProductInter | undefined
  >();
  const productValue = useRecoilValue(bulkProduct);

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
      if (eachItem.productId == Number(id)) {
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
          if (eachItem.productId == currentProduct?.productId) {
            return {
              ...eachItem,
              quantity: eachItem.quantity + 1,
            };
          }
          return eachItem;
        });
      });
    } else {
      setCart((crt) =>
        crt.concat({
          productId: Number(id),
          productName: currentProduct?.productName,
          productImage: currentProduct?.productImages[0],
          productAcutalPrice: currentProduct?.productAcutalPrice,
          productDiscountedPrice: currentProduct?.productDiscountedPrice,
          quantity: 1,
        } as productPurchased)
      );
    }
  };

  useEffect(() => {
    const productId = Number(id);
    const product = productValue?.find((pro) => {
      if (pro.productId == productId) return pro;
    });
    setCurrentProduct(product);
  }, [id, productValue]);

  useEffect(() => {
    localStorage.setItem("yourCart", JSON.stringify(cart));
  }, [cart]);

  return (
    currentProduct && (
      <div className="flex flex-col gap-8 font-toreadore w-full">
        <Carousel slides={currentProduct.productImages} />
        <h1 className="leading-4">{currentProduct?.productName}</h1>
        <div>
          Category :{" "}
          <span className="px-3 bg-slate-300/18 py-1 rounded-md">
            {currentProduct.productCategory}
          </span>
        </div>
        <div className="whitespace-pre-line">
          Description : <br />
          {currentProduct?.productDesc.length <= 250
            ? currentProduct?.productDesc
            : `${currentProduct?.productDesc.slice(0, 250)}...`}
        </div>
        <div className="flex gap-2 items-center">
          Sale :{" "}
          <span className="text-xl line-through text-slate-400">
            {currentProduct.productAcutalPrice}
          </span>
          <span className="px-4 py-2 bg-black font-bold text-white rounded-md tracking-wider">
            {Math.floor(
              ((currentProduct.productAcutalPrice -
                currentProduct.productDiscountedPrice) /
                currentProduct.productAcutalPrice) *
                100
            )}{" "}
            % off
          </span>
        </div>
        <div>
          Price :{" "}
          <span className="px-3 bg-slate-300/18 py-1 rounded-md">
            ₹ {currentProduct?.productDiscountedPrice}/-
          </span>
        </div>
        <div className="mx-auto">
          <button
            className="bg-black text-white rounded-md hover:bg-transparent hover:border border-black hover:text-black transition-all duration-300 px-10 py-4 font-toreadore"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    )
  );
};

export default EachProduct;
