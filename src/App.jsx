import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import { Container } from "react-bootstrap";
import Preview from "./components/preview/Preview";
import Details from "./pages/details/Details";
import LoveProduct from "./pages/loveProduct/LoveProduct";
import Aside from "./components/backet/ProductBacket";
import Cart from "./pages/cart/Cart";
import Footer from "./components/footer/Footer";
import Products from "./pages/products/Products";


function App() {
  return (
    <>
      <Header />
    <Aside />
      <Container className="pt-2">
      <Preview />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products/>} />
          <Route path="/products/:id" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/loveProduct" element={<LoveProduct />} />
          <Route path="*" element="Erorr" />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
