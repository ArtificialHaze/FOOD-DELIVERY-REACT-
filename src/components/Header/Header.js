import React, { useEffect, useRef } from "react";
import { Container } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/res-logo.png";
import "../../styles/header.css";
import { useSelector, useDispatch } from "react-redux";
import { cartUIActions } from "../../store/cartUISlice";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const toggleCart = () => {
    dispatch(cartUIActions.toggle());
  };

  useEffect(() => {
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    };

    window.addEventListener("scroll", scrollFunction);

    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex aling-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Treats</h5>
          </div>
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((navlink, index) => (
                <NavLink
                  to={navlink.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {navlink.display}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
              <i className="fa fa-shopping-bag"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>
            <span className="user">
              <Link to={"/login"}>
                <i className="fas fa-user"></i>
              </Link>
            </span>
            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="fas fa-bars"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
