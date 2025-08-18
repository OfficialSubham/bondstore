import HeroSection from "../components/heroSection";
import Category from "../components/category";
import Container from "../components/container";

const Home = () => {
  const category = [
    {
      categoryName: "Men's Wallet",
      categoryType: "#",
    },
    {
      categoryName: "Leather Bags",
      categoryType: "#",
    },
    {
      categoryName: "Imported Bags",
      categoryType: "#",
    },
    {
      categoryName: "Hand Clutch",
      categoryType: "#",
    },
    {
      categoryName: "Men's Side Bag",
      categoryType: "#",
    },
  ];

  return (
    <>
      <div className="mx-auto md:max-w-3xl fixed inset-0 h-full w-full">
        <div className="absolute inset-y-0 top-14 left-2 lg:left-0 w-px bg-black "></div>
        <div className="absolute top-14 lg:right-0 inset-y-0 right-2 w-px bg-black"></div>
      </div>

      <Container>
        <HeroSection />
        {category.map((cat) => {
          return (
            <Category
              categoryName={cat.categoryName}
              categoryType={cat.categoryType}
            />
          );
        })}
      </Container>
    </>
  );
};

export default Home;
