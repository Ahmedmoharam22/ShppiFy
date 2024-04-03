import { Button, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../../trk/slises/loveProduct";
import { useNavigate } from "react-router-dom";
import ProductCart from "../../components/productcart/ProductCart";

const LoveProduct = () => {
  const productLove = useSelector((state) => state.love.data);
  console.log(productLove);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Row>
      {productLove.length === 0 ? (
        <div className="position-relative h-75">
          <p className="text-center my-5">
            NO Products Is List
            <Button variant="success" size="sm" onClick={() => navigate("/products")}>
              You Can Shopping Now
            </Button>
          </p>
        </div>
      ) : (
        <>
          <div>
            <Button
              className="my-4"
              variant="danger"
              size="sm"
              onClick={() => dispatch(clear())}
            >
              Clear All Products
            </Button>
          </div>
          {productLove.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </>
      )}
    </Row>
  );
};

export default LoveProduct;
