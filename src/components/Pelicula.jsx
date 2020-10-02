import React, { useContext } from "react";
import { PeliculasContext } from "../context/PeliculasContext";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListaPelicula from "./ListaPelicula";
import Busquedaimg from "./../images/busqueda.svg";
import Error from "./Error";
import styled from "@emotion/styled";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import logo from "./../images/logoc3.png";
const ContenedorImagenes = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;
const Imagen = styled.img`
  width: 25rem;
  height: 15rem;

  @media all and (max-width: 799px) and (min-width: 300px) {
    width: 100%;
  }
`;
const Titulo = styled.h4`
  font-weight: 700;
  line-height: 120%;
  font-size: 3rem;
`;
const Subtitulo = styled.h5`
  color: #fff !important;
  font-weight: 500;
  line-height: 120%;
  font-size: 1.9rem;
  margin-top: 1.6rem;
`;
const Pelicula = () => {
  const { busqueda, setBusqueda, setPeliculas, error, setError } = useContext(
    PeliculasContext
  );

  const handleChange = (e) => {
    setBusqueda({ ...busqueda, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (busqueda.nombre.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    const buscarPeliculas = async () => {
      const url = `https://www.omdbapi.com/?s=${busqueda.nombre}&apikey=${process.env.REACT_APP_SECRET_KEY}`;

      const search = await fetch(url);
      const response = await search.json();
      if (response.Response === "False") {
        setError(true);
        return;
      }
      setError(false);
      setPeliculas(response.Search);
    };
    buscarPeliculas();
  };
  return (
    <section>
      <Row className="mb-5 d-flex justify-content-center">
        <Col md={6} lg={12} className="d-flex justify-content-center">
          <Imagen src={logo} alt="Logo Principal" />
        </Col>
        <Col md={6} className="text-center">
          <Titulo>¿No está en Netflix?</Titulo>
          <Subtitulo>¡Búscalo fácilmente acá!</Subtitulo>
        </Col>
      </Row>

      <Form>
        <InputGroup onChange={handleChange} size="sm" className="mb-2 pb-3">
          <InputGroup.Prepend></InputGroup.Prepend>
          <FormControl
            name="nombre"
            placeholder="Busca tu pelicula o serie..."
            aria-label="Busca peliculas"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>

        {error ? (
          <Error mensaje="No se encontraron peliculas ni series en esa busqueda" />
        ) : null}

        <Button
          type="submit"
          onClick={handleClick}
          variant="primary"
          size="lg"
          block
        >
          Buscar
          <img src={Busquedaimg} className="ml-2" alt="" />
        </Button>
      </Form>
      <ContenedorImagenes>
        <ListaPelicula />
      </ContenedorImagenes>
    </section>
  );
};

export default Pelicula;
