const User = require("../models/userModel");
const crypto = require("crypto-js");
const { validationResult } = require("express-validator");
// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registerController = (req, res) => {
  const { username, email, password } = req.body;
  const errors = validationResult(req);

  // kiem tra loi valid
  if (!errors.isEmpty()) {
    const error = errors.array((err) => err.msg)[0];
    return res.status(422).json({
      errors: error,
    });
  } else {
    // kiem tra tai khoan ton tai chua
    User.findOne({
      email,
    }).exec((err, user) => {
      if (user) {
        return res.status(400).json({
          errors: "Email is taken",
        });
      }
    });
    // create new user

    const newUser = new User({ username, email, password });

    newUser.save((err, user) => {
      if (err) {
        return res.status(400).send({
          message: err,
        });
      } else {
        user.password = undefined;
        return res.json(user);
      }
    });
  }
};

exports.signinController = (req, res) => {
  const { email, password } = req.body;
  console.log(email + " " + password);
  User.findOne({
    email,
  }).exec((err, user) => {
    if (err || !user) {
      return res.status(404).json({
        errors: "Email not exist. Please signup",
      });
    }
    if (!user.comparePassword(password)) {
      return res.status(400).json({
        errors: "Password do not match",
      });
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    const { _id, username, email, role } = user;

    return res.json({
      token,
      user: {
        _id,
        username,
        email,
        role,
      },
    });
  });
};
