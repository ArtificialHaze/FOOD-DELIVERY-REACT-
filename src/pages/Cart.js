import React from "react";
import CommonSection from "../components/UI/Section/CommonSection";
import Helm from "../components/Helm/Helm";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import "../styles/cart-table.css";
import { Link } from "react-router-dom";
import { cartActions } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helm title="Cart">
      <CommonSection title="Your cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">Your cart is empty.</h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
              <div className="mt-4">
                <h6>
                  Subtotal:{" "}
                  <span className="cart__subtotal">${totalAmount}</span>
                </h6>
                <p>Taxes and shipping will calculate at checkout</p>
                <div className="cart__page-btn">
                  <button className="addToCart__btn me-3">
                    <Link to="/foods">Continue shopping</Link>
                  </button>
                  <button className="addToCart__btn">
                    <Link to="/checkout">Proceed to checkout</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helm>
  );
};

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props;

  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={image01} alt="image-01" className="w-25" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">${price}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center cart__item-delete" onClick={deleteItem}>
        <i className="fas fa-trash"></i>
      </td>
    </tr>
  );
};

export default Cart;
