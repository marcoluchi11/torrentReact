import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import PeliculasProvider from "./context/PeliculasContext";
import Pelicula from "./components/Pelicula";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Idpelicula from "./components/Idpelicula";

function App() {
  return (
    <Router>
      <PeliculasProvider>
        <Container>
          <Jumbotron>
            <Switch>
              <Route exact path="/" component={Pelicula} />
              <Route path="/:id" component={Idpelicula} />
            </Switch>
          </Jumbotron>
        </Container>
      </PeliculasProvider>
    </Router>
  );
}

export default App;
