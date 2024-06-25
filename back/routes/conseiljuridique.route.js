const express = require("express");
const router = express.Router();
const conseilJuridiqueController = require("../controllers/conseiljuridique.controller");

router.post("/conseiljuridique", conseilJuridiqueController.createConseilJuridique);
router.get("/conseiljuridique", conseilJuridiqueController.getConseilJuridiques);
router.delete("/conseiljuridique/:id",conseilJuridiqueController.deleteConseilJuridique);
router.get("/conseiljuridique/:id/download", conseilJuridiqueController.downloadConseilJuridique);

module.exports = router;
