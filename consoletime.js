var sum =0;

// 計測開始時間
console.time("timer1")

for (var i =1;i<=1000;i++){
    sum +=i;
}

// 計測終了時間
console.timeEnd("timer1")

console.log(process.platform)