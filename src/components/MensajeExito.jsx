import React from "react";
import Alert from "react-bootstrap/Alert";
const MensajeExito = ({ mensaje }) => {
  return <Alert variant="success">{mensaje}</Alert>;
};

export default MensajeExito;
