import React from "react";
import Spinner from "react-bootstrap/Spinner";
const SpinnerTorrent = () => {
  return (
    <div className="d-flex justify-content-center">
      <Spinner animation="border" variant="info" />
      <p className="ml-1">Buscando Torrents...</p>
    </div>
  );
};

export default SpinnerTorrent;
