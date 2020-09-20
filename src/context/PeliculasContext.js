import React, { createContext, useState, useEffect } from "react";

export const PeliculasContext = createContext();

const PeliculasProvider = (props) => {
  const [busqueda, setBusqueda] = useState({ nombre: "" });
  const [peliculas, setPeliculas] = useState([]);
  const [seleccion, setSeleccion] = useState({});
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(false);
  const [consulta, setConsulta] = useState({
    Mail: "",
    Consulta: "",
  });
  const [busqTorrent, setBusqTorrent] = useState([]);
  const [enviado, setEnviado] = useState(false);
  useEffect(() => {
    const pedidoDatos = async () => {
      const url = `http://www.omdbapi.com/?i=${seleccion.imdbID}&apikey=89a340b7`;
      const url2 = `https://us-central1-buscatutorrent.cloudfunctions.net/app/torrent/${busqueda.nombre}`;
      const [info, torrent] = await Promise.all([
        fetch(url).then((value) => value.json()),
        fetch(url2).then((value) => value.json()),
      ]);

      setInfo(info);
      setBusqTorrent(torrent);
    };
    pedidoDatos();
    // eslint-disable-next-line
  }, [seleccion]);
  return (
    <PeliculasContext.Provider
      value={{
        busqueda,
        info,
        error,
        seleccion,
        peliculas,
        consulta,
        enviado,
        busqTorrent,
        setBusqueda,
        setPeliculas,
        setSeleccion,
        setInfo,
        setBusqTorrent,
        setError,
        setConsulta,
        setEnviado,
      }}
    >
      {props.children}
    </PeliculasContext.Provider>
  );
};
export default PeliculasProvider;
