var events = require("events");
var eventEmitter = new events.EventEmitter();

eventEmitter.on("myEvent", () => {
  console.log("hello event emitter in nodejs");
})

eventEmitter.emit("myEvent");
