import React, { Fragment, useContext } from "react";
import { PeliculasContext } from "../context/PeliculasContext";
import Alert from "react-bootstrap/Alert";
const Torrent = () => {
  const { torrent } = useContext(PeliculasContext);

  return (
    <Fragment>
      <h3>Descarga por Torrent</h3>
      {torrent === null ? (
        <Alert variant="info">No se encontraron Torrents</Alert>
      ) : (
        torrent.torrents.map((torrente) => (
          <Fragment key={torrente.hash}>
            <a href={torrente.url}>Descarga aqui en {torrente.quality}</a>
            <p>Seeds: {torrente.seeds}</p>
            <p>Tamano: {torrente.size}</p>
          </Fragment>
        ))
      )}
    </Fragment>
  );
};

export default Torrent;
