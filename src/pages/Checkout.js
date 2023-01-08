import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/Section/CommonSection";
import Helm from "../components/Helm/Helm";
import "../styles/checkout.css";

const Checkout = () => {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 10;
  const shippingInfo = [];

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState(0);
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postal: postalCode,
    };
    shippingInfo.push(userShippingAddress);
  };

  return (
    <Helm title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col md="6" lg="8">
              <h6 className="mb-4">Shipping Address</h6>
              <form
                action="#"
                className="checkout__form"
                onSubmit={handleSubmit}
              >
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your name.."
                    required
                    onChange={(e) => setEnterName(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Enter your email.."
                    required
                    onChange={(e) => setEnterEmail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Type Country..."
                    required
                    onChange={(e) => setEnterCountry(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Enter your Phone number..."
                    required
                    onChange={(e) => setEnterNumber(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Type City..."
                    required
                    onChange={(e) => setEnterCity(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="ZIP Code..."
                    required
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>
                <button className="addToCart__btn">Pay</button>
              </form>
            </Col>
            <Col md="6" lg="4">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>${cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Shipping: <span>${shippingCost}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>${totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helm>
  );
};

export default Checkout;
