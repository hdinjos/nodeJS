var fs = require("fs");
fs.writeFileSync("learn.txt","say hello, oke jos"); //syncronously
var readFile = fs.readFileSync("learn.txt", "utf8"); //syncronously
console.log(readFile);

fs.readFile("demo.txt", "utf8", (err, data) => { //asyncronously
	console.log(data);
})

console.log("say fine day");

//result
//say hello, oke bos
//say fine day
//file ini dibaca secara asyncronous dengan nodejs