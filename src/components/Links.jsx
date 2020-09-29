import React from "react";
import styled from "@emotion/styled";
import Button from "react-bootstrap/Button";

import Col from "react-bootstrap/Col";
const Imagen = styled.img`
  width: 30px;
  height: 30px;
`;
const ContenedorSecciones = styled.div`
  background-color: #686868;
  -webkit-box-shadow: 10px 10px 16px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 16px -8px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 16px -8px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  padding: 1rem;
  opacity: 0.9;
`;
const Titulo = styled.h1`
  font-weight: 700;
`;
const Subtitulo = styled.h4`
  font-weight: 500;
`;
const Parrafo = styled.p`
  font-weight: 300;
`;
const Aclaracion = styled.small`
  font-size: 0.75rem;
`;
const Links = () => {
  return (
    <ContenedorSecciones className="row">
      <Col md={12}>
        <Titulo>Links de Utilidad</Titulo>
      </Col>
      <Col md={12}>
        <Subtitulo>Reproductor de video - VLC Media Player</Subtitulo>
        <Imagen
          src="https://www.wizcase.com/wp-content/uploads/2020/01/VLC-LOGO.png"
          alt="Logo VLC"
        />
      </Col>

      <Col md={6} className="mt-3">
        <Parrafo>
          VLC es un reproductor multimedia libre y de código abierto
          multiplataforma y un «framework» que reproduce la mayoría de archivos
          multimedia, así como DVD, Audio CD, VCD y diversos protocolos de
          transmisión.
          <br />
          <Aclaracion>
            Se utiliza para reproducir las peliculas y usar los subtitulos
          </Aclaracion>
        </Parrafo>
      </Col>
      <Col md={12}>
        <Button className="mb-4" variant="success">
          <a href="https://www.videolan.org/index.es.html" className="button">
            Descarga Aqui
          </a>
        </Button>
      </Col>
      <Col md={12} className="mb-1">
        <Subtitulo>Webs para buscar Subtitulos</Subtitulo>
      </Col>
      <Col md={12} className="mb-1">
        <a href="http://www.Subdivx.com"> SubDivx</a>
      </Col>
      <Col md={12} className="mb-1">
        <a href="http://www.Subtitulamos.tv"> Subtitulos.tv</a>
      </Col>
      <Col md={12}>
        <a href="http://www.Tusubtitulo.com"> TuSubtitulo</a>
      </Col>
      <Col md={12}>
        <a href="http://www.Argenteam.net"> ArgenTeam</a>
      </Col>

      {/* <h3>Otras webs de Torrents</h3>
      <Imagen
        src="https://dyncdn.me/static/20/img/logo_dark_nodomain2_optimized.png"
        alt="RARGB"
      />
      <a href="https://rarbg.to/index80.php">Rarbg</a>
      <Imagen
        src="https://thepirate-bay.org/wp-content/themes/info/assets/img/tpb.jpg"
        alt="thepiratebayimg"
      />
      <a href="https://thepirate-bay.org/1/">Thepirate-Bay</a> */}
    </ContenedorSecciones>
  );
};
export default Links;
