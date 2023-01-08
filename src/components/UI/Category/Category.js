import React from "react";
import { Container, Row, Col } from "reactstrap";
import categoryImage01 from "../../../assets/images/category-01.png";
import categoryImage02 from "../../../assets/images/category-02.png";
import categoryImage03 from "../../../assets/images/category-03.png";
import categoryImage04 from "../../../assets/images/category-04.png";
import "../../../styles/category.css";

const categoryData = [
  {
    display: "Fast food",
    imgUrl: categoryImage01,
  },
  {
    display: "Pizza",
    imgUrl: categoryImage02,
  },
  {
    display: "Asian Food",
    imgUrl: categoryImage03,
  },
  {
    display: "Row meat",
    imgUrl: categoryImage04,
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((category, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            <div className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
                <img src={category.imgUrl} alt="image" />
              </div>
              <h6>{category.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
