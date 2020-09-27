import React from "react";
import styled from "@emotion/styled";

const PasosTitulo = styled.h1`
  font-weight: 300;
  text-decoration: underline;
  padding-bottom: 0.7 rem;
`;
const Parrafo = styled.p`
  font-weight: 300;
`;
const ContenedorSecciones = styled.div`
  background-color: #686868;
  -webkit-box-shadow: 10px 10px 16px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 16px -8px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 16px -8px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  padding: 1.6rem;
  opacity: 0.9;
`;
const Linkovich = styled.a`
  text-transform: underline !important;
`;
const Tutorial = () => {
  return (
    <ContenedorSecciones>
      <h1>Como Descargar</h1>
      <PasosTitulo>Paso 1</PasosTitulo>
      <p>Descargar el cliente de Torrent</p>
      <p>qBittorrent</p>
      <img
        className="mb-2"
        src="https://img.utdstc.com/icons/qbittorrent-windows.png:150"
        alt=""
      />
      <div className="col-12 ">
        <Linkovich href="https://www.fosshub.com/qBittorrent.html?dwl=qbittorrent_4.2.5_setup.exe">
          32-bit
        </Linkovich>{" "}
        <Linkovich href="https://www.fosshub.com/qBittorrent.html?dwl=qbittorrent_4.2.5_x64_setup.exe">
          64-bit
        </Linkovich>{" "}
        <Linkovich href="https://www.fosshub.com/qBittorrent.html?dwl=qbittorrent-4.2.5.dmg">
          Mac OS
        </Linkovich>
      </div>

      <PasosTitulo>Paso 2</PasosTitulo>
      <Parrafo> Buscar peliculas en la Home Page</Parrafo>
      <PasosTitulo>Paso 3</PasosTitulo>
      <Parrafo>
        Buscar pelicula y seleccionar la calidad (720p o 1080p en lo posible){" "}
      </Parrafo>
      <PasosTitulo>Paso 4</PasosTitulo>
      <Parrafo>
        Se va a descargar un archivo, ese archivo lo abris con el qBittorrent,
        le das ok. Y empezara la descarga.
      </Parrafo>
      <PasosTitulo>Paso 5</PasosTitulo>
      <Parrafo>
        Luego de descargada la pelicula, faltaria descargar los subtitulos. Aqui
        se pueden hacer dos cosas: <br /> Ir a alguna pagina de subtitulos como
        por ejemplo: Subdivx, Argen-team, Tusubtitulo o bien,
        <br /> en el Reproductor VLC hay un apartado que se llama VLSub que
        busca los subtitulos ahi mismo en el reproductor por idioma.
        <br />
        Buscar que la sincronizacion de los textos sea buena.
      </Parrafo>
    </ContenedorSecciones>
  );
};

export default Tutorial;
