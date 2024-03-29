import React, { Fragment, useContext } from "react";
import { PeliculasContext } from "../context/PeliculasContext";
import PaginacionTabla from "./PaginacionTabla";
import Loading from "./Loading";
import { v4 as uuidv4 } from "uuid";
const TablaTorrent = () => {
  const { busqTorrent } = useContext(PeliculasContext);

  const valores = busqTorrent.map((opcion) => (
    <tr key={uuidv4()}>
      <td>
        <a href={opcion.magnet || opcion.link || opcion.desc}>
          {opcion.title || "No se encontraron Torrents..."}
        </a>
      </td>
      <td>{opcion.seeds || "-"}</td>
      <td>{opcion.peers || "-"}</td>
      <td>{opcion.size || "-"}</td>
    </tr>
  ));
  return (
    <Fragment>
      {valores.length === 0 ? (
        <div className="mt-3  d-flex justify-content-center">
          <Loading mensaje="Loading torrents..." />
        </div>
      ) : (
        <Fragment>
          <h3 className="text-center">Torrent List</h3>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Seeds</th>
                <th>Leechers</th>
                <th>Size</th>
              </tr>
            </thead>

            <PaginacionTabla
              itemsperpage={6}
              nocolumns={5}
              items={valores}
              pagesspan={10}
            />
          </table>
        </Fragment>
      )}
    </Fragment>
  );
};

export default TablaTorrent;
