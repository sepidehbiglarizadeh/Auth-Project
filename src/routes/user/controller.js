const Controller = require("../controller");
const _ = require("lodash");

module.exports = new (class extends Controller {
  dashboard = async (req, res) => {
    res.send("user dashboard");
  };

  me = async (req, res) => {
    this.response({ res, data: _.pick(req.user, ["name", "email"]) });
  };
})();
