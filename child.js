// マルチスレッド　子供メソッド

setTimeout(()=>{
    // console.log("hello world")

    process.send({hello:"message from child"});

},3000)