const Controller = require("../controller");
const _ = require("lodash");

module.exports = new (class extends Controller {
  dashboard = async (req, res) => {
    res.send("admin dashboard");
  };
})();
