const express = require("express");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
const debug = require("debug")("app:main");
const config = require("config");
const router = require("./src/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose
  .connect(config.get("db.address"))
  .then(() => debug("Connected to mongodb"))
  .catch(() => debug("Could not connect"));

app.use("/api", router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
