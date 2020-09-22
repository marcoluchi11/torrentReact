import React, { Fragment } from "react";
const Tutorial = () => {
  return (
    <Fragment>
      <h1>Como Descargar</h1>
      <h3>Paso 1</h3>
      <p>Descargar el cliente de Torrent</p>
      <p>qBittorrent</p>
      <h3>Paso 2</h3>
      <p>
        {" "}
        Buscar peliculas en Pagina principal o en las paginas de torrents que
        estan en Links de Utilidad
      </p>
      <h3>Paso 3</h3>
      <p>
        Buscar pelicula y seleccionar la calidad (720p o 1080p en lo posible){" "}
      </p>
      <h3>Paso 4</h3>
      <p>
        Se va a descargar un archivo, ese archivo lo abris con el qBittorrent,
        le das ok. Y empezara la descarga.
      </p>
      <h3>Paso 5</h3>
      <p>
        Luego de descargada la pelicula, faltan los subtitulos. Aqui se pueden
        hacer dos cosas, o bien ir a alguna pagina de subtitulos que deje en
        "Links de Utilidad" o bien, En el Reproductor VLC hay un apartado que se
        llama VLSub que te busca los subtitulos ahi mismo en el reproductor por
        idioma. Buscar que la sincronizacion de los textos sea buena.
      </p>
    </Fragment>
  );
};

export default Tutorial;
