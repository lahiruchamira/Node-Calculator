//jshint esversion:6
const express=require("express");
const bodyPasser=require("body-parser");
const app=express();
app.use(bodyPasser.urlencoded({extended:true}));

app.get("/",function (req,res) {
    res.sendFile(__dirname +"/index.html");
});
app.get("/bmiCalculator",function (req,res) {
    res.sendFile(__dirname +"/bmiCalculator.html");
});
app.post("/",function (req,res) {
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1+num2;
    res.send("The result of the calculation" +result);
});
app.post("/bmiCalculation",function (req,res) {
    var num1=Number(req.body.weight);
    var num2=Number(req.body.height);
    var result=num1/(num2*num2);
    res.send("The result of the calculation" +result);
});

app.listen(3000,function () {
    console.log("Server stared on port 3000");
});