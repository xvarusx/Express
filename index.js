const express = require("express");
const app = express();
const workTime = require("./middlewares/Timer");
const path = require("path");
const port = 3000;

app.use(workTime);
const myLogger = function (req, res, next) {
  console.log("A new request received at " + Date.now());
  next();
};
app.use(myLogger);
app.use(express.static(path.join(__dirname, "view")));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./view/index.html"));
});
app.get("/services", function (req, res) {
  res.sendFile(path.join(__dirname, "./view/ourServecices.html"));
});
app.get("/contact", function (req, res) {
  res.sendFile(path.join(__dirname, "./view/ContactUs.html"));
});

app.listen(3000);
