const { Router } = require("express");
const { getLaunches } = require("../controllers/get-launches");

const router = Router();

router.get("/", getLaunches);

module.exports = router;
