import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import CategoriesList from "../../components/categoriesList/CategoriesList";
import ProductsList from "../../components/productsList/ProductsList";
import { useDispatch, useSelector } from "react-redux";
import { allCategories } from "../../trk/slises/itemsCategories";
import { categories } from "../../trk/slises/productCategories";

const Products = () => {
  const [active, setActive] = useState(0);
  const [categoriesData, setCategoriesData] = useState("all");
  const dispatch = useDispatch();
  const dataItems = useSelector((state) => state.itemsCategories);
  // console.log(dataItems , "data catego");

  const handleAllClick = () => {
    setActive(0);
    setCategoriesData("all");
  };
  const handleCategorie = (e, index) => {
    setActive(index + 1);
    setCategoriesData(e.currentTarget.dataset.val);
  };
  useEffect(() => {
    dispatch(allCategories())
    dispatch(categories(categoriesData))
  },[categoriesData])
  return (
    <Row>
      <Col xs={12} md={3}>
        <CategoriesList
          handleAllClick={handleAllClick}
          handleCategorie={handleCategorie}
          active={active}
          dataItems={dataItems}
        />
      </Col>
      <Col md={9}>
        <ProductsList categoriesData={categoriesData} />
      </Col>
    </Row>
  );
};

export default Products;
