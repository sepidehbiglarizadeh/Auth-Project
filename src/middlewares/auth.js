const config = require("config");
const jwt = require("jsonwebtoken");
const User = require("./../models/user");

const isLoggined = async (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) res.status(401).send("access denied");

  try {
    const decoded = jwt.verify(token, config.get("jwt.key"));
    const user = await User.findById(decoded._id);
    console.log(user);
    req.user = user;
    next();
  } catch (ex) {
    res.status(400).send("invalid token");
  }
};

const isAdmin = async (req, res, next) => {
  if (!req.user.isAdmin) res.status(403).send("access denied");
  next();
};

module.exports = { isLoggined, isAdmin };
