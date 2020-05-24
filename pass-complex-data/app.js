var express = require("express");
var app = express();

//set ejs template engine
app.set("view engine", "ejs");

app.get("/", function(req,res){
  res.send("halaman home");
});

app.get("/profile", function(req,res){
  res.send("ini halaman profile ya!");
});

app.get("/profile/:id", function(req,res){
  var blog = {title : "Deno what is this?", author: ["hdinjos","bosq","masedev"], category: "tech"};
  res.render("blog",{"blog_post": req.params.id, "blog": blog});
});

var port = 5000;
app.listen(port);
console.log("server listen on " + port);
