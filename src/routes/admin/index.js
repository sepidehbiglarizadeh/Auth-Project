const express = require("express");
const router = express.Router();
const controller = require("./controller");
const { isLoggined } = require("../../middlewares/auth");

router.get("/", controller.dashboard);


module.exports = router;
