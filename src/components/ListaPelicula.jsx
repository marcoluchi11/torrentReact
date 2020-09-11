import React, { useContext } from "react";
import styled from "@emotion/styled";
import { PeliculasContext } from "../context/PeliculasContext";
import { Link } from "react-router-dom";
const Imagen = styled.img`
  width: 250px;
  height: 250px;
  padding: 0.5rem;
`;
const ListaPelicula = () => {
  const { peliculas, setSeleccion, setError } = useContext(PeliculasContext);

  const handleClick = (e) => {
    const posicion = peliculas.findIndex(
      (pelicula) => pelicula.Poster === e.target.src
    );

    setSeleccion(peliculas[posicion]);
    setError(false);
  };
  return (
    <div>
      {peliculas.map((pelicula) => (
        <Link key={pelicula.imdbID} to={`/${pelicula.imdbID}`}>
          <Imagen
            src={pelicula.Poster}
            alt="imagen pelicula"
            onClick={handleClick}
          />
        </Link>
      ))}
    </div>
  );
};

export default ListaPelicula;
