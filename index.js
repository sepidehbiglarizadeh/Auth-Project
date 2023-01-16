require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./src/routes");

require("./startup/config")(app, express);
require("./startup/db")();
require("./startup/logging");

app.use("/api", router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
