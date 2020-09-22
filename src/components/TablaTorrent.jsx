import React, { Fragment, useContext } from "react";
import { PeliculasContext } from "../context/PeliculasContext";

import PaginacionTabla from "./PaginacionTabla";
import Error from "./Error";
import { v4 as uuidv4 } from "uuid";
const TablaTorrent = () => {
  const { busqTorrent, setError, error } = useContext(PeliculasContext);

  const valores = busqTorrent.map((opcion) => (
    <tr key={uuidv4()}>
      <td>
        <a href={opcion.magnet || opcion.link || opcion.desc}>{opcion.title}</a>
      </td>
      <td>{opcion.seeds}</td>
      <td>{opcion.peers || "-"}</td>
      <td>{opcion.size}</td>
    </tr>
  ));
  if (valores.length === 0) {
    setError(true);
  } else {
    setError(false);
  }
  return (
    <Fragment>
      {error ? (
        <Error mensaje="No se encontraron Torrents" />
      ) : (
        <table className="mt-3">
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Seeds</th>
              <th>Leechers</th>
              <th>Tamaño</th>
            </tr>
          </thead>

          <PaginacionTabla
            itemsperpage={6}
            nocolumns={5}
            items={valores}
            pagesspan={10}
          />
        </table>
      )}
    </Fragment>
  );
};

export default TablaTorrent;
