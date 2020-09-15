import React, { useContext, Fragment } from "react";
import { PeliculasContext } from "../context/PeliculasContext";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Torrent from "./Torrent";
import Loading from "./Loading";
import flechita from "./../images/flechaatras.svg";
import styled from "@emotion/styled";
const ImagenPelicula = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const Idpelicula = () => {
  const { setSeleccion, info, setInfo, setTorrent } = useContext(
    PeliculasContext
  );
  //const { Title, Poster, Year, Director, Plot, Runtime, Metascore } = info;
  const handleClick = () => {
    setSeleccion({});
    setInfo(null);
    setTorrent(null);
  };
  return (
    <Fragment>
      {info === null ? (
        <Loading />
      ) : (
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
            <h5>Director: {info.Director}</h5>
            <p>{info.Plot}</p>
            <p>Puntuacion : {info.Metascore}</p>
            <Torrent />
            <Link to="/">
              <Button variant="secondary" onClick={handleClick} block>
                <img className="mr-2" src={flechita} alt="" />
                Volver
              </Button>
            </Link>
          </Col>
        </Row>
      )}
    </Fragment>
  );
};

export default Idpelicula;
