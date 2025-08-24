import { useNavigate } from "react-router-dom";
import CartProduct from "../components/cartProduct";
import { useRecoilValue } from "recoil";
import { cartState } from "../store/cart";

const Cart = () => {
  const navigate = useNavigate();
  const cart = useRecoilValue(cartState);
  return (
    <div className="relative h-screen flex flex-col">
      <div className="flex-1 w-full flex flex-col gap-4 overflow-y-scroll scrollbar-hidden">
        {cart.map((eachItem) => {
          return (
            <CartProduct
              key={eachItem.productId}
              productAcutalPrice={eachItem.productAcutalPrice}
              productDiscountedPrice={eachItem.productDiscountedPrice}
              productId={eachItem.productId}
              productImage={eachItem.productImage}
              quantity={eachItem.quantity}
              productName={eachItem.productName}
            />
          );
        })}
      </div>

      <div className="w-full  gap-2 px-2 py-4 rounded-md bg-slate-300/18 font-toreadore mt-5">
        <div className="flex justify-between">
          <h1>Total Price : </h1>
          <h1>Rs. 1000000</h1>
        </div>
        <div className="flex justify-between">
          <h1>Delivery Charges : </h1>
          <h1>Rs. 1000000</h1>
        </div>
        <div className="h-px w-full bg-white"></div>
        <div className="flex justify-between">
          <h1>Total Cost : </h1>
          <h1>Rs. 1000000</h1>
        </div>
        <div className="w-full flex justify-center">
          <button
            className="bg-black  text-white py-2 px-4 rounded-md w-fit"
            onClick={() => {
              navigate("/checkout");
            }}
          >
            Proceed to buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
