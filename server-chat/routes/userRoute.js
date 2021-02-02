const express = require("express");
const router = express.Router();

// load controller
const {
  readUserController,
  updateUserController,
  deleteUserController
} = require("../controllers/userController");

router.post("/user/:id", readUserController);
router.post("/user/:id", updateUserController);
router.post("/user/:id", deleteUserController);


module.exports = router;
