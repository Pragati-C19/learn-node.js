//Streams
// 3. http Modules

var http = require("http");
var fs = require("fs");

http
  .createServer((req, res) => {
    /*
        In Network option Response Headers looks like this : 
            Connection: keep-alive
            Content-Length: 520455
            Date: Thu, 27 Oct 2022 12:22:44 GMT
            Keep-Alive: timeout=5
    */

    // const text=fs.readFileSync("./content/big.txt",'utf8')
    // res.end(text)

    /*
        In Network option Response Headers looks like this : 
            Connection: keep-alive
            Date: Thu, 27 Oct 2022 12:25:04 GMT
            Keep-Alive: timeout=5
            Transfer-Encoding: chunked
    */
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
