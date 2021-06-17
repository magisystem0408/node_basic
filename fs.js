var fs =require("fs");

var path =require("path");


// 同期ファイル読み書き
//非推奨

// var data =fs.writeFileSunc(path.join(__dirname,"sample.txt"),"utf8")

// console.log(data)

// fs.writeFileSunc(path.join(__dirname,"sample-copy.txt"),data,"utf8");


// 非同期ファイル読み書き
// ファイルサイズが小さくて後続処理も簡単な場合に利用

var util =require("util");

// コールバックがネスト化されているやつ
fs.readFile(path.join(__dirname,"sample.txt"),"utf8",(err,data)=>{

    if(err){
        console.error(err.message);
        return  ;
    }else {
        console.log(data);
    }
    fs.writeFile(path.join(__dirname,"sample-copy.txt"),"utf",(err,data)=>{
        if(err){
            console.error(err.message);
            return;
        }else {
            console.log("コピーできた")
        }
    })
})

// promiseで書いた場合

var readFile =util.promisify(fs.readFile);
var writeFile =util.promisify(fs.writeFile);

readFile(path.join(__dirname,"sample.txt"),"utf8")
    .then((data)=>{
        return writeFile(path.join(__dirname,"sample-copy.txt"),data,"utf8")
    })
    .then(()=>{
        console.log("書き込み完了")
    })
    .catch((err)=>{
        console.error(err.message)
    });


// async await化させる

(async function (){
    try{
        var data =await readFile(path.join(__dirname,"sample.txt"),"utf8");
        await writeFile(path.join(__dirname,"sample-copy.txt"),data,"utf8");

        console("OKマムシ")
    }catch (err){

    }
})();