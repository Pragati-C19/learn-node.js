
//Http
// 4. HTML Files

const http = require("http");
const {readFileSync}=require('fs')

//get all Files
const homePage = readFileSync("./index.html")

const server = http.createServer((req, res) => {
  console.log("User Hit the Server"); // this will show on cmd only

  //home page
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" }); //you can write html code in res.write or in res.end (200 is a http status code it should be 200)
    res.write(homePage); //this shows index.html page on browser
    res.end();
  }
  //about page
  else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" }); //you can write html code in res.write or in res.end (200 is a http status code it should be 200)
    res.write("<h1>About Page</h1>"); //this shows on browser
    res.end();
  }
  //error 404
  else {
    res.writeHead(404, { "content-type": "text/html" }); //you can write html code in res.write or in res.end (200 is a http status code it should be 200)
    res.write("<h1>404 : Page Not Found </h1>"); //this shows on browser
    res.end();
  }
});

server.listen(5000);
