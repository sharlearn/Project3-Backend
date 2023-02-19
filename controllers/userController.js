const BaseController = require("./baseController");

class UserController extends BaseController {
  constructor(userModel) {
    super(userModel);
    this.userModel = userModel;
  }

  // Create a user
  async addOne(req, res) {
    const { username, firstName, lastName, email } = req.body;
    try {
      const newUser = await this.userModel.create({
        username: username,
        first_name: firstName,
        last_name: lastName,
        email: email,
      });

      let data = await this.userModel.findAll();

      return res.json(data);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
  // Retrieve a user
  async getOne(req, res) {
    const { userId } = req.params;
    try {
      const user = await this.userModel.findByPk(userId);
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  //Retrieve all users
  async getAllUsers(req, res) {
    try {
      const output = await this.userModel.findAll();
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Currently we do not allow a user's account to be updated or deleted
}

module.exports = UserController;
