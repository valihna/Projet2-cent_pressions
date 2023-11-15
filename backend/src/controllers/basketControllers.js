const client = require("../../database/client");

const getBasket = (req, res) => {
  client
    .query("SELECT * FROM beer WHERE id in (1,5,25)")
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
