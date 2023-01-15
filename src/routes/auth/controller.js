const Controller = require("../controller");
const _ = require("lodash");
const bcrypt = require("bcrypt");

module.exports = new (class extends Controller {
  register = async (req, res) => {
    let user = await this.User.findOne({ email: req.body.email });
    if (user) {
      return this.response({
        res,
        code: 400,
        message: "this user already registered",
      });
    }

    user = new this.User(_.pick(req.body, ["name", "email", "password"]));

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    this.response({
      res,
      message: "the user successfuly registered",
      data: _.pick(user, ["_id", "name", "email"]),
    });
  };

  login = async (req, res) => {
    res.send("Login");
  };
})();
