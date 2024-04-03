import { Col, Row } from "react-bootstrap";
import { formatPrice, priceDiscount } from "../../utils/Price";
import Love from "../love/Love";
import "./productDetails.css";
import ProductDetailsSlide from "../productDetailsSlide/ProductDetailsSlide";
import AddCart from "../add/AddCart";

const ProductDetails = ({ product }) => {
  return (
    <div className="product-detils">
      <Row xs={1} lg={2}>
        <Col>
          <div className="img">
            {product.thumbnail && <ProductDetailsSlide product={product} />}
          </div>
        </Col>
        <Col>
          <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h5>Brand : {product.brand}</h5>
          </div>
          <div>
            <span className="text-decoration-line-through text-danger fs-4">
              {formatPrice(product.price)}
            </span>
            <span className="fs-4 ms-3">
              {formatPrice(
                priceDiscount(product.price, product.discountPercentage)
              )}
            </span>
          </div>
          <div className="love-details d-flex  justify-content-between align-items-center mt-5">
            <AddCart product={product} />
            <Love product={product} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
