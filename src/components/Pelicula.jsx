import React, { useContext } from "react";
import { PeliculasContext } from "../context/PeliculasContext";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListaPelicula from "./ListaPelicula";
import Error from "./Error";
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
      // const url = `https://yts.mx/api/v2/list_movies.json?query_term=${busqueda.nombre}`;
      const url = `http://www.omdbapi.com/?s=${busqueda.nombre}&type=movie&apikey=89a340b7`;

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
      <Form>
        <InputGroup onChange={handleChange} size="sm" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">
              Peliculas
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            name="nombre"
            aria-label="Busca peliculas"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        {error ? <Error mensaje="No se encontraron peliculas" /> : null}
        <Button
          type="submit"
          onClick={handleClick}
          variant="secondary"
          size="lg"
          block
        >
          Buscar Movie
        </Button>
      </Form>
      <h3>Listado de Peliculas</h3>
      <ListaPelicula />
    </section>
  );
};

export default Pelicula;
