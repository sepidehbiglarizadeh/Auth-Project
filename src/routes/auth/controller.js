const Controller = require("./../controllers");

module.exports = new (class extends Controller {
  register = async (req, res) => {
    res.send("Register");
    console.log(this);
  };

  login = async (req, res) => {
    res.send("Login");
  };
})();
