import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductInBacket,
  decreaseItemQuantity,
  deleteProductInBacket,
} from "../../trk/slises/cartSlice";
import "./addcart.css";
const AddCart = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartSlice);
  const productInCart = cart.cartData.find((item) => item.id === product.id);
  const quantity = productInCart ? productInCart.quantity : 0;
  // console.log(productInCart);
  // console.log(quantity);

  return (
    <>
      {quantity === 0 ? (
        <Button
          variant="success"
          className="fw-bold add-btn"
          onClick={() => dispatch(addProductInBacket(product))}
        >
          Add To Cart
        </Button>
      ) : (
        <div className="add-cart d-flex justify-content-between py-2  px-3 ">
          <Button
            variant="danger me-3"
            size="sm"
            onClick={() => dispatch(deleteProductInBacket(product))}
          >
            remove
          </Button>

          <div className="group-button d-flex justify-content-center align-items-center gap-2 ">
            <span
              className="decrease"
              onClick={() => dispatch(decreaseItemQuantity(product.id))}
            >
              -
            </span>
            <span className="quantity border-1 border-success d-flex align-items-center justify-content-center">
              {quantity}
            </span>
            <span
              className="add"
              onClick={() => dispatch(addProductInBacket(product))}
            >
              +
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default AddCart;
