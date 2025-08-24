import { useRecoilValue } from "recoil";
import { addedToCartState } from "../store/cart";

const AddedToCart = () => {
  const addedToCart = useRecoilValue(addedToCartState);
  return (
    <div
      className=" fixed right-5 px-5 py-3 rounded-md bottom-10 bg-black text-white font-toreadore pointer-events-none flex items-center z-10 justify-center"
      style={{
        translate: addedToCart ? "0%" : "120%",
        transition: "translate 0.3s ease-in-out",
      }}
    >
      Added to cart &#9989;
    </div>
  );
};

export default AddedToCart;
