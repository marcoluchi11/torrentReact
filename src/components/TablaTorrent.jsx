import React, { Fragment, useContext } from "react";
import { PeliculasContext } from "../context/PeliculasContext";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
const TablaTorrent = () => {
  const { busqueda, busqTorrent, setBusqTorrent } = useContext(
    PeliculasContext
  );
  const handleClick = () => {
    const prueba = async () => {
      const url = `https://us-central1-buscatutorrent.cloudfunctions.net/app/torrent/${busqueda.nombre}`;
      //EN 1337.x no tenes magnet.
      // eslint-disable-next-line
      const fetchPromise = await fetch(url);
      const torrentFinal = await fetchPromise.json();
      setBusqTorrent(torrentFinal);
    };
    prueba();
  };
  return (
    <Fragment>
      <Table className="mt-3" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Seeds</th>
            <th>Leechers</th>
            <th>Tamaño</th>
          </tr>
        </thead>
        <tbody>
          {busqTorrent.map((opcion) => (
            <tr key={opcion.id}>
              <td>
                <a href={opcion.magnet || opcion.link || opcion.desc}>
                  {opcion.title}
                </a>
              </td>
              <td>{opcion.seeds}</td>
              <td>{opcion.peers || "-"}</td>
              <td>{opcion.size}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={handleClick}>Click</Button>
    </Fragment>
  );
};

export default TablaTorrent;
