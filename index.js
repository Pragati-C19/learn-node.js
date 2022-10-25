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
console.log(txt, "1st one");

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
const myModule = require("./module");
console.log(myModule);

//npm init -y  -- to install default package module
//npm install express  -- install express

/* 

  To build a real full stack Application and deploy it to the cloud
  Server will live on a url and when a user makes a request to this url in the browser the server will respond with some html 
  In our code we'll first create an instance of an express app 
  An express app allows us to create different urls and endpoints that a user can navigate to in the browser 
  And then we define code for the server to handle those requests

*/

const express = require("express");
const { response } = require("express");
const { request } = require("http");
const app = express();

//when the user navigates to url in the browser it known as get request
//first argument is the url that the user will navigate to in this case we'll just use a forward slash for the root url
app.get("/foo/bar");

//second argument here is our callback function you can think of every request to this url as an event and then you handle that event with this function and express gives us two parameters to make use of the request and the response the request is the incoming data from the user
//request you incoming data
//response your incomming data
app.get('/',(request,response)=>{
  readFile('./index.html', 'utf8', (err,html)=>{
    if(err){
      response.status(500).send('Sorry, Out of Order')
    }
    response.send(html)
  })
})

app.listen(process.env.Port || 3000, ()=> console.log(" App is Available now on http://localhost:3000 !!!"))


//you can also read files by request and response
app.get('/',async (request,response)=>{
  response.send(await readFilePromises("./hello.txt", "utf8"))
})

