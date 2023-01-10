const csvtojson = require("csvtojson");
const mongoose = require("mongoose");

const TigersData = require("../models/tigersData");
const database = require("../config/database");

mongoose.connect(database.url);
const db = mongoose.connection;
db.on("error", (err) => {
  console.error(`err: ${err}`);
});
db.on("connected", (err, res) => {
  console.log("Connected to database!");
});

exports.dbInsertion = csvtojson()
  .fromFile("AtlantaTigersGameData.csv")
  .then((csvData) => {
    csvData.forEach((element) => {
      const TigersPlayerData = new TigersData();
      TigersPlayerData.PlayerId = element.PlayerId;
      TigersPlayerData.GameDate = element.GameDate;
      TigersPlayerData.Opponent = element.Opponent;
      TigersPlayerData.BattingAvg = element.BattingAvg;
      TigersPlayerData.PlateAppereances = element.PlateAppereances;
      TigersPlayerData.AtBats = element.AtBats;
      TigersPlayerData.Runs = element.Runs;
      TigersPlayerData.Hits = element.Hits;
      TigersPlayerData.RunsBattedIn = element.RunsBattedIn;
      TigersPlayerData.Doubles = element.Doubles;
      TigersPlayerData.Triples = element.Triples;
      TigersPlayerData.Homerun = element.Homerun;
      TigersPlayerData.Class = element.Class;
      /*in case if we want to save above data in database, run this code. **/

      TigersPlayerData.save((err, s) => {
        if (err) {
          console.log("error", err);
        }
        console.log("saved into DB successfully");
      });
    });
  });
