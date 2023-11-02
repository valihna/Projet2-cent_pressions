const client = require("../../database/client");

const getBeersById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  client
    .query("SELECT * FROM beer WHERE id = ?", [id])
    .then((result) => {
      if (result[0] != null) {
        res.status(200).json(result);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getBeersById,
};
