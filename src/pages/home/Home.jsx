import { useEffect, useState } from "react";
import Bennar from "../../components/baner/Bennar";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../trk/slises/allProducts";
import { Container, Pagination, Row } from "react-bootstrap";
import './home.css'
import ProductCart from "../../components/productcart/ProductCart";

const Home = () => {
  const allproduct = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProduct = allproduct.slice(firstProductIndex, lastProductIndex);

  const totalPages = Math.ceil(allproduct.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Bennar />
      <div className="all-product">
        <Container>
          <h2 className="mb-5">All Products</h2>
          <Row className="">
            {currentProduct.map((product) => (
              <ProductCart key={product.id} product={product} />
            ))}
            <div>
              <Pagination className="d-flex justify-content-center mt-4" size="lg">
                {Array.from({ length: totalPages }, (_, index) => (
                  <Pagination.Item
                  className="overflow-hidden border-0"
                    key={index + 1}
                    active={index + 1 === currentPage}
                    onClick={() => handlePageChange(index + 1)}
                    
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
