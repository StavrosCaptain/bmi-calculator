const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({extended: true}))

//getting the index.html

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

//posting for calculator

app.post("/", function (req, res) {

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

    res.send("Thank you, your result is " + result + ".")
});

//getting bmiCalculator.html

app.get("/bmiCalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

//posting for bmiCalculator

app.post("/bmiCalculator", function (req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var n = weight / (height * height);

  console.log(req.n);
  res.send("Your BMI is " + n + ".");
});


//Port listening

app.listen(3000, function () {
  console.log("Listening at port 3000...");
});
