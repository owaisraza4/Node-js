// console.log("Hello World!")
// setTimeout(() => {
//     console.log("After set timeout")
// }, 1000);


// console.log("Top level code")

const fs = require('fs')
const http = require('http')

fs.writeFileSync("text.txt","Hello World!")

const read = fs.readFileSync("new folder/text01.txt","utf-8")
console.log(read)
fs.mkdirSync('new folder')

fs.writeFileSync("new folder/text01.txt","Nested Content...!")


fs.readFile("new folder/text01.txt","utf-8",(res)=>{
console.log(res)
})


const server = http.createServer((req,res)=>{
    // console.log(req.url)
    return res.end("Server is Running...!")
})

server.listen(8000)


