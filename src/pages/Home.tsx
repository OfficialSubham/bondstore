import HeroSection from "../components/heroSection";
import Category from "../components/category";
import ReviewSection from "../components/reviewSection";

const Home = () => {
  const category = [
    {
      categoryName: "Imported Bags",
      categoryType: "importedbags",
    },
    {
      categoryName: "Leather Bags",
      categoryType: "leatherbags",
    },
    {
      categoryName: "Hand Clutch",
      categoryType: "handclutch",
    },
    {
      categoryName: "Men's Side Bag",
      categoryType: "mensidebag",
    },

    {
      categoryName: "Men's Wallet",
      categoryType: "menswallet",
    },
  ];

  return (
    <>
      <HeroSection />
      {category.map((cat) => {
        return (
          <Category
            key={cat.categoryName}
            categoryName={cat.categoryName}
            categoryType={cat.categoryType}
          />
        );
      })}
      <ReviewSection />
    </>
  );
};

export default Home;
