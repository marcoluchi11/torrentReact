import React, { useContext } from "react";
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
  background-color: #edc79d;
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

  const { Mail, Consulta } = consulta;
  const handleChange = (e) => {
    setConsulta({ ...consulta, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (Mail.trim() === "" || Consulta.trim() === "") {
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
          Si se te ocurre una idea para mejorar algo, o algun error o
          inconveniente, no dudes en hacermelo saber
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
        {error ? <Error mensaje="Ingrese un valor correcto" /> : null}
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="letraContacto">Consulta</Form.Label>
          <Form.Control
            value={Consulta}
            onChange={handleChange}
            name="Consulta"
            as="textarea"
            rows="3"
            placeholder="Escribe tu consulta aqui..."
          />
        </Form.Group>
        <Button className="mb-2" variant="info" onClick={handleClick}>
          Enviar
        </Button>
        {enviado ? (
          <MensajeExito mensaje="El mensaje se envio con exito" />
        ) : null}
      </Form>
    </ContenedorSecciones>
  );
};

export default Contacto;
