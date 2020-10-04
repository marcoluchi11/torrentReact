import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import logo from "./../images/logoahorasi.png";
import styled from "@emotion/styled";
const Imagen = styled.img`
  width: 4rem;
  height: 4rem;
  margin-left: 2rem;
  margin-top: 1rem;
`;

const Navegacion = () => {
  const [nav, setNav] = useState(false);

  const changeBack = () => {
    if (window.scrollY >= 70) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBack);
  return (
    <Navbar
      className={nav ? "nav active" : "nav"}
      collapseOnSelect
      expand="lg"
      sticky="top"
    >
      <Link to="/" className="links letra">
        <Imagen src={logo} alt="" />
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="mt-3">
        <Nav className="ml-auto">
          <Link to="/tutorial" id="navegacion" className="links letralinks">
            Como Descargar
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
