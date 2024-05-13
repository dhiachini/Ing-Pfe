const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const {
  AddAccountRequest,
  FindAllAccountRequests,
  FindSingleAccountRequest,
  UpdateAccountRequest,
  DeleteAccountRequest,
} = require("../controllers/accountrequest.controller");

/* add account request */
router.post("/accountrequests", upload.single("Patent"), AddAccountRequest);

/* find all account requests */
router.get("/accountrequests", FindAllAccountRequests);

/* find single account request */
router.get("/accountrequests/:id", FindSingleAccountRequest);

/* update account request */
router.put("/accountrequests/:id", upload.single("Patent"),UpdateAccountRequest);

/* delete account request */
router.delete("/accountrequests/:id", DeleteAccountRequest);

module.exports = router;
