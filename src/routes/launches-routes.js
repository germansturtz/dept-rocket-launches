const { Router } = require("express");
const { getLaunches } = require("../controllers/get-launches");
const { addFavoriteLaunches } = require("../controllers/add-favorite-launches");

const router = Router();

router.get("/", getLaunches);

router.post("/favorites", addFavoriteLaunches);

module.exports = router;
