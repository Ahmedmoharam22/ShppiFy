import { Card, Col } from "react-bootstrap";
import { BsEyeFill, BsLink45Deg } from "react-icons/bs";
import "./productCart.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchPreview, openPreview } from "../../trk/slises/previewProduct";
import { Tooltip } from "react-tooltip";
import { formatPrice, priceDiscount } from "../../utils/Price";
import Love from "../love/Love";
import AddCart from "../add/AddCart";

const ProductCart = ({ product }) => {
  const dispatch = useDispatch();

  const previewCart = () => {
    dispatch(fetchPreview(product.id));
    dispatch(openPreview());
  };

  return (
  <Col   sm={6} lg={4} xl={3} className="my-1">
      <Card className="card-hover overflow-hidden  position-relative">
        <div className="image overflow-hidden position-relative">
          <Card.Img variant="top" src={product.thumbnail} alt={product.title} />
          <div className="group-tools  d-flex flex-column position-absolute">
            <Tooltip id={product.id} />
            <Love product={product} />
            <a
              data-tooltip-id={product.id}
              data-tooltip-content="Preview"
              data-tooltip-place="left"
            >
              <BsEyeFill onClick={previewCart} />
            </a>
            <Link to={`/products/${product.id}`}>
              <BsLink45Deg />
            </Link>
          </div>
        </div>
        <Card.Body className="mb-4">
          <Link to={`/products/${product.id}`} className="text-decoration-none">
            <Card.Title className="fs-6 text-black fw-bold">
              {product.title.length > 20
                ? product.title.slice(0, 15) + "..."
                : product.title}
            </Card.Title>
          </Link>
          <div className="d-flex justify-content-between fw-bold">
            <span>
              {formatPrice(
                priceDiscount(product.price, product.discountPercentage)
              )}
            </span>
            <span className="text-decoration-line-through text-danger">
              {formatPrice(product.price)}
            </span>
          </div>
        </Card.Body>
        <AddCart product={product} />
      </Card>
    </Col>
  );
};

export default ProductCart;
