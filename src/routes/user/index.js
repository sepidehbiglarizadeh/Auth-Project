const express = require("express");
const router = express.Router();
const controller = require("./controller");
const { isLoggined } = require("./../../middlewares/auth");

router.get("/", controller.dashboard);

router.get("/me", isLoggined,controller.me);

module.exports = router;
