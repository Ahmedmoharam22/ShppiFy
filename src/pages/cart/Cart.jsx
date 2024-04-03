import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/Price";
import { Button } from "react-bootstrap";
import {
  addProductInBacket,
  clearBacket,
  decreaseItemQuantity,
  deleteProductInBacket,
} from "../../trk/slises/cartSlice";
import "./cart.css"
import Empty from "../../components/empty/Empty";

const Cart = () => {
  const cart = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();
  const totalPrice = cart.cartData.reduce((acc , product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0)
  return (
    <>
      <div className="text-center py-5 fs-1 shadow">Shooping Cart</div>
      {cart.cartData.length === 0 ? <Empty /> : <div className="table-responsive overflow-auto shadow rounded mt-5">
        <table className="w-100 ">
          <thead>
            <tr className="text-center">
              <th>Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody className="mx-3">
            {cart.cartData.map((product) => (
              <tr key={product.id} className="text-center py-4">
                <td className="text-center ">
                  <div
                    className=" m-auto"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <Link to={`/products/${product.id}`}>
                      <img
                        className="w-100 h-100 object-fit-cover py-3"
                        src={product.thumbnail}
                        alt={product.title}
                      />
                    </Link>
                  </div>
                </td>
                <td>{product.title}</td>
                <td>{formatPrice(product.price)}</td>
                <td>
                  <span
                    className="decrease-item"
                    onClick={() => dispatch(decreaseItemQuantity(product.id))}
                  >
                    -
                  </span>
                  <span className="mx-2">
                  {product.quantity}
                  </span>
                  <span
                    className="add-item"
                    onClick={() => dispatch(addProductInBacket(product))}
                  >
                    +
                  </span>
                </td>
                <td>{formatPrice(product.price * product.quantity)}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => dispatch(deleteProductInBacket(product))}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="text-center">
              <td colSpan={4} className="">
                <button
                  className="my-3 btn btn-danger"
                  onClick={() => dispatch(clearBacket())}
                >
                  Clear
                </button>
              </td>
              <td className="fs-3" colSpan={1}>{formatPrice(totalPrice)}</td>
            </tr>
          </tfoot>
        </table>
      </div> }

      
    </>
  );
};

export default Cart;
