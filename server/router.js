const router = require("express").Router();
const { getCODTournaments } = require("./controllers/codController");
const { getCSGOTournaments } = require("./controllers/csgoController");
const { getFIFATournaments } = require("./controllers/fifaController");
const { getLOLTournaments } = require("./controllers/lolController");
const { getOWTournaments } = require("./controllers/owController");
const { getR6STournaments } = require("./controllers/r6siegeController");
const { getRLTournaments } = require("./controllers/rlController");
const { getValTournaments } = require("./controllers/valorantController");

router.get("/codmw", getCODTournaments);
router.get("/csgo", getCSGOTournaments);
router.get("/fifa", getFIFATournaments);
router.get("/lol", getLOLTournaments);
router.get("/ow", getOWTournaments);
router.get("/r6siege", getR6STournaments);
router.get("/rl", getRLTournaments);
router.get("/valorant", getValTournaments);

module.exports = router;
