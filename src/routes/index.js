const express = require("express");
const router = express.Router();
const authRouter = require("./auth/index");
const userRouter = require("./user/index");

router.use("/auth", authRouter);
router.use('/user',userRouter)

module.exports = router;
