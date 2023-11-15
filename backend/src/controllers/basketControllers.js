const client = require("../../database/client");

const getBasket = (req, res) => {
  const beersId = req.query.beers.split("|");

  client
    .query("SELECT * FROM beer WHERE id in (?)", [beersId])
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getBasket,
};
