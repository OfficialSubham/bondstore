import { FilterProduct } from "../components/product";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { categoryProductsState } from "../store/allProductsStore";
import { useLoadMoreProducts } from "../hooks/loadinNext4";

const AllTypeOfProducts = () => {
  const { category } = useParams();
  const categoryProducts = useRecoilValue(categoryProductsState);

  const loadMore = useLoadMoreProducts();
  return (
    <>
      <div className="w-full h-full grid grid-cols-2 sm:grid-cols-3 gap-4">
        {categoryProducts[category || ""].map((product) => {
          return (
            <div key={product.productId} className="h-90">
              <FilterProduct
                productId={product.productId}
                Images={product.Images}
                productName={product.productName}
                productAcutalPrice={product.productAcutalPrice}
                productDiscountedPrice={product.productDiscountedPrice}
              />
            </div>
          );
        })}
      </div>
      <div className="mx-auto">
        <button
          className="bg-black text-white font-toreadore px-5 py-3 rounded-md"
          onClick={() => loadMore(category || "")}
        >
          View More
        </button>
      </div>
    </>
  );
};

export default AllTypeOfProducts;
