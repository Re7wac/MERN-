import React from "react";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { Container, Row, Col } from "reactstrap";
import "./Body.css";

const Body = () => {
  return (
    <Container fluid className="Body pr-3 pl-2">
      <Row>
        <Col xs={12}>
          <Main />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default Body;
