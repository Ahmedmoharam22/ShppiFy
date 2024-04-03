import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { LuInstagram } from "react-icons/lu";
import { BiMessageDots } from "react-icons/bi";
import "./footer.css";
import Logo from "../logo/Logo";

const Footer = () => {
  return (
    <div className=" mt-5 ">
      <Container>
        <Row xs={1} sm={1} md={2} lg={3} className=" footer-contact py-4 align-items-center ">
          <Col>
            <h2>Subcribe our Newsletter</h2>
          </Col>
          <Col>
            <div className=" d-flex align-items-center justify-content-between mt-3 mt-md-0 input-up">
              <div className="">
                <label htmlFor="subcribe">
                  <input
                    className="input-subcribe"
                    id="sucribe"
                    type="text"
                    placeholder="Your Email Address"
                  />
                </label>
              </div>
              <span className="btn-subcribe">sucribe</span>
            </div>
          </Col>
          <Col>
            <ul className="d-flex justify-content-start justify-content-lg-center align-items-center mt-3 mt-lg-0 m-0">
              <li className="li-link">
                <a className="link-subcribe" href="">
                  <FaFacebookF />
                </a>
              </li>
              <li className="li-link">
                <a className="link-subcribe" href="">
                  <FiTwitter />
                </a>
              </li>
              <li className="li-link">
                <a className="link-subcribe" href="">
                  <LuInstagram />
                </a>
              </li>
              <li className="li-link">
                <a className="link-subcribe" href="">
                  <BiMessageDots />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row xs={1} md={3} lg={"auto"} className="my-4">
          <Col md={12} lg={3}>
            <h2 className="d-flex justify-content-start">
              <Logo />
            </h2>
          </Col>
          <Col lg={2} className="mt-3 mt-lg-0" >
            <h2>My Account</h2>
            <ul className="ul-footer">
              <li>My Account</li>
              <li>Order History</li>
              <li>Shopping Cart</li>
              <li>Wishlist</li>
            </ul>
          </Col>
          <Col lg={2} className="mt-3 mt-lg-0" >
            <h2>Helps</h2>
            <ul className="ul-footer">
              <li>Contact</li>
              <li>Faqs</li>
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col lg={2} className="mt-3 mt-lg-0" >
            <h2>Proxy</h2>
            <ul className="ul-footer">
              <li>About</li>
              <li>Shop</li>
              <li>Product</li>
              <li>Track Order</li>
            </ul>
          </Col>
          <Col lg={2} className="mt-3 mt-lg-0" >
            <h2>Categories</h2>
            <ul className="ul-footer">
              <li>laptops & smartphones</li>
              <li>shirts & shoes</li>
              <li>watches & bags</li>
              <li>sunglasses & motorcycle</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
