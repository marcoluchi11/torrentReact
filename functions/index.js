const functions = require("firebase-functions");
let cors = require("cors");
const express = require("express");
const TorrentSearchApi = require("torrent-search-api");
const app = express();
app.use(cors());
TorrentSearchApi.enableProvider("Yts");
TorrentSearchApi.enableProvider("ThePirateBay");

const traerLinks = async (nombre) => {
  const torrents = await TorrentSearchApi.search(nombre, "All", 10);

  return torrents;
};

app.get("/torrent/:nombre", (req, res) => {
  traerLinks(req.params.nombre)
    .then((result) => res.json(result))
    .catch((err) => console.log("Hubo un error al realizar el pedido", err));
});

exports.app = functions.https.onRequest(app);
