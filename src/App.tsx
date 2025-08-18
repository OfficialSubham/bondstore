import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Loading from "./components/loading";

function App() {
  return (
    <div className="relative w-full min-h-scren">
      <Router>
        <Navbar />
        <Loading loading={false} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <footer className="w-full h-40 bg-black mt-4">
          <div className="text-center max-w-3xl text-white mx-auto h-full">
            Hello world
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
