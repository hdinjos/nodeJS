var express = require("express");
var app = express();

app.get("/", function(req,res){
  res.send("HOME PAGE is first");
});

app.get("/profile", function(req,res){
  res.send("profile bosq");
});

app.get("/profile/:id", function(req,res){
  res.send("hello this profile to: " + req.params.id);
});
app.listen(3000);
