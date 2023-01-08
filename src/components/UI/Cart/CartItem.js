import React from "react";
import { ListGroupItem } from "reactstrap";
import "../../../styles/cart-item.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cartSlice";

const CartItem = ({ item }) => {
  const { id, title, price, image01, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  const incremenetItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  const decrementItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <ListGroupItem className="border-0 cart__item">
      <div className="cart__item-info d-flex gap-2">
        <img src={image01} alt="Product image" />
        <div className="cart__product-info d-flex align-items-center w-100 justify-content-between">
          <div>
            <h6 className="cart__product-title">{title}</h6>
            <p className="d-flex align-items-center gap-5 cart__product-price">
              {quantity}x <span>${totalPrice}</span>
            </p>
            <div className="d-flex align-items-center justify-content-between increase__decrease-btn">
              <span className="increase__btn" onClick={incremenetItem}>
                <i className="fas fa-plus"></i>
              </span>
              <span className="quantity">{quantity}</span>
              <span className="decrease__btn" onClick={decrementItem}>
                <i className="fas fa-subtract"></i>
              </span>
            </div>
          </div>
          <span className="delete__btn" onClick={deleteItem}>
            <i className="fas fa-times"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
