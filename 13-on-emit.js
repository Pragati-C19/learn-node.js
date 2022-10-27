//EventEmmiter
//1. on emit intro

const EventEmitter = require("events");
const { identity } = require("lodash");
const customEmitter = new EventEmitter();

//on -- listen for an event
//emit -- emit an event (show the event refer to that function)

customEmitter.on("response", (name, id) => {
  console.log(`Data Recieved ${name} with Id: ${id}`);
});

customEmitter.on("response", () => {
  console.log("Some Other Logic");
});

customEmitter.emit("response", "john", 34);
