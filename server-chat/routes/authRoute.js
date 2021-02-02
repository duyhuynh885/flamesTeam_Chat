const express = require("express");
const router = express.Router();

// load controller
const {
  signinController,
  registerController,
} = require("../controllers/authController");

router.post("/login", signinController);
router.post("/register", registerController);

module.exports = router;
