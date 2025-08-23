import HeroSection from "../components/heroSection";
import Category from "../components/category";
import ReviewSection from "../components/reviewSection";

const Home = () => {
  const category = [
    {
      categoryName: "Men's Wallet",
      categoryType: "menswallet",
    },
    {
      categoryName: "Leather Bags",
      categoryType: "leatherbags",
    },
    {
      categoryName: "Imported Bags",
      categoryType: "importedbags",
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
      categoryName: "Explore Bags",
      categoryType: "explorebags",
      exploreType: "Explore All",
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
            exploreType={cat.exploreType}
          />
        );
      })}
      <ReviewSection />
    </>
  );
};

export default Home;
