import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
const Navegacion = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/" className="links">
        TorrentGuia
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/tutorial" className="links">
            Como Descargar
          </Link>
          <Link to="/links" className="links">
            Links de Utilidad
          </Link>
          <Link to="/contacto" className="links">
            Contacto
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navegacion;
