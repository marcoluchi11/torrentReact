import React, { Fragment, useContext } from "react";
import { PeliculasContext } from "../context/PeliculasContext";
import Table from "react-bootstrap/Table";
const TablaTorrent = () => {
  const { busqTorrent } = useContext(PeliculasContext);
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
    </Fragment>
  );
};

export default TablaTorrent;
