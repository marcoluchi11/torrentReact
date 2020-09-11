import React, { Fragment, useContext } from "react";
import { PeliculasContext } from "../context/PeliculasContext";
const Torrent = () => {
  const { torrent } = useContext(PeliculasContext);

  if (torrent === null) return null;

  return (
    <Fragment>
      <h3>Descarga por Torrent</h3>
      {torrent.torrents.map((torrente) => (
        <Fragment key={torrente.hash}>
          <a href={torrente.url}>Descarga aqui en {torrente.quality}</a>
          <p>Seeds: {torrente.seeds}</p>
          <p>Tamano: {torrente.size}</p>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Torrent;
