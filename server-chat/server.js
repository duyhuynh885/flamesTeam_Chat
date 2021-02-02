const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./configs/dao");

// Config dotev
require("dotenv").config({
  path: "./configs/.env",
});
// connect MONGO
connectDB();

//config cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
});

app.use(bodyParser.json());

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession);

//  Load router
const authRoute = require("./routes/authRoute");





app.use('/',authRoute);

const port = process.env.PORT || 8080;
console.log(process.env.PORT);
app.listen(port, () => console.log("App listening on port " + port));
