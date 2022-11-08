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
import Heading from "./Heading";
const ContenedorImagenes = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;
const Pelicula = () => {
  const { busqueda, setBusqueda, setPeliculas, error, setError } =
    useContext(PeliculasContext);

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
      <Heading />
      <Form>
        <InputGroup onChange={handleChange} size="sm" className="mb-2 pb-3">
          <InputGroup.Prepend></InputGroup.Prepend>
          <FormControl
            name="nombre"
            placeholder="Search your movie or show..."
            autoComplete="off"
            aria-label="Busca peliculas"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>

        {error ? (
          <Error mensaje="We found nothing in that search. Try again!" />
        ) : null}

        <Button
          type="submit"
          onClick={handleClick}
          variant="primary"
          size="lg"
          block
        >
          Search
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
