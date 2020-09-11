import React, { createContext, useState, useEffect } from "react";

export const PeliculasContext = createContext();

const PeliculasProvider = (props) => {
  const [busqueda, setBusqueda] = useState({ nombre: "" });
  const [peliculas, setPeliculas] = useState([]);
  const [seleccion, setSeleccion] = useState({});
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(false);
  const [torrent, setTorrent] = useState(null);
  useEffect(() => {
    const pedidoDatos = async () => {
      const url = `http://www.omdbapi.com/?i=${seleccion.imdbID}&apikey=89a340b7`;
      const url2 = `https://yts.mx/api/v2/list_movies.json?query_term=${seleccion.imdbID}`;
      const [info, torrent] = await Promise.all([
        fetch(url).then((value) => value.json()),
        fetch(url2).then((value) => value.json()),
      ]);

      setInfo(info);
      setTorrent(torrent.data.movies[0]);
    };
    pedidoDatos();
  }, [seleccion]);
  return (
    <PeliculasContext.Provider
      value={{
        busqueda,
        info,
        error,
        seleccion,
        peliculas,
        torrent,
        setBusqueda,
        setPeliculas,
        setSeleccion,
        setInfo,
        setError,
        setTorrent,
      }}
    >
      {props.children}
    </PeliculasContext.Provider>
  );
};
export default PeliculasProvider;
