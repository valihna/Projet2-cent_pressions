const client = require("../../database/client");

const getBeers = (req, res) => {
  client
    .query("SELECT * FROM beer")
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getBeers,
};
