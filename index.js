//if you want to execute JS code run node index.js or node .

console.log("Hellooooo Gomuu 💝");

//globally call any variable
console.log(global.luckyNum);
global.luckyNum = 19;
console.log(global.luckyNum);

luckyNum = 476347826347;
console.log(global.luckyNum);

//to see which platform you are using
console.log(process.platform);

//to see the user
console.log(process.env.USER);

//After click on exist it will run this function
process.on("exist", () => {
  console.log("here 'exist' is event follow by callback function");
});

//you can also right event like this
const { EventEmitter } = require("events");
const eventEmitter = new EventEmitter();

//After click on lunch it will lunch the clg statement
eventEmitter.on("lunch", () => {
  console.log("Yummmmmyyy 🍰🍜");
});

//emit is work are clicked on button
eventEmitter.emit("lunch");
process.emit("exist");

//file system (sync==blocking)
const { readFile, readFileSync } = require("fs");
const txt = readFileSync("./hello.txt", "utf8"); //if you don't use utf8 it will show some buffer instead of sentence
console.log(txt,"1st one");

//you can also right like this (and this will run after that)
readFile("./hello.txt", "utf8", (err, txt) => {
  console.log(txt, "2nd one");
});

console.log("I love your Style"); // this will always run first

// we can also read file by promise base solution (Asynchronous and non blocking, simple to use as compare to callbacks)
const { readFilePromises } = require("fs").promises;
async function hello() {
  //await is only valid in async functions and the top level bodies of modules
  const file = await readFilePromises("./hello.txt", "utf8"); // Wait to resolve a promise here
  console.log(file);
}

//import module
const myModule=require('./module')
console.log(myModule)

//npm init -y  -- to install default package module
//npm install express  -- install express 

