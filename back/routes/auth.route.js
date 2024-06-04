// routes/auth.route.js

const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const AccountRequest = require("../models/accountrequest.model");
const router = express.Router();
const auth = require("../middleware/auth");

router.post(
  "/login",
  [
    check("Professionalemail", "Please include a valid email").isEmail(),
    check("Password", "Password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { Professionalemail, Password } = req.body;

    try {
      let user = await AccountRequest.findOne({ Professionalemail });

      if (!user) {
        return res.status(400).json({ msg: "Email invalide" });
      }

      if (user.Status === "Refusée") {
        return res.status(400).json({ msg: "Votre demande de compte a été refusée. Vous avez déjà reçu un email contenant le motif de refus." });
      }

      if (user.Status !== "Acceptée") {
        return res.status(400).json({ msg: "Demande de compte en cours de traitement. Vous recevrez un email dès que votre demande aura été examinée." });
      }

      const isMatch = await bcrypt.compare(Password, user.Password);

      if (!isMatch) {
        return res.status(400).json({ msg: "Mot de passe invalid" });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      // Sign JWT token with payload and secret key
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
