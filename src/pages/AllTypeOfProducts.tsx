import { FilterProduct } from "../components/product";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { categoryProductSelector } from "../store/allProductsStore";

const AllTypeOfProducts = () => {
  const { category } = useParams();
  const products = useRecoilValue(
    categoryProductSelector({ category: category || "" })
  );
  return (
    products && (
      <>
        <div className="w-full h-full grid grid-cols-2 sm:grid-cols-3 gap-4">
          {products.map((product) => {
            return (
              <div key={product.productId} className="h-90">
                <FilterProduct
                  productId={product.productId}
                  productImages={product.productImages}
                  productName={product.productName}
                  productAcutalPrice={product.productAcutalPrice}
                  productDiscountedPrice={product.productDiscountedPrice}
                />
              </div>
            );
          })}
        </div>
      </>
    )
  );
};

export default AllTypeOfProducts;
