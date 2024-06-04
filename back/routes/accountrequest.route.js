const express = require("express");
const router = express.Router();
const {upload} = require("../middleware/upload");
const cloudinary = require("../cloudinaryConfig");

const {
  AddAccountRequest,
  FindAllAccountRequests,
  FindSingleAccountRequest,
  updateAccountRequestStatus,
  updateAccountRequestStatusToRefused,
  DeleteAccountRequest,
} = require("../controllers/accountrequest.controller");

/* add account request */
router.post("/accountrequests", upload.single("Patent"), AddAccountRequest);
/* find all account requests */
router.get("/accountrequests", FindAllAccountRequests);

/* find single account request */
router.get("/accountrequests/:id", FindSingleAccountRequest);

/* update account request accepted */
router.put("/accountrequests/:id/accept", updateAccountRequestStatus);
/* update account request refused */

router.put("/accountrequests/:id/refuse", updateAccountRequestStatusToRefused);


/* delete account request */
router.delete("/accountrequests/:id", DeleteAccountRequest);

module.exports = router;

