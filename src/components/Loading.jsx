import React from "react";
import Spinner from "react-bootstrap/Spinner";
const Loading = ({ mensaje }) => {
  return (
    <div className="d-flex justify-content-center">
      <Spinner animation="border" variant="light" />
      <p className="ml-1">{mensaje}</p>
    </div>
  );
};

export default Loading;
