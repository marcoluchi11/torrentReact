import React, { useContext, Fragment } from "react";
import { PeliculasContext } from "../context/PeliculasContext";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Loading from "./Loading";
import flechita from "./../images/flechaatras.svg";
import styled from "@emotion/styled";
import TablaTorrent from "./TablaTorrent";
import GetId from "./GetId";
import { v4 as uuidv4 } from "uuid";
const Titulo = styled.strong`
  font-size: 1.5rem;
`;
const ContenedorPelicula = styled.div`
  background-color: #edc79d;
  -webkit-box-shadow: 10px 10px 16px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 16px -8px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 16px -8px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  padding: 1.6rem;
  opacity: 0.9;
`;
const Premios = styled.h6`
  color: black;
  background-color: #efe3a4;
  border-top: 1.3px grey solid;
  border-bottom: 1.3px grey solid;
  padding: 1rem;
`;
const ImagenPelicula = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const Imagen = styled.img`
  border-radius: 25px;
`;
const Barra = styled.hr`
  border: 3px solid #fff;
  border-radius: 5px;
`;
const Idpelicula = () => {
  const {
    setSeleccion,
    info,
    setInfo,
    setBusqTorrent,
    setBusqueda,
  } = useContext(PeliculasContext);
  const handleClick = () => {
    setSeleccion({});
    setInfo(null);
    setBusqTorrent([]);
    setBusqueda({ nombre: "" });
  };
  return (
    <Fragment>
      {info === null ? (
        <Fragment>
          <Loading mensaje="Buscando informacion..." />
          <GetId />
        </Fragment>
      ) : (
        <ContenedorPelicula>
          <Row>
            <Col>
              <ImagenPelicula>
                <Imagen src={info.Poster} alt="" />
              </ImagenPelicula>
            </Col>
            <Col className="mb-4">
              <h1>
                {info.Title} ({info.Year})
              </h1>
              <p>
                {info.Runtime} | {info.Genre}
              </p>
              <Barra />
              <p>{info.Plot}</p>
              <Titulo>Director</Titulo>
              <p>{info.Director}</p>
              <Titulo>Escritor</Titulo> <p>{info.Writer}</p>
              <Titulo>Actores principales</Titulo> <p>{info.Actors}</p>
              <Premios>Premios : {info.Awards}</Premios>
              <h5>Ratings:</h5>
              <div>
                {info.Ratings.map((rating) => (
                  <p key={uuidv4()}>
                    {rating.Source}: <span>{rating.Value}</span>
                  </p>
                ))}
              </div>
              <Barra />
              <Link to="/">
                <Button variant="secondary" onClick={handleClick} block>
                  <img className="mr-2" src={flechita} alt="" />
                  Volver
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <TablaTorrent />
            </Col>
          </Row>
        </ContenedorPelicula>
      )}
    </Fragment>
  );
};

export default Idpelicula;
