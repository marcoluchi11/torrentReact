import React, { Fragment, useContext } from "react";
import { PeliculasContext } from "../context/PeliculasContext";
import styled from "@emotion/styled";
import Alert from "react-bootstrap/Alert";
const Titulo = styled.h3`
  text-decoration: underline;
`;
const Torrent = () => {
  const { torrent } = useContext(PeliculasContext);

  return (
    <Fragment>
      <Titulo>Descarga por Torrent</Titulo>
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
