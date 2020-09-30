import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
const PasosTitulo = styled.h1`
  font-weight: 500;
  font-size: 2rem;
  padding-bottom: 0.7 rem;
`;
const Parrafo = styled.p`
  font-weight: 300;
`;
const Imagen = styled.img`
  width: 100px;
  height: 100px;
`;
const ContenedorSecciones = styled.div`
  background-color: #edc79d;
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
      <PasosTitulo>Como Descargar</PasosTitulo>
      <Parrafo>
        Antes que nada...Sabes que es un torrent? Un torrent es un pequeño
        archivo que contiene la informacion de otro archivo
        (pelicula,serie,recital etc) que queremos descargar.
      </Parrafo>
      <Parrafo>
        El programa que manipula estos archivos utiliza el sistema P2P (peer to
        peer), que es esto? En lugar de que el contenido se descargue de un
        servidor central, se descarga de otras computadoras.
      </Parrafo>
      <Parrafo>
        Hay dos terminos importantes: Seeders y Leechers, Los seeders son los
        que estan compartiendo los archivos en ese momento, y los leechers son
        los que los estan descargando
      </Parrafo>
      <Parrafo>
        Aqui te dejo un video que lo explica por si no te quedo claro
      </Parrafo>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="mt-1 pb-3"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4wd7pP7VQkg?start=12"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Torrentovich"
        ></iframe>
      </div>
      <PasosTitulo>Paso 1</PasosTitulo>
      <Parrafo>
        Descargar el cliente de Torrent y el reproductor de video VLC
      </Parrafo>
      <Parrafo>Existen otros pero yo recomiendo descargar qBittorrent </Parrafo>
      <img
        className="mb-2"
        src="https://img.utdstc.com/icons/qbittorrent-windows.png:150"
        alt=""
      />
      <div className="col-12">
        <Linkovich href="https://www.fosshub.com/qBittorrent.html?dwl=qbittorrent_4.2.5_setup.exe">
          32-bit
        </Linkovich>
        <Linkovich href="https://www.fosshub.com/qBittorrent.html?dwl=qbittorrent_4.2.5_x64_setup.exe">
          64-bit
        </Linkovich>
        <Linkovich href="https://www.fosshub.com/qBittorrent.html?dwl=qbittorrent-4.2.5.dmg">
          Mac OS
        </Linkovich>
      </div>
      <Parrafo>Reproductor de video - VLC Media Player</Parrafo>
      <Imagen
        src="https://www.wizcase.com/wp-content/uploads/2020/01/VLC-LOGO.png"
        alt="Logo VLC"
      />
      <Parrafo className="mt-3">
        VLC es un reproductor multimedia libre y de código abierto
        multiplataforma y un «framework» que reproduce la mayoría de archivos
        multimedia, así como DVD, Audio CD, VCD y diversos protocolos de
        transmisión.
      </Parrafo>
      <Parrafo>
        Descargalo desde la{" "}
        <a href="https://www.videolan.org/vlc/index.es.html">pagina oficial</a>
      </Parrafo>
      <PasosTitulo>Paso 2</PasosTitulo>
      <Parrafo>
        Buscar peliculas en la <Link to="/">HomePage</Link>
      </Parrafo>
      <PasosTitulo>Paso 3</PasosTitulo>
      <Parrafo>Selecciona la pelicula a descargar</Parrafo>
      <PasosTitulo>Paso 4</PasosTitulo>
      <Parrafo>
        Se mostrara la informacion de la pelicula, y debajo en una tabla, los
        torrents disponibles para que la descargues.
      </Parrafo>
      <PasosTitulo>Paso 5</PasosTitulo>
      <Parrafo>
        Luego de descargada la pelicula, quedaria solo descargar los subtitulos.
      </Parrafo>
      <Parrafo>
        Aqui se pueden hacer dos cosas: <br /> Ir a alguna pagina de subtitulos
        como por ejemplo: <a href="http://www.Subdivx.com"> SubDivx</a>,{" "}
        <a href="http://www.Argenteam.net"> ArgenTeam</a>,{" "}
        <a href="http://www.Tusubtitulo.com">TuSubtitulo</a>
        {","}
        <a href="http://www.Subtitulamos.tv"> Subtitulos.tv</a> o bien,
        <br /> en el Reproductor VLC hay un apartado que se llama VLSub que
        busca los subtitulos en el reproductor mismo por idioma.
      </Parrafo>
      <Parrafo>
        Iniciar VLC Reproducir tu vídeo Click on the menu View &gt; VLSub o VLC
        &gt; Extension &gt; VLSub
      </Parrafo>
      <Parrafo>
        Verifica que el nombre este correcto, y haz click en "search by hash" o
        "search by name"
      </Parrafo>
      <Parrafo>
        Selecciona los subtítulos de la lista Click en “Download selection”
      </Parrafo>

      <Parrafo>Buscar que la sincronizacion de los textos sea buena.</Parrafo>
    </ContenedorSecciones>
  );
};

export default Tutorial;
