var http =require("http")

var server =http.createServer((req,res)=>{
    res.end("helloworld")
})

server.listen(3000)