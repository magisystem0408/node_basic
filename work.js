// 実行中のプログラムの関する情報・操作

// 環境変数を一覧表示
console.log(process.env)

// 実行時引数を一覧表示
for (var i =0;i<process.argv.length;i++){
    console.log(`${i}:${process.argv[i]}`)
}


// カレントワークディレクトリ、実行中のファイルのディレクトリを表示
console.log(process.cwd())

// 実行環境を表示
console.log(process.platform)