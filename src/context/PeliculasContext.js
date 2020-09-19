import React, { createContext, useState, useEffect } from "react";

export const PeliculasContext = createContext();

const PeliculasProvider = (props) => {
  const [busqueda, setBusqueda] = useState({ nombre: "" });
  const [peliculas, setPeliculas] = useState([]);
  const [seleccion, setSeleccion] = useState({});
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(false);
  const [torrent, setTorrent] = useState(null);
  const [consulta, setConsulta] = useState({
    Mail: "",
    Consulta: "",
  });
  const [busqTorrent, setBusqTorrent] = useState([]);
  const [enviado, setEnviado] = useState(false);
  useEffect(() => {
    const pedidoDatos = async () => {
      const url = `http://www.omdbapi.com/?i=${seleccion.imdbID}&apikey=89a340b7`;
      const url2 = `https://yts.mx/api/v2/list_movies.json?query_term=${seleccion.imdbID}`;
      const [info, torrent] = await Promise.all([
        fetch(url).then((value) => value.json()),
        fetch(url2).then((value) => value.json()),
      ]);

      setInfo(info);
      if (torrent.data.movies === undefined) {
        setTorrent(null);
      } else {
        setTorrent(torrent.data.movies[0]);
      }
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
        consulta,
        enviado,
        busqTorrent,
        setBusqueda,
        setPeliculas,
        setSeleccion,
        setInfo,
        setBusqTorrent,
        setError,
        setTorrent,
        setConsulta,
        setEnviado,
      }}
    >
      {props.children}
    </PeliculasContext.Provider>
  );
};
export default PeliculasProvider;
