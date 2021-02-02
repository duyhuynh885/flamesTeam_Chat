const mongoose = require("mongoose");
const crypto = require("crypto-js");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    lowercase: true,
  },
  hashed_password: {
    type: String,
    required: true,
  },
  salt: String,
  role: {
    type: String,
    default: "user",
  },
  dob: Date,
  logs: {
    last_login: Date,
    last_password_reset: Date,
  },
  state: {
    online: {
      type: Boolean,
    },
    available: {
      type: Boolean,
    },
  },
  contacts: {
    type: Array,
  },
});

// virtual
userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(this._password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto.HmacSHA1(password, this.salt);
    } catch (err) {
      return "";
    }
  },
  comparePassword: function (password) {
    return this.encryptPassword(password).toString() === this.hashed_password;
  },
  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random()) + "";
  },
};

module.exports = mongoose.model("User", userSchema);
