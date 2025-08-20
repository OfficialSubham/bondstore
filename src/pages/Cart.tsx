import CartProduct from "../components/cartProduct";

const Cart = () => {
  const arr = new Array(1).fill(1);
  return (
    <>
      <div className="flex-1">
        {arr.map((_, idx) => {
          return <CartProduct key={idx} />;
        })}
      </div>

      <div className="w-full gap-2 p-2 rounded-md bg-slate-300/18 font-toreadore">
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
          <button className="bg-black  text-white px-4 rounded-md w-fit">
            Proceed to buy
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
