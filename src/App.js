import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import PeliculasProvider from "./context/PeliculasContext";
import Pelicula from "./components/Pelicula";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Idpelicula from "./components/Idpelicula";
import Navegacion from "./components/Navegacion";
import Contacto from "./components/Contacto";
import Links from "./components/Links";
import Tutorial from "./components/Tutorial";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <PeliculasProvider>
        <Navegacion />
        <Container className="altura mt-5">
          <Jumbotron className="col-12">
            <Switch>
              <Route exact path="/" component={Pelicula} />
              <Route exact path="/contacto" component={Contacto} />
              <Route exact path="/links" component={Links} />
              <Route exact path="/tutorial" component={Tutorial} />
              <Route exact path="/:id" component={Idpelicula} />
            </Switch>
          </Jumbotron>
          <Footer />
        </Container>
      </PeliculasProvider>
    </Router>
  );
}

export default App;
