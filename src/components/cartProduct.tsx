const CartProduct = () => {
  return (
    <div className="h-30 flex text-xs font-toreadore justify-center w-full gap-2">
      <div className="h-full w-30 bg-slate-200 rounded-md"></div>
      <div className="flex-1 max-w-100 flex flex-col gap-2">
        <h1>This is the name of the product</h1>
        <select name="quantity" defaultValue={1} className="max-w-50 w-20">
          <option value="1">1</option>
          <option value="1">2</option>
          <option value="1">3</option>
          <option value="1">4</option>
          <option value="1">5</option>
        </select>
        <div className=" bg-slate-400/18 w-fit px-2 rounded-md">
          Category Type
        </div>
        <div>Price: Rs. 1000</div>
        <button className="bg-black text-white rounded-md w-fit px-5 py-1 mx-auto">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
