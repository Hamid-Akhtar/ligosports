const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const database = require("./config/database");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: "true" }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(methodOverride());
const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(database.url);
const db = mongoose.connection;
db.on("error", (err) => {
  console.error(`err: ${err}`);
});
db.on("connected", (err, res) => {
  console.log("Connected to database!");
});
app.listen(port);

const TigersController = require("./controllers/TigersData");
app.get("/api/getAllTigers", TigersController.getall);
app.get("/api/getTigerPlayer/:PlayerId", TigersController.getPlayerData);
app.post("/api/tigerPlayerTotal", TigersController.getPlayersTotalData);
