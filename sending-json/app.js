var http = require("http");

var server = http.createServer(function(req,res){
  res.writeHead(200,{"Content-Type" : "text/json"});
  var studentJson = {
    name : "saputra",
    age : 23,
    live: "Pati"
  };
  res.end(JSON.stringify(studentJson));
});

var port = 5000;
server.listen(port,"127.0.0.1");
console.log("the server listen on " + port);
