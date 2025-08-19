import HeroSection from "../components/heroSection";
import Category from "../components/category";
import Container from "../components/container";

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
      categoryType: "mensidebags",
    },
    {
      categoryName: "Explore Bags",
      categoryType: "explorebags",
      exploreType: "Explore All",
    },
  ];

  return (
    <Container>
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
    </Container>
  );
};

export default Home;
