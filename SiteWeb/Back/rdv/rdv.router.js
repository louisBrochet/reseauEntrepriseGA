const { getRdv, createRdv} = require("./rdv.controller");
const router = require("express").Router();

router.get("/", getRdv);
router.post("/", createRdv);

module.exports = router;
