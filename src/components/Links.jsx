import React, { Fragment } from "react";
import styled from "@emotion/styled";
import Button from "react-bootstrap/Button";
const Imagen = styled.img`
  width: 250px;
  height: 200px;
`;
const Links = () => {
  return (
    <Fragment>
      <h1>Links de Utilidad</h1>
      <h3>Reproductor de video</h3>
      <h4>VLC Media Player</h4>
      <p>
        VLC es un reproductor multimedia libre y de código abierto
        multiplataforma y un «framework» que reproduce la mayoría de archivos
        multimedia, así como DVD, Audio CD, VCD y diversos protocolos de
        transmisión.
        <br />
        <small>
          Se utiliza para reproducir las peliculas y usar los subtitulos
        </small>
      </p>
      <Imagen
        src="https://img.utdstc.com/icons/vlc-media-player-1-0-5.png:l"
        alt="Logo VLC"
      />

      <Button variant="success">
        <a href="https://www.videolan.org/index.es.html" className="button">
          Descarga Aqui
        </a>
      </Button>

      <h3>Webs para buscar Subtitulos</h3>

      <a href="http://www.Subdivx.com"> SubDivx</a>
      <a href="http://www.Subtitulamos.tv"> Subtitulos.tv</a>
      <a href="http://www.Tusubtitulo.com"> TuSubtitulo</a>
      <a href="http://www.Argenteam.net"> ArgenTeam</a>

      <h3>Otras webs de Torrents</h3>
      <Imagen
        src="https://dyncdn.me/static/20/img/logo_dark_nodomain2_optimized.png"
        alt="RARGB"
      />
      <a href="https://rarbg.to/index80.php">Rarbg</a>
      <Imagen
        src="https://thepirate-bay.org/wp-content/themes/info/assets/img/tpb.jpg"
        alt="thepiratebayimg"
      />
      <a href="https://thepirate-bay.org/1/">Thepirate-Bay</a>
    </Fragment>
  );
};
export default Links;
