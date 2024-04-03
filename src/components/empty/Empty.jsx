import { useNavigate } from "react-router-dom";
import IMG from "../../assets/empty_shoping.webp";
import { useDispatch } from "react-redux";
import { closeCart } from "../../trk/slises/cartSlice";
const Empty = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    navigate("/products")
    dispatch(closeCart())
  }
  return (
    <>
      <div className="mt-5 mx-auto" style={{ width: "300px", height: "300px" }}>
        <img
          className="w-100 h-100 object-fit-cover"
          src={IMG}
          alt="shoping Empty"
        />
      </div>
      <span className="d-flex justify-content-center mt-3">
        <span
          className="btn btn-success"
          onClick={handleClick}
        >
          {" "}
          Go shoping Now
        </span>
      </span>
    </>
  );
};
export default Empty;
