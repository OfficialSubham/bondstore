import { useNavigate } from "react-router-dom";
import Product from "./product";
import { useRecoilValue } from "recoil";
import { categoryProductsState } from "../store/allProductsStore";

const Category = ({
  categoryName,
  categoryType,
}: {
  categoryName: string;
  categoryType: string;
}) => {
  const navigate = useNavigate();
  const products = useRecoilValue(categoryProductsState);

  return (
    <div className="w-full h-110 flex tracking-[2px] font-morganite flex-col gap-4">
      <div className="w-full flex justify-between">
        <h1 className="font-bold text-[32px]">{categoryName}</h1>
        <button
          className="bg-black text-white rounded-md hover:bg-transparent border border-black hover:text-black transition-all duration-300 px-5 py-2 font-toreadore"
          onClick={() => {
            navigate(`/products/${categoryType}`);
          }}
        >
          View all
        </button>
      </div>
      {products && (
        <div className="flex-1 snap-x py-4 flex gap-4 overflow-x-scroll bg-slate-300/18 w-full items-center">
          {products[categoryType].slice(0, 4).map((product) => {
            return (
              <Product
                key={product.productId + Math.random()}
                productName={product.productName}
                productId={product.productId}
                Images={product.Images}
                productAcutalPrice={product.productAcutalPrice}
                productDiscountedPrice={product.productDiscountedPrice}
              />
            );
          })}
          {products[categoryType].filter(
            (pro) => pro.productCategory == categoryType
          ).length > 4 && (
            <button
              className="bg-black border text-white rounded-md hover:bg-transparent shrink-0 border-black hover:text-black transition-all duration-300 font-toreadore px-5 py-2 "
              onClick={() => {
                navigate(`/products/${categoryType}`);
              }}
            >
              View all
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Category;
