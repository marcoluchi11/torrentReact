import styled from "@emotion/styled";
import React from "react";
import { Col, Row } from "react-bootstrap";
import logo from "./../images/logoc3.png";
const Imagen = styled.img`
  width: 25rem;
  height: 15rem;

  @media all and (max-width: 799px) and (min-width: 300px) {
    width: 100%;
    margin-top: 8rem;
  }
`;
const Heading = () => {
  return (
    <Row className="mb-5 d-flex justify-content-center">
      <Col sm={6} md={8} lg={12} className="d-flex justify-content-center">
        <Imagen id="logardo" src={logo} alt="Logo Principal" />
      </Col>
    </Row>
  );
};

export default Heading;
