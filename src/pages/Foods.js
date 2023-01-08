import React, { useEffect, useState } from "react";
import Helm from "../components/Helm/Helm";
import CommonSection from "../components/UI/Section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/data/products";
import Card from "../components/UI/product/Card";
import "../styles/all-foods.css";
import "../styles/pagination.css";
import ReactPaginate from "react-paginate";

const Foods = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const searchedProduct = products.filter((item) => {
    if (searchTerm.value === "") return item;
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    }
  });

  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );
  const pageCount = Math.ceil(searchedProduct.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {}, []);

  return (
    <Helm title="All Foods">
      <CommonSection title="All Foods" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between">
                <input
                  type="text"
                  placeholder="Search.."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i className="fas fa-search"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option>Default</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                  <option value="high-price">High-price</option>
                  <option value="low-price">Low-price</option>
                </select>
              </div>
            </Col>
            {displayPage.map((item) => (
              <Col key={item.id} lg="3" md="4" sm="6" xs="6" className="mb-4">
                <Card item={item} />
              </Col>
            ))}
            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName="paginationBttns"
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helm>
  );
};

export default Foods;
