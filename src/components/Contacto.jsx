import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { enviarFormulario } from "./envioContacto";
import { PeliculasContext } from "../context/PeliculasContext";
const Contacto = () => {
  const { consulta, setConsulta } = useContext(PeliculasContext);

  const { Mail, Consulta } = consulta;
  const handleChange = (e) => {
    setConsulta({ ...consulta, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    enviarFormulario({
      Mail: Mail,
      Consulta: Consulta,
    });
    setConsulta({
      Mail: "",
      Consulta: "",
    });
  };
  return (
    <Form>
      <h1>Contacto</h1>
      <p>
        Si se te ocurre una idea para mejorar algo, o algun error o
        inconveniente, no dudes en hacermelo saber
      </p>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control
          value={Mail}
          onChange={handleChange}
          name="Mail"
          type="email"
          placeholder="nombre@ejemplo.com"
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Consulta</Form.Label>
        <Form.Control
          value={Consulta}
          onChange={handleChange}
          name="Consulta"
          as="textarea"
          rows="3"
          placeholder="Escribe tu consulta aqui..."
        />
      </Form.Group>
      <Button variant="info" onClick={handleClick}>
        Enviar
      </Button>
    </Form>
  );
};

export default Contacto;
