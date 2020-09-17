import React, { useContext } from "react";
import { PeliculasContext } from "../context/PeliculasContext";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
const TablaTorrent = () => {
  const { busqueda } = useContext(PeliculasContext);
  const handleClick = () => {
    const prueba = async () => {
      const url = "http://localhost:4000/torrents";
      const fetchPromise = fetch(url);
      fetchPromise.then((people) => console.log(people));
    };
    prueba();
  };
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>{busqueda.nombre}</th>
          <th>Titulo</th>
          <th>Seeds</th>
          <th>Leechers</th>
          <th>Tamaño</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>3</td>
          <td colSpan="2">Larry the Bird</td>
          <td>@twitter</td>
          <td>@mdo</td>
        </tr>
      </tbody>
      <Button onClick={handleClick}>Click</Button>
    </Table>
  );
};

export default TablaTorrent;
