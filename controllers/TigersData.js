const TigersData = require("../models/tigersData");

exports.getall = (req, res) => {
  TigersData.find(function (err, test) {
    if (err) res.send(err);
    res.json(test);
  });
};

exports.getPlayerData = (req, res) => {
  let playerId = req.params.PlayerId;
  TigersData.find({ PlayerId: { $in: [playerId] } }, function (err, test) {
    if (err) res.send(err);
    res.json(test);
  });
};

exports.getPlayersTotalData = (req, res) => {
  let playerId = req.body.PlayerId;

  TigersData.find({ PlayerId: { $in: [playerId] } }, function (err, test) {
    if (err) res.send(err);
    let BattingAvg = 0;
    let Runs = 0;
    let Hits = 0;
    let Doubles = 0;
    let Triples = 0;
    let Homerun = 0;
    test.forEach((item) => {
      BattingAvg += parseFloat(item.BattingAvg);
      Runs += parseFloat(item.Runs);
      Hits += parseFloat(item.Hits);
      Doubles += parseFloat(item.Doubles);
      Triples += parseFloat(item.Triples);
      Homerun += parseFloat(item.Homerun);
    });

    let data = {
      PlayerId: playerId,
      BattingAvg: BattingAvg,
      Runs: Runs,
      Hits: Hits,
      Doubles: Doubles,
      Triples: Triples,
      Homerun: Homerun,
    };
    res.send(data);
  });
};
