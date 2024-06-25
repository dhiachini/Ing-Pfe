// routes/texteJuridiqueRoutes.js
const express = require("express");
const router = express.Router();
const texteJuridiqueController = require("../controllers/textejuridique.controller");

router.post("/textejuridique", texteJuridiqueController.createTexteJuridique);
router.get("/textejuridique", texteJuridiqueController.getTexteJuridiques);
router.delete("/textejuridique/:id",texteJuridiqueController.deleteTexteJuridique);
router.get("/textejuridique/:id/download", texteJuridiqueController.downloadTexteJuridique);

module.exports = router;
