import { BsBagHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../trk/slises/loveProduct";
import { useEffect, useState } from "react";
import { Tooltip } from "react-bootstrap";
const Love = ({ product }) => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const love = useSelector((state) => state.love.data);
  // console.log(love, "love");
  useEffect(() => {
    setIsActive(love.find((item) => item.id === product.id));
  }, [love, product]);
  // console.log(isActive, "active");
  const handilLove = () => {
    dispatch(addProduct(product));
  };

  return (
    <>
      <Tooltip id={product.id} className="bg-red" />
      <BsBagHeartFill
        className={isActive ? "active" : ""}
        onClick={handilLove}
        data-tooltip-id={product.id}
        data-tooltip-content={
          isActive ? " Remove From Fav List" : "Add To Fav List "
        }
        data-tooltip-place="left"
      />
    </>
  );
};

export default Love;
