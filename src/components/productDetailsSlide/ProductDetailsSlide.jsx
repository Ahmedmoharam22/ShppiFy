import { useRef, useState } from "react";
import './productdetailsslide.css'


const ProductDetailsSlide = ({product}) => {

  const { images, thumbnail, title } = product;
  const bigImg = useRef();
  const [isActive, setIsActive] = useState(images?.length - 1);
  return (
    <div className="details-slider w-100 h-100 mb-4">
    <div className="slider-img">
      <img
        ref={bigImg}
        style={{ height: "300px" }}
        className="w-100 h-100 rounded"
        src={thumbnail}
        alt={title}
      />
    </div>

    <div className="slider-imgs">
      {images.map((img, i) => (
        <div
          key={i}
          onClick={() => setIsActive(i)}
          className={isActive === i ? "active" : ""}
        >
          <img
            onClick={() => (bigImg.current.src = img)}
            src={img}
            alt={title}
            className="w-100 h-100 rounded"
          />
        </div>
      ))}
    </div>
  </div>
  )
}

export default ProductDetailsSlide;