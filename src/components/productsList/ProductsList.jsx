import {useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllProducts } from "../../trk/slises/allProducts";
import { Row } from "react-bootstrap";
import Loading from "../loading/Loading";
import ProductCart from "../productcart/ProductCart";


const ProductsList = ({categoriesData}) => {
  console.log(categoriesData);
  const cate = useSelector((state) => state.categoriesSlice)
  const allcate = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts())
  },[categoriesData])
    console.log(cate);
  
  return (
    <Row>
      {cate.isLoading && <Row className="position-relative"><Loading /></Row> }
      {categoriesData === "all" && allcate.map((product) => (
        <ProductCart key={product.id} product={product} />
      ))}
      {!cate.isLoading &&
      cate.data.map((product) => (
      <ProductCart key={product.id} product={product} />
    ))}</Row>
  ) 
}

export default ProductsList