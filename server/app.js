var http = require("http");

var server = http.createServer((req,res)=>{
  res.writeHead(200,{"Content-Type":"text/plain"});
  res.end("Hello in server nodejs");
})

var port = 3000;
server.listen(port,"127.0.0.1");
console.log(`the server listen port ${port}`);
