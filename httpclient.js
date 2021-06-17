var http =require("http")

var url ="http://localhost:3000";
var option ={
    method:"GET"
};
var req=http.request(url,option,(res)=>{
    res.pipe(process.stdout);
});

req.end()