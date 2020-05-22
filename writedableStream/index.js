var http = require("http");

var fs = require("fs");
var readS = fs.createReadStream(__dirname + "/demo.txt");
var writeS = fs.createWriteStream(__dirname + "/demosecond.txt");

readS.on("data", function(d){
  writeS.write(d);
});
