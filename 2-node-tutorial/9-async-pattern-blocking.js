//Async pattern
//1. Blocking Code
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Home Page");
    res.end("Welcome To our Home Page");
  }
  //res.write('Welcome to Our Home Page')
  if (req.url === "/about") {
    //BLOCKING CODE
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.write("About us");
    res.end("here is our short history");
  } else {
    res.write("Error");
    res.end("Error Page");
  }
});

server.listen(8080);
