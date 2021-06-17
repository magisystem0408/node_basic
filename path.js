const path = require("path")

var filepath ="C:\\\\sample\\index.html";

console.log(path.dirname(filepath));

console.log(path.basename(filepath));

// 拡張子
console.log(path.extname(filepath));


console.log(path.join(__dirname,'index.js'))