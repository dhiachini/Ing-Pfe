const express = require("express");
const {
  AddUser,
  FindAllUsers,
  FindSingleUser,
  UpdateUser,
  DeleteUser,
} = require("../controllers/users.controller");
const router = express.Router();
const upload = require("../middleware/upload");

/* add user */
router.post("/users", upload.single("Avatar"), AddUser);

/* find all users */
router.get("/users", FindAllUsers);

/* find single user */
router.get("/users/:id", FindSingleUser);

/* add user */
router.put("/users/:id", UpdateUser);

/* delete user */
router.delete("/users/:id", DeleteUser);

module.exports = router;
