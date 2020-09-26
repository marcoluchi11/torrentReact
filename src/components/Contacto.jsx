import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Error from "./Error";
import { enviarFormulario } from "./envioContacto";
import { PeliculasContext } from "../context/PeliculasContext";
import MensajeExito from "./MensajeExito";
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
    <Form>
      <h1>Contacto</h1>
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
  );
};

export default Contacto;
