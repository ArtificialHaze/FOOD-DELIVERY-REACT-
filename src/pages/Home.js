import React, { useEffect, useState } from "react";
import Helm from "../components/Helm/Helm";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import heroImage from "../assets/images/hero.png";
import "../../src/styles/hero.css";
import "../../src/styles/home.css";
import { Link } from "react-router-dom";
import Category from "../components/UI/Category/Category";
import featureImage01 from "../assets/images/service-01.png";
import featureImage02 from "../assets/images/service-02.png";
import featureImage03 from "../assets/images/service-03.png";
import products from "../assets/data/products";
import foodCategoryImage01 from "../assets/images/hamburger.png";
import foodCategoryImage02 from "../assets/images/pizza.png";
import foodCategoryImage03 from "../assets/images/bread.png";
import Card from "../components/UI/product/Card";
import whyImage from "../assets/images/location.png";
import networkImage from "../assets/images/network.png";
import Testimonials from "../components/UI/slider/Testimonials";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImage01,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, laborum.",
  },
  {
    title: "Super Dine-In",
    imgUrl: featureImage02,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Easy pick-up",
    imgUrl: featureImage03,
    desc: "Lorem ipsum dolor sit. Quibusdam, laborum.",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredProducts = products.filter(
      (item) => item.category === "Pizza"
    );
    const slicePizza = filteredProducts.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }
    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (product) => product.category === "Burger"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (product) => product.category === "Pizza"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (product) => product.category === "Bread"
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helm title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>Are u Hungry?</span> just wait <br />
                  <span>food at your door</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  autem!
                </p>
                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order<i className="fas fa-arrow-right"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>
                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i className="fas fa-car"></i>
                    </span>
                    No shipping charge
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i className="fa fa-shield"></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImage} className="w-100" alt="Hero image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Category />
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">
                Just sit back at home and relax
              </h2>
              <h2 className="feature__title">
                We will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit quis, exercitationem sint enim obcaecati
                consequatur?
              </p>
              <p className="feature__text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
                odio!
              </p>
            </Col>
            {featureData.map((feature, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={feature.imgUrl}
                    alt={feature.title}
                    className="w-25 mb-3"
                  />
                  <h5 className="fw-bold mb-3">{feature.title}</h5>
                  <p>{feature.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col className="text-center" lg="12">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  onClick={() => setCategory("BURGER")}
                  className={`${
                    category === "BURGER" ? "foodBtnActive" : ""
                  } d-flex align-items-center gap-2`}
                >
                  <img src={foodCategoryImage01} alt="image-01 food" />
                  Burger
                </button>
                <button
                  onClick={() => setCategory("PIZZA")}
                  className={`${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  } d-flex align-items-center gap-2`}
                >
                  <img src={foodCategoryImage02} alt="image-01 food" />
                  Pizza
                </button>
                <button
                  onClick={() => setCategory("BREAD")}
                  className={`${
                    category === "BREAD" ? "foodBtnActive" : ""
                  } d-flex align-items-center gap-2`}
                >
                  <img src={foodCategoryImage03} alt="image-01 food" />
                  Bread
                </button>
              </div>
            </Col>
            {allProducts.map((item, index) => (
              <Col lg="3" md="4" sm="6" xs="6" key={index} className="mt-5">
                <Card item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImage} alt="loc" className="w-100" />
            </Col>
            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  <span>Why tasty treat?</span>
                </h2>
                <p className="tasty__treat-desc">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum possimus alias voluptatem quas, aliquam esse. Eaque
                  repudiandae dolorem corporis a?
                </p>
                <ListGroup className="mt-5">
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="fas fa-check"></i>Fresh and tasty foods
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="fas fa-check"></i>Quality support
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Id, deleniti.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="fas fa-check"></i>Order from any location
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Id, deleniti. Lorem, ipsum dolor.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2>Hot Pizza</h2>
            </Col>
            {hotPizza.map((item, index) => (
              <Col lg="3" md="4" sm="6" xs="6" key={index}>
                <Card item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial">
                <h5 className="testimonial__subtitle mb-4">Testimonials</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying about us.
                </h2>
                <p className="testimonial__desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat laudantium fuga ex saepe non ratione eius quisquam
                  quidem expedita dolorem.
                </p>
                <Testimonials />
              </div>
            </Col>
            <Col lg="6" md="6">
              <img src={networkImage} alt="Image" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helm>
  );
};

export default Home;
