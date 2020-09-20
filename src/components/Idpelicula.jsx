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
  //const { Title, Poster, Year, Director, Plot, Runtime, Metascore } = info;
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
              <h1>{info.Title}</h1>
              <h3>Año: {info.Year}</h3>
              <h3> Duracion : {info.Runtime}</h3>
              <h3>Genero: {info.Genre}</h3>
              <h4>Actores principales : {info.Actors}</h4>
              <h4>Premios : {info.Awards}</h4>
              {/* #EFE3A4 */}
              <h5>Director: {info.Director}</h5>
              <h5>Escritor: {info.Writer}</h5>
              <p>{info.Plot}</p>
              <p>
                Ratings:
                {info.Ratings.map((rating) => (
                  <p key={uuidv4()}>
                    {rating.Source}: {rating.Value}
                  </p>
                ))}
              </p>
              <p>iMdB Rating: {info.imdbRating}</p>
              <p>BoxOffice: {info.BoxOffice}</p>
              <p>Produccion: {info.Production}</p>
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
