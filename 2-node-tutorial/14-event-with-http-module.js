
//Event Emitter
//2. Http module

const http=require('http')

// const server = http.createServer((req,res)=>{
//     res.end("welcome")
// })

//using Event Emitter API
const server=http.createServer()
server.on('request',(req,res)=>{
    res.end('Welcome')
})

server.listen(5000)