const mongoose = require("mongoose");
require("dotenv").config({
  path: "./configs/.env",
});

const connectDB = async () => {
    await mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(console.log("MongoDB connected"))
    .catch((err) => {
      console.log(err + "");
    });
};
module.exports = connectDB;
