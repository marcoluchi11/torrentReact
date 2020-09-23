import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PeliculasContext } from "../context/PeliculasContext";
const GetId = () => {
  let { id } = useParams();

  const { setSeleccion, seleccion } = useContext(PeliculasContext);
  useEffect(() => {
    const updateState = () => {
      if (
        Object.keys(seleccion).length === 0 &&
        seleccion.constructor === Object
      ) {
        setSeleccion({ imdbID: id });
      }
    };
    updateState();
  }, [id, seleccion, setSeleccion]);
  return null;
};

export default GetId;
