const mongoose = require("mongoose");
const Schema = mongoose.Schema;

tigersDataSchema = new Schema({
  PlayerId: { type: String },
  GameDate: { type: String },
  Opponent: String,
  BattingAvg: String,
  PlateAppereances: String,
  AtBats: String,
  Runs: String,
  Hits: String,
  RunsBattedIn: String,
  Doubles: String,
  Triples: String,
  Homerun: String,
  Class: String,
});

module.exports = mongoose.model("TigersData", tigersDataSchema);
