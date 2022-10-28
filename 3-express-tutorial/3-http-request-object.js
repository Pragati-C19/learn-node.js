//Http
//3. Request Object

const http = require("http");
const server = http.createServer((req, res) => {
  console.log("User Hit the Server"); // this will show on cmd only
  //console.log(req)           --It will show you everything related to req
  console.log(req.method); //It will Show you method of request which is here GET
  console.log(req.url); //It will show you url path of request

  //home page
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" }); //you can write html code in res.write or in res.end (200 is a http status code it should be 200)
    res.write("<h1>Home Page</h1>"); //this shows on browser
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
