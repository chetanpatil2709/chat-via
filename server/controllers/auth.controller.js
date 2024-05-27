import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class Auth {
  async signUp(req, res) {
    const { email, username, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      return res.send({ status: 400, message: "Password does not match" });
    }
    let emailExist = await User.findOne({ email: email });
    let usernameExist = await User.findOne({ username: username });
    if (usernameExist) {
      return res.send({ status: 400, message: "User name already exist" });
    }
    if (emailExist) {
      return res.send({ status: 400, message: "Email already exist" });
    }
    if (!emailExist && !usernameExist) {
      let salt = await bcrypt.genSalt(10);
      let hashPassword = await bcrypt.hash(password, salt);
      let newUser = new User({
        email: email,
        username: username,
        password: hashPassword,
      });
      await newUser.save();
      return res.send({ status: 200, message: "Regestration Successfull" });
    }
  }

  async signIn(req, res) {
    const { email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (user) {
      let comparePass = await bcrypt.compare(password, user.password);
      if (comparePass) {
        let token = await jwt.sign({ userId: user.id }, process.env.JWT_TOKEN, {
          expiresIn: "5D",
        });
        return res.send({
          status: 200,
          message: "Login Successfull",
          token: token,
          username: user.username,
        });
      } else {
        return res.send({
          status: 400,
          message: "Email or password is incorrect!!",
        });
      }
    } else {
      return res.send({ status: 400, message: "User does not exist!!" });
    }
  }
}

export default new Auth();
