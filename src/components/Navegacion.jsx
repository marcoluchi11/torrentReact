import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import DescargaImg from "./../images/descarga.svg";
const Navegacion = () => {
  return (
    <Navbar className="nav" collapseOnSelect expand="lg">
      <Link to="/" className="links letra">
        TorrentGuia
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <img src={DescargaImg} alt="Descargalogo" />
          <Link to="/tutorial" id="navegacion" className="links letralinks">
            Como Descargar
          </Link>
          <Link to="/links" id="navegacion" className="links letralinks">
            Links de Utilidad
          </Link>
          <Link to="/contacto" id="navegacion" className="links letralinks">
            Contacto
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navegacion;
