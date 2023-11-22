const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const beerControllers = require("./controllers/beerControllers");
const basketControllers = require("./controllers/basketControllers");
// Route to get a list of items
router.get("/beers", beerControllers.getBeers);
router.get("/beers/:id", beerControllers.getBeersById);
router.get("/basket", basketControllers.getBasket);

module.exports = router;
