import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import PeliculasProvider from "./context/PeliculasContext";
import Pelicula from "./components/Pelicula";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Idpelicula from "./components/Idpelicula";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <PeliculasProvider>
        <Container className="minheight">
          <Jumbotron>
            <Switch>
              <Route exact path="/" component={Pelicula} />
              <Route path="/:id" component={Idpelicula} />
            </Switch>
          </Jumbotron>
          <Footer />
        </Container>
      </PeliculasProvider>
    </Router>
  );
}

export default App;
