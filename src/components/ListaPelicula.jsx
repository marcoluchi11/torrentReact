import React, { Fragment, useContext } from "react";
import styled from "@emotion/styled";
import { PeliculasContext } from "../context/PeliculasContext";
import { Link } from "react-router-dom";
const Imagen = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 1rem;
  /* 
  @media all and (max-width: 799px) and (min-width: 300px) {
    width: 20rem;
    height: 20rem;
  } */
`;
const Paragraph = styled.p`
  color: #fff;
  &:hover {
    text-decoration: none;
  }
`;
const Contenedor = styled.div`
  position: relative;
  text-align: center;
  color: #fff;
`;
const Anio = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  font-size: 0.75rem;
  padding: 0 0.5rem;
  border-radius: 1rem;
  background-color: #007aff;
`;
const ListaPelicula = () => {
  const { peliculas, setSeleccion, setError, setBusqueda } = useContext(
    PeliculasContext
  );

  const handleClick = (e) => {
    const posicion = peliculas.findIndex(
      (pelicula) => pelicula.Poster === e.target.src
    );

    setSeleccion(peliculas[posicion]);
    setError(false);
    setBusqueda({ nombre: peliculas[posicion].Title });
  };
  return (
    <Fragment>
      {peliculas.map((pelicula) => (
        <Link key={pelicula.imdbID} to={`/${pelicula.imdbID}`}>
          <Contenedor className="mt-3">
            <Imagen
              src={pelicula.Poster}
              alt="imagen pelicula"
              onClick={handleClick}
            />
            <Anio>{pelicula.Year}</Anio>
          </Contenedor>
          <Paragraph>{pelicula.Title}</Paragraph>
        </Link>
      ))}
    </Fragment>
  );
};

export default ListaPelicula;
