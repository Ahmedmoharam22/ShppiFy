import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Controller,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
// import { BsArrowDownShort } from "react-icons/bs";

import "swiper/css/bundle";
import "./bennar.css";
import data from "./data-bennar";
const Bennar = () => {
  const navigate = useNavigate();
  return (
    <Row className="align-items-center justify-content-center">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Mousewheel,
          Keyboard,
          Controller,
          Autoplay,
        ]}
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        ali
      >
        {data.map((ele) => (
          <SwiperSlide key={ele.id}>
            <Row className="row-height p-2 p-md-5">
              <Col
                className="d-flex justify-content-center  flex-column mx-3"
                lg={8}
                md={12}
              >
                <h2 className="title">{ele.title}</h2>
                <p className="text-black-50 lh-lg-lg p-1" style={{maxWidth: "600px"}}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Placeat enim, vel, voluptas nulla natus eos omnis vero ex
                  illum maiores sequi eum nisi ea exercitationem ipsum nesciunt
                  numquam impedit dolorem?
                </p>
                <span
                  onClick={() => navigate("/products")}
                  className="btn  btn-nav"
                >
                  Shop Now
                  {/* <BsArrowDownShort /> */}
                </span>
              </Col>
              <Col
                md={12}
                lg={3}
                className="d-flex justify-content-center align-items-center order-first order-lg-0"
              >
                <div className="overflow-hidden me-3">
                  <img
                    className="img-fluid object-fit-contain d-none d-md-block"
                    style={{ width: "350px", height: "300px" }}
                    src={ele.img}
                    alt={ele.title}
                  />
                </div>
              </Col>
            </Row>
          </SwiperSlide>
        ))}
      </Swiper>
    </Row>
  );
};

export default Bennar;
