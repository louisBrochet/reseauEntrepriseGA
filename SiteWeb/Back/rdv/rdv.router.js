const { getRdv, getRdvAnv, getRdvBru, createRdv} = require("./rdv.controller");
const router = require("express").Router();

router.get("/date/:date", getRdv);
router.get("/anvers", getRdvAnv);
router.get("/bruxelles", getRdvBru);
router.post("/", createRdv);

module.exports = router;
