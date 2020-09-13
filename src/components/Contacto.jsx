import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const Contacto = () => {
  const handleClick = () => {};
  return (
    <Form>
      <h1>Contacto</h1>
      <p>
        Si se te ocurre una idea para mejorar algo, o algun error o
        inconveniente, no dudes en hacermelo saber
      </p>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="nombre@ejemplo.com" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Consulta</Form.Label>
        <Form.Control
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
