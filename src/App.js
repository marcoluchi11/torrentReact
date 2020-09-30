import React from "react";
import PeliculasProvider from "./context/PeliculasContext";
import Pelicula from "./components/Pelicula";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Idpelicula from "./components/Idpelicula";
import Navegacion from "./components/Navegacion";
import Contacto from "./components/Contacto";
import Tutorial from "./components/Tutorial";
import Footer from "./components/Footer";
import GetId from "./components/GetId";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  min-height: calc(100vh - 70px);
  overflow-x: hidden;
`;
function App() {
  return (
    <Router>
      <PeliculasProvider>
        <Navegacion />
        <Contenedor className=" container mt-5 pt-5">
          <Switch>
            <Route exact path="/" component={Pelicula} />
            <Route exact path="/contacto" component={Contacto} />
            <Route exact path="/tutorial" component={Tutorial} />
            <Route
              exact
              path="/:id"
              component={Idpelicula}
              Children={<GetId />}
            />
          </Switch>
        </Contenedor>
        <Footer />
      </PeliculasProvider>
    </Router>
  );
}

export default App;

// Errores a corregir:

// Imagen pelicula en alt en el Home.
//LOGO Y PRESENTACION

// Jerarquizar mejor el tutorial

//Agregar algo a la busqueda dep eliculas en las imagenes

// Completar Tutorial
