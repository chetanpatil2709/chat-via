import User from "../models/user.model.js";

class Users {
  async getAll(req, res) {
    try {
      const users = await User.find({}, "username profilePic");
      res.send({ status: 200, users: users });
    } catch (error) {
      res.send({ status: 400, message: "Internal server error" });
    }
  }
}

export default new Users();
