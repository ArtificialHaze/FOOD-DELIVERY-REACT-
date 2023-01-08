import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" sm="6" md="4">
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Treats</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                aliquam nostrum.
              </p>
            </div>
          </Col>
          <Col lg="3" sm="6" md="4">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="delivery___time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00 AM - 11:00 PM</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Day off</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" sm="6" md="4">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="delivery___time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Phone: +955 599 999 999</span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <p>Location: Georgia, Tbilisi</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Email: example@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" sm="6" md="4">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Email here.." />
              <span>
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - made by DreamDevs &copy; | 2023. All rights reserved.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                <Link to={"https://facebook.com"}>
                  <i className="fab fa-facebook"></i>
                </Link>
              </span>
              <span>
                <Link to={"https://twitter.com"}>
                  <i className="fab fa-twitter"></i>
                </Link>
              </span>
              <span>
                <Link to={"https://instagram.com"}>
                  <i className="fab fa-instagram"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
