var http = require("http");

/*
var server = http.createServer(function (req,res){
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hello guies!");
})

var port = 8000;
server.listen(port,"127.0.0.1");
console.log("this server listen to " + port);
*/

var fs = require("fs");
var readableStream = fs.createReadStream(__dirname + "/demo.txt");
var chunk_file = 0;

readableStream.on("data", function(d){
  console.log("this is some text \n" +d);
  chunk_file++;
  console.log(chunk_file);
})
