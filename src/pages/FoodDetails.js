import React, { useEffect, useState } from "react";
import products from "../assets/data/products";
import { useParams } from "react-router-dom";
import Helm from "../components/Helm/Helm";
import CommonSection from "../components/UI/Section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import Card from "../components/UI/product/Card";
import "../styles/product-details.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

const FoodDetails = () => {
  const [tab, setTab] = useState("desc");
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setenteredEmail] = useState("");
  const [reviewMessage, setReviewMessage] = useState("");

  const { id } = useParams();
  const dispatch = useDispatch();
  const product = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.image01);
  const { title, price, category, desc, image01 } = product;

  const relatedProduct = products.filter((item) => category === item.category);

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helm title="Product details">
      <CommonSection title={title} />
      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product__images">
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image01)}
                >
                  <img
                    src={product.image01}
                    alt="Product Image"
                    className="w-50"
                  />
                </div>
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image02)}
                >
                  <img
                    src={product.image02}
                    alt="Product Image"
                    className="w-50"
                  />
                </div>
                <div
                  className="img__item"
                  onClick={() => setPreviewImg(product.image03)}
                >
                  <img
                    src={product.image03}
                    alt="Product Image"
                    className="w-50"
                  />
                </div>
              </div>
            </Col>
            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={previewImg} className="w-100" alt="Product Image" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{title}</h2>
                <span className="product__price">
                  Price: <span>${price}</span>
                </span>
                <p className="category mb-5">
                  Category: <span>{category}</span>
                </p>
                <button onClick={addItem} className="addToCart__btn">
                  Add to cart
                </button>
              </div>
            </Col>
            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-5 py-2">
                <h6
                  className={`
                ${tab === "desc" ? "tab__active" : ""}
                `}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`
                ${tab === "rev" ? "tab__active" : ""}
                `}
                  onClick={() => setTab("rev")}
                >
                  Review
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tab__content">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="tab__form mb-3">
                  <div className="review pt-5">
                    <p className="user__name mb-0">Deni Devitto</p>
                    <p className="user__email">deni@yahoo.com</p>
                    <p className="feedback__text">Great product</p>
                  </div>
                  <div className="review">
                    <p className="user__name mb-0">Joe Biden</p>
                    <p className="user__email">joy@yahoo.com</p>
                    <p className="feedback__text">Average product</p>
                  </div>
                  <div className="review">
                    <p className="user__name mb-0">Donald Trump</p>
                    <p className="user__email">duck@yahoo.com</p>
                    <p className="feedback__text">
                      NOT a product, it's a scam!
                    </p>
                  </div>
                  <form className="form" action="#" onSubmit={handleSubmit}>
                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="Enter here.."
                        onChange={(e) => setEnteredName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="Enter here.."
                        onChange={(e) => setenteredEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form__group">
                      <textarea
                        rows={5}
                        placeholder="Type here.."
                        onChange={(e) => setReviewMessage(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit" className="addToCart__btn">
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </Col>
            <Col lg="12" className="mb-5 mt-4">
              <h4 className="related__product-title">Related products</h4>
            </Col>
            {relatedProduct.map((item) => (
              <Col className="mb-4" lg="3" md="4" sm="6" xs="6" key={item.id}>
                <Card item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helm>
  );
};

export default FoodDetails;
