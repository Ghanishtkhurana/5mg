const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserModel } = require("../models/user.model");
const userrouter = express.Router();

userrouter.get("/", async (req, res) => {
  const data = await UserModel.find();
  res.send(data);
});
userrouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const userPresent = await UserModel.findOne({ email: email });
  // console.log(req.body);
  if (userPresent?.email) {
    res.send({ msg: "User already exists" });
  } else {
    try {
      bcrypt.hash(password, 5, async (err, secure_password) => {
        if (err) {
          console.log(err);
        } else {
          const user = new UserModel({
            email,
            password: secure_password,
            name,
          });
          await user.save();
          res.send({ msg: "Registered" });
        }
      });
    } catch (e) {
      res.send({ msg: "Error in registering the user" });
      console.log(e);
    }
  }
});

userrouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (result) {
          const token = jwt.sign({ userID: user[0]._id }, "5mgusers");
          // console.log(token);
          res.send({ msg: "Logged in Successfull", token: token });
        } else {
          res.send({ msg: "Wrong Credentials" });
        }
      });
    } else {
      res.send({ msg: "Wrong Credentials" });
    }
  } catch (e) {
    res.send({ msg: "Logged In Failed" });
    console.log(e);
  }
});
module.exports = {
  userrouter,
};
