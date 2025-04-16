import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "swiper/swiper-bundle.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Aos from "aos";
import Cart from "./pages/Cart";
import { ToastContainer } from "react-toastify";

function App() {
  Aos.init();
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
    </>
  );
}

export default App;
