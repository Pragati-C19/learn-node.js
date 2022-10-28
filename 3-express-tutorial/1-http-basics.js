//Http
// 1. Basics

// To exchange the data use request and response
//port is communication endport

const http = require("http");
const server = http.createServer((req, res) => {
  console.log("User Hit the Server"); // this will show on cmd only
  res.end("Home Page"); //this shows on browser
});

server.listen(5000);
