var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
  if (req.url === "/" || req.url === "/home") {
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("hello home");
  }  
  else if (req.url === "/profile") {
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("hello profile");
  } else {
    res.writeHead(404, {"Content-Type" : "text/html"});
    fs.createReadStream(__dirname + "/404.html").pipe(res);
  }
});

var port = 5000;
server.listen(port, "127.0.0.1");
console.log("the server listen on " + port);
