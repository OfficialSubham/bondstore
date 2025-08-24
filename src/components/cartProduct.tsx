import type { productPurchased } from "@codersubham/bond-store-types";
import { useNavigate } from "react-router-dom";

const CartProduct = ({
  productName,
  productId,
  productAcutalPrice,
  productDiscountedPrice,
  productImage,
  quantity,
}: productPurchased) => {
  const navigate = useNavigate();
  const handleProductRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };
  return (
    <div
      className="h-30 flex text-xs font-toreadore justify-center w-full gap-2"
      onClick={() => {
        navigate(`/product/${productId}`);
      }}
    >
      <div className="h-full w-30 bg-slate-200 rounded-md">
        <img
          src={`${productImage.imgUrl}`}
          alt="img"
          className="w-full h-full rounded-md"
        />
      </div>
      <div className="flex-1 max-w-100 flex flex-col gap-2">
        <h1>
          {productName.length > 25
            ? `${productName.slice(0, 24)}...`
            : productName}
        </h1>
        <select
          name="quantity"
          defaultValue={quantity}
          className="max-w-50 w-20"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <option value="1">1</option>
          <option value="1">2</option>
          <option value="1">3</option>
          <option value="1">4</option>
          <option value="1">5</option>
        </select>
        <div className="text-lg">Price: Rs. {productDiscountedPrice}</div>
        <div className="flex gap-2 items-center">
          Sale :{" "}
          <span className="text-sm line-through text-slate-400">
            {productAcutalPrice}
          </span>
          <span className="px-4 py-2 bg-black font-bold text-white rounded-md tracking-wider">
            {Math.floor(
              ((productAcutalPrice - productDiscountedPrice) /
                productAcutalPrice) *
                100
            )}{" "}
            % off
          </span>
        </div>
      </div>
      <button
        className="bg-black text-white rounded-md w-fit my-auto px-2 py-3"
        onClick={handleProductRemove}
        data-product-remove-id={productId}
      >
        Remove
      </button>
    </div>
  );
};

export default CartProduct;
