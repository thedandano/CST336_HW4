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

//global variables
const PORT = process.env.PORT;
const IP = process.env.IP;
//routes
app.get("/", function (req, res) {
  //   res.send("good");
  res.render("index.ejs", { page_name: "overview" });
  console.log("index");
});
app.get("/causes", function (req, res) {
  //   res.send("good");
  res.render("causes.ejs", { page_name: "causes" });
  console.log("causes");
});
app.get("/testing", function (req, res) {
  //   res.send("good");
  res.render("testing.ejs", { page_name: "testing" });
  console.log("testing");
});
app.get("/solution", function (req, res) {
  //   res.send("good");
  res.render("solution.ejs", { page_name: "solution" });
  console.log("solution");
});

// starts server
app.listen(process.env.PORT, process.env.IP, function () {
  console.log("Express server is running...");
});
