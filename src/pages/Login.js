import React, { useRef } from "react";
import Helm from "../components/Helm/Helm";
import CommonSection from "../components/UI/Section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const nameRef = useRef(null);
  const passRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Helm title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" action="#" onSubmit={handleSubmit}>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Enter here.."
                    required
                    ref={nameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    ref={passRef}
                    type="password"
                    placeholder="Enter password here.."
                    required
                  />
                </div>
                <button type="submit" className="addToCart__btn">
                  Login
                </button>
              </form>
              <Link to={"/register"}>Create an account</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helm>
  );
};

export default Login;
