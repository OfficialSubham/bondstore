const Product = () => {
  return (
    <div className="h-full snap-center w-60 mx-auto shrink-0 flex justify-center flex-col gap-2">
      <div className="h-40 flex-1 rounded-md w-full">
        <img
          src="/tempImages/imag.jpeg"
          alt="this is alt"
          className="h-full w-full object-cover rounded-md"
        />
      </div>
      <button className="bg-black text-white rounded-md hover:bg-transparent hover:border border-black hover:text-black transition-all duration-300 px-5 py-2 font-toreadore">
        Add to cart
      </button>
    </div>
  );
};

export default Product;
