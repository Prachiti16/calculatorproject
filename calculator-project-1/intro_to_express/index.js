const express = require('express');
const bodyParser = require('body-parser');
const qs = require('qs');

const App = express();
App.use(bodyParser.urlencoded({ extended: true }));

App.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

App.get("/about", (req, res) => res.send("PRACHITI GUPTA"));

App.get("/contact", (req, res) => res.send("phn no: 98xxxxxxxx"));

App.post("/", function(req, res) {
  console.log(req);
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);
  result = num1 + num2;
  res.send("the result of your calculator is :" + result);
});

App.listen(8000, function() {
  console.log("server has started printing 8000 ports");
});

