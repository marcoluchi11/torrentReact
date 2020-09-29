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
      const url = `https://www.omdbapi.com/?i=${seleccion.imdbID}&apikey=89a340b7`;
      const rta = await fetch(url);
      const data = await rta.json();

      setInfo(data);
      setBusqueda({ nombre: data.Title });
      const url2 = `https://us-central1-buscatutorrent.cloudfunctions.net/app/torrent/${data.Title}`;
      const rta2 = await fetch(url2);
      const data2 = await rta2.json();

      setBusqTorrent(data2);
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
