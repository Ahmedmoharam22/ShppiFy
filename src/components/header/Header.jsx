import { Link, useLocation } from "react-router-dom";
// import { FaRegUser } from "react-icons/fa6";
// import { MdOutlineDarkMode } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";

import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { openCart } from "../../trk/slises/cartSlice";
import Logo from "../logo/Logo";

const Header = () => {
  const location = useLocation();
  const productLove = useSelector((state) => state.love.data);
  const cart = useSelector((state) => state.cartSlice.cartData);
  const dispatch = useDispatch();

  return (
    <Navbar bg="white" expand="md" className="sticky-top shadow">
      <Container>
        <Logo />
        <Navbar.Toggle aria-controls="navbarScroll"  className="shadow-none" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="users ms-auto my-2 my-lg-0 align-items-center">
            <Nav.Link
              as={Link}
              to="/"
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/products"
              className={location.pathname === "/products" ? "active" : ""}
            >
              shop
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/loveProduct"
              className={`position-relative ${
                location.pathname === "/loveProduct" ? "active" : ""
              }`}
            >
              <FaHeart />
              <span className="position-absolute counter-shopping">
                {productLove.length}
              </span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              className={`position-relative ${
                location.pathname === "/cart" ? "active" : ""
              }`}
              onClick={() => dispatch(openCart())}
            >
              <RiShoppingCartLine />
              <span className="position-absolute counter-shopping text-white">
                {cart.length}
              </span>
            </Nav.Link>
            {/* <Nav.Link
              as={Link}
              to="/login"
              className={location.pathname === "/login" ? "active" : ""}
            >
              Login
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
