import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Error from "./Error";
import styled from "@emotion/styled";
import { enviarFormulario } from "./envioContacto";
import { PeliculasContext } from "../context/PeliculasContext";
import MensajeExito from "./MensajeExito";
const Encabezado = styled.h1`
  font-weight: 700;
`;
const ContenedorSecciones = styled.div`
  background-color: #587c9f;
  -webkit-box-shadow: 10px 10px 16px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 16px -8px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 16px -8px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  padding: 1.6rem;
  opacity: 0.9;
`;
const Contacto = () => {
  const {
    consulta,
    setConsulta,
    setError,
    error,
    enviado,
    setEnviado,
  } = useContext(PeliculasContext);
  const [mensaje, setMensaje] = useState("");
  const { Mail, Consulta } = consulta;
  function isEmail(email) {
    // eslint-disable-next-line
    return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(
      email
    );
  }
  const handleChange = (e) => {
    setConsulta({ ...consulta, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (isEmail(Mail) === false) {
      setMensaje("Ingrese un mail válido");
      setError(true);
      return;
    }
    if (Consulta.trim() === "") {
      setMensaje("No dejes el campo de consulta vacío");
      setError(true);
      return;
    }
    setError(false);
    enviarFormulario({
      Mail: Mail,
      Consulta: Consulta,
    });
    setConsulta({
      Mail: "",
      Consulta: "",
    });
    setEnviado(true);
    setTimeout(() => {
      setEnviado(false);
    }, 4000);
  };
  return (
    <ContenedorSecciones>
      <Form>
        <Encabezado>Contacto</Encabezado>
        <p>
          Si se te ocurre una idea para mejorar algo, o algún error o
          inconveniente, no dudes en hacérmelo saber.
        </p>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label className="letraContacto">Email</Form.Label>
          <Form.Control
            value={Mail}
            onChange={handleChange}
            name="Mail"
            type="email"
            placeholder="nombre@ejemplo.com"
          />
        </Form.Group>
        {error ? <Error mensaje={mensaje} /> : null}
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="letraContacto">Consulta</Form.Label>
          <Form.Control
            value={Consulta}
            onChange={handleChange}
            name="Consulta"
            as="textarea"
            rows="3"
            placeholder="Escribe tu consulta aquí..."
          />
        </Form.Group>
        <Button className="mb-2" variant="primary" onClick={handleClick}>
          Enviar consulta
        </Button>
        {enviado ? <MensajeExito mensaje="Mensaje enviado con éxito" /> : null}
      </Form>
    </ContenedorSecciones>
  );
};

export default Contacto;
