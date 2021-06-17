var util =require("util");

var Car =function (){
    this.name =name;
};

Car.prototype.drive =function (){
    console.log("ねこねこねこ")
};

var migya =function (name){
    migya.super_.call(this,name);
};

util.inherits(migya,Car)

migya.prototype.echo =function (){
    migya.super_.prototype.drive.call(this);
}

migya.prototype.drive =function (){
    console.log(`fire ${this.name}`)
}



var car  =new migya("neko")
car.echo()
car.drive()