//Http
//  2. Headers

/*
    HTTP Source Codes
        Informational response  - (100-199)
        Successful response     - (200-299)
        Redirects               - (300-399)
        Client Errors           - (400-499)
        Server Errors           - (500-599)
*/

//mime types

const http = require("http");
const server = http.createServer((req, res) => {
  console.log("User Hit the Server"); // this will show on cmd only

  res.writeHead(200, { "content-type": "text/html" }); //you can write html code in res.write or in res.end (200 is a http status code it should be 200)
  res.write("<h1>Home Page</h1>"); //this shows on browser
  res.end();
});

server.listen(5000);
