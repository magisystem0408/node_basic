var Car=class {
    constructor(name) {
        this.name =name;
    }

    drive(){
        console.log("ちぇいら好き")
    }

};

var mamushi =class extends Car{
    constructor(name) {
        super(name);
    }

    echo(){
        // 継承元が呼ばれている
        super.drive();
    }
    drive() {

        // オーバーレイ
        console.log(`fire ${this.name}`)
    }
}

var car =new mamushi("ねこ");

car.echo();
car.drive();


