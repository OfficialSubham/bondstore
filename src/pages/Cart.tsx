import { useNavigate } from "react-router-dom";
import CartProduct from "../components/cartProduct";
import { useRecoilValue } from "recoil";
import { cartState, totalPrice } from "../store/cart";
import { useEffect } from "react";

const Cart = () => {
  const navigate = useNavigate();
  const cart = useRecoilValue(cartState);
  const total = useRecoilValue(totalPrice);

  useEffect(() => {
    localStorage.setItem("yourCart", JSON.stringify(cart));
  }, [cart]);

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
          <h1>Rs. {total}</h1>
        </div>
        <div className="flex justify-between">
          <h1>Delivery Charges : </h1>
          <div className="flex gap-2">
            <h1
              className={`${total == 0 ? "" : "line-through text-slate-600"}`}
            >
              Rs. {total == 0 ? 0 : 100}
            </h1>
            {total != 0 && <h2 className="">free</h2>}
          </div>
        </div>
        <div className="h-px w-full bg-white"></div>
        <div className="flex justify-between">
          <h1>Total Cost : </h1>
          <h1>Rs. {total}</h1>
        </div>
        <div className="w-full flex justify-center">
          <button
            className="bg-black  text-white py-2 px-4 rounded-md w-fit"
            onClick={() => {
              if (cart.length == 0)
                return alert("Please add some product in the cart");
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
