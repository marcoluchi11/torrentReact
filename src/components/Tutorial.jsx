import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
const Titulo = styled.h1`
  font-weight: 700;
`;
const PasosTitulo = styled.h2`
  font-weight: 500;

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
  background-color: #587c9f;
  -webkit-box-shadow: 10px 10px 16px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 16px -8px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 16px -8px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  padding: 1.6rem;
  opacity: 0.9;
`;
const Linkovich = styled.a`
  color: #f6fbfb;
`;
const FinDescarga = styled.h4`
  font-size: 1.4rem;
  font-weight: 500;
`;
const Tutorial = () => {
  return (
    <ContenedorSecciones id="tutorial">
      <Titulo>Como Descargar</Titulo>
      <Parrafo>
        Antes que nada... ¿Sabes que es un torrent? Un torrent es un pequeño
        archivo que contiene la informacion de otro archivo (película, serie,
        recital, etc.) que queremos descargar.
      </Parrafo>
      <Parrafo>
        El programa que manipula estos archivos utiliza el sistema P2P (peer to
        peer). ¿que es esto? En lugar de que el contenido se descargue de un
        servidor central, se descarga desde otras computadoras.
      </Parrafo>
      <Parrafo>
        Hay dos términos importantes: Seeders y Leechers, Los seeders son los
        que están compartiendo los archivos en ese momento, y los leechers son
        los que los están descargando.
      </Parrafo>
      <Parrafo>
        Aquí te dejo un video que lo explica por si no te quedo claro.
      </Parrafo>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="mt-1 pb-3"
          width="460"
          height="215"
          src="https://www.youtube.com/embed/4wd7pP7VQkg?start=12"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Torrentovich"
        ></iframe>
      </div>
      <PasosTitulo>Paso 1</PasosTitulo>
      <Parrafo>
        Descargar el cliente de Torrent y el reproductor de video VLC.
      </Parrafo>
      <Parrafo>
        Existen otros pero yo recomiendo descargar qBittorrent.{" "}
      </Parrafo>
      <img
        className="mb-2"
        src="https://img.utdstc.com/icons/qbittorrent-windows.png:150"
        alt=""
      />
      <div className="col-12">
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
      <FinDescarga>
        Listo ya tienes todo (o casi) lo necesario para empezar a ver películas
        o series por tu cuenta.
      </FinDescarga>

      <PasosTitulo>Paso 2</PasosTitulo>
      <Parrafo>
        Buscar películas en la <Link to="/">HomePage</Link>
      </Parrafo>
      <PasosTitulo>Paso 3</PasosTitulo>
      <Parrafo>Selecciona la película/serie que quieras</Parrafo>
      <PasosTitulo>Paso 4</PasosTitulo>
      <Parrafo>
        Se mostrará la informacion de la película, y debajo en una tabla, los
        Torrents disponibles para que hagas la descarga. Haz click sobre el link
        que quieras descargar y se te abrira el qBittorrent que previamente has
        descargado y se iniciará la descarga
      </Parrafo>
      <PasosTitulo>Paso 5</PasosTitulo>
      <Parrafo>
        Luego de descargada la pelÍcula/serie, quedarÍa solo descargar los
        subtítulos.
      </Parrafo>
      <Parrafo>
        Aquí se pueden hacer dos cosas: <br /> Ir a alguna pagina de subtítulos
        como por ejemplo: <a href="http://www.Subdivx.com"> SubDivx</a>,{" "}
        <a href="http://www.Argenteam.net"> ArgenTeam</a>,{" "}
        <a href="http://www.Tusubtitulo.com">TuSubtitulo</a>
        {","}
        <a href="http://www.Subtitulamos.tv"> Subtitulos.tv</a> o bien,
        <br /> en el Reproductor VLC hay un apartado que se llama VLSub que
        busca los subtítulos en el reproductor mismo por idioma.
      </Parrafo>
      <Parrafo>
        Iniciar VLC &gt; Reproducir tu vídeo &gt; Haz click en el menu View &gt;
        VLSub &gt;
      </Parrafo>
      <Parrafo>
        Verifica que el nombre esté correcto, y haz click en "search by hash" o
        "search by name"
      </Parrafo>
      <Parrafo>
        Selecciona los subtítulos de la lista Click en “Download selection”
      </Parrafo>

      <Parrafo>Buscar que la sincronización de los textos sea buena.</Parrafo>
    </ContenedorSecciones>
  );
};

export default Tutorial;
