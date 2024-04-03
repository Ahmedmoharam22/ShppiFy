import { Button, Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeCart, deleteProductInBacket } from "../../trk/slises/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import "./productbacket.css";
import { formatPrice } from "../../utils/Price";
import Empty from "../empty/Empty";
const ProductBacket = () => {
  const cart = useSelector((state) => state.cartSlice);
  console.log(cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleView = () => {
    navigate("/cart");
    dispatch(closeCart());
  };
  const totalPrice = cart.cartData.reduce((acc , product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0)
  return (
    <div>
      <Offcanvas
        placement="end"
        show={cart.isCartOpen}
        onHide={() => dispatch(closeCart())}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shooping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        {cart.cartData.length === 0 ? (
          <Empty />
        ) : (
          <Offcanvas.Body>
            <div className="d-flex justify-content-end">
              <Button className="btn-view" variant="success" onClick={handleView}>
                View cart
              </Button>
            </div>
            <div>
              {cart.cartData.map((product) =>  (
                <div key={product.id} className="my-2 d-flex shadow p-2 rounded ">
                  <Link
                    to={`/products/${product.id}`}
                    onClick={() => dispatch(closeCart())}
                  >
                    <div className="container-img rounded overflow-hidden">
                      <img src={product.thumbnail} alt={product.title} />
                    </div>
                  </Link>
                  <div className="flex-grow-1 ps-2">
                    <div className="d-flex justify-content-between ">
                      <h6>{product.title.slice(0 , 16) + "..."}</h6>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => dispatch(deleteProductInBacket(product))}
                      >
                        Remove
                      </Button>
                    </div>
                    <h5 className="fs-6">Price: <span className="text-success">{formatPrice(product.price)}</span></h5>
                    <div className="d-flex justify-content-between flex-wrap">
                      <h5 className="fs-6">Quantity: {product.quantity}</h5>
                      <h5 className="fs-6">totalPrice:{formatPrice(product.price * product.quantity)}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h5 className="mt-3">Total Price :{formatPrice(totalPrice)}</h5>
          </Offcanvas.Body>
        )}
      </Offcanvas>
    </div>
  );
};

export default ProductBacket;
