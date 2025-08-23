import type { ProductInter } from "@codersubham/bond-store-types";
import { useNavigate } from "react-router-dom";

type ProductSemiDetails = Pick<
  ProductInter,
  "productImages" | "productName" | "productPrice" | "productId"
>;

const Product = ({
  productImages,
  productName,
  productPrice,
  productId,
}: ProductSemiDetails) => {
  const navigate = useNavigate();
  return (
    <div
      className="h-full snap-center w-50 mx-auto shrink-0 flex justify-center flex-col gap-2"
      onClick={() => {
        navigate(`/product/${productId}`);
      }}
    >
      <div className="h-40 flex-1 rounded-md w-full">
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
        Price : {productPrice}
      </div>
      <button
        className="bg-black text-white border rounded-md hover:bg-transparent hover:border border-black hover:text-black transition-all duration-300 px-5 py-2 font-toreadore"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export const FilterProduct = () => {
  const navigate = useNavigate();
  return (
    <div
      className="h-full snap-center sm:w-40 md:w-58 mx-auto shrink-0 flex justify-center flex-col gap-2"
      onClick={() => {
        navigate(`/product/1`);
      }}
    >
      <div className="h-40 flex-1 rounded-md w-full">
        <img
          src="/tempImages/imag.jpeg"
          alt="this is alt"
          className="h-full w-full object-cover rounded-md"
        />
      </div>
      <button
        className="bg-black border text-white rounded-md hover:bg-transparent hover:border border-black hover:text-black transition-all duration-300 px-5 py-2 font-toreadore"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
