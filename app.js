// imports express library
const express = require("express");
// is needed to access express methods
const app = express();
//allows us to render html
app.engine("html", require("ejs").renderFile);
//specify public folder (the folder that holds the static files like css and images)
app.use(express.static("public"));
//local dev variables
require("dotenv").config();
//faker
var faker = require("faker");

//global variables
const PORT = process.env.PORT;
const IP = process.env.IP;

//middleware
app.use((req, res, next) => {
  console.log(`${req.url} requested.`);
  next();
});

/**
 * calls long lat from faker and assigns to global variables
 */
app.use((req, res, next) => {
  const long = parseFloat(faker.address.longitude()).toFixed(2);
  const lat = parseFloat(faker.address.latitude()).toFixed(2);
  res.locals.long = long;
  res.locals.lat = lat;
  console.log(`Long: ${long} Lat: ${lat}`);
  next();
});

//routes
app.get("/", function (req, res) {
  res.render("index.ejs", { page_name: "overview" });
});
app.get("/causes", function (req, res) {
  res.render("causes.ejs", { page_name: "causes" });
});
app.get("/testing", function (req, res) {
  res.render("testing.ejs", { page_name: "testing" });
});
app.get("/solution", function (req, res) {
  res.render("solution.ejs", { page_name: "solution" });
});

// starts server
app.listen(process.env.PORT, process.env.IP, function () {
  console.log("Express server is running...");
});
