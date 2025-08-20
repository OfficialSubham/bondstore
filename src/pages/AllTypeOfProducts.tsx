import { FilterProduct } from "../components/product";

const AllTypeOfProducts = () => {
  const arr = new Array(9).fill(9);
  return (
    <div className="w-full h-full grid grid-cols-2 sm:grid-cols-3 gap-4">
      {arr.map((_, idx) => {
        return (
          <div key={idx} className="h-70">
            <FilterProduct />
          </div>
        );
      })}
    </div>
  );
};

export default AllTypeOfProducts;
