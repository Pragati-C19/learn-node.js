
//Streams
//1. Writeable

// const {writeFileSync}=require('fs')
// for (let i = 0; i < 1000; i++) {
//     writeFileSync("./content/big.txt", `Helloooo Streams ${i}\n`, {flag:'a'})
// }

const {createReadStream} =require('fs')
const stream=createReadStream("./content/big.txt","utf8")
stream.on("data",(result)=>{
    console.log(result)
})
