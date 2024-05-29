"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// class type annotation
class Student {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    callStudent() {
        console.log(`Student Name is ${this.name} and his age is ${this.age}`);
    }
    ;
}
;
// instance of class
let ourStudent = new Student("Tom", 11);
console.log(ourStudent);
console.log(ourStudent instanceof Student);
// class access modifiers
// public , private, protected
class classModifier {
    name;
    id;
    skills;
    mobileNumber;
    constructor(name, id, skills, mobileNumber) {
        this.name = name;
        this.id = id;
        this.skills = skills;
        this.mobileNumber = mobileNumber;
    }
    getPriv() {
        return this.id;
    }
    ;
}
;
let accesModifir = new classModifier("Ben", 1, ["AI", "Blockchain"], 56789);
// accesModifir.id = 5;  cannot update because its only for read
console.log(accesModifir);
// console.log(accesModifir.getPriv());
// Inheritance
class modifirChild extends classModifier {
    constructor(name, id, skills, mobileNumber) {
        super(name, id, skills, mobileNumber);
    }
    ;
    callId() {
        return [...this.skills];
    }
}
;
let chid = new modifirChild("Jerry", 2, ["Chesse"], 3456);
console.log(chid.callId());
console.log(chid.mobileNumber);
class Car {
    name;
    constructor(name) {
        this.name = name;
    }
    ;
}
;
class CarModel extends Car {
    model;
    constructor(model, name) {
        super(name);
        this.model = model;
    }
    ;
}
;
let carModel = new CarModel("Continental GT", "Bently");
console.log(carModel);
// class modifier
//getter
class GetSet {
    name;
    id;
    length;
    constructor(name, id, length) {
        this.name = name;
        this.id = id;
        this.length = length;
    }
    get gtDta() {
        return this.id;
    }
    set stDta(ids) {
        this.id = ids;
    }
    ;
    get gtDta2() {
        return this.id * this.length;
    }
}
;
let getSet = new GetSet("Tom", 1, 45);
//getSet.gtDta = 56   // get property will not be update
console.log(getSet.gtDta);
console.log(getSet.gtDta2);
// After Setter
getSet.stDta = 34;
console.log(getSet.gtDta);
console.log(getSet.gtDta2);
// static method
class Stat {
    static callStat() {
        console.log('Static Method');
    }
    ;
}
;
Stat.callStat();
//abstract class
class Vehicle {
    speed;
    constructor(speed) {
        this.speed = speed;
    }
}
//let vehicl = new Vehicle("34mph")     // abstract class cannot create its instance 
class Bike extends Vehicle {
    speed;
    constructor(speed) {
        super(speed);
        this.speed = speed;
    }
    start() {
        console.log("Bike Start");
    }
    ;
    stop() {
        console.log("Bike Stop");
    }
    ;
    sounds() {
        console.log("Bike Sound");
    }
    ;
}
;
let ourBike = new Bike("34mph");
console.log(ourBike);
ourBike.start();
ourBike.stop();
ourBike.sounds();
class Truck extends Vehicle {
    speed;
    constructor(speed) {
        super(speed);
        this.speed = speed;
    }
    start() {
        console.log("Truck Start");
    }
    ;
    stop() {
        console.log("Truck Stop");
    }
    ;
    sounds() {
        console.log("Truck Sound");
    }
    ;
}
;
let ourTruck = new Truck("22mph");
ourTruck.start();
ourTruck.stop();
ourTruck.sounds();
