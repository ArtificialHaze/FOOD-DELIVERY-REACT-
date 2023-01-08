import React, { useRef } from "react";
import Helm from "../components/Helm/Helm";
import CommonSection from "../components/UI/Section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const regNameRef = useRef(null);
  const regPassRef = useRef(null);
  const regEmailRef = useRef(null);
  const regConfPassRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Helm title="Register">
      <CommonSection title="Register" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" action="#" onSubmit={handleSubmit}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter name here.."
                    required
                    ref={regNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Enter Email here.."
                    required
                    ref={regEmailRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    ref={regPassRef}
                    type="password"
                    placeholder="Enter password here.."
                    required
                  />
                </div>
                <div className="form__group">
                  <input
                    ref={regConfPassRef}
                    type="password"
                    placeholder="Confirm password.."
                    required
                  />
                </div>
                <button type="submit" className="addToCart__btn">
                  Register
                </button>
              </form>
              <Link to={"/login"}> Already have an Account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helm>
  );
};

export default Register;
