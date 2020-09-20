const functions = require("firebase-functions");
let cors = require("cors");
const express = require("express");
const TorrentSearchApi = require("torrent-search-api");
const app = express();
//`app.use(cors());
TorrentSearchApi.enableProvider("Yts");
TorrentSearchApi.enableProvider("ThePirateBay");

const traerLinks = async (nombre, type) => {
  if (type === "series") {
    type = "TV";
  } else {
    type = "Movies";
  }

  const torrents = await TorrentSearchApi.search(nombre, type, 10);

  return torrents;
};
app.get("/", (req, res) => {
  res.send("La aplicacion anda");
});
app.get("/torrent/:nombre", (req, res) => {
  traerLinks(req.params.nombre, req.query.type)
    .then((result) => res.json(result))
    .catch((err) => console.log("Hubo un error al realizar el pedido", err));
});

exports.app = functions.https.onRequest(app);
