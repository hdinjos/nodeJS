var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
  res.writeHead(200, {"Content-Type" :"text/html" });
  var readS = fs.createReadStream(__dirname + "/index.html");
  readS.pipe(res);
});

var port = 5000;
server.listen(port,"127.0.0.1");
console.log("server listen on " + port);
