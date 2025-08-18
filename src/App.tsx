import Container from "./components/container";
import HeroSection from "./components/heroSection";
import Loading from "./components/loading";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="relative h-[100vh] w-[100vw] min-w-screen min-h-screen">
      <Navbar />
      <div className="md:max-w-3xl mx-auto absolute inset-0 h-full w-full">
        <div className="absolute inset-y-0 top-14 left-2 lg:left-0 w-px bg-black "></div>
        <div className="absolute top-14 lg:right-0 inset-y-0 right-2 w-px bg-black"></div>
      </div>
      <Loading loading={false} />
      <Container>
        <div className="h-full w-full ">
          <HeroSection />
        </div>
      </Container>
    </div>
  );
}

export default App;
