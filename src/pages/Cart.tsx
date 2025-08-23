import { useNavigate } from "react-router-dom";
import CartProduct from "../components/cartProduct";

const Cart = () => {
  const arr = new Array(10).fill(10);
  const navigate = useNavigate();
  return (
    <div className="relative h-screen flex flex-col">
      <div className="flex-1 w-full flex flex-col gap-4 overflow-y-scroll scrollbar-hidden">
        {arr.map((_, idx) => {
          return <CartProduct key={idx} />;
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
