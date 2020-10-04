const functions = require("firebase-functions");
let cors = require("cors");
const express = require("express");
const TorrentSearchApi = require("torrent-search-api");
const app = express();
app.use(cors());
TorrentSearchApi.enableProvider("Yts");
TorrentSearchApi.enableProvider("Rarbg");
TorrentSearchApi.enableProvider("ThePirateBay");
const traerLinks = async (nombre) => {
  let torrents = await TorrentSearchApi.search(nombre, "All", 200);
  if (torrents.length === 0) {
    torrents = [{ response: false }];
  }
  return torrents;
};
app.get("/", (req, res) => {
  res.send("La aplicacion anda");
});
app.get("/torrent/:nombre", (req, res) => {
  traerLinks(req.params.nombre)
    .then((result) => res.json(result))
    .catch((err) => console.log("Hubo un error al realizar el pedido", err));
});

exports.app = functions.https.onRequest(app);
