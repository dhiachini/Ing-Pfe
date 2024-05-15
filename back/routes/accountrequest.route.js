const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const cloudinary = require("../cloudinaryConfig");

const {
  AddAccountRequest,
  FindAllAccountRequests,
  FindSingleAccountRequest,
  UpdateAccountRequest,
  DeleteAccountRequest,
} = require("../controllers/accountrequest.controller");

/* add account request */
router.post("/accountrequests", upload.single("Patent"), async (req, res) => {
  try {
    // Upload file to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // Call the controller function to add account request passing the Cloudinary URL
    AddAccountRequest(req, res, result.secure_url);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});
/* find all account requests */
router.get("/accountrequests", FindAllAccountRequests);

/* find single account request */
router.get("/accountrequests/:id", FindSingleAccountRequest);

/* update account request */
router.put("/accountrequests/:id", upload.single("Patent"),UpdateAccountRequest);

/* delete account request */
router.delete("/accountrequests/:id", DeleteAccountRequest);

module.exports = router;
