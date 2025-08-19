import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Loading from "./components/loading";

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
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <footer className="w-full h-40 mt-4 bg-black">
          <div className="text-center max-w-3xl text-white mx-auto h-full">
            Hello world
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
