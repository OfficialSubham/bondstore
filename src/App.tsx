import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Loading from "./components/loading";
import Cart from "./pages/Cart";
import Container from "./components/container";
import AllTypeOfProducts from "./pages/AllTypeOfProducts";
import EachProduct from "./pages/EachProduct";
import AllReviews from "./pages/AllReviews";
import SubmitAReview from "./pages/SubmitAReview";

function App() {
  return (
    <div className="relative flex flex-col w-full min-h-screen">
      <div className="mx-auto md:max-w-3xl fixed inset-0 h-full w-full pointer-events-none">
        <div className="absolute inset-y-0 top-14 left-2 lg:left-0 w-px bg-black "></div>
        <div className="absolute top-14 lg:right-0 inset-y-0 right-2 w-px bg-black"></div>
      </div>
      <Router>
        <Navbar />
        <Loading loading={false} />
        <div className="flex-1 h-full pt-14">
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/products/:category"
                element={<AllTypeOfProducts />}
              />
              <Route path="/product/:id" element={<EachProduct />} />
              <Route path="/reviews" element={<AllReviews />} />
              <Route path="/submitreview" element={<SubmitAReview />} />
            </Routes>
          </Container>
        </div>
        <footer className="w-full bg-black text-center  text-white py-6 mt-8">
          <div className="max-w-3xl mx-auto text-sm px-4 flex flex-col items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-400 font-toreadore">
              © {new Date().getFullYear()} Bond Store. All rights reserved.
            </p>

            {/* Developer credit */}
            <p className="text-gray-400">
              Developed & Maintained by{" "}
              <a
                href="https://twitter.com/codersubham"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline font-medium"
              >
                CoderSubham
              </a>
            </p>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
