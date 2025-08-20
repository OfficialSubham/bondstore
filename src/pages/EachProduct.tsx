import Carousel from "../components/carousel";

const EachProduct = () => {
  return (
    <div className="flex flex-col gap-8 font-toreadore w-full">
      <Carousel />
      <h1 className="leading-4">
        This is the title of the product this is actually a very long title
      </h1>
      <div>
        Category :{" "}
        <span className="px-3 bg-slate-300/18 py-1 rounded-md">Mens Bag</span>
      </div>
      <div>
        Price :{" "}
        <span className="px-3 bg-slate-300/18 py-1 rounded-md">Rs. 1000</span>
      </div>
      <div className="mx-auto">
        <button className="bg-black text-white rounded-md hover:bg-transparent hover:border border-black hover:text-black transition-all duration-300 px-10 py-4 font-toreadore">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default EachProduct;
