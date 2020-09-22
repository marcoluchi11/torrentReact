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
import { v4 as uuidv4 } from "uuid";
const Titulo = styled.strong`
  font-size: 1.5rem;
`;
const Premios = styled.h6`
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
        <Loading />
      ) : (
        <Fragment>
          <Row>
            <Col>
              <ImagenPelicula>
                <img src={info.Poster} alt="" />
              </ImagenPelicula>
            </Col>
            <Col>
              <h1>
                {info.Title} ({info.Year})
              </h1>
              <p>
                {info.Runtime} | {info.Genre}
              </p>
              <hr />
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
              <hr />
              <Titulo>BoxOffice</Titulo> <p>{info.BoxOffice}</p>
              <Titulo>Produccion</Titulo> <p>{info.Production}</p>
              <Link to="/">
                <Button variant="secondary" onClick={handleClick} block>
                  <img className="mr-2" src={flechita} alt="" />
                  Volver
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <TablaTorrent />
          </Row>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Idpelicula;
