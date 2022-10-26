
//Build-In Modules
//4. HTTP Module
const http = require ('http')

console.log("Here is your site http://localhost:5000")
const server = http.createServer((req,res)=>{
  if (req.url==='/'){
    res.end("Welcome To our Home Page")
  }
  //res.write('Welcome to Our Home Page')
  if(req.url==='/about'){
    res.end('here is our short history')
  }
  res.end(`
    <h1> Oops !! 😮</h1>
    <p> We Can't Seem to find the page you are looking for😶</p>
    <a href="/"> back to home page </a>
  `)
})

server.listen(5000)
